import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AccountKind } from '../types/account-kind';
import 'rxjs/Rx';


@Injectable()
export class AccountKindsService {
  private serviceUrl : string;

  constructor(private http : Http) {
    this.serviceUrl = "http://vally-api.azurewebsites.net/api/accountkinds";
   }

  getAll() : Observable<AccountKind[]>{
    return this.http.get(this.serviceUrl)
                    .map((res:Response) => <AccountKind[]>res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
