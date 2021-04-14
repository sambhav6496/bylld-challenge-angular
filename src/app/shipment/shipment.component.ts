import { Component, OnInit } from '@angular/core';
import { ShipmentService } from '../shipment.service';

@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.css'],
})
export class ShipmentComponent implements OnInit {
  shipments: any;
  totalLength: any;
  page: number = 1;
  constructor(private shipmentService: ShipmentService) {}

  ngOnInit(): void {
    this.getShipments();
  }
  getShipments(): void {
    this.shipmentService.getShipments().subscribe((shipments) => {
      this.shipments = shipments;
      this.totalLength = shipments.length;
    });
  }
}
