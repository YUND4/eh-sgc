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
import { RequestCreateSGCComponent } from './request-create-sgc.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { FormsModule } from '@angular/forms';
import { RequestService } from 'app/shared/services/request.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseInterceptor } from 'app/shared/base/base.interceptor';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { UserService } from 'app/shared/services/users.service';
import { SelectableService } from 'app/shared/services/selectable.service';
import { QuillModule } from 'ngx-quill';
import { MatDialogModule } from '@angular/material/dialog';

export const routes: Route[] = [
    {
        path     : '',
        component: RequestCreateSGCComponent
    }
];

@NgModule({
    declarations: [
        RequestCreateSGCComponent
    ],
    imports     : [
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
        NgxMatSelectSearchModule,
        MatAutocompleteModule,
        QuillModule.forRoot({
          modules: {
            syntax: true,
            toolbar: [
              ['bold', 'italic', 'underline'],
              [{align: []}, {list: 'ordered'}, {list: 'bullet'}],
              ['clean']
            ]
          }
        }),
        MatDialogModule
    ],
    providers: [
      RequestService,
      UserService,
      SelectableService,
      { provide: HTTP_INTERCEPTORS, useClass: BaseInterceptor, multi: true }
    ]
})
export class RequestCreateSGCModule
{
}
