import { Component, OnInit } from '@angular/core';
import { String } from 'lodash';
import { RequestService } from '../../../../shared/services/request.service';
import { RequestModel } from '../../../../shared/models/request.model';
import { map } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TrackingComponent } from 'app/modules/tracking/tracking.component';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list-sgc.component.html',
  styleUrls: ['./request-list-sgc.component.scss']
})
export class RequestListSGCComponent implements OnInit {
  displayedColumns: string[] = ['id', 'process_lead_name', 'detected_date', 'request_description', 'options'];
  formFieldHelpers: string[] = [''];
  requests: RequestModel[] = [];
  totalItems: number =  1;
  itemsPerPage: number = 10;
  currentPage: number = 0;
  postPerPage: number = 0;

  constructor(private _service: RequestService, private _formBuilder: FormBuilder, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.updateTable();
  }

  onPaginate(pageEvent: PageEvent) {
    this.postPerPage = +pageEvent.pageSize;
    this.currentPage = +pageEvent.pageIndex + 1;
    this.updateTable();
  }

  updateTable() {
    this._service.getRequests({
      page: this.currentPage,
      per_page: this.postPerPage
    }).subscribe({
      next: (response: any) => {
        this.requests = response.data.map((record: any) => new RequestModel(record))
        this.currentPage = response.current_page
        this.itemsPerPage = parseInt(response.per_page)
        this.totalItems = response.total
        console.log(response)
      },
      error: (e) => {
        console.log(e)
      }
    });
  }

  getFormFieldHelpersAsString(): string {
    return this.formFieldHelpers.join(' ');
  }

  openDialog(record: RequestModel): void {

    const dialogRef = this.dialog.open(TrackingComponent, {
      width: '900px',
      data: record
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
