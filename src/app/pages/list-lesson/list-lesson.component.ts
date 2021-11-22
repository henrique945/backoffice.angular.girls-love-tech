//#region Imports

import { Component } from '@angular/core';

import { DialogLoadingService } from '../../components/dialog-loading/dialog.loading.service';
import { DialogYesnoService } from '../../components/dialog-yesno/dialog.yesno.service';
import { LessonProxy } from '../../models/proxys/lesson.proxy';
import { HttpAsyncService } from '../../services/http-async/http-async.service';
import { PaginationHttpShared } from '../../shared/pagination/pagination.http.shared';

//#endregion

@Component({
  selector: 'app-list-lesson',
  templateUrl: './list-lesson.component.html',
  styleUrls: ['./list-lesson.component.scss'],
})

/**
 * A classe que representa a página de listagem de uma entidade
 */
export class ListLessonComponent extends PaginationHttpShared<LessonProxy> {

  //#region Constructor

  constructor(
    http: HttpAsyncService,
    loading: DialogLoadingService,
    dialogYesNo: DialogYesnoService,
  ) {
    super(loading, dialogYesNo, http, '/lesson',
      ['name', 'videoUrl', 'actions'],
      ['name', 'videoUrl', 'order', 'courseId', 'createdAt', 'isActive'],
      search => ([
        { isActive: true },
        {
          $and: [
            { isActive: true },
            { name: { $contL: search } },
          ],
        },
      ]),
      { field: 'name', order: 'ASC' },
    );
  }

  //#endregion

}
