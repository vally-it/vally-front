import { Injectable} from '@angular/core';
import { Account } from '../account';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AccountService {
  private serviceUrl: string;

  constructor(private http: Http) {
    this.serviceUrl = "http://vally-api.azurewebsites.net/api/accounts";
  }

  getAll() : Promise<Account[]>{
         return this.http.get(this.serviceUrl)
                         .toPromise()
                         .then(response => response.json().data as Account[])
                         .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
