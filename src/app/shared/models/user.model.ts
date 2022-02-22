import { BaseModel } from "../base/base.model";

export class UserModel extends BaseModel {
  id: number;
  name: string;
  email: string;
  roles: string;
}
