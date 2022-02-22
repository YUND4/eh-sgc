import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { SharedModule } from 'app/shared/shared.module';
import { RequestTraceSGCComponent } from './request-trace-sgc.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { WizardService } from '../../../../shared/services/wizard.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseInterceptor } from 'app/shared/base/base.interceptor';
import { AuthService } from '../../../../core/auth/auth.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import * as core from '../../../../core/user/user.service';
import * as service from '../../../../shared/services/users.service';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SelectableService } from '../../../../shared/services/selectable.service';
import { QuillModule } from 'ngx-quill';
import { FuseCardModule } from '../../../../../@fuse/components/card/card.module';
import { FuseScrollbarModule } from '../../../../../@fuse/directives/scrollbar/scrollbar.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TrackingService } from '../../../../shared/services/tracking.service';


export const routes: Route[] = [
    {
        path     : '',
        component: RequestTraceSGCComponent
    }
];

@NgModule({
    declarations: [
      RequestTraceSGCComponent,
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
        MatTooltipModule,
        MatProgressBarModule
    ],
    providers: [
      TrackingService,
      WizardService,
      { provide: HTTP_INTERCEPTORS, useClass: BaseInterceptor, multi: true }
    ]
})
export class RequestTraceSGCModule
{
}
