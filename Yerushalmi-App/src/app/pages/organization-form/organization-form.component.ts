import { Component, OnInit } from '@angular/core';
import { AF } from '../../providers/af';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import * as firebase from 'firebase';

@Component({
  selector: 'app-organization-form',
  templateUrl: './organization-form.component.html',
  styleUrls: ['./organization-form.component.css']
})
export class OrganizationFormComponent implements OnInit {

   public organization : organization;

  targetRef:any;
  storageRef:any;

  constructor(public afService : AF) { 
      this.storageRef = firebase.storage().ref();
  }

  ngOnInit() {
    this.organization = { name: "", contact : "" ,phone : "" };
  }

  //add organization to database
  addOrganization(){
    this.afService.addOrganization(this.organization);
  }
}

//item struct
export class organization{
  name : String;
  contact: String;
  phone: String;
}