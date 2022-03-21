import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from "./component/product/product-list/product-list.component";
import {ProductCreateComponent} from "./component/product/product-create/product-create.component";
import {ProductEditComponent} from "./component/product/product-edit/product-edit.component";
import {LoginComponent} from "./component/user/login/login.component";
import {SignupComponent} from "./component/user/signup/signup.component";
import {HomeComponent} from "./component/home/home.component";
import {AuthGuard} from "./security/auth.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {path: 'home',canActivate: [AuthGuard] , component: HomeComponent,
  children:[
    {path: 'product-list', component: ProductListComponent},

  ]},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'product-create', component: ProductCreateComponent},
  {path: 'product-edit', component: ProductEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }