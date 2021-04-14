import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShipmentComponent } from './shipment/shipment.component';
import { ShipmentInfoComponent } from './shipment-info/shipment-info.component';
import { ShipmentSearchComponent } from './shipment-search/shipment-search.component';

@NgModule({
  declarations: [
    AppComponent,
    ShipmentComponent,
    ShipmentInfoComponent,
    ShipmentSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
