import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShipmentInfoComponent } from './shipment-info/shipment-info.component';
import { ShipmentComponent } from './shipment/shipment.component';

const routes: Routes = [
  { path: '', component: ShipmentComponent },
  { path: 'shipment/:id', component: ShipmentInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
