import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category/category.component';
import { CategoryContentComponent } from './category-content/category-content.component';
import { AddComponent } from './category/add/add.component';
import { CategoryContentAddComponent } from './category-content/category-content-add/category-content-add.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [CategoryComponent, CategoryContentComponent, AddComponent, CategoryContentAddComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class CategoryModule { }
