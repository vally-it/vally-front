import { Injectable} from '@angular/core';
import { Account } from '../account';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class AccountService {
  private serviceUrl: string;

  constructor(private http: Http) {
    this.serviceUrl = "http://vally-api.azurewebsites.net/api/accounts";
  }

  getAll() : Observable<Account[]>{
    return this.http.get(this.serviceUrl)
                    .map((res:Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
