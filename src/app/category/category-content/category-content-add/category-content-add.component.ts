import { Component, OnInit } from '@angular/core';
import { CategoryContent } from '../category-content';
import { CategoryService } from '../../category.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategorycontentService } from '../categorycontent.service';

@Component({
  selector: 'app-category-content-add',
  templateUrl: './category-content-add.component.html',
  styleUrls: ['./category-content-add.component.css']
})
export class CategoryContentAddComponent implements OnInit {
  categorycontent = new CategoryContent();
  id: any;
  catetoryData: any;
  url: string | ArrayBuffer;

  constructor(
    private categoryservice: CategoryService,
    private categorycontentservice: CategorycontentService,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if(this.id) {
      this.categoryservice.findAllCategory().subscribe((categoryList: any) => {
        this.catetoryData = categoryList;
      });

      this.categorycontentservice.getCategoryContentsById(this.id).subscribe((res: any) => {
        this.url = res.file.metadata;
        this.categorycontent = res;
      });
    } else {
      this.categoryservice.findAllCategory().subscribe((categoryList: any) => {
        this.catetoryData = categoryList;
      });
    }
  }

  OnSubmit(){
    if (this.id) {
      this.categorycontentservice.updateCategoryContents(this.id, this.categorycontent).subscribe((res) => {
        this.router.navigate(['category-content']);
        this.toastr.success('Category updated successfully');
      });
    } else {
      this.categorycontentservice.addCategoryContents(this.categorycontent).subscribe((res) => {
        this.router.navigate(['category-content']);
        this.toastr.success('Category created successfully');
      });
    }
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      const fileData = event.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
        this.categorycontent.file = {
          metadata: this.url,
          filename: fileData.name,
          filesize: fileData.size,
          filetype: fileData.type
        };
      }
    }
  }

}
