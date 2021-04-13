import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.css'],
})
export class ShipmentComponent implements OnInit {
  shipment: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:3000/shipments').subscribe((response) => {
      this.shipment = response;
    });
  }
  getShipments(): void {
    console.log(this.shipment);
  }
}
