import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  data: any;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  };

  constructor(private http: HttpClient) { }

  getUserData(){
    return this.http.get(`${environment.serviceUrl}user/all`,this.httpOptions);
  }

  deleteUser(data) {
    return this.http.delete(`${environment.serviceUrl}user/delete/${data}`,this.httpOptions);
  }
}
