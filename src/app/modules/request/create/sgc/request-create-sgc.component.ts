import { Component, ViewEncapsulation, OnChanges, ChangeDetectorRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { RequestModel } from '../../../../shared/models/request.model';
import { Router } from '@angular/router';
import { RequestService } from 'app/shared/services/request.service';
import { UserModel } from '../../../../shared/models/user.model';
import { UserService } from '../../../../shared/services/users.service';
import { SelectableService } from 'app/shared/services/selectable.service';
import { SelectableModel } from '../../../../shared/models/selectable.model';
import { AlertService } from '../../../../shared/services/dialog.service';
import * as moment from 'moment';
import { SelectionRequiredValidator } from '../../../../shared/validators/onlySelectable';


@Component({
  selector: 'request-create',
  templateUrl: './request-create-sgc.component.html',
  styleUrls: ['./request-create-sgc.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RequestCreateSGCComponent implements OnInit {
  formFieldHelpers: string[] = [''];
  configForm: FormGroup;
  requestFormControl: FormGroup;
  selectFormControl: FormGroup;
  users: UserModel[] = [];
  selectable = {
    detectedFor: [],
    processLead: [],
    detectedIn: [],
    unfulfilledRequirement: [],
    actionType: [],
    howDetected: [],
    affectedProcess: [],
  };
  selectFilter: string = '';
  inputTimeout: any;
  base64File: string | ArrayBuffer = '';
  selects: SelectableModel[];
  minDate: Date = moment().toDate();




  /**
   * Constructor
   */
  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _requestService: RequestService,
    private _userService: UserService,
    private _selectableService: SelectableService,
    private _cdr: ChangeDetectorRef,
    private _alert: AlertService
    ) {
      this.requestFormControl = new FormGroup({
        init_date: new FormControl(moment(), [ Validators.required ]),
        detected_date: new FormControl('', [ Validators.required ]),
        detected_in_code: new FormControl('', [ Validators.required, SelectionRequiredValidator]),
        detected_for_id: new FormControl('', [ Validators.required, SelectionRequiredValidator]),
        unfulfilled_requirement_code: new FormControl('', [ Validators.required, SelectionRequiredValidator ]),
        process_lead_id: new FormControl('', [ Validators.required, SelectionRequiredValidator]),
        affected_process_code: new FormControl('', [ Validators.required,SelectionRequiredValidator ]),
        how_detected_code: new FormControl('', [ Validators.required, SelectionRequiredValidator ]),
        action_type_code: new FormControl('', [ Validators.required, SelectionRequiredValidator ]),
        evidence_description: new FormControl('', [ Validators.required ]),
        request_description: new FormControl('', [ Validators.required ]),
        evidence_file: new FormControl('', [ Validators.required ]),
      });
      this.loadSelectOptions()
      this.requestFormControl.get('init_date').disable()
      this.requestFormControl.get('evidence_description').valueChanges.subscribe({
        next: (_) => {
          const label = document.getElementsByClassName('mat-tab-label-content')[0]
          if (this.requestFormControl.get('evidence_description').valid) {
            label.setAttribute('style', '')
          } else {
            label.setAttribute('style', 'color: red !important')
          }
        }
      })
      this.requestFormControl.get('request_description').valueChanges.subscribe({
        next: (_) => {
          const label = document.getElementsByClassName('mat-tab-label-content')[1]
          if (this.requestFormControl.get('request_description').valid) {
            label.setAttribute('style', '')
          } else {
            label.setAttribute('style', 'color: red !important')
          }
        }
      })
  }
  ngOnInit(): void {
  }

  displayUser(input: any) {
    if (!input) { return ''}
    return input.name
  }
  displaySelectable(input: any) {
    if (!input) { return ''}
    return input.description
  }


  loadSelectOptions() {
    this.loadUsers('detectedFor')
    this.loadUsers('processLead')
    this.loadSelectables('detectedIn')
    this.loadSelectables('affectedProcess')
    this.loadSelectables('howDetected')
    this.loadSelectables('actionType')
    this.loadSelectables('unfulfilledRequirement')
    this.loadSelectables('detectedIn')
  }

  loadSelectables(selectable: string) {
    this._selectableService.getSelectable(this.getselectableTable(selectable), this.getFilter(selectable)).subscribe({
      next: (v) => {
        this.selects = []
        v['data'].forEach((user: any) => {
          this.selects.push(new SelectableModel(user))
          this._cdr.detectChanges()
        })
        this.selectable[selectable] = [...this.selects]
      }
    })
  }

  loadUsers(selectable: string) {
    this._userService.getUsers(this.getFilter(selectable)).subscribe({
      next: (v) => {
        this.users = []
        v['data'].forEach((user) => {
          this.users.push(new UserModel(user))
          this._cdr.detectChanges()
        })
        this.selectable[selectable] = [...this.users]
      }
    })
  }

  getFilter(selectable: string): string {
    const dictionary = {
      detectedFor: 'detected_for_id',
      processLead: 'process_lead_id',
      detectedIn: 'detected_in_code',
      unfulfilledRequirement: 'unfulfilled_requirement_code',
      actionType: 'action_type_code',
      howDetected: 'how_detected_code',
      affectedProcess: 'affected_process_code',
    }
    return this.requestFormControl.value[dictionary[selectable]]
  }

  getselectableTable(selectable: string): string {
    const dictionary = {
      detectedIn: 'detected_places',
      unfulfilledRequirement: 'unfulfilled_requirements',
      actionType: 'action_types',
      howDetected: 'detection_types',
      affectedProcess: 'affected_processes',
    }
    return dictionary[selectable]
  }

  getFormFieldHelpersAsString(): string {
    return this.formFieldHelpers.join(' ');
  }

  submit(): void {
    if (this.requestFormControl.valid) {
      this._alert.confirmation('Estas a punto de crear una nueva solicitud.').afterClosed().subscribe({
        next: (v) => {
          if (['confirmed'].includes(v)) {
            this.requestFormControl.get('init_date').enable()
            const data =  {...this.requestFormControl.value}
            this.requestFormControl.get('init_date').disable()
            data['detected_for_id'] = data['detected_for_id'].id
            data['process_lead_id'] = data['process_lead_id'].id
            data['detected_in_code'] = data['detected_in_code'].code
            data['unfulfilled_requirement_code'] = data['unfulfilled_requirement_code'].code
            data['action_type_code'] = data['action_type_code'].code
            data['how_detected_code'] = data['how_detected_code'].code
            data['affected_process_code'] = data['affected_process_code'].code
            const model = new RequestModel(data)
            model.evidence_file = this.base64File
            model.request_type_code = 'SGC'
            this._requestService.createRequest(model)
            .subscribe({
              next: (v)  => {
                console.log(`Correcto ${v['data']}`)
                this._alert.sucess().afterClosed().subscribe({
                  next: (_) => {
                    this._router.navigateByUrl(`/request/invoice/${v['data']['id']}`)
                  }
                })
              },
              error: (e) => { this._alert.error(e.message) }
            })
          }
        }
      })
    } else {
      this._alert.error('Algunos campos son obligatorios, revisa e intenta de nuevo.')
    }
  }

  onChangeFilter(toFiltered: string, type: 'user' | 'selectable'): void {
    if (this.inputTimeout){ clearTimeout(this.inputTimeout) }
    this.inputTimeout = setTimeout(() => {
      if (type.includes('selectable')) { this.loadSelectables(toFiltered) }
      else { this.loadUsers(toFiltered) }
    }, 500);
  }

  OnChangeFile(): void {
    let reader = new FileReader();
    reader.readAsDataURL(
      this.requestFormControl.value['evidence_file'].files[0]
    );
    reader.onload = () => {
      this.base64File = reader.result;
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
}
