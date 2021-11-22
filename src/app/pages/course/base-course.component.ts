//#region Imports

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { DialogLoadingService } from '../../components/dialog-loading/dialog.loading.service';

//#endregion

/**
 * A classe base para a criação e atualização de uma entidade
 */
export class BaseCourseComponent {

  //#region Constructor

  constructor(
    protected formBuilder: FormBuilder,
    protected route: ActivatedRoute,
    protected router: Router,
    protected loading: DialogLoadingService,
  ) {
    this.isUpdate = route.snapshot.paramMap.has('entityId');
    this.entityId = +route.snapshot.paramMap.get('entityId') || 0;

    this.goBackUrl = '/dashboard/course';

    this.formGroup = formBuilder.group({
      name: ['', Validators.required],
    });
  }

  //#endregion

  //#region Public Properties

  /**
   * Diz se está atualizando
   */
  public isUpdate: boolean;

  /**
   * O formulário para a criação de um produto
   */
  public formGroup: FormGroup;

  /**
   * O url para voltar para a página anterior
   */
  public goBackUrl: string;

  /**
   * A identificação do imagem
   */
  public entityId: number;

  //#endregion

}
