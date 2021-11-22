import { Routes } from '@angular/router';

export const AdminLayoutRoutes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'user', loadChildren: '../../pages/list-user/list-user.module#ListUserModule' },
  { path: 'course', loadChildren: '../../pages/list-course/list-course.module#ListCourseModule' },
  { path: 'lesson', loadChildren: '../../pages/list-lesson/list-lesson.module#ListLessonModule' },
];
