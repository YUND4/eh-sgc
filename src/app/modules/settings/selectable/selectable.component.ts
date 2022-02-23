import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { ActivatedRoute, Router } from '@angular/router';
import { TagModel } from 'app/shared/models/tag.model';
import { SelectableModel } from '../../../shared/models/selectable.model';
import { SelectableService } from '../../../shared/services/selectable.service';
import { MatDialog } from '@angular/material/dialog';
import { SelectableCreateComponent } from './create/create.component';

@Component({
    selector       : 'selectable-account',
    templateUrl    : './selectable.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsSelectableComponent implements OnInit
{
  @ViewChild('matDrawer', {static: true}) matDrawer: MatDrawer;

  drawerMode: 'side' | 'over';
  selectables = {
    status: 'Estado',
    detected_places: 'Detectado en',
    unfulfilled_requirements: 'Requisito incumplido',
    affected_processes: 'Proceso afectado',
    detection_types: 'Tipo de deteccion',
    action_types: 'Accion',
    upgrade_plan_types: 'Planes de mejora',
    result_types: 'Resultados',
    request_types: 'Tipos de solicitud',
  };
  items: (SelectableModel | TagModel)[] = [];
  selectedItem: SelectableModel = new SelectableModel({
    code: '',
    desciption: '',
    type: ''
  });
  timeout: any;

  /**
   * Constructor
   */
  constructor(
      private _router: Router,
      private _service: SelectableService,
      private _cdr: ChangeDetectorRef,
      private _dialog: MatDialog,
  )
  {
    this.loadSelectable()
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void
  {
  }

  loadSelectable(): void
  {
    this.items = []
    Object.keys(this.selectables).forEach((key) => {
      let result = {}
      this._service.getSelectable(key).subscribe({
        next: (v) => {
          let items: any = [new TagModel({
            code: key,
            description: this.selectables[key]
          })]
          v['data'].forEach((s: any) => {
            items.push(new SelectableModel({
              code: s.code,
              description: s.description,
              type: key
            }))
          });
          result[key] = items
          Object.keys(result).forEach((tag) => {
            result[tag].forEach(selectable => {
              this.items.push(selectable)
              clearTimeout(this.timeout)
              this.timeout = setTimeout(() => {
                this._cdr.detectChanges()
              }, 500);
            });
          })
        },
      })
    })
  }

  openDialog(code: any, item: SelectableModel) {
    if (item.constructor.name === 'TagModel') {
      this.selectedItem = new SelectableModel({
        code: '',
        desciption: '',
        type: code
      })
    } else {
      this.selectedItem = item
    }
    const dialogRef = this._dialog.open(SelectableCreateComponent, {
      width: '500px',
      data: this.selectedItem
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadSelectable()
    });
  }

  removeSelectable(code: string, model: string): void
  {
    this._service.removeSelectable(code, model).subscribe({
      next: (v) => this.loadSelectable()
    })
  }

}
