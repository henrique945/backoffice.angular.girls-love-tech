//#region Imports

import { BaseEntity } from '../base/base-entity';

//#endregion

/**
 * A classe que representa a entidade que lida com os usuários
 */
export class UserEntity extends BaseEntity {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor(partial: Partial<UserEntity>) {
    super();

    Object.assign(this, partial);
  }

  //#endregion

  //#region Public Properties

  /**
   * O e-mail do usuário
   */
  public email: string;

  /**
   * A senha do usuário
   */
  public password: string;

  /**
   * As permissões desse usuário
   */
  public roles: string;

  //#endregion

}
