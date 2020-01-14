import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  verLogin: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  verModal() {
    this.verLogin = !this.verLogin;
    // if (!this.verLogin) {
    //   this.verLogin = true;
    // } else {
    //   this.verLogin = false;
    // }
  }

}
