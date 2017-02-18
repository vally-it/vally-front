import { Component, OnInit } from '@angular/core';
import { AccountKindsService } from '../services/account-kinds.service';
import { AccountService } from '../services/account.service';
import { AccountKind } from '../types/account-kind';
import { Account } from '../types/account';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.css'],
  providers: [AccountKindsService, AccountService]
})

export class AccountCreateComponent implements OnInit {
  private accountsKinds: AccountKind[];
  public selectedAccountKind: AccountKind;
  public account: Account;

  constructor(private accountsKindsService : AccountKindsService,
              private accountsService : AccountService,
              private router: Router) { 
    this.accountsKinds = new Array<AccountKind>();
    this.account = new Account();
    this.account.UserId = 1;
    this.account.Enabled = true;
  }

  ngOnInit() {
    this.accountsKindsService.getAll().subscribe(result => this.accountsKinds = result);
  }

  save(){
    this.account.AccountKindId = this.selectedAccountKind.AccountKindId;
    this.accountsService.create(this.account)
                        .subscribe(
                          data => this.router.navigate(['./accounts']),
                          err => console.log(err),
                          () => console.log('End'));
  }

  formPost(){
    this.save();
  }
}
