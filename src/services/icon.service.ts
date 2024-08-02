// src/app/services/icon.service.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../environments/environment';
// src/app/services/icon.service.ts
export interface PlacedIcon {
  x: number;
  y: number;
  size: number;
  imgSrc: string;
}
@Injectable({
  providedIn: 'root'
})
export class IconService {
  private apiUrl = `${environment.apiUrl}/api/my`;

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  savePlacedIcons(placedIcons: PlacedIcon[]): Observable<any> {
    return this.http.post(`${this.apiUrl}/save-icons`, { placedIcons });
  }

  fetchPlacedIcons(sessionId: string): Observable<PlacedIcon[]> {
    return this.http.get<PlacedIcon[]>(`${this.apiUrl}/get-icons/${sessionId}`);
  }
  testing(){
    return this.http.get<any>(`${this.apiUrl}`);
  }
}

