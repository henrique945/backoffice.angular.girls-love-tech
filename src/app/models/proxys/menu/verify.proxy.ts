/***
 * A classe que representa o proxy que diz se uma rota canonica existe
 */
export class VerifyProxy {

  //#region Constructors

  /**
   * Construtor padrão
   */
  constructor(
    exists: boolean,
  ) {
    this.exists = exists;
  }

  //#endregion

  //#region Public Properties

  /**
   * Diz se a rota canônica existe
   */
  public exists: boolean;

  //#endregion

}
