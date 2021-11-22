//#region Imports

import { BaseProxy } from './base/base.proxy';

//#endregion

/**
 * A classe que representa as informações que são enviadas pela API sobre as consultas
 */
export interface ConsultProxy extends BaseProxy {

  /**
   * O nome da consulta
   */
  name: string;

  /**
   * Preço de estudante da consulta
   */
  studentPrice: number;

  /**
   * Preço normal da consulta
   */
  normalPrice: number;

  /**
   * Descrição do equipamento
   */
  description: string;

  /**
   * Imagem do equipamento
   */
  imageUrl: string;

  /**
   * Especifícação tecnicas da consulta
   */
  tech: string;

  /**
   * Configurações recomendadas da consulta
   */
  config: string;

  /**
   * Id do equipamento associado
   */
  equipmentId: number;
}
