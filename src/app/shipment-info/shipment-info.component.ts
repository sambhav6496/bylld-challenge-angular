import { Component, OnInit } from '@angular/core';
import { ShipmentService } from '../shipment.service';
import { ActivatedRoute } from '@angular/router';
import { getLocaleDateFormat, Location } from '@angular/common';

@Component({
  selector: 'app-shipment-info',
  templateUrl: './shipment-info.component.html',
  styleUrls: ['./shipment-info.component.css'],
})
export class ShipmentInfoComponent implements OnInit {
  shipment: any;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private shipmentService: ShipmentService
  ) {}

  ngOnInit(): void {
    this.getShipment();
  }
  getShipment(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.shipmentService.getShipment(id).subscribe((shipment) => {
      this.shipment = shipment;
    });
  }
}
