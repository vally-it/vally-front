import { Component } from '@angular/core';
import { EntryListComponent } from './entry-list/entry-list.component' 
import {FacebookService, FacebookLoginResponse, FacebookInitParams} from 'ng2-facebook-sdk';

declare const FB: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FacebookService]
})
export class AppComponent {
  title = 'Vally';
  
  constructor(private fb: FacebookService) { 
  }

  ngOnInit(){
    let fbParams: FacebookInitParams = {
                                   appId: '257891934653590',
                                   xfbml: true,
                                   version: 'v2.8'
                };
    this.fb.init(fbParams);

    this.loginFacebook();
  }

  loginFacebook(): void {
    this.fb.login().then(
      (response: FacebookLoginResponse) => console.log(response),
      (error: any) => console.error(error)
    );
  }
}
