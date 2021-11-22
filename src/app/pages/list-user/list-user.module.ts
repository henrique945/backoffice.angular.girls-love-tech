import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';
import { CreateUserComponent } from '../user/create-user.component';
import { UpdateUserComponent } from '../user/update-user.component';

import { ListUserComponent } from './list-user.component';

const routes: Routes = [
  { path: '', component: ListUserComponent },
  { path: 'create', component: CreateUserComponent },
  { path: ':entityId', component: UpdateUserComponent },
];

@NgModule({
  declarations: [
    ListUserComponent,
    CreateUserComponent,
    UpdateUserComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    RouterModule,
    MatPaginatorModule,
    RouterModule.forChild(routes),
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatRadioModule,
    NgxMaskModule.forRoot(),
    FormsModule,
  ],
})
export class ListUserModule {}
