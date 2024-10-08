import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'http://localhost:3000/send-email';

  constructor(private http:HttpClient) { }

  // sendEmail(emailData: any){
  //   return this.http.post(this.apiUrl, emailData);
  // }
  sendEmail(formData: { name: string; email: string; message: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, formData);
  }

}
