import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { UserService } from 'src/app/user/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryList: any;
  userdata: any;
  user: any;
  text: string;

  constructor(
    private categoryservice: CategoryService,
    private userservice: UserService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.listCategories();
  }

  listCategories() {
    this.userservice.findAllUser().subscribe((userdata) => {
      this.userdata = userdata;

      this.categoryservice.findAllCategory().subscribe((res: any) => {
        res.forEach(element => {
          this.user = this.userdata.find((o: any) => o.id === element.user_id);
          element.user_name = this.user?.name;
        });
        this.categoryList = res;
      });
    });
  }

  deleteCategory(categoryId) {
    this.categoryservice.deleteCategory(categoryId).subscribe((res: any) => {
      this.listCategories();
      this.toastr.success('Category deleted successfully');
    });
  }
}
