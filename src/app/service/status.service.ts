import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private apiUrl = 'http://localhost:8080/v1/api';

  constructor(private http: HttpClient) { }

  getStatus(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/status`);
  }

  getStatusPorEstado(estado: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${estado}`);
  }

  getStatusPorData(data: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/data?data=${data}`);
  }

  getEstadoComMaisAlertasENegativos(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/most-alerts-and-negatives`);
  }

  saveStatusFromValues(): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/create`, {});
  }
}
