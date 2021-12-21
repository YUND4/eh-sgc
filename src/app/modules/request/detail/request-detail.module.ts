import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'app/shared/shared.module';
import { RequestDetailComponent } from './request-detail.component';
import { requestDetailRoutes } from './request-detail.routing';

@NgModule({
    declarations: [
      RequestDetailComponent
    ],
    imports     : [
        RouterModule.forChild(requestDetailRoutes),
        MatIconModule,
        SharedModule
    ]
})
export class RequestDetailModule
{
}
