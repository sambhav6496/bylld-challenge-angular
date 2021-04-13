import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShipmentService {
  private url = "'http://localhost:3000/shipments/'";
  constructor(private http: HttpClient) {}
  getShipments(): Observable<any[]> {
    console.log(this.http.get<any[]>(this.url));
    return this.http.get<any[]>(this.url);
  }
}
