import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { hello } from '../dto/hello';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private login : LoginService) {


  }

  res !: hello[];

  count = 0;


  increment() {
console.log("test httpclient ");

   // this.login.getPosts().subscribe(data => this.displayResponse(data));

   this.login.getData().subscribe(data => this.displayResponse(data));

  }

  displayResponse(dat : hello[]) {

    console.log(dat);
    this.res = dat;

  } 

 
  }
