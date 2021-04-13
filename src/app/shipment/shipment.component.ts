import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.css'],
})
export class ShipmentComponent implements OnInit {
  private url = 'http://localhost:3000/shipments/';
  shipments: any;
  totalLength: any;
  page: number = 1;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getShipments();
  }
  getShipments(): void {
    this.http.get<any[]>(this.url).subscribe((response) => {
      this.shipments = response;
      this.totalLength = response.length;
    });
  }
}
