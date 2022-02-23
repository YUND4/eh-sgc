import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { TrackingModel } from '../../shared/models/tracking.model';
import { TrackingService } from '../../shared/services/tracking.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RequestModel } from '../../shared/models/request.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CLOSE, OPEN, R_TO_CLOSE, EXPIRED } from 'app/shared/constants/status.constants';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss']
})
export class TrackingComponent implements OnInit {
  @ViewChild('closeModal') closeModal: ElementRef;
  displayedColumns: string[] = ['id', 'steps', 'status', 'options'];
  trackings: TrackingModel[] = []
  empty: boolean = true;
  notEmpty: boolean = false;

  constructor(
    private _service: TrackingService,
    @Inject(MAT_DIALOG_DATA) private _data: RequestModel,
    private _router: Router,
    private _dialog: MatDialog,
    private snackBar: MatSnackBar) {
    this.loadTrackings()
  }

  ngOnInit(): void {
  }

  loadTrackings() {
    this._service.getTrackings(this._data.id).subscribe({
      next: (response: any) => {
        this.trackings = response.data.map((record: any) => new TrackingModel(record))
        if (this.trackings.length == 0) {
          this.empty = true
          this.notEmpty = false
        } else {
          this.empty = false
          this.notEmpty = true
        }
      },
      error: (e) => {
        console.log(e)
      }
    })
  }

  newTracking(): void {
    let viability = true
    this.trackings.forEach((record) => {
      if (record.status == 'open') {
        viability =  false;
      }
    })
    if (viability) {
      this._service.createTracking(new TrackingModel({
        request_id: this._data.id,
        step_count: 5,
        last_step_complete: 0
      })).subscribe({
        next: (response: any) => {
          this.followTracking(response.data.id)
          console.log(`New Request ${response}`)
        },
        error: (e) => {
          console.log(e)
        }
      })
    } else {
        this.snackBar.open("No se pueden crear seguimientos nuevos si ya existe uno pendiente.", 'Entiendo', {
          duration: 2000,
        });
    }
  }

  followTracking(id: number): void {
    this._dialog.closeAll()
    setTimeout(() => {
      this._router.navigateByUrl(`/request/trace/${this._data.request_type_code.toLowerCase()}/${id}`)
    }, 10);
  }



  getStatusIcon(element: any) {
    console.log(element.status_code)
    if (element.status_code == OPEN) {
      return 'heroicons_outline:cube-transparent'
    } else if (element.status_code == R_TO_CLOSE) {
      return 'heroicons_outline:cube-transparent'
    } else if (element.status_code == CLOSE) {
      return 'heroicons_outline:cube'
    } else if (element.status_code == EXPIRED) {
      return 'heroicons_outline:cube-transparent'
    } else {
      return 'heroicons_outline:cube'
    }
  }
  getStatusIconColor(element: any) {
    if (element.status_code == OPEN) {
      return 'text-blue_eh'
    } else if (element.status_code == R_TO_CLOSE) {
      return 'text-orange_eh'
    } else if (element.status_code == CLOSE) {
      return 'text-green_eh'
    } else if (element.status_code == EXPIRED) {
      return 'text-warn'
    } else {
      return 'text-gray'
    }
  }

  editViability(element: any) {
    // if (element.status_code == CLOSE) {
    //   return true
    // }
    return false
  }

}
