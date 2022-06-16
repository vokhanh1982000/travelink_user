import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailTourComponent } from './tour/list-tour/detail-tour/detail-tour.component';
import { OrderComponent } from './tour/order/order.component';
import { TourComponent } from './tour/tour.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "tour", component: TourComponent },
  { path: "tour/:id", component: DetailTourComponent },
  { path: "order", component: OrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
