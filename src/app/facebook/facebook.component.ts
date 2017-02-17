import { Component, OnInit } from '@angular/core';
import {FacebookService, FacebookLoginResponse, FacebookInitParams} from 'ng2-facebook-sdk';

declare const FB: any;

@Component({
  selector: 'app-facebook',
  template: '<img src="{{imagemUsuario}}" alt="">',
  styleUrls: ['./facebook.component.css'],
  providers: [FacebookService]
})
export class FacebookComponent implements OnInit {

 constructor(private fb: FacebookService) { }
  private imagemUsuario: string;

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
      (response: FacebookLoginResponse) => this.getUserPicture(),
      (error: any) => console.error(error)
    );
  }

  getUserPicture(){
    let userId = this.fb.getAuthResponse().userID;

    this.fb.api(userId+"/picture/","get").then(this.setUserPicture).catch(function(err){
      console.log(err);
    });
  }

  setUserPicture(data){
    this.imagemUsuario = data.url;
  }

}
