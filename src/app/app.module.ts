import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AccountService } from './services/account.service';
import { FacebookComponent } from './facebook/facebook.component';

const appRoutes: Routes = [
  { path: 'accounts', component: AccountComponent },
  { path: 'entry-list', component: EntryListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    AccountComponent,
    FacebookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})

export class AppModule { }
