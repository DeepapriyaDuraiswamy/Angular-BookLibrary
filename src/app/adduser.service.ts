import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Add } from './dto/adduser';

@Injectable({
  providedIn: 'root'
})
export class AdduserService {

  constructor(private http: HttpClient) { }
    
  apiUrl : string = 'http://localhost:8080/api';
   


    
  addUser(add:Add): Observable<Add> {
    
    return this.http.post<Add>(`${this.apiUrl}/adduser`, add);
  }
}
