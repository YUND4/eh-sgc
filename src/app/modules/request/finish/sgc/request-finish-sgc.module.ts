import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { SharedModule } from 'app/shared/shared.module';
import { RequestFinishSGCComponent } from './request-finish-sgc.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FuseCardModule } from '@fuse/components/card';
import { FuseScrollbarModule } from '@fuse/directives/scrollbar';
import { AuthService } from 'app/core/auth/auth.service';
import { BaseInterceptor } from 'app/shared/base/base.interceptor';
import { RequestService } from 'app/shared/services/request.service';
import { SelectableService } from 'app/shared/services/selectable.service';
import { WizardService } from 'app/shared/services/wizard.service';
import { QuillModule } from 'ngx-quill';
import * as core from '../../../../core/user/user.service';
import * as service from '../../../../shared/services/users.service';


export const routes: Route[] = [
    {
        path     : '',
        component: RequestFinishSGCComponent
    }
];

@NgModule({
    declarations: [
      RequestFinishSGCComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        MatStepperModule,
        SharedModule,
        MatTabsModule,
        MaterialFileInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSnackBarModule,
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
        FuseCardModule,
        FuseScrollbarModule,
        MatTooltipModule
    ],
    providers: [
      core.UserService,
      service.UserService,
      AuthService,
      WizardService,
      SelectableService,
      RequestService,
      { provide: HTTP_INTERCEPTORS, useClass: BaseInterceptor, multi: true }
    ]
})
export class RequestFinishSGCModule
{
}
