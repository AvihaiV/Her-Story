import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from "angularfire2/auth";
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { NeedSomethingComponent } from "./pages/need-something/need-something.component";
import { NewspaperComponent } from './pages/newspaper/newspaper.component';
import { OrganizationListComponent } from './pages/organization-list/organization-list.component';
import * as firebase from 'firebase/app';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';
import { BootstrapModalModule } from 'ng2-bootstrap-modal/dist';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete/dist';
import { DatePickerModule } from "ng2-datepicker";
import { DropdownModule } from "ng2-dropdown";
import { LoginComponent } from './pages/login/login.component';
import { AF } from "./providers/af";
import { NeedsFormComponent } from './pages/needs-form/needs-form.component';
import { OrganizationFormComponent } from './pages/organization-form/organization-form.component';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PdfViewerComponent } from 'ng2-pdf-viewer';

const routes: Routes = [
   { path: '', component: HomeComponent, pathMatch: 'full' },
   { path: 'Contact-List', component: ContactsComponent, pathMatch: 'full' },
   { path: 'Organization-List', component: OrganizationListComponent, pathMatch: 'full'},
   { path: 'Newspaper', component: NewspaperComponent, pathMatch: 'full'},
   { path: 'Need-Something?', component: NeedSomethingComponent, pathMatch: 'full'},
   { path: 'contact-form', component: ContactFormComponent, pathMatch: 'full'},
   { path: 'login', component: LoginComponent, pathMatch: 'full'},
   { path: "needs-form", component: NeedsFormComponent, pathMatch: "full"},
   { path: "organization-form", component: OrganizationFormComponent, pathMatch: "full"}
];

export const firebaseConfig = {
    apiKey: "AIzaSyBmLsENlNR1NbJAze5vSr5jPttl6O3NCoQ",
    authDomain: "yerushalmiapp-a7516.firebaseapp.com",
    databaseURL: "https://yerushalmiapp-a7516.firebaseio.com",
    projectId: "yerushalmiapp-a7516",
    storageBucket: "yerushalmiapp-a7516.appspot.com",
    messagingSenderId: "3015982921"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
    NeedSomethingComponent,
    NewspaperComponent,
    OrganizationListComponent,
    ContactFormComponent,
    LoginComponent,
    NeedsFormComponent,
    OrganizationFormComponent,
    PdfViewerComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    DatePickerModule,
    BootstrapModalModule,
    Ng2AutoCompleteModule,
    DropdownModule,
    AngularFireAuthModule,
    MaterialModule,
    BrowserAnimationsModule
  ],

  providers: [ AF ],
  
  bootstrap: [AppComponent]
})

export class AppModule { }
