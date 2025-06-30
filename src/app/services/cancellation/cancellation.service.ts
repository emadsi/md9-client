import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Cancellation } from "../../models/cancellation/cancellation.interface";
import { Observable, catchError, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
@Injectable({ providedIn: 'root' })
export class CancellationService {
  private apiUrl = `${environment.apiUrl}/cancellations`;

  constructor(private http: HttpClient) {}

  requestCancellation(reservationId: string, reason: string, isAdmin: boolean = false): Observable<any> {
    const payload = { reservationId, reason };
    const headers = isAdmin
      ? new HttpHeaders({ Authorization: `Bearer ${localStorage.getItem('authToken')}` })
      : new HttpHeaders();

      console.log(payload);
  
    return this.http.post(`${this.apiUrl}/cancel`, payload, { headers }).pipe(
      catchError((error) => {
        console.error('Error requesting cancellation', error);
        return throwError(() => error);
      }));
  }

  getCancellationByReservationId(id: string): Observable<Cancellation> {
    const headers = new HttpHeaders({ Authorization: `Bearer ${localStorage.getItem('authToken')}` });
    return this.http.get<Cancellation>(`${this.apiUrl}/reservation/${id}`, { headers });
  }

  getAllCancellations(): Observable<Cancellation[]> {
    const headers = new HttpHeaders({ Authorization: `Bearer ${localStorage.getItem('authToken')}` });
    return this.http.get<Cancellation[]>(this.apiUrl, { headers });
  }
}