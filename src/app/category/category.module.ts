import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategoryListComponent} from './category-list.component';
import {CategoryEditComponent} from './category-edit.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import {CategoryData} from './category-data';

@NgModule({
  declarations: [
    CategoryListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(CategoryData),
    RouterModule.forChild([
      { path: 'categories', component: CategoryListComponent },
      { path: 'categories/:id/edit', component: CategoryEditComponent }
    ])
  ]
})
export class CategoryModule { }
