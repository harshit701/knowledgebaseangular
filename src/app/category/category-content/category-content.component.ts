import { Component, OnInit } from '@angular/core';
import { CategorycontentService } from './categorycontent.service';
import { CategoryService } from '../category.service';
import { ToastrService } from 'ngx-toastr';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-category-content',
  templateUrl: './category-content.component.html',
  styleUrls: ['./category-content.component.css']
})
export class CategoryContentComponent implements OnInit {
  contentList: any;
  categories: any;
  category: any;
  text: string;

  constructor(
    private categoryconservice: CategorycontentService,
    private categoryservice: CategoryService,
    private toastr: ToastrService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.listCategoryContentList();
  }

  listCategoryContentList() {
    this.categoryservice.findAllCategory().subscribe((categoryList: any) => {
      this.categories = categoryList;
      this.categoryconservice.findAllCategoryContents().subscribe((res: any) => {
        res.forEach(element => {
          this.category = this.categories.find((o: any) => o.id === element.category_id);
          element.category_name = this.category?.name;
        });
        this.contentList = res;
      });
    });
  }

  deleteCategoryContent(id) {
    this.categoryconservice.deleteCategoryContents(id).subscribe((res: any) => {
      this.listCategoryContentList();
      this.toastr.success('Category Content deleted successfully');
    });
  }

  //Call this method in the image source, it will sanitize it.
  transform(base64string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(base64string);
  }

}
