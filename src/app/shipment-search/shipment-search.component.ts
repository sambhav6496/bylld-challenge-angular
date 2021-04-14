import { Component, OnInit } from '@angular/core';
import { ShipmentService } from '../shipment.service';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-shipment-search',
  templateUrl: './shipment-search.component.html',
  styleUrls: ['./shipment-search.component.css'],
})
export class ShipmentSearchComponent implements OnInit {
  shipment: any;

  constructor(private shipmentService: ShipmentService) {}

  ngOnInit(): void {}
  // searchShipment(): void {}
  id: string = '';
  clickme(): void {
    this.shipmentService.getShipment(this.id).subscribe((shipment) => {
      this.shipment = shipment;
    });
  }
}
