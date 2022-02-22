import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from 'app/shared/constants/api.constants';
import { TrackingModel } from '../models/tracking.model';

@Injectable()
export class TrackingService
{

  constructor(private _http: HttpClient) {
  }

  getTrackings(id: number) {
    return this._http.get<any>(`${BASE_URL}/api/tracking?upgrade_plan_id=${id}`);
  }

  createTracking(data: any) {
    return this._http.post<any>(`${BASE_URL}/api/tracking/create`, { tracking: data });
  }

}
