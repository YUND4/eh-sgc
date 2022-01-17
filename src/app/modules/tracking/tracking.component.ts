import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { TrackingModel } from '../../shared/models/tracking.model';
import { TrackingService } from '../../shared/services/tracking.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RequestModel } from '../../shared/models/request.model';

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
    private _dialog: MatDialog) {
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
    this._service.createTracking(new TrackingModel({
      request_id: this._data.id,
      step_count: 3,
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
  }

  followTracking(id: number): void {
    this._dialog.closeAll()
    setTimeout(() => {
      this._router.navigateByUrl(`/request/trace/${this._data.request_type}/${id}`)
    }, 10);
  }

}
