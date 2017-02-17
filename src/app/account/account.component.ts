import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent implements OnInit {
  private accounts : Account[];

  constructor(private accountService: AccountService) {
    this.accountService.getAll()
                       .subscribe(
                          accounts => this.accounts = accounts, 
                          err => {
                            console.log(err);
                          });
  }

  ngOnInit() {
    
  }

}
