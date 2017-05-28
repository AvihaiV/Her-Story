import { Component, OnInit } from '@angular/core';
import { AF } from '../../providers/af';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import * as firebase from 'firebase';

@Component({
  selector: 'app-needs-form',
  templateUrl: './needs-form.component.html',
  styleUrls: ['./needs-form.component.css']
})
export class NeedsFormComponent implements OnInit {
  
  public item : item;

  targetRef:any;
  storageRef:any;

  constructor(public afService : AF) { 
      this.storageRef = firebase.storage().ref();
  }

  ngOnInit() {
    this.item = { description: "", author : "" ,photoURL : "", phone: "", email: ""};
    firebase.database().ref('/registeredUsers/' + firebase.auth().currentUser.uid).once('value').then((snapshot) => {
        this.item.author = snapshot.val().name;
        this.item.email = snapshot.val().email;        
    });
  }

  //add item to database
  addItem(){
    this.afService.addItem(this.item);
  }

  //setup path to upload
  upload(event:any){
    alert("Please wait while uploading!");
    let targetFile = event.srcElement.files[0];
    let fbsPath = 'images/items/' + targetFile.name;
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
            this.item.photoURL=downloadUrl;
            console.log(downloadUrl);
            res(downloadUrl);  
            alert("Photo uploaded!");
          }
        );
      })      
      return promise;
    }
}

//item struct
export class item{
    description : String;
    author : String;
    photoURL : String;
    phone: String;
    email: String;
}
