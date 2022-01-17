import { Component, ViewEncapsulation, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { RequestModel } from '../../../../shared/models/request.model';
import { Router } from '@angular/router';
import { RequestService } from 'app/shared/services/request.service';
import { UserModel } from '../../../../shared/models/user.model';


@Component({
  selector: 'request-create',
  templateUrl: './request-create-sgc.component.html',
  styleUrls: ['./request-create-sgc.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RequestCreateSGCComponent {
  formFieldHelpers: string[] = [''];
  configForm: FormGroup;
  requestFormControl: FormGroup;
  selectFormControl: FormGroup;
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




  /**
   * Constructor
   */
  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _service: RequestService) {
      this.requestFormControl = new FormGroup({
        init_date: new FormControl(null, [ Validators.required ]),
        detected_date: new FormControl(null, [ Validators.required ]),
        detected_in: new FormControl(null, [ Validators.required ]),
        detected_for_id: new FormControl(null, [ Validators.required ]),
        unfulfilled_requirement: new FormControl(null, [ Validators.required ]),
        process_lead_id: new FormControl(null, [ Validators.required ]),
        process_affected: new FormControl(null, [ Validators.required ]),
        how_detected: new FormControl(null, [ Validators.required ]),
        action_type: new FormControl(null, [ Validators.required ]),
        evidence_description: new FormControl(null, [ Validators.required ]),
        request_description: new FormControl(null, [ Validators.required ]),
        evidence_file: new FormControl(null, [ Validators.required ]),
      });
      this.selectFormControl = new FormGroup({
        select_filter: new FormControl('')
      });
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
  }

  getFormFieldHelpersAsString(): string {
    return this.formFieldHelpers.join(' ');
  }

  submit(): void {
    console.log(this.requestFormControl)
    if (this.requestFormControl.valid) {
      const model = new RequestModel(this.requestFormControl.value);
      model.evidence_file = this.base64File;
      model.request_type = 'sgc'
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
