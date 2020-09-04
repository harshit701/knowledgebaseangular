import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.service';
import { Category } from '../category';
import { CategoryService } from '../../category.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  userData: any;
  category = new Category();
  id: any;

  constructor(
    private userservice: UserService,
    private categoryservice: CategoryService,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if(this.id) {
      this.userservice.findAllUser().subscribe((userList: any) => {
        this.userData = userList;
      });

      this.categoryservice.getCategoryById(this.id).subscribe((res: any) => {
        this.category = res;
      });
    } else {
      this.userservice.findAllUser().subscribe((userList: any) => {
        this.userData = userList;
      });
    }
  }

  OnSubmit(){
    if (this.id) {
      this.categoryservice.updateCategory(this.id, this.category).subscribe((res) => {
        this.router.navigate(['category']);
        this.toastr.success('Category updated successfully');
      });
    } else {
      this.categoryservice.addCategory(this.category).subscribe((res) => {
        this.router.navigate(['category']);
        this.toastr.success('Category created successfully');
      });
    }
  }
}
