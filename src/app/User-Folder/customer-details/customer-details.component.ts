import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent {
  customerData: any;
  showError = false;
  showData = false;
  errorMessage: any = '';
  searchTerm: string = '';

  constructor(private contactInfo: CustomerService) {
    contactInfo.getData().subscribe({
      next: (data) => {
        this.customerData = data;
        console.log(data);
        this.showData = true;
      },
      error: (errorResponse: HttpErrorResponse) => {
        this.showError = true;
        this.errorMessage = '403 unAuthorized access : Forbidden';
      }
    });
  }

  search() {
    
    if (this.searchTerm.trim() === '') {
      // Reset the data if the search term is empty
      this.showData = false;
      this.customerData = null;
      this.contactInfo.getData().subscribe((data) => {
        this.customerData = data;
        this.showData = true;
      });
    } else {
      // Filter the data based on the search term
      this.customerData = this.customerData.filter((item: any) =>
      this.containsSearchTerm(item, this.searchTerm)
    );
    
    }
  }

  containsSearchTerm(item: any, term: string): boolean {
    // Implement your own logic for searching
    // For example, check if any of the properties contain the search term
    return (
      item.firstName.toLowerCase().includes(term.toLowerCase()) ||
      item.lastName.toLowerCase().includes(term.toLowerCase()) ||
      item.email.toLowerCase().includes(term.toLowerCase())
      // Add more fields if needed
    );
  }
}
