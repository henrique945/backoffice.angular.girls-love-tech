//#region Imports

import { UserEntity } from '../../entities/user.entity';

//#endregion

/**
 * A classe que representa o payload enviado para realizar login
 */
export class LoginPayload {

  /**
   * O e-mail do usuário
   */
  username: string;

  /**
   * A senha do usuário
   */
  password: string;

}
