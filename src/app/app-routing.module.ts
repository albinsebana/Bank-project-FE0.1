import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-in/sign-up/sign-up.component';
import { CustomerDetailsComponent } from './User-Folder/customer-details/customer-details.component';
import { RegisterComponent } from './sign-in/register/register.component';
import { AdminHomeComponent } from './Accoun-Folder/admin-home/admin-home.component';
import { CreateCustomerComponent } from './User-Folder/create-customer/create-customer.component';
import { UserDashboardComponent } from './User-Folder/user-dashboard/user-dashboard.component';
import { AccountStatementComponent } from './User-Folder/account-statement/account-statement.component';
import { UserMainComponent } from './User-Folder/user-main/user-main.component';
import { DepositComponent } from './User-Folder/deposit/deposit.component';
import { ThankYouComponent } from './User-Folder/thank-you/thank-you.component';
import { AccountRequestHandlerComponent } from './Admin-Folder/account-request-handler/account-request-handler.component';
import { CustomerRequestHandlerComponent } from './Admin-Folder/customer-request-handler/customer-request-handler.component';
import { WithdrawalComponent } from './User-Folder/withdrawal/withdrawal.component';

const routes: Routes = [
  {
    path :"",
    component:SignUpComponent
  
  },
  {
    path :"customerData",
    component:CustomerDetailsComponent
  },
  {
    path:"register",
    component : RegisterComponent
    
  },
  {
    path:"adminHome",
    component:AdminHomeComponent
  },
  {
    path:"createCustomer",
    component:CreateCustomerComponent
  },
  {
    path:"userHome",
    component:UserDashboardComponent
  },
  {
    path:"statement",
    component:AccountStatementComponent
  },
  {
    path:"userMain",
    component:UserMainComponent
  },
  {
    path:"deposit",
    component:DepositComponent
  },
  {
    path:"thankyou", component:ThankYouComponent
  },
  {
    path:"requestHandler",
    component:AccountRequestHandlerComponent
  },
  {path:"customerRequest",component:CustomerRequestHandlerComponent},
  { path: 'withdraw/:id', component: WithdrawalComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
