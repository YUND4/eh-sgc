import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'request-create',
  templateUrl: './request-create-sci.component.html',
  styleUrls: ['./request-create-sci.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RequestCreateSCIComponent {
  formFieldHelpers: string[] = [''];
  configForm: FormGroup;

  /**
   * Constructor
   */
  constructor(private _formBuilder: FormBuilder) {
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
}
