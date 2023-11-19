// register.component.ts

import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../service/register.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { SharedDataService } from '../../service/AccountReqst.services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  registerForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
    customerId: new FormControl('')
  });
  userId!: number;

  constructor(
    private auth: RegisterService,
    private router: Router,
    private sharedDataService: SharedDataService
  ) {}

  registerUser(data: any) {
    console.log(data);
    console.log(this.userId)
    this.auth.add(data).subscribe({
      next: (data) => {
        alert('New User Is Added');
        this.router.navigateByUrl("/userHome");
      },
      error: (errorResponse: HttpErrorResponse) => {
        console.log(errorResponse);
      }
    });
  }


}