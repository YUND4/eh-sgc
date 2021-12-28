import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { List } from 'lodash';

@Component({
    selector     : 'request-trace',
    templateUrl  : './request-trace-sgc.component.html',
    encapsulation: ViewEncapsulation.None
})
export class RequestTraceSGCComponent implements OnInit
{

    horizontalStepperForm: FormGroup;
    verticalStepperForm: FormGroup;

    causes: {[key: string]: [number]} = {
      '(AC) Ambiente de Control': [1],
      '(ER) Evaluación del Riesgo': [1],
      '(CT) Actividades de Control': [1],
      '(IC) Información y Comunicación': [1],
      '(SM) Supervisión y Monitoreo': [1],
      '-': [1]
    };

    workTeam: [number] = [1,];
    standard1: [number] = [1,];
    standard2: [number] = [1,];

    upgradePlan: [number] = [1,];

    srcResult: string = '';

    /**
     * Constructor
     */
    constructor(private _formBuilder: FormBuilder)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Vertical stepper form
        this.verticalStepperForm = this._formBuilder.group({
            step1: this._formBuilder.group({
                // email   : ['', [Validators.required, Validators.email]],
                // country : ['', Validators.required],
                // language: ['', Validators.required]
            }),
            step2: this._formBuilder.group({
                // firstName: ['', Validators.required],
                // lastName : ['', Validators.required],
                // userName : ['', Validators.required],
                // about    : ['']
            }),
            step3: this._formBuilder.group({
                // byEmail          : this._formBuilder.group({
                //     companyNews     : [true],
                //     featuredProducts: [false],
                //     messages        : [true]
                // }),
                // pushNotifications: ['everything', Validators.required]
            }),
            step4: this._formBuilder.group({
                // byEmail          : this._formBuilder.group({
                //     companyNews     : [true],
                //     featuredProducts: [false],
                //     messages        : [true]
                // }),
                // pushNotifications: ['everything', Validators.required]
            }),
            step5: this._formBuilder.group({
                // byEmail          : this._formBuilder.group({
                //     companyNews     : [true],
                //     featuredProducts: [false],
                //     messages        : [true]
                // }),
                // pushNotifications: ['everything', Validators.required]
            }),
            step6: this._formBuilder.group({
                // byEmail          : this._formBuilder.group({
                //     companyNews     : [true],
                //     featuredProducts: [false],
                //     messages        : [true]
                // }),
                // pushNotifications: ['everything', Validators.required]
            })
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

    onFileSelected() {
      const inputNode: any = document.querySelector('#file');

      if (typeof (FileReader) !== 'undefined') {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          this.srcResult = e.target.result;
        };

        reader.readAsArrayBuffer(inputNode.files[0]);
      }
    }
}
