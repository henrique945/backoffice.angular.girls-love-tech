//#region Imports

import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { DialogLoadingService } from '../../components/dialog-loading/dialog.loading.service';
import { CourseProxy } from '../../models/proxys/course.proxy';
import { UserProxy } from '../../models/proxys/user.proxy';
import { HttpAsyncService } from '../../services/http-async/http-async.service';
import { getCrudErrors } from '../../utils/functions';
import { JqueryHelper } from '../../utils/jquery';
import { BaseCourseComponent } from './base-course.component';

//#endregion

@Component({
  selector: 'app-update-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
/**
 * A classe que representa a página para atualizar as informações de uma entidade
 */
export class UpdateCourseComponent extends BaseCourseComponent implements OnInit {

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
  public entityRef: CourseProxy;

  //#endregion

  //#region LifeCycle Events

  /**
   * Método que é executado ao iniciar o componente
   */
  public async ngOnInit(): Promise<void | boolean> {
    this.loading.open();

    if (!this.isUpdate)
      return await this.router.navigateByUrl('/dashboard/course');

    const { error, success } = await this.http.get<CourseProxy>(`/course/${ this.entityId }`);

    if (error)
      return JqueryHelper.error(getCrudErrors(error)[0]);

    this.entityRef = success;

    this.formGroup.controls.name.setValue(this.entityRef.name);

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
    const { error: errorWithImage } = await this.http.put<CourseProxy>(`/course/${ this.entityRef.id }`, payload);

    this.loading.close();

    if (errorWithImage)
      return JqueryHelper.error(getCrudErrors(errorWithImage)[0]);

    JqueryHelper.success('Curso atualizado com sucesso!');

    await this.router.navigateByUrl(this.goBackUrl);
  }

  //#endregion

}
