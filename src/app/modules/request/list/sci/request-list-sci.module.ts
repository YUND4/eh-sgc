import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestListSCIComponent } from './request-list-sci.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Route, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

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
  ]
})
export class RequestListSCIModule { }
