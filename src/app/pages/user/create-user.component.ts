//#region Imports

import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserProxy } from 'app/models/proxys/user.proxy';

import { DialogLoadingService } from '../../components/dialog-loading/dialog.loading.service';
import { HttpAsyncService } from '../../services/http-async/http-async.service';
import { getCrudErrors } from '../../utils/functions';
import { JqueryHelper } from '../../utils/jquery';

import { BaseUserComponent } from './base-user.component';

//#endregion

@Component({
  selector: 'app-create-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
/**
 * A classe que representa a página irá criar uma entidade
 */
export class CreateUserComponent extends BaseUserComponent {

  //#region Constructor

  constructor(
    formBuilder: FormBuilder,
    params: ActivatedRoute,
    router: Router,
    loading: DialogLoadingService,
    protected http: HttpAsyncService,
  ) {
    super(formBuilder, params, router, loading);
  }

  //#endregion

  //#region Public Methods

  /**
   * Método que é chamado ao tentar cadastrar um produto
   */
  public async onSubmit(): Promise<void> {
    this.loading.open();

    const payload = this.formGroup.getRawValue();

    const { error: errorWithImage } = await this.http.post<UserProxy>('/user', payload);

    this.loading.close();

    if (errorWithImage)
      return JqueryHelper.error(getCrudErrors(errorWithImage)[0]);

    JqueryHelper.success('Usuário criado com sucesso!');

    await this.router.navigateByUrl(this.goBackUrl);
  }

  //#endregion
}
