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
  mail : any;
  showSpinner : boolean = false;

  constructor(public afService: AF, private router: Router) {}

  loginWithGoogle() { 
    this.showSpinner = true;
    this.afService.loginWithGoogle().then((data) => {
      this.showSpinner = false;
      this.afService.saveUserInfoFromForm(data.user.uid, data.user.displayName, data.user.email, data.user.photoURL);
      this.afService.addUserInfo(data.user);
       // Send them to the homepage if they are logged in
      this.router.navigate(['']);
    })

    .catch((error: any) => {
      if (error) {
        this.showSpinner = false;
        this.error = error;
        console.log(this.error);
      }
    });
  }


  loginWithFacebook() {    
    this.showSpinner = true;
    this.afService.loginWithFacebook().then((data) => {
      this.showSpinner = false;
      this.afService.saveUserInfoFromForm(data.user.uid, data.user.displayName, data.user.email, data.user.photoURL);
      this.afService.addUserInfo(data.user);     
      // Send them to the homepage if they are logged in
      this.router.navigate(['']);
    })

    .catch((error: any) => {
      if (error) {
        this.showSpinner = false;
        this.error = error;
        console.log(this.error);
      }
    });
  }
}



