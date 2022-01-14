import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from 'app/shared/constants/api.constants';
import { TrackingModel } from '../models/tracking.model';

@Injectable()
export class TrackingService
{

  constructor(private _http: HttpClient) {
  }

  getTrackings() {
    return this._http.get<TrackingModel[]>(`${BASE_URL}/api/tracking/`);
  }

  createTracking(data: TrackingModel) {
    return this._http.post<TrackingModel>(`${BASE_URL}/api/tracking/create`, { 'request': data });
  }

}
