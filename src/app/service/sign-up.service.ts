import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  url = "https://localhost:7008/api/Users/login";

  constructor(private http: HttpClient) { }

  // login(data: any) {
  //   return this.http.post(this.url, data);
  // }
  
  login(data: any) {
    return this.http.post(this.url, data,{observe:'response'});
  }
}
