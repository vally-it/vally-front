import { Component, OnInit } from '@angular/core';
import {FacebookService, FacebookLoginResponse, FacebookInitParams} from 'ng2-facebook-sdk';

declare const FB: any;

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css'],
  providers: [FacebookService]
})
export class FacebookComponent implements OnInit {

 constructor(private fb: FacebookService) { }

  ngOnInit() {
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
