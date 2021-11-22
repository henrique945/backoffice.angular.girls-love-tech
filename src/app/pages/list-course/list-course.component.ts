//#region Imports

import { Component } from '@angular/core';

import { DialogLoadingService } from '../../components/dialog-loading/dialog.loading.service';
import { DialogYesnoService } from '../../components/dialog-yesno/dialog.yesno.service';
import { CourseProxy } from '../../models/proxys/course.proxy';
import { HttpAsyncService } from '../../services/http-async/http-async.service';
import { PaginationHttpShared } from '../../shared/pagination/pagination.http.shared';

//#endregion

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.scss'],
})

/**
 * A classe que representa a página de listagem de uma entidade
 */
export class ListCourseComponent extends PaginationHttpShared<CourseProxy> {

  //#region Constructor

  constructor(
    http: HttpAsyncService,
    loading: DialogLoadingService,
    dialogYesNo: DialogYesnoService,
  ) {
    super(loading, dialogYesNo, http, '/course',
      ['name', 'actions'],
      ['name', 'password', 'createdAt', 'isActive'],
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
