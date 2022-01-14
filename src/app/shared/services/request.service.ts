import { BaseService } from 'app/shared/base/base.service';
import { Injectable } from '@angular/core';
import { RequestModel } from '../models/request.model';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from 'app/shared/constants/api.constants';

@Injectable()
export class RequestService
{

  constructor(private _http: HttpClient) {
  }

  getRequests() {
    return this._http.get<RequestModel[]>(`${BASE_URL}/api/request/`);
  }

  createRequest(data: RequestModel) {
    return this._http.post<RequestModel>(`${BASE_URL}/api/request/create`, { 'request': data });
  }

}
