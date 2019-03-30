import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  baseUrl = "http://localhost:8000/api/";
  token: any;

  constructor(private http: HttpClient) { }

  postData(url, data) {
    const httpOptions = {
      headers: new HttpHeaders ({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer '+this.token
      })
    };
    return this.http.post(this.baseUrl+url+'/', data, httpOptions);
  }

  getToken(token) {
    this.token = token;
  }

  sendToken() {
    return this.token;
  }
}
