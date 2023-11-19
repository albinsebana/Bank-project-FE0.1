import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignUpComponent } from './sign-in/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { CustomerDetailsComponent } from './User-Folder/customer-details/customer-details.component';
import { JwtInterceptor } from './jwt.interceptor';
import { RegisterComponent } from './sign-in/register/register.component';
import { AdminHomeComponent } from './Accoun-Folder/admin-home/admin-home.component';
import { CreateCustomerComponent } from './User-Folder/create-customer/create-customer.component';
import { AccountDetailsComponent } from './Accoun-Folder/account-details/account-details.component';
import { UserDashboardComponent } from './User-Folder/user-dashboard/user-dashboard.component';
import { AccountStatementComponent } from './User-Folder/account-statement/account-statement.component';
import { UserMainComponent } from './User-Folder/user-main/user-main.component';
import { DepositComponent } from './User-Folder/deposit/deposit.component';
import { WithdrawalComponent } from './User-Folder/withdrawal/withdrawal.component';
import { TransactionComponent } from './User-Folder/transaction/transaction.component';
import { ThankYouComponent } from './User-Folder/thank-you/thank-you.component';
import { AccountRequestHandlerComponent} from './Admin-Folder/account-request-handler/account-request-handler.component';
import { CustomerRequestHandlerComponent } from './Admin-Folder/customer-request-handler/customer-request-handler.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    CustomerDetailsComponent,
    RegisterComponent,
    AdminHomeComponent,
    CreateCustomerComponent,
    AccountDetailsComponent,
    UserDashboardComponent,
    AccountStatementComponent,
    UserMainComponent,
    DepositComponent,
    WithdrawalComponent,
    TransactionComponent,
    ThankYouComponent,
    AccountRequestHandlerComponent,
    CustomerRequestHandlerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,FormsModule
  ],
  providers:[{provide:HTTP_INTERCEPTORS,useClass:JwtInterceptor,
    multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
