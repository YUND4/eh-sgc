import { BaseService } from 'app/shared/base/base.service';
import { Injectable } from '@angular/core';
import { RequestModel } from '../models/request.model';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from 'app/shared/constants/api.constants';
import { DEF, INM } from '../constants/upgrade-plan-types.constants';

@Injectable()
export class WizardService
{

  constructor(private _http: HttpClient) {
  }

  completeStep(data: Object, step: number, module: string) {
    return this._http.post(`${BASE_URL}/api/wizard/${module}/complete/${step}`, data);
  }

  retriveStep(step: number, module: string, trackingId: number) {
    if ([2, 4].includes(step)) {
      return this._http.get(`${BASE_URL}/api/wizard/${module}/retrive/${step}?tracking_id=${trackingId}&upgrade_plan_type_code=${ step == 2 ? INM : DEF}`);
    }
    return this._http.get(`${BASE_URL}/api/wizard/${module}/retrive/${step}?tracking_id=${trackingId}`);
  }

}
