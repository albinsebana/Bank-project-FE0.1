import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../service/register.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedDataService } from '../../service/AccountReqst.services';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent  {
    customerForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      roleId: new FormControl(''),
    });
  
    constructor(private cstmr: CustomerService, private router: Router) {}
  
    customerData(data: any) {
      console.log(data);
      this.cstmr.add(data).subscribe({
        next: (responseData: any) => {
          console.log(responseData);
          const customerId = (responseData as any).customerId; // Type assertion
          alert(`Customer ID: ${customerId}`);
          this.router.navigateByUrl("/thankyou");
        },
        error: (errorResponse: HttpErrorResponse) => {
          console.log(errorResponse);
        }
      });
    }
  }