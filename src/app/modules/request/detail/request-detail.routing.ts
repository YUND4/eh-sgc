import { Route } from '@angular/router';
import { RequestDetailComponent } from './request-detail.component';
import { RequestDetailResolver } from './request-detail.resolvers';

export const requestDetailRoutes: Route[] = [
    {
        path     : '',
        component: RequestDetailComponent,
        resolve  : {
            activities: RequestDetailResolver
        }
    }
];
