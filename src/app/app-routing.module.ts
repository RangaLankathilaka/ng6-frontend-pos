import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./view/dashboard/dashboard.component";
import {ManageCustomersComponent} from "./view/manage-customers/manage-customers.component";
import {ManageItemsComponent} from "./view/manage-items/manage-items.component";
import {PlaceOrderComponent} from "./view/place-order/place-order.component";
import {ViewOrdersComponent} from "./view/view-orders/view-orders.component";
import {PageNotFoundComponent} from "./view/page-not-found/page-not-found.component";

var appRoutes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "manage-customers",
    component: ManageCustomersComponent
  },
  {
    path: "manage-items",
    component: ManageItemsComponent
  },
  {
    path: "place-order",
    component: PlaceOrderComponent
  },
  {
    path: "view-orders",
    component: ViewOrdersComponent
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/dashboard"
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
