import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RequestModel } from '../../../../shared/models/request.model';
import { Router } from '@angular/router';
import { RequestService } from 'app/shared/services/request.service';
import { UserModel } from '../../../../shared/models/user.model';


@Component({
  selector: 'request-create',
  templateUrl: './request-create-sci.component.html',
  styleUrls: ['./request-create-sci.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RequestCreateSCIComponent {
  formFieldHelpers: string[] = [''];
  configForm: FormGroup;
  requestFormControl: FormGroup;
  selectFormControl: FormGroup;
  codeFormControl: FormGroup;
  users: UserModel[] = [];
  selectable = {
    'detectedFor': [],
    'processLead': [],
  };
  selectFilter: string = '';
  inputTimeout: any;
  base64File: string | ArrayBuffer = '';
  processAffected: string[];
  howDetected: string[];
  actionType: string[];
  unfulfilledRequirement: string[];
  detectedIn: string[];
  codeSection1: string[];
  codeSection2: string[];
  codeSection3: string[];
  codeSection4: string[];
  codeSection5: string[];




  /**
   * Constructor
   */
  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _service: RequestService) {
      this.requestFormControl = this._formBuilder.group({
        init_date: [null, [ Validators.required ]],
        detected_date: [null, [ Validators.required ]],
        detected_in: [null, [ Validators.required ]],
        detected_for_id: [null, [ Validators.required ]],
        unfulfilled_requirement: [null, [ Validators.required ]],
        process_lead_id: [null, [ Validators.required ]],
        process_affected: [null, [ Validators.required ]],
        how_detected: [null, [ Validators.required ]],
        action_type: [null, [ Validators.required ]],
        evidence_description: [null, [ Validators.required ]],
        request_description: [null, [ Validators.required ]],
        evidence_file: [null, [ Validators.required ]],
      });
      this.selectFormControl = this._formBuilder.group({
        select_filter: ['']
      });
      this.codeFormControl = this._formBuilder.group({
        section1: [null, [ Validators.required ]],
        section2: [null, [ Validators.required ]],
        section3: [null, [ Validators.required ]],
        section4: [null, [ Validators.required ]],
        section5: [null, [ Validators.required ]]
      })
      this.loadSelectOptions()
  }

  loadSelectOptions() {
    const defaultItems = [
      'Opcion 1',
      'Opcion 2'
    ]
    this.users = [
      new UserModel({
        name: 'Santiago',
        id: 2
      }),
      new UserModel({
        name: 'Camilo',
        id: 1
      })
    ]
    this.selectable['detectedFor'].push(...this.users)
    this.selectable['processLead'].push(...this.users)
    this.processAffected = defaultItems
    this.howDetected = defaultItems
    this.actionType = defaultItems
    this.unfulfilledRequirement = defaultItems
    this.detectedIn = defaultItems
    this.codeSection1 = [
      'EH',
      'JU'
    ]
    this.codeSection2 = [
      '2001',
      '2002'
    ]
    this.codeSection3 = [
      'BO',
      'SA'
    ]
    this.codeSection4 = [
      'SIS',
      'ADM'
    ]
    this.codeSection5 = [
      '001',
      '002'
    ]
  }

  getFormFieldHelpersAsString(): string {
    return this.formFieldHelpers.join(' ');
  }

  submit(): void {
    console.log(this.codeFormControl.value)
    const codeValid = this.codeFormControl.valid
    const formValid = this.requestFormControl.valid
    if (formValid && codeValid) {
      const data = this.requestFormControl.value;
      const model = new RequestModel(data);
      let code = ''
      let first = true
      for (const key in this.codeFormControl.value) {
        if (first) {
          code += this.codeFormControl.value[key];
          first = false
        } else {
          code += `-${this.codeFormControl.value[key]}`;
        }
      }
      console.log(code)
      model.request_code = code
      model.evidence_file = this.base64File;
      model.request_type_code = 'SCI'
      this._service.createRequest(model)
      .subscribe({
        next: (v)  => {
          console.log(`Correcto ${v['data']}`)
          this._router.navigateByUrl(`/request/invoice/${v['data']['id']}`)
        },
        error: (e) => { console.log(`Error ${e}`) },
        complete: () => { console.log("Completado") }
      })
    }
  }

  onChangeFilter(toFiltered: string): void {
    if (this.inputTimeout){ clearTimeout(this.inputTimeout) }
    this.inputTimeout = setTimeout(() => {
      this.selectable[toFiltered] = this.users.filter(
        (user) => user.name.toLowerCase().includes(
          this.selectFormControl.value['select_filter'].toLowerCase()
        )
      )
      console.log('Filtrado')
    }, 500);
  }

  OnChangeFile(): void {
    console.log('File Changed')
    let reader = new FileReader();
    reader.readAsDataURL(
      this.requestFormControl.value['evidence_file'].files[0]
    );
    reader.onload = () => {
      this.base64File = reader.result;
      console.log("Base 64 convertido")
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
}
