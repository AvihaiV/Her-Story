import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AF } from "./providers/af";
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public isLoggedIn: boolean;  

  constructor(public afService: AF, private router: Router) {  
    // This asynchronously checks if our user is logged it and will automatically
    // redirect them to the Login page when the status changes.    
    this.afService.userLog().subscribe(
      (auth) => {
        if(auth == null) {
          console.log("Not Logged in.");
          this.isLoggedIn = false;
          this.router.navigate(['login']);
        }

        else {
          console.log("Successfully Logged in.");
          this.isLoggedIn = true;
           this.router.navigate(['']);
        }
      });
  }

  logout() {
    this.afService.logout();
  }

}
