import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { E404Component } from './core/e404/e404.component';
import { MenuComponent } from './menu/menu.component';
import { UserListComponent } from './prs/user/user-list/user-list.component';
import { UserSearchPipe } from './prs/user/user-search.pipe';
import { BoolDisplayPipe } from './bool-display.pipe';
import { UserDetailComponent } from './prs/user/user-detail/user-detail.component';
import { UserCreateComponent } from './prs/user/user-create/user-create.component';
import { UserEditComponent } from './prs/user/user-edit/user-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    E404Component,
    MenuComponent,
    UserListComponent,
    UserSearchPipe,
    BoolDisplayPipe,
    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
