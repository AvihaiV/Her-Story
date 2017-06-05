import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import * as firebase from 'firebase/app'; 
import { AF } from "../../providers/af";

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.css']
})
export class OrganizationListComponent implements OnInit {

 public organizations : FirebaseListObservable<any>;

  constructor(public afService : AF) {     
    this.organizations = this.afService.organization;
  }

  //only user can delete himself
  deleteOrganization(key : string){
    if(confirm("Are You sure you want to delete?"))
    {
      this.organizations.remove(key);
    }
  }

  ngOnInit(){ }
}
