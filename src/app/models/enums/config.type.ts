/**
 * O enum que representa os tipos de configurações que a API atualmente possui
 */
export enum ConfigType {

  /**
   * A configuração que guarda as informações de e-mail de quem irá enviar o e-mail
   */
  ALERT_EMAIL_TRANSPORT = 'ALERT_EMAIL_TRANSPORT_KEY',

  /**
   * A configuração que guarda a informação do nome do e-mail de quem está enviando
   */
  ALERT_EMAIL_FROM = 'ALERT_EMAIL_FROM_KEY',

  //#region Contacts

  /**
   * O template de e-mail enviado para quem colocar seu e-mail em ALERT_CONTACT_EMAILS
   */
  ALERT_CONTACT_TEMPLATE_EMAIL = 'ALERT_CONTACT_TEMPLATE_EMAIL_KEY',

  /**
   * Os e-mails para quem deve ser avisado quando for criado um novo contato
   */
  ALERT_CONTACT_TO_EMAILS = 'ALERT_CONTACT_EMAILS_KEY',

  //#endregion

  //#region Budgets

  /**
   * O template de e-mail enviado para quem colocar seu e-mail em ALERT_BUDGET_TO_EMAILS
   */
  ALERT_BUDGET_TEMPLATE_EMAIL = 'ALERT_BUDGET_TEMPLATE_EMAIL_KEY',

  /**
   * Os e-mails para quem deve ser avisado quando for criado um novo orçamento
   */
  ALERT_BUDGET_TO_EMAILS = 'ALERT_BUDGET_TO_EMAILS_KEY',

  //#endregion

  //#region Begin

  /**
   * O objeto que contém as configurações da página de início
   */
  BEGIN_CONFIG = 'BEGIN_CONFIG_KEY',

  //#endregion

}
