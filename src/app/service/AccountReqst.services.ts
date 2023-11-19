import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {


  constructor(private http:HttpClient) { }


activateAccountByIdUrl="https://localhost:7008/api/Account/activeId";
allRequest="https://localhost:7008/api/Account";
public ShowRequest()
{
  return this.http.get(this.allRequest)
}
public ActivateAccountById(id:any)
{
  return this.http.get(this.activateAccountByIdUrl+"/"+id)
}
}
