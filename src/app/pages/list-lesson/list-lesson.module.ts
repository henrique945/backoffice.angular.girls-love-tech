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
import { CreateLessonComponent } from '../lesson/create-lesson.component';
import { UpdateLessonComponent } from '../lesson/update-lesson.component';
import { ListLessonComponent } from './list-lesson.component';

const routes: Routes = [
  { path: '', component: ListLessonComponent },
  { path: 'create', component: CreateLessonComponent },
  { path: ':entityId', component: UpdateLessonComponent },
];

@NgModule({
  declarations: [
    ListLessonComponent,
    CreateLessonComponent,
    UpdateLessonComponent,
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
export class ListLessonModule {}
