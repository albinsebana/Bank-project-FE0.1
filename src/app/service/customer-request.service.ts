import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerRequestService {
  constructor(private http: HttpClient) {}

  getAccountRequestUrl="https://localhost:7008/api/Customer/customerRequest";
  activateAccountByIdUrl="https://localhost:7008/api/Customer/activeId";




  public ShowAccountRequest()
{
  return this.http.get(this.getAccountRequestUrl)
}
public ActivateAccountById(id:any)
{
  return this.http.get(this.activateAccountByIdUrl+"/"+id)
}
}