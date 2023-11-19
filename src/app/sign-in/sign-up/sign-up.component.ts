import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SignUpService } from '../../service/sign-up.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-sign-up',
  templateUrl:'./sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  loginForm=new FormGroup({
    userName:new FormControl(''),
    password:new FormControl('')

  })
  token:any='';
  myToken:any;
  role:any;
  showError=false;
  errorMessage:any;


  constructor(private auth:SignUpService,private router:Router ){}
  loginUser(formData:any)
  {
    this.auth.login(formData).subscribe({
      next: (response)=>{
        console.log(response)
        //get token value from header
        this.myToken=response.headers.get('jwt')
        //convert from json
        this.myToken=JSON.parse(this.myToken)
        console.log(this.myToken)

        this.role=response.body;
        //store it in LS
        localStorage.setItem("token",this.token.actualToken)
        if(this.role == "Admin")
          this.router.navigateByUrl("/adminHome")
        else
        this.router.navigateByUrl("/userHome")
      },
      // error:(errorResponse:HttpErrorResponse)=>{
      //   this.showError=true;
      //   console.log(errorResponse)
      error: (err : HttpErrorResponse)=>{
        this.showError=true
        this.errorMessage = err.error.Message
      }
      })
    }
  }

