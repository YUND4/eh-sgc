import { ChangeDetectionStrategy, Component, ViewEncapsulation, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SelectableModel } from 'app/shared/models/selectable.model';
import { SelectableService } from '../../../../shared/services/selectable.service';


@Component({
    selector       : 'create-selectable',
    templateUrl    : './create.component.html'
})
export class SelectableCreateComponent
{

  selectableFormControl: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _service: SelectableService,
    @Inject(MAT_DIALOG_DATA) private _data: SelectableModel,
    private _dialog: MatDialog,
  ) {
    this.selectableFormControl = this._formBuilder.group({
      code: [_data.code, [Validators.required]],
      description: [_data.description, [Validators.required]],
    })
  }


  createUpdateSelectable(): void {
    this._service.createUpdateSelectable(this.selectableFormControl.value, this._data.type).subscribe({
      next: (v) => {
        this._dialog.closeAll()
      },
      error: (e) => {},
      complete: () => {},
    })
  }

}
