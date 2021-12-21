import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DashboardCommonService } from './dashboard-common.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardCommonResolver implements Resolve<any>
{
  /**
   * Constructor
   */
  constructor(private _projectService: DashboardCommonService) {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Resolver
   *
   * @param route
   * @param state
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this._projectService.getData();
  }
}
