import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { CategoryContentComponent } from './category-content/category-content.component';
import { AddComponent } from './category/add/add.component';
import { CategoryContentAddComponent } from './category-content/category-content-add/category-content-add.component';

const routes: Routes = [
  {path: 'category', component: CategoryComponent},
  {path: 'category/add', component: AddComponent},
  {path: 'category/edit/:id', component: AddComponent},
  {path: 'category-content', component: CategoryContentComponent},
  {path: 'category-content/add', component: CategoryContentAddComponent},
  {path: 'category-content/edit/:id', component: CategoryContentAddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
