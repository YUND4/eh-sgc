import { BaseService } from 'app/shared/base/base.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from 'app/shared/constants/api.constants';
import { SelectableModel } from '../models/selectable.model';
import { TagModel } from '../models/tag.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class SelectableService
{
  constructor(private _http: HttpClient) {}


  removeSelectable(code: string, selectable: string) {
    return this._http.delete(`${BASE_URL}/api/selectable/${selectable}/delete/${code}`);
  }

  getSelectable( selectable: string, search: string = '' ) {
    return this._http.get(`${BASE_URL}/api/selectable/${selectable}?search=${search}`);
  }

  createUpdateSelectable(data: any, selectable: string) {
    return this._http.post(`${BASE_URL}/api/selectable/${selectable}/create`, { selectable: data });
  }

}
