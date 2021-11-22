export interface ProjectPayload {
  /**
   * O id do projeto
   */
  id: number;

  /**
   * Diz se o projeto foi cancelado
   */
  isRefused: boolean;

  /**
   * Mensagem de texto do porque o projeto foi cancelado
   */
  whyRefused: string;

  /**
   * Se está ativo
   */
  isActive: boolean;
}
