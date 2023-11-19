import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  withdrawalurl = "https://localhost:7008/api/Transaction/Withdrawal";
  depositUrl="https://localhost:7008/api/Transaction/deposit"
  url="https://localhost:7008/api/Transaction"
  constructor(private http: HttpClient) { }

  withdrawalData() {
    return this.http.get(this.withdrawalurl);
  }

  depositData() {
    return this.http.get(this.depositUrl);
  }
  getData() {
    return this.http.get(this.url);
  }
  add(data :any){
    return this.http.post(this.depositUrl,data);
}
withdralAdd(data :any){
  return this.http.post(this.withdrawalurl,data);
}
}
