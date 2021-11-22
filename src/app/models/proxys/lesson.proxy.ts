import { BaseProxy } from './base/base.proxy';

export interface LessonProxy extends BaseProxy {
  name: string;
  order: number;
  videoUrl: string;
  courseId: number;
}
