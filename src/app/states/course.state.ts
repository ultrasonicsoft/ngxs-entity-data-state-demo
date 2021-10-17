import { createEntityCollections } from '@angular-ru/cdk/entity';
import { StateRepository } from '@angular-ru/ngxs/decorators';
import { NgxsDataEntityCollectionsRepository } from '@angular-ru/ngxs/repositories';
import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';
import { Course } from '../models/course.model';

export interface CoursesEntityCollections {
  ids: number[];
  entities: { [key: number]: Course };
}

@StateRepository()
@State({
    name: 'courses',
    defaults: createEntityCollections()
})
@Injectable()
export class CoursesEntitiesState extends NgxsDataEntityCollectionsRepository<Course> {}