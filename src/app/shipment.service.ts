import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShipmentService {
  private url = 'http://localhost:3000/shipments';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}
  getShipments(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
  getShipment(id: string): Observable<any> {
    const shipmentUrl = `${this.url}/${id}`;
    return this.http.get<any[]>(shipmentUrl);
  }
}
