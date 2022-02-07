import { AfterContentChecked, AfterViewChecked, Component, OnChanges, OnInit, SimpleChanges, ViewEncapsulation, ViewChild, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatStepper } from '@angular/material/stepper';
import { WizardService } from '../../../../shared/services/wizard.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as core from 'app/core/user/user.service';
import * as service from 'app/shared/services/users.service';
import { UserModel } from 'app/shared/models/user.model';
import { SelectableModel } from 'app/shared/models/selectable.model';
import { SelectableService } from 'app/shared/services/selectable.service';

@Component({
    selector     : 'request-trace',
    templateUrl  : './request-trace-sgc.component.html',
    encapsulation: ViewEncapsulation.None
})
export class RequestTraceSGCComponent implements AfterContentChecked
{
  @ViewChild('stepper') private _stepper: MatStepper;

  formControl: FormGroup;

  causes: {[key: string]: [number]} = {
    '(AC) Ambiente de Control': [1],
    '(ER) Evaluación del Riesgo': [1],
    '(CT) Actividades de Control': [1],
    '(IC) Información y Comunicación': [1],
    '(SM) Supervisión y Monitoreo': [1],
  };

  workTeam: [number] = [1,];
  standard1: [number] = [1,];
  standard2: [number] = [1,];
  upgradePlanI: [number] = [1,];
  upgradePlanD: [number] = [1,];
  srcResult: string = '';
  trackingId: any;
  base64FilesI = {};
  base64FilesD = {};
  isAdmin: boolean = false;
  inputTimeout: any;

  selectables = {}

  /**
   * Constructor
   */
  constructor(
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _service: WizardService,
    private _router: Router,
    private snackBar: MatSnackBar,
    private _cdr: ChangeDetectorRef,
    private _coreUserService: core.UserService,
    private _userService: service.UserService,
    private _selectableService: SelectableService,
    ) {
      this._coreUserService.get().subscribe({
        next: (v) => {
          this.isAdmin = true
        }
      })
      this._route.params.subscribe(params => {
      this.trackingId = params['id']
    });
    this.loadFormGroup()
    this.loadUsers('lead_name', '1')
    this.loadUsers('user_name_1', '1')
    this.loadUsers('user_name_2', '1')
    this.loadUsers('user_name_3', '1')
    this.loadUsers('user_name_4', '1')
    this.loadUsers('user_name_5', '1')
  }

  loadUsers(selectable: string, step: string) {
    this._userService.getUsers(this.getFilter(selectable, step)).subscribe({
      next: (v) => {
        let users = []
        v['data'].forEach((user) => {
          users.push(new UserModel(user))
          this._cdr.detectChanges()
        })
        this.selectables[selectable] = [...users]
      }
    })
  }

  onChangeFilter(toFiltered: string, type: 'user' | 'selectable', step: string): void {
    if (this.inputTimeout){ clearTimeout(this.inputTimeout) }
    this.inputTimeout = setTimeout(() => {
      if (type.includes('selectable')) { this.loadSelectables(toFiltered, step) }
      else { this.loadUsers(toFiltered, step) }
    }, 500);
  }

  loadSelectables(selectable: string, step: string) {
    this._selectableService.getSelectable(this.getselectableTable(selectable), this.getFilter(selectable, step)).subscribe({
      next: (v) => {
        let selects = []
        v['data'].forEach((object: any) => {
          selects.push(new SelectableModel(object))
          this._cdr.detectChanges()
        })
        this.selectables[selectable] = [...selects]
      }
    })
  }

  getselectableTable(selectable: string): string {
    const dictionary = {
      detectedIn: 'detected_places',
    }
    return dictionary[selectable]
  }

  displayUser(input: any, toSet: string, step: string) {
    if (!input) { return ''}
    return input.name
  }

  onClickUser(formControlLabel: string, step: string) {
    const user = {...this.getStep(step).get(formControlLabel).value}
    this.getStep(step).get(formControlLabel.replace('name', 'id')).setValue(user.id)
    this.getStep(step).get(formControlLabel.replace('name', 'area')).setValue(user.area_description)
    this.getStep(step).get(formControlLabel.replace('name', 'position')).setValue(user.position_description)
  }

  displaySelectable(input: any) {
    if (!input) { return ''}
    return input.description
  }

  getFilter(selectable: string, step: string): string {
    return this.getStep(step).value[selectable]
  }

  ngAfterContentChecked(): void {
    this.refactorForm()
  }


  loadFormGroup() {
    this.formControl = this._formBuilder.group({
      step1: this._formBuilder.group(
        this.workTeamFormControl
      ),
      step2: this._formBuilder.group(
        this.upgradePlanIIFormControl
      ),
      step3: this._formBuilder.group(
        this.analysisFormControl
      ),
      step4: this._formBuilder.group(
        this.upgradePlanIPFormControl
      ),
      step5: this._formBuilder.group(
        this.finishFormControl
      )
    });
  }

  addCauses(list: [number]): void {
    if (list.length < 5) {
      list.push(list.length + 1)
    }
  }

  removeCauses(list: [number]): void {
    if (list.length > 1) {
      list.pop()
    }
  }


  onChangeFileI(step: any, name: any): void {
    console.log('File Changed')
    let reader = new FileReader();
    console.log(this.getStep(step).value, name)
    reader.readAsDataURL(
      this.getStep(step).value[name].files[0]
    );
    reader.onload = () => {
      this.base64FilesI[name] = reader.result;
      console.log("Base 64 convertido")
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  onChangeFileD(step: any, name: any): void {
    console.log('File Changed')
    let reader = new FileReader();
    console.log(this.getStep(step).value, name)
    reader.readAsDataURL(
      this.getStep(step).value[name].files[0]
    );
    reader.onload = () => {
      this.base64FilesD[name] = reader.result;
      console.log("Base 64 convertido")
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  get workTeamFormControl() {
    const workTeamUsers = {}
    for (let count = 1; count <= 5; count++) {
      workTeamUsers[`user_id_${count}`] = [null, []]
      workTeamUsers[`user_name_${count}`] = ['', [Validators.required]]
      workTeamUsers[`user_area_${count}`] = ['', [Validators.required]]
      workTeamUsers[`user_position_${count}`] = ['', [Validators.required]]
    }
    return {
        lead_id   : [null, []],
        lead_name   : ['', [Validators.required]],
        lead_area   : ['', [Validators.required]],
        lead_position   : ['', [Validators.required]],
        ...workTeamUsers
    }
  }

  get standardFormControl() {
    const workTeamUsers = {}
    for (let count = 1; count <= 5; count++) {
      workTeamUsers[`name_s_${count}`] = ['', [Validators.required]]
      workTeamUsers[`follow_s_${count}`] = ['', [Validators.required]]
      workTeamUsers[`description_s_${count}`] = ['', [Validators.required]]
      workTeamUsers[`percentage_s_${count}`] = [0, [Validators.required]]
      workTeamUsers[`name_c_${count}`] = ['', [Validators.required]]
      workTeamUsers[`follow_c_${count}`] = ['', [Validators.required]]
      workTeamUsers[`description_c_${count}`] = ['', [Validators.required]]
      workTeamUsers[`percentage_c_${count}`] = [0, [Validators.required]]
    }
    return {
      indicator   : [true, [Validators.required]],
      event   : [true, [Validators.required]],
      time   : [true, [Validators.required]],
      what_indicator   : ['', [Validators.required]],
      what_event   : ['', [Validators.required]],
      what_time_init   : ['', [Validators.required]],
      what_time_end   : ['', [Validators.required]],
      objective_indicator   : ['', [Validators.required]],
      objective_event   : ['', [Validators.required]],
      description   : ['', [Validators.required]],
        ...workTeamUsers
    }
  }

  get finishFormControl() {
    return {
      user_tracking_name: ['', [Validators.required]],
      tracking_date: ['', [Validators.required]],
      tracking_date_period_init: ['', [Validators.required]],
      tracking_date_period_end: ['', [Validators.required]],
      result_analysis: ['', [Validators.required]],
      objective: ['', [Validators.required]],
      total_review: ['', [Validators.required]],
      total_agree: ['', [Validators.required]],
      total_disagre: ['', [Validators.required]],
      agree: ['', [Validators.required]],
      created_at: ['', [Validators.required]],
    }
  }

  get upgradePlanIIFormControl() {
    const upgradePlanIFormControl = {}
    for (let count = 1; count <= 5; count++) {
      upgradePlanIFormControl[`goal_description_${count}`] = ['', [Validators.required]]
      upgradePlanIFormControl[`person_assigned_${count}`] = ['', [Validators.required]]
      upgradePlanIFormControl[`init_date_${count}`] = ['', [Validators.required]]
      upgradePlanIFormControl[`end_date_${count}`] = ['', [Validators.required]]
      upgradePlanIFormControl[`unit_measurement_${count}`] = ['', [Validators.required]]
      upgradePlanIFormControl[`follow_process_description_${count}`] = ['', [Validators.required]]
      upgradePlanIFormControl[`evidence_file_${count}`] = ['', [Validators.required]]
      upgradePlanIFormControl[`percentage_${count}`] = ['', [Validators.required]]
    }
    return upgradePlanIFormControl
  }

  get analysisFormControl() {
    const analysis = {}
    for (let count = 1; count <= 5; count++) {
      analysis[`cause_1_${count}`] = ['', [Validators.required]]
      analysis[`cause_2_${count}`] = ['', [Validators.required]]
      analysis[`cause_3_${count}`] = ['', [Validators.required]]
      analysis[`cause_4_${count}`] = ['', [Validators.required]]
      analysis[`cause_5_${count}`] = ['', [Validators.required]]
      analysis[`analysis_result_${count}`] = ['', [Validators.required]]
    }
    return {
        problem_understand   : ['', [Validators.required]],
        local_revision   : ['', [Validators.required]],
        data_review   : ['', [Validators.required]],
        viability_test   : ['', [Validators.required]],
        ...analysis
    }
  }

  get upgradePlanIPFormControl() {
    const upgradePlanDFormControl = {}
    for (let count = 1; count <= 5; count++) {
      upgradePlanDFormControl[`goal_description_${count}`] = ['', [Validators.required]]
      upgradePlanDFormControl[`person_assigned_${count}`] = ['', [Validators.required]]
      upgradePlanDFormControl[`init_date_${count}`] = ['', [Validators.required]]
      upgradePlanDFormControl[`end_date_${count}`] = ['', [Validators.required]]
      upgradePlanDFormControl[`unit_measurement_${count}`] = ['', [Validators.required]]
      upgradePlanDFormControl[`follow_process_description_${count}`] = ['', [Validators.required]]
      upgradePlanDFormControl[`evidence_file_${count}`] = ['', [Validators.required]]
      upgradePlanDFormControl[`percentage_${count}`] = ['', [Validators.required]]
    }
    return upgradePlanDFormControl
  }

  getLengthCauses(key) {
    const causeslength: {[key: string]: number} = {
      '(AC) Ambiente de Control': 1,
      '(ER) Evaluación del Riesgo': 2,
      '(CT) Actividades de Control': 3,
      '(IC) Información y Comunicación': 4,
      '(SM) Supervisión y Monitoreo': 5,
    };
    return causeslength[key]
  }

  getCausesLength(index) {
    const causeslength: {[key: number]: string} = {
      1: '(AC) Ambiente de Control',
      2: '(ER) Evaluación del Riesgo',
      3: '(CT) Actividades de Control',
      4: '(IC) Información y Comunicación',
      5: '(SM) Supervisión y Monitoreo',
    };
    return causeslength[index]
  }


  refactorForm() {
    const nameCollection = {
      '1': [
        'user_name',
        'user_area',
        'user_position',
      ],
      2: [
        'goal_description',
        'person_assigned',
        'init_date',
        'end_date',
        'unit_measurement',
        'follow_process_description',
        'evidence_file',
        'percentage'
      ],
      4: [
        'goal_description',
        'person_assigned',
        'init_date',
        'end_date',
        'unit_measurement',
        'follow_process_description',
        'evidence_file',
        'percentage'
      ]
    }
    Object.keys(nameCollection).forEach((step) => {
      nameCollection[step].forEach((name) => {
        for (let count = 1; count <= 5; count++) {
          if (document.querySelector(`#${name}_${count}`)) {
            this.getStep(step).get(`${name}_${count}`).enable()
          } else {
            this.getStep(step).get(`${name}_${count}`).disable()
          }
          // Special code for specific step
          if (step == '2') {
            if (this.upgradePlanI.length >= count) {
              this.getStep(step).get(`${name}_${count}`).enable()
            } else {
              this.getStep(step).get(`${name}_${count}`).disable()
            }
          }
        }
      })
    })
    // Special code for specific step
    Object.keys(this.causes).forEach((cause) => {
      for (let count = 1; count <= 5; count++) {
        if (this.causes[cause].length >= count) {
          this.getStep(3).get(`cause_${this.getLengthCauses(cause)}_${count}`).enable()
        } else {
          this.getStep(3).get(`cause_${this.getLengthCauses(cause)}_${count}`).disable()
        }
      }
    })
  }

  doneStep1 (): void {
    if (this.isValidStep(1)) {
      const formValues = this.getStep(1).value
      const lead = {
        name   : formValues['lead_name'].constructor.name == 'String' ? formValues['lead_name'] : formValues['lead_name'].name,
        area  : formValues['lead_area'],
        position   : formValues['lead_position'],
      }
      if (formValues['lead_id']) { lead['user_id'] = formValues['lead_id'] }
      const data = [
        lead
      ]
      this.workTeam.forEach((count) => {
        const user = {
          name   : formValues[`user_name_${count}`].constructor.name == 'String' ? formValues[`user_name_${count}`] : formValues[`user_name_${count}`].name,
          area  : formValues[`user_area_${count}`],
          position   : formValues[`user_position_${count}`],
        }
        if (formValues[`user_id_${count}`]) { user['user_id'] = formValues[`user_id_${count}`] }
        data.push(user)
      });
      this._service.completeStep({
        tracking_id: this.trackingId,
        tracking_team_memebers : data
      }, 1, 'sgc')
      .subscribe({
        next: (v)  => {
          console.log(`Correcto ${v['data']}`)
          this._stepper.next()
          // this._router.navigateByUrl(`/request/invoice/${v['data']['id']}`)
        },
        error: (e) => { this.serverError() },
        complete: () => { console.log("Completado") }
      })
      console.log("Paso valido")
    } else { this.validationError() }
  }

  doneStep2 (): void {
    if (this.isValidStep(2)) {
      const formValues = this.getStep(2).value
      const data = []
      this.upgradePlanI.forEach((count) => {
        data.push({
          goal_description:  formValues[`goal_description_${count}`],
          person_assigned:  formValues[`person_assigned_${count}`],
          init_date:  formValues[`init_date_${count}`],
          end_date:  formValues[`end_date_${count}`],
          unit_measurement:  formValues[`unit_measurement_${count}`],
          follow_process_description:  formValues[`follow_process_description_${count}`],
          evidence_file:  this.base64FilesI[`evidence_file_${count}`],
          percentage:  formValues[`percentage_${count}`]
        })
      });
      this._service.completeStep({
        tracking_id: this.trackingId,
        upgrade_plan : data
      }, 2, 'sgc')
      .subscribe({
        next: (v)  => {
          console.log(`Correcto ${v['data']}`)
          this._stepper.next()
          // this._router.navigateByUrl(`/request/invoice/${v['data']['id']}`)
        },
        error: (e) => { this.serverError() },
        complete: () => { console.log("Completado") }
      })
      console.log("Paso valido")
    } else { this.validationError() }
  }

  doneStep3 (): void {
    console.log(this.getStep(3))
    if (this.isValidStep(3)) {
      const formValues = this.getStep(3).value
      const data = []
      Object.keys(this.causes).forEach((cause) => {
        data.push({
          root: cause,
          cause_1: formValues[`cause_${this.getLengthCauses(cause)}_1`],
          cause_2: formValues[`cause_${this.getLengthCauses(cause)}_2`],
          cause_3: formValues[`cause_${this.getLengthCauses(cause)}_3`],
          cause_4: formValues[`cause_${this.getLengthCauses(cause)}_4`],
          cause_5: formValues[`cause_${this.getLengthCauses(cause)}_5`],
          analysis_result: formValues[`analysis_result_${this.getLengthCauses(cause)}`],
        })
      })
      this._service.completeStep({
        tracking_id: this.trackingId,
        analysis_definitions: {
          problem_understand: formValues['problem_understand'],
          local_revision: formValues['local_revision'],
          data_review: formValues['data_review'],
          viability_test: formValues['viability_test'],
        },
        analysis: data
      }, 3, 'sgc')
      .subscribe({
        next: (v)  => {
          console.log(`Correcto ${v['data']}`)
          this._stepper.next()
          // this._router.navigateByUrl(`/request/invoice/${v['data']['id']}`)
        },
        error: (e) => { this.serverError() },
        complete: () => { console.log("Completado") }
      })
      console.log("Paso valido")
    } else { this.validationError() }
  }

  doneStep4 (): void {
    if (this.isValidStep(4)) {
      const formValues = this.getStep(4).value
      const data = []
      this.upgradePlanD.forEach((count) => {
        data.push({
          goal_description:  formValues[`goal_description_${count}`],
          person_assigned:  formValues[`person_assigned_${count}`],
          init_date:  formValues[`init_date_${count}`],
          end_date:  formValues[`end_date_${count}`],
          unit_measurement:  formValues[`unit_measurement_${count}`],
          follow_process_description:  formValues[`follow_process_description_${count}`],
          evidence_file:  this.base64FilesD[`evidence_file_${count}`],
          percentage:  formValues[`percentage_${count}`]
        })
      });
      this._service.completeStep({
        tracking_id: this.trackingId,
        upgrade_plan : data
      }, 4, 'sgc')
      .subscribe({
        next: (v)  => {
          console.log(`Correcto ${v['data']}`)
          this._stepper.next()
          // this._router.navigateByUrl(`/request/invoice/${v['data']['id']}`)
        },
        error: (e) => { this.serverError() },
        complete: () => { console.log("Completado") }
      })
      console.log("Paso valido")
    } else { this.validationError() }
  }

  doneStep5 (): void {
    console.log(this.getStep(6))
    if (this.isValidStep(6)) {
      this._service.completeStep({
        tracking_id: this.trackingId,
        finish_request: this.getStep(6).value
      }, 6, 'sgc')
      .subscribe({
        next: (v)  => {
          console.log(`Correcto ${v['data']}`)
          // this._stepper.next()
          this._router.navigateByUrl(`/request/list/sgc`)
        },
        error: (e) => { this.serverError() },
        complete: () => { console.log("Completado") }
      })
      console.log("Paso valido")
    } else { this.validationError() }
  }

  private validationError() {

    this.snackBar.open("Todos los campos son obligatorios, ", 'Entiendo', {
      duration: 3000,
    });
  }

  private serverError() {

    this.snackBar.open("Parece que tenemos un problema con el servidor, vuelva a intentarlo mas tarde", 'Entiendo', {
      duration: 3000,
    });
  }

  private isValidStep(numberStep: number | string) {
    return this.getStep(numberStep).valid
  }

  private getStep(numberStep: number | string) {
    return this.formControl.controls[`step${numberStep}`]
  }
}
