import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent implements OnInit {
  constructor(private accountService: AccountService) {
    console.log(this.accountService.getAll());
  }

  ngOnInit() {
    
  }

}
