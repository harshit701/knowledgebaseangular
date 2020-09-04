import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl: string = 'http://localhost:3000/api/categories';
  constructor(
    private http: HttpClient
  ) { }

    addCategory(data) {
      return this.http.post(`${this.apiUrl}/`, data);
    }

    findAllCategory() {
      return this.http.get(`${this.apiUrl}/`);
    }

    deleteCategory(id) {
      return this.http.delete(`${this.apiUrl}/${id}`);
    }

    getCategoryById(id) {
      return this.http.get(`${this.apiUrl}/${id}`);
    }

    updateCategory(id, data) {
      return this.http.put(`${this.apiUrl}/${id}`, data);
    }
}
