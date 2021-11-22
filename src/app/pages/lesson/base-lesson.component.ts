//#region Imports

import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { DialogLoadingService } from '../../components/dialog-loading/dialog.loading.service';
import { CourseProxy } from '../../models/proxys/course.proxy';
import { HttpAsyncService } from '../../services/http-async/http-async.service';

//#endregion

/**
 * A classe base para a criação e atualização de uma entidade
 */
export class BaseLessonComponent implements OnInit {

  //#region Constructor

  constructor(
    protected formBuilder: FormBuilder,
    protected route: ActivatedRoute,
    protected router: Router,
    protected loading: DialogLoadingService,
    protected http: HttpAsyncService,
  ) {
    this.isUpdate = route.snapshot.paramMap.has('entityId');
    this.entityId = +route.snapshot.paramMap.get('entityId') || 0;

    this.goBackUrl = '/dashboard/lesson';

    this.formGroup = formBuilder.group({
      name: ['', Validators.required],
      videoUrl: ['', Validators.required],
      order: [''],
      courseId: [, Validators.required],
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

  /**
   * A lista de cursos
   */
  public listCourses: CourseProxy[] = [];

  //#endregion

  //#region Functions

  public async ngOnInit(): Promise<void> {
    const { success } = await this.http.get<{ data: CourseProxy[] }>('/course?sort=name,ASC');

    this.listCourses = success.data;
  }

  //#endregion

}
