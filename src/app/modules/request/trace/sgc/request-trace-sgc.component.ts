import { ChangeDetectorRef, Component, Inject, LOCALE_ID, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { WizardService } from '../../../../shared/services/wizard.service';
import { SGC } from 'app/shared/constants/request-types.constants';
import * as moment from 'moment';
import { formatDate } from '@angular/common';
import { TrackingService } from 'app/shared/services/tracking.service';
import { AlertService } from 'app/shared/services/dialog.service';

@Component({
  selector: 'request-trace',
  templateUrl: './request-trace-sgc.component.html',
  encapsulation: ViewEncapsulation.None
})
export class RequestTraceSGCComponent {

  formControl: FormGroup;
  upgradePlanD: number[] = [];
  requestId: any;
  data: any = {};
  quillConfiguration = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ color: [] }, { background: [] }],
      ['link'],
      ['clean'],
    ],
  }
  trackings: any = {};
  selectedIndex;
  lastPercentage: any;

  constructor(
    private _formBuilder: FormBuilder,
    private _wizardService: WizardService,
    private _trackingService: TrackingService,
    private _route: ActivatedRoute,
    private _cdr: ChangeDetectorRef,
    @Inject(LOCALE_ID) public locale: string,
    private _alert: AlertService
  ) {

    this._route.params.subscribe(params => {
      this.requestId = params['id']
      this.loadStep4()
    });

    this.formControl = this._formBuilder.group({
      goal_description: ['', [Validators.required]],
      follow_process_description: ['', [Validators.required]],
      percentage: ['', [Validators.required]]
    })
  }

  formatDate(date: string) {
    return formatDate(date, 'dd/MM/yyyy HH:mm', this.locale)
  }

  loadStep4() {
    this._wizardService.retriveStep(4, SGC.toLocaleLowerCase(), this.requestId).subscribe({
      next: (v) => {
        for (let index = 0; index < v['data'].length; index++) {
          this.data[v['data'][index].id] = v['data'][index]
          this.addCauses(this.upgradePlanD)
          this._cdr.detectChanges()
        }
        this.getAll()
      }
    })
  }


  addCauses(list: number[]): void {
    if (list.length < 5) {
      list.push(list.length + 1)
    }
  }

  removeCauses(list: [number]): void {
    if (list.length > 1) {
      list.pop()
    }
  }

  new(key) {
    if (this.trackings[key][this.trackings[key].length - 1].percentage < 100) {
      this.formControl.setValue({
        goal_description: '',
        follow_process_description: '',
        percentage: '',
      })
      this.selectedIndex = null
      this.formControl.enable()
    }
  }

  create(key: any) {
    if (this.formControl.valid) {
      if (this.formControl.get('percentage').value) {
        this._alert.confirmation('Al marcar un seguimiento al 100% esta accion correctiva se cerrara, ¿Deseas continuar?').afterClosed().subscribe({
          next: (v) => {
            if (v == 'confirmed') {
              console.log(v)
              const request = { ...this.formControl.value }
              request['upgrade_plan_id'] = key
              this._trackingService.createTracking(request).subscribe({
                next: (v) => {
                  this.getAll()
                  this.formControl.setValue({
                    goal_description: '',
                    follow_process_description: '',
                    percentage: ''
                  })
                }
              })
            }
          } 
        })
      } else {
            const request = { ...this.formControl.value }
            request['upgrade_plan_id'] = key
            this._trackingService.createTracking(request).subscribe({
              next: (v) => {
                this.getAll()
                this.formControl.setValue({
                  goal_description: '',
                  follow_process_description: '',
                  percentage: ''
                })
              }
            })
      }
    } else {
      console.log('invalido')
    }
  }

  setForm(input: any, index: number) {
    this.formControl.setValue({
      goal_description: input.goal_description,
      follow_process_description: input.follow_process_description,
      percentage: input.percentage
    })
    this.selectedIndex = index
    this.formControl.disable()
  }

  getPercentage(list) {
    if (list && list.length != 0) {
      this.lastPercentage = list[list.length-1].percentage
      return this.lastPercentage
    }
    return 0
  }
  getColor () {
    return 'primary'
  }

  getAll() {
    this.trackings = {}
    Object.keys(this.data).forEach((key: any) => {
      this._trackingService.getTrackings(key).subscribe({
        next: (v) => {
          this.trackings[key] = v['data']
          if (this.trackings[key][this.trackings[key].length - 1].percentage >= 100) {
            this.formControl.disable()
          }
          this._cdr.detectChanges()
        }
      })
    });
  }

  get object() {
    return Object
  }
  
}
