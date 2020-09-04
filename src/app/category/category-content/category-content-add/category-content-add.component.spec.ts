import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryContentAddComponent } from './category-content-add.component';

describe('CategoryContentAddComponent', () => {
  let component: CategoryContentAddComponent;
  let fixture: ComponentFixture<CategoryContentAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryContentAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryContentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
