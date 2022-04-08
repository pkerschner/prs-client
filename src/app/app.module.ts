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
import { VendorSearchPipe } from './prs/vendor/vendor-search.pipe';
import { VendorListComponent } from './prs/vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './prs/vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './prs/vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './prs/vendor/vendor-edit/vendor-edit.component';
import { ProductSearchPipe } from './prs/product/product-search.pipe';
import { ProductListComponent } from './prs/product/product-list/product-list.component';
import { ProductDetailComponent } from './prs/product/product-detail/product-detail.component';
import { ProductCreateComponent } from './prs/product/product-create/product-create.component';
import { ProductEditComponent } from './prs/product/product-edit/product-edit.component';
import { RequestListComponent } from './prs/request/request-list/request-list.component';
import { RequestSearchPipe } from './prs/request/request-search.pipe';
import { RequestDetailComponent } from './prs/request/request-detail/request-detail.component';
import { RequestCreateComponent } from './prs/request/request-create/request-create.component';
import { RequestEditComponent } from './prs/request/request-edit/request-edit.component';
import { RequestlineCreateComponent } from './prs/requestline/requestline-create/requestline-create.component';
import { RequestlineEditComponent } from './prs/requestline/requestline-edit/requestline-edit.component';

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
    UserEditComponent,
    VendorSearchPipe,
    VendorListComponent,
    VendorDetailComponent,
    VendorCreateComponent,
    VendorEditComponent,
    ProductSearchPipe,
    ProductListComponent,
    ProductDetailComponent,
    ProductCreateComponent,
    ProductEditComponent,
    RequestListComponent,
    RequestSearchPipe,
    RequestDetailComponent,
    RequestCreateComponent,
    RequestEditComponent,
    RequestlineCreateComponent,
    RequestlineEditComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
