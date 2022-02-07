import { Component, OnInit } from '@angular/core';
import { String } from 'lodash';
import { RequestService } from '../../../../shared/services/request.service';
import { RequestModel } from '../../../../shared/models/request.model';
import { map } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TrackingComponent } from 'app/modules/tracking/tracking.component';
import { Router } from '@angular/router';
import { UserService } from 'app/core/user/user.service';
import { User } from 'app/core/user/user.types';
import { ADMIN } from '../../../../shared/constants/rol.constants';
import { CLOSE, EXPIRED, OPEN, R_TO_CLOSE } from 'app/shared/constants/status.constants';
import { SGC } from '../../../../shared/constants/request-types.constants';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list-sgc.component.html',
  styleUrls: ['./request-list-sgc.component.scss']
})
export class RequestListSGCComponent{
  displayedColumns: string[] = ['id', 'process_lead_name', 'detected_date', 'status_code', 'options'];
  formFieldHelpers: string[] = [''];
  requests: RequestModel[] = [];
  totalItems: number =  1;
  itemsPerPage: number = 10;
  currentPage: number = 0;
  postPerPage: number = 0;
  isAdmin: boolean = true;
  searchFormControl: FormGroup;
  currentUser: User;

  constructor(
    private _service: RequestService,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _dialog: MatDialog,
    private _userService: UserService) {
      this.searchFormControl = _formBuilder.group({
        search: ['', []],
        status: ['Todos', []]
      })

      this.searchFormControl.get('search').valueChanges.subscribe({
        next: (v) => {

        }
      })
      this.searchFormControl.get('status').valueChanges.subscribe({
        next: (v) => {
        }
      })
      this._userService.get().subscribe({
        next: (v) => {
          this.currentUser = v['data']
          this.updateTable();
        }
      })
    }

  onPaginate(pageEvent: PageEvent) {
    this.postPerPage = +pageEvent.pageSize;
    this.currentPage = +pageEvent.pageIndex + 1;
    this.updateTable();
  }

  updateTable() {
    this._service.getRequests({
      request_type: SGC,
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

    const dialogRef = this._dialog.open(TrackingComponent, {
      width: '900px',
      data: record
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  followDetail(): void {
    this._router.navigateByUrl(`/request/detail`)
  }

  editViability(element: RequestModel) {
    if (this.currentUser.role_code == ADMIN && [ R_TO_CLOSE, OPEN ].includes(element.status_code)) {
      return true
    }
    return false
  }

  getStatusIcon(element: RequestModel) {
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
  getStatusIconColor(element: RequestModel) {
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

}
