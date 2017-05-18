import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from "@angular/router";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { NeedSomethingComponent } from './pages/need-something/need-something.component';
import { NewspaperComponent } from './pages/newspaper/newspaper.component';
import { OrganizationListComponent } from './pages/organization-list/organization-list.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
   { path: '', component: HomeComponent, pathMatch: 'full' },
   { path: 'Contact-List', component: ContactsComponent, pathMatch: 'full' },
   { path: 'Organization-List', component: OrganizationListComponent, pathMatch: 'full'},
   { path: 'Newspaper', component: NewspaperComponent, pathMatch: 'full'},
   { path: 'Need-Something?', component: NeedSomethingComponent, pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
    NeedSomethingComponent,
    NewspaperComponent,
    OrganizationListComponent,
    AboutComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
