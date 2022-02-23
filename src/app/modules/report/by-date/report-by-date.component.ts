import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'report-by-date',
  templateUrl: './report-by-date.component.html',
  styleUrls: ['./report-by-date.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReportByDateComponent {
  formFieldHelpers: string[] = [''];

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
