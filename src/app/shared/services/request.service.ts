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

  getRequests({ page = 1, per_page = 10 }: { page?: number; per_page?: number; }) {
    return this._http.get(`${BASE_URL}/api/request?page=${page}&per_page=${per_page}`);
  }

  createRequest(data: RequestModel | FormData) {
    return this._http.post(`${BASE_URL}/api/request/create`, { 'request': data });
  }

}
