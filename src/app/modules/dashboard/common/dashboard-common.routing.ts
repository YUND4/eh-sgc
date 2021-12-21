import { Route } from '@angular/router';
import { DashboardCommonComponent } from './dashboard-common.component';
import { DashboardCommonResolver } from './dashboard-common.resolvers';

export const projectRoutes: Route[] = [
    {
        path     : '',
        component: DashboardCommonComponent,
        resolve  : {
            data: DashboardCommonResolver
        }
    }
];
