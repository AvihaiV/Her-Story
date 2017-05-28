import { Component, OnInit } from '@angular/core';
import { AF } from '../../providers/af';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import * as firebase from 'firebase';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  public contact : contact;
  targetRef: any;
  storageRef: any;

  constructor(public afService : AF) { 
     this.storageRef = firebase.storage().ref();
  }

  ngOnInit() { 
    this.contact = { name: "", job: "" , hobbies : "" ,photoURL : "", phone: "", email: "" };
    firebase.database().ref('registeredUsers/' + firebase.auth().currentUser.uid).once('value').then((snapshot) => {
        this.contact.name = snapshot.val().name;
        this.contact.email = snapshot.val().email;        
    });
  }

  //add contact to database
  addContact(){
    this.afService.addContact(this.contact);
  }

  //setup path to upload
  upload(event:any){
    alert("Please wait while uploading!");
    let targetFile = event.srcElement.files[0];
    let fbsPath = 'images/contacts/' + targetFile.name;
    this.uploadFile(fbsPath,targetFile);
  }

  //upload to firebase
  uploadFile(fbsPath,targetFile) {
      let promise = new Promise((res,rej) => {
        this.targetRef =this.storageRef.child(fbsPath);
        let task=this.targetRef.put(targetFile);
        task.on('state_changed',
          (snapshot:any) => {
            console.log(snapshot.state);
          },
          (error:any) => {
            console.log(error.code);
            rej(error);
          },
          () => {
            let downloadUrl = task.snapshot.downloadURL;
            this.contact.photoURL=downloadUrl;
            console.log(downloadUrl);
            res(downloadUrl);  
            alert("Photo uploaded!");
          }
        );
      })      
      return promise;
    }
}

//contact struct
export class contact{
    name : String;
    job : String;
    hobbies : String;
    photoURL : String;
    phone: String;
    email: String;
}
