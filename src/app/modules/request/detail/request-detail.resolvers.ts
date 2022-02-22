import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RequestDetailService } from './request-detail.service';

@Injectable({
    providedIn: 'root'
})
export class RequestDetailResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _activityService: RequestDetailService)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolve
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>
    {
        return this._activityService.getActivities();
    }
}
