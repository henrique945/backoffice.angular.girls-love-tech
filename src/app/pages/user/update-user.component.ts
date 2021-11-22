//#region Imports

import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { DialogLoadingService } from '../../components/dialog-loading/dialog.loading.service';
import { UserProxy } from '../../models/proxys/user.proxy';
import { HttpAsyncService } from '../../services/http-async/http-async.service';
import { getCrudErrors } from '../../utils/functions';
import { JqueryHelper } from '../../utils/jquery';

import { BaseUserComponent } from './base-user.component';

//#endregion

@Component({
  selector: 'app-update-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
/**
 * A classe que representa a página para atualizar as informações de uma entidade
 */
export class UpdateUserComponent extends BaseUserComponent implements OnInit {

  //#region Constructor

  constructor(
    formBuilder: FormBuilder,
    route: ActivatedRoute,
    router: Router,
    loading: DialogLoadingService,
    protected http: HttpAsyncService,
  ) {
    super(formBuilder, route, router, loading);
  }

  //#endregion

  //#region Public Properties

  /**
   * A referência da entidade
   */
  public entityRef: UserProxy;

  //#endregion

  //#region LifeCycle Events

  /**
   * Método que é executado ao iniciar o componente
   */
  public async ngOnInit(): Promise<void | boolean> {
    this.loading.open();

    if (!this.isUpdate)
      return await this.router.navigateByUrl('/dashboard/user');

    const { error, success } = await this.http.get<UserProxy>(`/user/${ this.entityId }`);

    if (error)
      return JqueryHelper.error(getCrudErrors(error)[0]);

    this.entityRef = success;

    this.formGroup.controls.name.setValue(this.entityRef.name);
    this.formGroup.controls.email.setValue(this.entityRef.email);
    this.formGroup.controls.roles.setValue(this.entityRef.roles);

    this.loading.close();
  }

  //#endregion

  //#region Public Methods

  /**
   * Método chamado ao atualizar um produto
   */
  public async onSubmit(): Promise<void> {
    this.loading.open();

    const payload = this.formGroup.getRawValue();
    const { error: errorWithImage } = await this.http.put<UserProxy>(`/user/${ this.entityRef.id }`, payload);

    this.loading.close();

    if (errorWithImage)
      return JqueryHelper.error(getCrudErrors(errorWithImage)[0]);

    JqueryHelper.success('Entidade atualizada com sucesso!');

    await this.router.navigateByUrl(this.goBackUrl);
  }

  //#endregion

}
