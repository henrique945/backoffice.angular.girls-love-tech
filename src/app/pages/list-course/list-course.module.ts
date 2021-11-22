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
import { CreateCourseComponent } from '../course/create-course.component';
import { UpdateCourseComponent } from '../course/update-course.component';
import { ListCourseComponent } from './list-course.component';

const routes: Routes = [
  { path: '', component: ListCourseComponent },
  { path: 'create', component: CreateCourseComponent },
  { path: ':entityId', component: UpdateCourseComponent },
];

@NgModule({
  declarations: [
    ListCourseComponent,
    CreateCourseComponent,
    UpdateCourseComponent,
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
export class ListCourseModule {}
