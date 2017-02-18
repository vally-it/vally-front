import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    let accountId = this.route.snapshot.params['id'];
  }

}
