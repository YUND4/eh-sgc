import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FuseConfirmationService } from '@fuse/services/confirmation/confirmation.service';
import { MatDialogRef } from '@angular/material/dialog';
import { FuseConfirmationDialogComponent } from '@fuse/services/confirmation/dialog/dialog.component';
import { messages } from '../../mock-api/common/messages/data';

@Injectable()
export class AlertService
{

  constructor(
    private _fuseConfirmationService: FuseConfirmationService) {
  }

  sucess(message?: string): MatDialogRef<FuseConfirmationDialogComponent, any> {
    return this._fuseConfirmationService.open({
      title: '¡Felicitaciones!',
      message: message ? message : 'El registro se creo correctamente.',
      icon: {
        color: 'success',
        name: 'mat_outline:info'
      },
      actions: {
        confirm: {
          show: false
        },
        cancel: {
          label: 'Cerrar'
        }
      }
    })
  }

  error(message?: string) {
    return this._fuseConfirmationService.open({
      title: 'Vaya!',
      message: message ? message : 'Ha ocurrido un error',
      icon: {
        color: 'warn',
        name: 'mat_outline:info'
      },
      actions: {
        confirm: {
          color: 'primary',
          label: 'Entendido',
        },
        cancel: {
          label: 'Cerrar'
        }
      }
    })
  }

  confirmation(message?: string) {
    return this._fuseConfirmationService.open({
      title: '¿Estas seguro?',
      message: message ? message : 'Quiero confirmar primero',
      icon: {
        color: 'accent',
        name: 'mat_outline:info'
      },
      actions: {
        confirm: {
          color: 'primary',
          label: 'Confirmar',
        },
        cancel: {
          label: 'Cancelar'
        }
      }
    })
  }

  info() {
    return this._fuseConfirmationService.open({
      title: 'Repasemos algo primero',
      message: 'Esta informacion es importante para ti',
      icon: {
        color: 'info',
        name: 'mat_outline:info'
      },
      actions: {
        confirm: {
          color: 'primary',
          label: 'Entiendo',
        },
        cancel: {
          label: 'Cerrar'
        }
      }
    })
  }

}
