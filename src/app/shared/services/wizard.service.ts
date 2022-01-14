import { BaseService } from 'app/shared/base/base.service';
import { Injectable } from '@angular/core';
import { RequestModel } from '../models/request.model';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from 'app/shared/constants/api.constants';

@Injectable()
export class WizardService
{

  constructor(private _http: HttpClient) {
  }

  completeStep(data: Object, step: number, module: string) {
    return this._http.post(`${BASE_URL}/api/wizard/${module}/complete/${step}`, { 'request': data });
  }

}
