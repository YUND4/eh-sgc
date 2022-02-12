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
import { Moment } from 'moment';
import { SelectionRequiredValidator } from '../../../../shared/validators/onlySelectable';
import { SGC } from 'app/shared/constants/request-types.constants';
import * as moment from 'moment';

@Component({
    selector     : 'request-trace',
    templateUrl  : './request-trace-sgc.component.html',
    encapsulation: ViewEncapsulation.None
})
export class RequestTraceSGCComponent implements AfterContentChecked
{
  @ViewChild('stepper') public stepper: MatStepper;

  formControl: FormGroup;

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

  disables: any = []

  selectables = {}
  timeout: any;

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
    this.loadUsers('user_tracking_id', '5')
    this.loadUsers('user_granted_id', '5')
    this.loadSelectables('result_code', '5')
    this.getStep(5).get('total_agree').valueChanges.subscribe({
      next: (v) => {
        this.autofillReview(v, this.getStep(5).value['total_disagree'])
      }
    })
    this.getStep(5).get('total_disagree').valueChanges.subscribe({
      next: (v) => {
        this.autofillReview(this.getStep(5).value['total_agree'], v)
      }
    })
    this.loadStep1()
    this.loadStep2()
    this.loadStep3()
    this.loadStep4()
    this.loadStep5()
  }

  loadStep5() {
    this._service.retriveStep(5, SGC.toLocaleLowerCase(), this.trackingId).subscribe({
      next: (v) => {
        if (v['data'].length != 0){
          const frequest = v['data'][0]
          this.getStep(5).get('objective').setValue(frequest.objective)
          this.getStep(5).get('result_analysis').setValue(frequest.result_analysis)
          this.getStep(5).get('result_code').setValue({ description: frequest.result_description })
          this.getStep(5).get('total_agree').setValue(frequest.total_agree)
          this.getStep(5).get('total_disagree').setValue(frequest.total_disagree)
          this.getStep(5).get('total_fulfilment').setValue(frequest.total_fulfilment)
          this.getStep(5).get('total_review').setValue(frequest.total_review)
          this.getStep(5).get('tracking_date').setValue(frequest.tracking_date)
          this.getStep(5).get('created_at').setValue(moment(frequest.created_at).toDate())
          this.getStep(5).get('tracking_date_period_end').setValue(moment(frequest.tracking_date_period_end, 'YYYY-MM-DD HH:mm:ss').toDate())
          this.getStep(5).get('tracking_date_period_init').setValue(moment(frequest.tracking_date_period_init, 'YYYY-MM-DD HH:mm:ss').toDate())
          this.getStep(5).get('tracking_date').setValue(moment(frequest.tracking_date, 'YYYY-MM-DD HH:mm:ss').toDate())
          this.getStep(5).get('user_granted_id').setValue({ name: frequest.user_granted_name })
          this.getStep(5).get('user_tracking_id').setValue({ name: frequest.user_tracking_name })
          console.log(this.getStep(5))
          this.disables.push(5)
          this.onDone()
        }
      }
    })
  }

  loadStep2() {
    this._service.retriveStep(2, SGC.toLocaleLowerCase(), this.trackingId).subscribe({
      next: (v) => {
        let count = 1;
        v['data'].forEach((uplan: any) => {
            this.getStep(2).get('goal_description_' + count).setValue(uplan.goal_description)
            this.getStep(2).get('person_assigned_' + count).setValue(uplan.person_assigned)
            this.getStep(2).get('init_date_' + count).setValue(moment(uplan.init_date, 'YYYY-MM-DD HH:mm:ss').toDate())
            this.getStep(2).get('end_date_' + count).setValue(moment(uplan.end_date, 'YYYY-MM-DD HH:mm:ss').toDate())
            this.getStep(2).get('unit_measurement_' + count).setValue(uplan.unit_measurement)
            this.getStep(2).get('follow_process_description_' + count).setValue(uplan.follow_process_description)
            this.getStep(2).get('percentage_' + count).setValue(uplan.percentage)
            count += 1
        });
        for (let index = 0; index < count-2; index++) {
         this.addCauses(this.upgradePlanI)
        }
        console.log(this.getStep(2))
        if (v['data'].length != 0) {
          this.disables.push(2)
          this.onDone()
        }
      }
    })
  }

  loadStep4() {
    this._service.retriveStep(4, SGC.toLocaleLowerCase(), this.trackingId).subscribe({
      next: (v) => {
        let count = 1;
        v['data'].forEach((uplan: any) => {
            this.getStep(4).get('goal_description_' + count).setValue(uplan.goal_description)
            this.getStep(4).get('person_assigned_' + count).setValue(uplan.person_assigned)
            this.getStep(4).get('init_date_' + count).setValue(moment(uplan.init_date, 'YYYY-MM-DD HH:mm:ss').toDate())
            this.getStep(4).get('end_date_' + count).setValue(moment(uplan.end_date, 'YYYY-MM-DD HH:mm:ss').toDate())
            this.getStep(4).get('unit_measurement_' + count).setValue(uplan.unit_measurement)
            this.getStep(4).get('follow_process_description_' + count).setValue(uplan.follow_process_description)
            this.getStep(4).get('percentage_' + count).setValue(uplan.percentage)
            count += 1
        });
        for (let index = 0; index < count-2; index++) {
         this.addCauses(this.upgradePlanD)
        }
        if (v['data'].length != 0) {
          this.disables.push(4)
          this.onDone()
        }
      }
    })
  }

  loadStep3() {
    this._service.retriveStep(3, SGC.toLocaleLowerCase(), this.trackingId).subscribe({
      next: (v) => {
        if (v['data'].length != 0) {
          this.disables.push(3)
          this.onDone()
        }
      }
    })
  }

  loadStep1() {
    this._service.retriveStep(1, SGC.toLocaleLowerCase(), this.trackingId).subscribe({
      next: (v) => {
        let first = true
        let count = 1;
        v['data'].forEach((user: any) => {
          if (first) {
            this.getStep(1).get('lead_name').setValue(user)
            this.getStep(1).get('lead_area').setValue(user.area)
            this.getStep(1).get('lead_position').setValue(user.position)
            first = false
          } else {
            this.getStep(1).get('user_name_' + count).setValue(user)
            this.getStep(1).get('user_area_' + count).setValue(user.area)
            this.getStep(1).get('user_position_' + count).setValue(user.position)
            count += 1
          }
        });
        for (let index = 0; index < count-2; index++) {
         this.addCauses(this.workTeam)
        }
        if (v['data'].length != 0) {
          this.disables.push(1)
          this.onDone()
        }
      }
    })
  }

  onDone() {
    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      this.disables.forEach((_) => {
        this.stepper.next()
      });
      console.log(this.disables.length)
    }, 1000);
  }

  loadUsers(selectable: string, step: string) {
    this._userService.getUsers(this.getFilter(selectable, step)).subscribe({
      next: (v) => {
        let users = []
        v['data'].forEach((user: any) => {
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
      result_code: 'result_types',
    }
    return dictionary[selectable]
  }

  displayUser(input: any) {
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
      step3: this._formBuilder.group({
      }),
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

  autofillReview(total_agree: number, total_disagree: any) {
    const step = this.getStep(5)
    console.log(step)
    if (total_agree && total_disagree) {
      step.get('total_review').setValue(total_agree + total_disagree)
      step.get('total_fulfilment').setValue(( total_agree / (total_agree + total_disagree) ) * 100)
    }
  }

  get workTeamFormControl() {
    const workTeamUsers = {}
    for (let count = 1; count <= 5; count++) {
      workTeamUsers[`user_id_${count}`] = [null, []]
      workTeamUsers[`user_name_${count}`] = ['', [Validators.required, SelectionRequiredValidator]]
      workTeamUsers[`user_area_${count}`] = ['', [Validators.required]]
      workTeamUsers[`user_position_${count}`] = ['', [Validators.required]]
    }
    return {
        lead_id   : [null, []],
        lead_name   : ['', [Validators.required, SelectionRequiredValidator]],
        lead_area   : ['', [Validators.required]],
        lead_position   : ['', [Validators.required]],
        ...workTeamUsers
    }
  }

  get finishFormControl() {
    return {
      user_tracking_id: ['', [Validators.required, SelectionRequiredValidator]],
      user_granted_id: ['', [Validators.required, SelectionRequiredValidator]],
      tracking_date: ['', [Validators.required]],
      tracking_date_period_init: ['', [Validators.required]],
      tracking_date_period_end: ['', [Validators.required]],
      result_analysis: ['', [Validators.required]],
      objective: ['', [Validators.required]],
      total_review: ['', [Validators.required]],
      total_agree: ['', [Validators.required]],
      total_disagree: ['', [Validators.required]],
      total_fulfilment: ['', [Validators.required]],
      result_code: ['', [Validators.required, SelectionRequiredValidator]],
      created_at: [moment().toDate(), [Validators.required]],
    }
  }

  autofillWeek(counter: any, step: string | number) {
    const value = this.getStep(step).value
    console.log(value)
    let initDate = value['init_date_'+counter];
    let endDate = value['end_date_'+counter];
    if (initDate && endDate) {
    const result = Math.floor((Date.UTC(initDate.getFullYear(), initDate.getMonth(), initDate.getDate()) - Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate()) ) /(1000 * 60 * 60 * 24));
      this.getStep(step).get('unit_measurement_'+counter).setValue(
        Math.ceil(Math.abs(result / 7))
      )
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
      nameCollection[step].forEach((name: any) => {
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
    this.disables.forEach((step) => {
      this.getStep(step).disable()
    })
  }

  doneStep1 (): void {
    if (this.disables.includes(1)) {
      return this.stepper.next()
    }
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
          this. stepper.next()
          // this._router.navigateByUrl(`/request/invoice/${v['data']['id']}`)
        },
        error: (e) => { this.serverError() },
        complete: () => { console.log("Completado") }
      })
      console.log("Paso valido")
    } else { this.validationError() }
  }

  doneStep2 (): void {
    if (this.disables.includes(2)) {
      return this.stepper.next()
    }
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
          this. stepper.next()
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
      console.log(this.isValidStep(4))
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
          this. stepper.next()
          // this._router.navigateByUrl(`/request/invoice/${v['data']['id']}`)
        },
        error: (e) => { this.serverError() },
        complete: () => { console.log("Completado") }
      })
      console.log("Paso valido")
    } else { this.validationError() }
  }

  doneStep5 (): void {
    console.log(this.getStep(5))
    if (this.isValidStep(5)) {
      const data = {...this.getStep(5).value}
      data['result_code'] = data['result_code']['code']
      data['user_granted_id'] = data['user_granted_id']['id']
      data['user_tracking_id'] = data['user_tracking_id']['id']
      this._service.completeStep({
        tracking_id: this.trackingId,
        finish_request: data
      }, 5, 'sgc')
      .subscribe({
        next: (v)  => {
          console.log(`Correcto ${v['data']}`)
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
    if (this.disables.includes(numberStep)) { return true }
    return this.getStep(numberStep).valid
  }

  private getStep(numberStep: number | string) {
    return this.formControl.controls[`step${numberStep}`]
  }
}
