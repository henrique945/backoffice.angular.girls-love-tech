//#region Imports

import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { DialogLoadingService } from '../../components/dialog-loading/dialog.loading.service';
import { LessonProxy } from '../../models/proxys/lesson.proxy';
import { UserProxy } from '../../models/proxys/user.proxy';
import { HttpAsyncService } from '../../services/http-async/http-async.service';
import { getCrudErrors } from '../../utils/functions';
import { JqueryHelper } from '../../utils/jquery';
import { BaseLessonComponent } from './base-lesson.component';

//#endregion

@Component({
  selector: 'app-update-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss'],
})
/**
 * A classe que representa a página para atualizar as informações de uma entidade
 */
export class UpdateLessonComponent extends BaseLessonComponent implements OnInit {

  //#region Constructor

  constructor(
    formBuilder: FormBuilder,
    route: ActivatedRoute,
    router: Router,
    loading: DialogLoadingService,
    http: HttpAsyncService,
  ) {
    super(formBuilder, route, router, loading, http);
  }

  //#endregion

  //#region Public Properties

  /**
   * A referência da entidade
   */
  public entityRef: LessonProxy;

  //#endregion

  //#region LifeCycle Events

  /**
   * Método que é executado ao iniciar o componente
   */
  public async ngOnInit(): Promise<void> {
    await super.ngOnInit();

    this.loading.open();

    if (!this.isUpdate)
      return void await this.router.navigateByUrl('/dashboard/lesson');

    const { error, success } = await this.http.get<LessonProxy>(`/lesson/${ this.entityId }`);

    if (error)
      return JqueryHelper.error(getCrudErrors(error)[0]);

    this.entityRef = success;

    this.formGroup.controls.name.setValue(this.entityRef.name);
    this.formGroup.controls.order.setValue(this.entityRef.order);
    this.formGroup.controls.videoUrl.setValue(this.entityRef.videoUrl);
    this.formGroup.controls.courseId.setValue(this.entityRef.courseId);

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
    const { error: errorWithImage } = await this.http.put<UserProxy>(`/lesson/${ this.entityRef.id }`, payload);

    this.loading.close();

    if (errorWithImage)
      return JqueryHelper.error(getCrudErrors(errorWithImage)[0]);

    JqueryHelper.success('Aula atualizada com sucesso!');

    await this.router.navigateByUrl(this.goBackUrl);
  }

  //#endregion

}
