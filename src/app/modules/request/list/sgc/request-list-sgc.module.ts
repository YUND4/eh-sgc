import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestListSGCComponent } from './request-list-sgc.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Route, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RequestService } from 'app/shared/services/request.service';
import { BaseInterceptor } from 'app/shared/base/base.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TrackingModule } from 'app/modules/tracking/tracking.module';
import { UserService } from '../../../../core/user/user.service';
import { MatSelectModule } from '@angular/material/select';

export const routes: Route[] = [
  {
      path     : '',
      component: RequestListSGCComponent
  }
];

@NgModule({
  declarations: [
    RequestListSGCComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    TrackingModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
  providers: [
    UserService,
    RequestService,
    { provide: HTTP_INTERCEPTORS, useClass: BaseInterceptor, multi: true }
  ],
})
export class RequestListSGCModule { }
