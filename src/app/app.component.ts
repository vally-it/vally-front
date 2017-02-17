import { Component } from '@angular/core';
import { EntryListComponent } from './entry-list/entry-list.component' 
import {FacebookService, FacebookLoginResponse, FacebookInitParams} from 'ng2-facebook-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vally';

  constructor(private fb: FacebookService){
    let userId = this.fb.getAuthResponse().userID;

    this.fb.api(userId+"/picture/","get").then(function(data){
      console.log(data);
    }).catch(function(err){
      console.log(err);
    });
  }
}
