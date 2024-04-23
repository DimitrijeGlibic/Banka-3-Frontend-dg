import { Component } from '@angular/core';
import { NavbarComponent } from './compnents/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appName';
  isLoggedIn : boolean

  constructor() {
    if (sessionStorage.getItem("token") !== null){
      this.isLoggedIn = true
    }else{
      this.isLoggedIn = false;
    }
  }

  setLoggedIn(value : boolean){
    this.isLoggedIn = value;
  }

  getLoggedIn(){
    return this.isLoggedIn;
  }
}
