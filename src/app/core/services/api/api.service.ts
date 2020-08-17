import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http$: HttpClient) {}

  get(url, params: HttpParams = new HttpParams()) {
    return this.http$.get(`${url}`, { params });
  }
  post(url, data, params: HttpParams = new HttpParams()) {
    return this.http$.post(`${url}`, data, { params });
  }
  update(url, params: HttpParams = new HttpParams()) {
    return this.http$.put(`${url}`, { params });
  }
  delete(url, params: HttpParams = new HttpParams()) {
    return this.http$.request('DELETE', `${url}`, {
      body: params,
    });
  }
  put(url, data) {
    return this.http$.put(url, data);
  }
}
