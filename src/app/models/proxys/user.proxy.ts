import { BaseProxy } from './base/base.proxy';

export interface UserProxy extends BaseProxy {
  name: string;
  email: string;
  roles: string;
}
