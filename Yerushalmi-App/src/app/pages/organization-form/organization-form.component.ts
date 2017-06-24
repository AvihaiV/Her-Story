import { Component, OnInit } from '@angular/core';
import { AF } from '../../providers/af';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organization-form',
  templateUrl: './organization-form.component.html',
  styleUrls: ['./organization-form.component.css']
})
export class OrganizationFormComponent implements OnInit {

  public organization : organization;
  targetRef:any;
  storageRef:any;

  constructor(public afService : AF, private router: Router) { 
      this.storageRef = firebase.storage().ref();
  }

  ngOnInit() {
    this.organization = { name: "", contact : "" ,phone : "" };
  }

  //add organization to database
  addOrganization(){
    if(this.organization.name == "" || this.organization.contact == "")
      alert("Organization's name and contact required");
    
    else 
    {
      this.afService.addOrganization(this.organization);
      this.router.navigate(['Organization-List']);
    }
  }

  //reset the form except the name
  resetForm(){
    if(confirm("Are You sure you want to reset the form?"))
    {
      this.organization.name = "";
      this.organization.contact = "";
      this.organization.phone = "";
    }
  }
}

//item struct
export class organization{
  name : String;
  contact: String;
  phone: String;
}