import { Component, OnInit } from '@angular/core';
import { Account } from '../types/account';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent implements OnInit {
  private accounts : Account[];

  constructor(private accountService: AccountService,
              private router: Router) {
    this.accountService.getAll()
                       .subscribe(
                          accounts => this.accounts = accounts, 
                          err => {
                            console.log(err);
                          });
  }

  ngOnInit() {
    
  }

  showEntries(account : Account){
    this.router.navigate(['./entry-list/' + account.AccountId]);
  }

}
