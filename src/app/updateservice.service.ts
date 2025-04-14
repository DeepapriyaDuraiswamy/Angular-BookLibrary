import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Update } from './dto/updateuser';

@Injectable({
  providedIn: 'root'
})
export class UpdateserviceService {

  constructor(private http: HttpClient) { }
    
  apiUrl : string = 'http://localhost:8080/api';
   


    
  updateUser(id: number, user: Update) {
    return this.http.put(`${this.apiUrl}/updateuser/${id}`, user);
  }
  
}
