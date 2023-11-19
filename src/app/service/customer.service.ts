import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url = "https://localhost:7008/api/Customer";
  customerRegisterUrl="https://localhost:7008/api/Customer";

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.url);
  }
  add(data :any){
    return this.http.post(this.customerRegisterUrl,data);
}





// showAllCustomerUrl="https://localhost:7078/api/Customer";

// getCustomerByIdUrl="https://localhost:7078/api/Customer";

// statementUrl="https://localhost:7078/api/Customer/passbook?id";

// // askQueryUrl="https://localhost:7078/api/Query/customerAskQuery";

// paginationUrl="";

// twoDateFilterUrl="https://localhost:7078/api/Transaction/DateFilter"


// public RegisterCustomer(data:any)
// {
//   return this.http.post(this.customerRegisterUrl,data)
// }

// public ViewPassBook(id:any)
// {
//   return this.http.get(this.statementUrl+"="+id)
// }

// // public AskCustomerQuery(data:any)
// // {
// //   return this.http.post(this.askQueryUrl,data)
// // }

// public SHowAllCustomer()
// {
//   return this.http.get(this.showAllCustomerUrl)
// }
// public getCustomerById(id:any)
// {
//   return this.http.get(this.getCustomerByIdUrl+"/"+id)
// }


// // public paginationBank(pgNo ?:number,pgSize?:number)
// // {
// // return this.http.get(this.paginationUrl+ "?PageNumber=" +pgNo + "&PageSize=" +pgSize ,
// // { observe: 'response' })
// // }

// public twoDateFilter(data:any)
// { 
//   return this.http.post(this.twoDateFilterUrl,data)
// }


}
