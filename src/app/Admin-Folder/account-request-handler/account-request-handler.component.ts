import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { SharedDataService } from 'src/app/service/AccountReqst.services';

@Component({
  selector: 'app-admin-request-handler',
  templateUrl: './account-request-handler.component.html',
  styleUrls: ['./account-request-handler.component.css']
})
export class AccountRequestHandlerComponent {

  accounts: any[] = [];
  showAccountNotFound=false
  constructor(private auth:SharedDataService)
   {
    
    this.auth.ShowRequest().subscribe(
      {
      next:(data: any) => {
        this.accounts = data;
        console.log("data: "+data)
      },
      error:(error:HttpErrorResponse) => {
        console.error('Error fetching accounts:', error);
       this.showAccountNotFound=true
      }
    }
    );
   }
   acceptAccount(account:any)
   {
    this.auth.ActivateAccountById(account).subscribe(
      {
        next:(res)=>
        {
          console.log(res)
          alert("account Activated Successfully")
          //send mail 
        },
        error:(err:HttpErrorResponse)=>
        {
          console.log(err);
         

          
        }
        // this.auth.ActivateAccountById(account).subscribe(
        //   {
        //   next:(data: any) => {
        //     this.accounts = data;
        //     console.log("data: "+data)
        //   },
        //   error:(error:HttpErrorResponse) => {
        //     console.error('Error fetching accounts:', error);
        //    this.showAccountNotFound=true
        //   }
        // }
      }
    )
   } 
  }