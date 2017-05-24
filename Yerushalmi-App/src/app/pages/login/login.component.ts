import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AF } from "../../providers/af";
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  public error: any;

  constructor(public afService: AF, private router: Router) {}

  loginWithGoogle() {    
    this.afService.loginWithGoogle().then((data) => {
      // Send them to the homepage if they are logged in
      this.afService.addUserInfo();
      this.router.navigate(['']);
    })
  }

  loginWithFacebook() {    
    this.afService.loginWithFacebook().then((data) => {
      // Send them to the homepage if they are logged in
      this.afService.addUserInfo();
      this.router.navigate(['']);
    })
  }
}


