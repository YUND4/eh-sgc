import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatSelectModule } from '@angular/material/select';
import { FuseHighlightModule } from '@fuse/components/highlight';
import { SharedModule } from 'app/shared/shared.module';
import { RequestCreateSCIComponent } from './request-create-sci.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BaseInterceptor } from 'app/shared/base/base.interceptor';
import { RequestService } from 'app/shared/services/request.service';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { UserService } from 'app/shared/services/users.service';

export const routes: Route[] = [
    {
        path     : '',
        component: RequestCreateSCIComponent
    }
];

@NgModule({
    declarations: [
        RequestCreateSCIComponent
    ],
    imports     : [
        HttpClientModule,
        RouterModule.forChild(routes),
        MatButtonModule,
        MatButtonToggleModule,
        MatChipsModule,
        MatDatepickerModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatMomentDateModule,
        MatSelectModule,
        MatCheckboxModule,
        MaterialFileInputModule,
        FuseHighlightModule,
        SharedModule,
        FormsModule,
        NgxMatSelectSearchModule
    ],
    providers: [
      RequestService,
      UserService,
      { provide: HTTP_INTERCEPTORS, useClass: BaseInterceptor, multi: true }
    ]
})
export class RequestCreateSCIModule
{
}
