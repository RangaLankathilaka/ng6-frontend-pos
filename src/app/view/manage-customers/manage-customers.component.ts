import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CustomerService} from "../../service/customer.service";
import {Customer} from "../../dto/customer";

@Component({
  selector: 'app-manage-customers',
  templateUrl: './manage-customers.component.html',
  styleUrls: ['./manage-customers.component.css']
})
export class ManageCustomersComponent implements OnInit {

  customers: Array<Customer> = [];
  tempCustomers: Array<Customer> = [];
  customer: Customer = new Customer("","","");
  // @ViewChild("btnSave")
  // btnSave: ElementRef;
  btnName:string = "Save";


  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.loadAllCustomers();
  }

  loadAllCustomers(): void{
    this.customerService.getAllCustomers().subscribe(customers=>{
      this.customers = customers;
      this.tempCustomers = this.customers;
    })
  }

  deleteCustomer(id: string): void{
    this.customerService.deleteCustomer(id).subscribe(result=>{
      if (true){
        alert("Customer has been deleted successfully");
        this.loadAllCustomers();
      }else{
        alert("Failed to delete the customer");
      }
    })
  }

  saveCustomer(): void{
    console.log(this.customer.id);
    this.customerService.saveCustomer(this.customer).subscribe(c=>{
      this.btnName = "Save";
      this.loadAllCustomers();
      this.customer = new Customer("","","");
      }
    );
  }

  selectCustomer(customer: Customer){
    this.customer = customer;
    this.btnName = "Update";
    // this.btnSave.nativeElement.innerText = "Update";
  }

  inspectID(eventData): void{
    let customerId = (eventData.target.value);
    let c = this.customers.find(c =>{
      return c.id === customerId;
    });

    if (c) {
      Object.assign(this.customer, c);
    }else{
      this.customer = new Customer(customerId, "","");
    }
  }

  search(eventData): void{
    let customerName = (eventData.target.value);

    var tmpCustomers =  this.tempCustomers.filter(c =>{
      return c.name.startsWith(customerName);
    });
    console.log(tmpCustomers);
    if (tmpCustomers){
      this.customers = tmpCustomers;
    }

  }

}
