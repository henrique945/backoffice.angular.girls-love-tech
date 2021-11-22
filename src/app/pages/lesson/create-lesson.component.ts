//#region Imports

import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserProxy } from 'app/models/proxys/user.proxy';

import { DialogLoadingService } from '../../components/dialog-loading/dialog.loading.service';
import { LessonProxy } from '../../models/proxys/lesson.proxy';
import { HttpAsyncService } from '../../services/http-async/http-async.service';
import { getCrudErrors } from '../../utils/functions';
import { JqueryHelper } from '../../utils/jquery';
import { BaseLessonComponent } from './base-lesson.component';

//#endregion

@Component({
  selector: 'app-create-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss'],
})
/**
 * A classe que representa a página irá criar uma entidade
 */
export class CreateLessonComponent extends BaseLessonComponent {

  //#region Constructor

  constructor(
    formBuilder: FormBuilder,
    params: ActivatedRoute,
    router: Router,
    loading: DialogLoadingService,
    http: HttpAsyncService,
  ) {
    super(formBuilder, params, router, loading, http);
  }

  //#endregion

  //#region Public Methods

  /**
   * Método que é chamado ao tentar cadastrar um produto
   */
  public async onSubmit(): Promise<void> {
    this.loading.open();

    const payload = this.formGroup.getRawValue();

    const { error: errorWithImage } = await this.http.post<LessonProxy>('/lesson', payload);

    this.loading.close();

    if (errorWithImage)
      return JqueryHelper.error(getCrudErrors(errorWithImage)[0]);

    JqueryHelper.success('Aula criada com sucesso!');

    await this.router.navigateByUrl(this.goBackUrl);
  }

  //#endregion
}
