import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SmsService {

  constructor(private http: HttpClient) { }

  send(to: string, message: string): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${environment.api_whapi_token}`,
    })

    const formattedNumber = to;

    const body = {
      to: formattedNumber, 
      body: message,  
    };

    return this.http.post(`${environment.api_whapi_url}/messages/text`, body, { headers })
  }

  getMessages(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${environment.api_whapi_token}`,
    })
    this.http.get(`${environment.api_whapi_url}/messages/list?count=100`, { headers })
    .subscribe(res => console.log(res))
  }

}
