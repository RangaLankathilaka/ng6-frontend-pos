import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer} from "../dto/customer";
import {Observable} from "rxjs";

@Injectable()
export class CustomerService {

  constructor(private http: HttpClient) {

  }

  getAllCustomers(): Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>("http://localhost:8080/api/v1/customers");
  }

  deleteCustomer(id:string): Observable<boolean>{
    return this.http.delete<boolean>("http://localhost:8080/api/v1/customers/" + id);
  }

  saveCustomer(customer: Customer): Observable<any>{
    console.log(customer);
    return this.http.put("http://localhost:8080/api/v1/customers/" + customer.id,customer);
  }

}
