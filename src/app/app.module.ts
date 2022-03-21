import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {environment} from "../environments/environment.prod";
import { UploadFileComponent } from './component/upload-file/upload-file.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ProductListComponent } from './component/product/product-list/product-list.component';
import { ProductCreateComponent } from './component/product/product-create/product-create.component';
import {FooterComponent} from "./component/footer/footer.component";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import { ProductEditComponent } from './component/product/product-edit/product-edit.component';
import { SignupComponent } from './component/user/signup/signup.component';
import { LoginComponent } from './component/user/login/login.component';
import {RouterModule} from "@angular/router";
import { HomeComponent } from './component/home/home.component';
import {httpInterceptorProvider} from "./security/auth.interceptor";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    UploadFileComponent,
    FooterComponent,
    NavbarComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductEditComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AngularFireStorageModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),  ],
  providers: [httpInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
