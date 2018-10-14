import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { ManageCustomersComponent } from './view/manage-customers/manage-customers.component';
import { ManageItemsComponent } from './view/manage-items/manage-items.component';
import { PlaceOrderComponent } from './view/place-order/place-order.component';
import { ViewOrdersComponent } from './view/view-orders/view-orders.component';
import { PageNotFoundComponent } from './view/page-not-found/page-not-found.component';
import {AppRoutingModule} from "./app-routing.module";
import {CustomerService} from "./service/customer.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ManageCustomersComponent,
    ManageItemsComponent,
    PlaceOrderComponent,
    ViewOrdersComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
