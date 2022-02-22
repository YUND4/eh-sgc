import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SGC } from 'app/shared/constants/request-types.constants';
import { SelectableModel } from 'app/shared/models/selectable.model';
import { List } from 'lodash';
import moment from 'moment';
import * as core from 'app/core/user/user.service';
import * as service from 'app/shared/services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserModel } from 'app/shared/models/user.model';
import { RequestService } from 'app/shared/services/request.service';
import { SelectableService } from 'app/shared/services/selectable.service';
import { WizardService } from 'app/shared/services/wizard.service';
import { SelectionRequiredValidator } from 'app/shared/validators/onlySelectable';

@Component({
    selector     : 'request-finish',
    templateUrl  : './request-finish-sgc.component.html',
    encapsulation: ViewEncapsulation.None
})
export class RequestFinishSGCComponent
{
  formControl: FormGroup;
  selectables: [] = [];
  inputTimeout: any;
  requestId: any;

  constructor(
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private _service: WizardService,
    private snackBar: MatSnackBar,
    private _cdr: ChangeDetectorRef,
    private _coreUserService: core.UserService,
    private _userService: service.UserService,
    private _selectableService: SelectableService,
    private _requestService: RequestService,
    ){

      this.formControl = this._formBuilder.group({
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
      })

    this._route.params.subscribe(params => {
      this.requestId = params['id']
    });

    this.loadUsers('user_tracking_id', '5')
    this.loadUsers('user_granted_id', '5')
    this.loadSelectables('result_code', '5')
    this.formControl.get('total_agree').valueChanges.subscribe({
      next: (v) => {
        this.autofillReview(v, this.formControl.value['total_disagree'])
      }
    })
    this.formControl.get('total_disagree').valueChanges.subscribe({
      next: (v) => {
        this.autofillReview(this.formControl.value['total_agree'], v)
      }
    })

    this.loadStep5()

  }

  loadStep5() {
    // this._service.retriveStep(5, SGC.toLocaleLowerCase(), this.requestId).subscribe({
    //   next: (v) => {
    //     if (v['data'].length != 0){
    //       const frequest = v['data'][0]
    //       this.formControl.get('objective').setValue(frequest.objective)
    //       this.formControl.get('result_analysis').setValue(frequest.result_analysis)
    //       this.formControl.get('result_code').setValue({ description: frequest.result_description })
    //       this.formControl.get('total_agree').setValue(frequest.total_agree)
    //       this.formControl.get('total_disagree').setValue(frequest.total_disagree)
    //       this.formControl.get('total_fulfilment').setValue(frequest.total_fulfilment)
    //       this.formControl.get('total_review').setValue(frequest.total_review)
    //       this.formControl.get('tracking_date').setValue(frequest.tracking_date)
    //       this.formControl.get('created_at').setValue(moment(frequest.created_at).toDate())
    //       this.formControl.get('tracking_date_period_end').setValue(moment(frequest.tracking_date_period_end, 'YYYY-MM-DD HH:mm:ss').toDate())
    //       this.formControl.get('tracking_date_period_init').setValue(moment(frequest.tracking_date_period_init, 'YYYY-MM-DD HH:mm:ss').toDate())
    //       this.formControl.get('tracking_date').setValue(moment(frequest.tracking_date, 'YYYY-MM-DD HH:mm:ss').toDate())
    //       this.formControl.get('user_granted_id').setValue({ name: frequest.user_granted_name })
    //       this.formControl.get('user_tracking_id').setValue({ name: frequest.user_tracking_name })
    //     }
    //   }
    // })
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


  autofillReview(total_agree: number, total_disagree: any) {
    if (total_agree && total_disagree) {
      this.formControl.get('total_review').setValue(total_agree + total_disagree)
      this.formControl.get('total_fulfilment').setValue(( total_agree / (total_agree + total_disagree) ) * 100)
    }
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

  displaySelectable(input: any) {
    if (!input) { return ''}
    return input.description
  }

  getFilter(selectable: string, step: string): string {
    return this.formControl.value[selectable]
  }

  submit() {
    if (this.formControl.valid) {
      const data = {...this.formControl.value}
      data['result_code'] = data['result_code']['code']
      data['user_granted_id'] = data['user_granted_id']['id']
      data['user_tracking_id'] = data['user_tracking_id']['id']
      data['request_id'] = this.requestId
      this._service.completeStep({
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
  validationError() {
    throw new Error('Method not implemented.');
  }
  serverError() {
    throw new Error('Method not implemented.');
  }

}
