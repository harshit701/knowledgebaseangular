import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategorycontentService {
  apiUrl: string = 'http://localhost:3000/api/categoryContents';

  constructor(
    private http: HttpClient
  ) { }

  addCategoryContents(data) {
    return this.http.post(`${this.apiUrl}/`, data);
  }

  findAllCategoryContents() {
    return this.http.get(`${this.apiUrl}/`);
  }

  deleteCategoryContents(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getCategoryContentsById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  updateCategoryContents(id, data) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
}
