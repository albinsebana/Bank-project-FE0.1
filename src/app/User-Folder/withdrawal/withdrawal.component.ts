import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TransactionService } from 'src/app/service/transaction.service';

@Component({
  selector: 'app-withdrawal',
  templateUrl: './withdrawal.component.html',
  styleUrls: ['./withdrawal.component.css']
})
export class WithdrawalComponent {
  withdrawalForm = new FormGroup({
    accountNumber:new FormControl(''),
    amount:new FormControl(''),
    description:new FormControl(''),
    state:new FormControl(''),
    transactionType:new FormControl('')

  })
  constructor(private deposit : TransactionService, private router:Router){}
  withdrawalData(data:any)
  {
    console.log(data);
    this.deposit.withdralAdd(data).subscribe({
      next:(data)=>{
          alert("Amount withdrawn");
          this.router.navigateByUrl("/statement")
          
        },
        error:(errorResponse :HttpErrorResponse)=>{
          console.log(errorResponse)
        }
    })
  }
}
