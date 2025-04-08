import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { hello } from './dto/hello';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  constructor(private http: HttpClient) { }

  apiUrl : string = 'http://localhost:8080/api/get';


  getPosts() {

    console.log("I am in service");
    return this.http.get('http://localhost:8080/api/get');
  }


  getData(): Observable<hello[]> {
    return this.http.get<hello[]>(this.apiUrl);
  }
}
