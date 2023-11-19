import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerRequestService } from 'src/app/service/customer-request.service';

@Component({
  selector: 'app-customer-request-handler',
  templateUrl: './customer-request-handler.component.html',
  styleUrls: ['./customer-request-handler.component.css']
})
export class CustomerRequestHandlerComponent {
  refreshfun() {
    console.log('refreshfun called');
    location.reload();
  }

  customers: any[] = [];
  showAccountNotFound=false
  constructor(private auth:CustomerRequestService)
   {
    this.auth.ShowAccountRequest().subscribe(
      {
      next:(data: any) => {
        this.customers = data;
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
          alert("account Activated Successfully")
        },
        error:(err:HttpErrorResponse)=>
        {
          console.log(err);

          
        }
      }
    )
   } 
   viewDocument(account:any)
   {

   }
    // Assuming you have a method in your ApiService to fetch data
    searchDocument()
    {
      
    }

   
  
searchCustomerId:any
}
