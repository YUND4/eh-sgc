import { BaseService } from 'app/shared/base/base.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from 'app/shared/constants/api.constants';

@Injectable()
export class UserService
{
  constructor(private _http: HttpClient) {}


  getUsers(search: string = '') {
    return this._http.get(`${BASE_URL}/api/user?search=${search}`);
  }

}
