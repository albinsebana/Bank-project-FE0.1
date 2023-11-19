import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TransactionService } from 'src/app/service/transaction.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent {
  depositForm = new FormGroup({
    accountNumber:new FormControl(''),
    amount:new FormControl(''),
    description:new FormControl(''),
    state:new FormControl(''),
    transactionType:new FormControl('')

  })
  constructor(private deposit : TransactionService, private router:Router){}
  depositData(data:any)
  {
    console.log(data);
    this.deposit.add(data).subscribe({
      next:(data)=>{
          alert("Amount Deposited");
          this.router.navigateByUrl("/statement")
          
        },
        error:(errorResponse :HttpErrorResponse)=>{
          console.log(errorResponse)
        }
    })
  }
  }