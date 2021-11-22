//#region Imports

import { Component } from '@angular/core';
import { UserProxy } from 'app/models/proxys/user.proxy';

import { DialogLoadingService } from '../../components/dialog-loading/dialog.loading.service';
import { DialogYesnoService } from '../../components/dialog-yesno/dialog.yesno.service';
import { HttpAsyncService } from '../../services/http-async/http-async.service';
import { PaginationHttpShared } from '../../shared/pagination/pagination.http.shared';

//#endregion

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss'],
})

/**
 * A classe que representa a página de listagem de uma entidade
 */
export class ListUserComponent extends PaginationHttpShared<UserProxy> {

  //#region Constructor

  constructor(
    http: HttpAsyncService,
    loading: DialogLoadingService,
    dialogYesNo: DialogYesnoService,
  ) {
    super(loading, dialogYesNo, http, '/user',
      ['name', 'email', 'roles', 'actions'],
      ['name', 'email', 'roles', 'password', 'createdAt', 'isActive'],
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
