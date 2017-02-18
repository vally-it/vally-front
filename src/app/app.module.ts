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
import { AccountCreateComponent } from './account-create/account-create.component';

const appRoutes: Routes = [
  { path: 'accounts', component: AccountComponent },
  { path: 'accounts/create', component: AccountCreateComponent },
  { path: 'entry-list/:id', component: EntryListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    AccountComponent,
    FacebookComponent,
    AccountCreateComponent
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
