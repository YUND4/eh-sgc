import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestListSCIComponent } from './request-list-sci.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Route, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { RequestService } from 'app/shared/services/request.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseInterceptor } from 'app/shared/base/base.interceptor';

export const routes: Route[] = [
  {
      path     : '',
      component: RequestListSCIComponent
  }
];

@NgModule({
  declarations: [
    RequestListSCIComponent,
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
    FormsModule
  ],
  providers: [
    RequestService,
    { provide: HTTP_INTERCEPTORS, useClass: BaseInterceptor, multi: true }
  ],
})
export class RequestListSCIModule { }
