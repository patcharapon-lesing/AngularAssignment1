import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  reportDetail = new Array();
  reportName = new Array();

  private baseUrl = 'http://localhost:8072/api/'
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Methods": "GET, POST, DELETE, PUT",
      "Access-Control-Allow-Origin": "*"
    })
  };
  constructor(private http: HttpClient) { }

  insertDate(data: any) {
    const urlApi = 'test/getthework/insert';
    return this.http.post(this.baseUrl + urlApi, data);
  }
  searchDate(data: any) {
    const urlApi = 'test/gettheworks';
    this.reportName = data;
    return this.http.post(this.baseUrl + urlApi, data);
  }

}
