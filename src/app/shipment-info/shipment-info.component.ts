import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ShipmentComponent } from '../shipment/shipment.component';

@Component({
  selector: 'app-shipment-info',
  templateUrl: './shipment-info.component.html',
  styleUrls: ['./shipment-info.component.css'],
})
export class ShipmentInfoComponent implements OnInit {
  private url = 'http://localhost:3000/shipments';
  shipment: any;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getShipment();
  }
  getShipment(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const shipmentUrl = `${this.url}/${id}`;
    console.log(shipmentUrl);
    this.http.get<any[]>(shipmentUrl).subscribe((response) => {
      this.shipment = response;
      console.log(this.shipment);
    });
  }
}
