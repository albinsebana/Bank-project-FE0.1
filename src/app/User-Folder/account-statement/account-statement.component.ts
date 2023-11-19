import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';
import { TransactionService } from 'src/app/service/transaction.service';




@Component({
  selector: 'app-account-statement',
  templateUrl: './account-statement.component.html',
  styleUrls: ['./account-statement.component.css']
})
export class AccountStatementComponent {
  transactionData: any;
  showError = false;
  showData = false;
  errorMessage: any = '';
  searchTerm: string = '';

  constructor(private transactionInfo: TransactionService) {
    transactionInfo.getData().subscribe({
      next: (data) => {
        this.transactionData = data;
        console.log(data);
        this.showData = true;
      },
      error: (errorResponse: HttpErrorResponse) => {
        this.showError = true;
        this.errorMessage = '403 unAuthorized access : Forbidden';
      }
    });
  }

}
