import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { RequestModel } from '../../../../shared/models/request.model';
import { Router } from '@angular/router';
import { RequestService } from 'app/shared/services/request.service';


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



  /**
   * Constructor
   */
  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _service: RequestService) {
      this.requestFormControl = new FormGroup({
        init_date: new FormControl(),
        detected_date: new FormControl(),
        detected_in: new FormControl(),
        detected_for_id: new FormControl(),
        unfulfilled_requirement: new FormControl(),
        process_lead_id: new FormControl(),
        process_affected: new FormControl(),
        how_detected: new FormControl(),
        action_type: new FormControl(),
        evidence_description: new FormControl(),
        request_description: new FormControl(),
      });
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Get the form field helpers as string
   */
  getFormFieldHelpersAsString(): string {
    return this.formFieldHelpers.join(' ');
  }

  submit(): void {
    const model = new RequestModel(this.requestFormControl.value);
    this._service.createRequest(model)
    .subscribe({
      next: (v)  => { console.log(v) },
      error: (e) => { console.log(e) },
      complete: () => { console.log("Completado") }
    })
    console.log(model)
  }
}
