import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FuseAlertModule } from '@fuse/components/alert';
import { SharedModule } from 'app/shared/shared.module';
import { SettingsComponent } from 'app/modules/settings/settings.component';
import { SettingsSelectableComponent } from 'app/modules/settings/selectable/selectable.component';
import { SettingsSecurityComponent } from 'app/modules/settings/security/security.component';
import { settingsRoutes } from 'app/modules/settings/settings.routing';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FuseFindByKeyPipeModule } from '@fuse/pipes/find-by-key';
import { SelectableService } from '../../shared/services/selectable.service';
import { SelectableCreateComponent } from './selectable/create/create.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    declarations: [
        SettingsComponent,
        SettingsSelectableComponent,
        SettingsSecurityComponent,
        SelectableCreateComponent
    ],
    imports     : [
        RouterModule.forChild(settingsRoutes),
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        MatSidenavModule,
        MatSlideToggleModule,
        FuseAlertModule,
        SharedModule,
        DragDropModule,
        MatAutocompleteModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatDividerModule,
        MatMenuModule,
        MatMomentDateModule,
        MatProgressBarModule,
        MatRippleModule,
        MatTooltipModule,
        FuseFindByKeyPipeModule,
        MatDialogModule
    ],
    providers: [
      SelectableService
    ]
})
export class SettingsModule
{
}
