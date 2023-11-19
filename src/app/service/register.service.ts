// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/internal/Observable';

// @Injectable({
//   providedIn: 'root'
// })
// export class RegisterService {
// //   ngOnInit(): void { 
// //     throw new Error('Method not implemented.'); 
// //   } 
 
// //   constructor(private httpclient:HttpClient) {} 
// //  private serverUrl:string='https://localhost:44375'//https://localhost:44375/api/Users
 
// //   public sendRegister(data:any):Observable<any>{ 
// //     // console.log('Request Payload:', data); 
// //     let dataUrl=`${this.serverUrl}/api/User/Register` 
// //     return this.httpclient.post<any>(dataUrl,data) 
// //   }
// // public handleError(error:HttpErrorResponse){ 
// //   let errorMessage:string=''; 
// //   if(error.error instanceof ErrorEvent){ 
// //     //client error 
// //     errorMessage=`Error :${error.error.message};` 
// //   } 
// //   else{ 
// //     //server error 
// //     errorMessage=`Status :${error.status};` 
// //   } 
// //   return throwError(errorMessage); 
// // }

// // }
// // function throwError(errorMessage: string) {
// //   throw new Error('Function not implemented.');
// // url = "https://localhost:7008/api/Users";

// // constructor(private http: HttpClient) { }

// // sendData(data: any) {
// //   return this.http.post(this.url, data);
// // }
// // }
// private apiUrl = 'https://localhost:7008/api/Users';

//   constructor(private http: HttpClient) {}

//   sendData(formData: any): Observable<any> {
//     return this.http.post<any>(this.apiUrl, formData, { responseType: 'text' });
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  url = 'https://localhost:7008/api/Users';

  constructor(private http: HttpClient) {}

  add(data :any){
    return this.http.post(this.url,data);
}
saveUser(user: any): Observable<number> {
  // Assuming your API returns the generated userId
  return this.http.post<number>(this.url , user);
}
}