import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductCreateComponent} from "./component/product/product-create/product-create.component";
import {ProductEditComponent} from "./component/product/product-edit/product-edit.component";
import {LoginComponent} from "./component/user/login/login.component";
import {SignupComponent} from "./component/user/signup/signup.component";
import {HomeComponent} from "./component/home/home.component";
import {AuthGuard} from "./security/auth.guard";
import {CustomerProductDetailComponent} from "./component/customer/customer-product-detail/customer-product-detail.component";
import {CustomerPaymentComponent} from "./component/customer/customer-payment/customer-payment.component";
import {CustomerShopComponent} from "./component/customer/customer-shop/customer-shop.component";
import {CustomerHomePageComponent} from "./component/customer/customer-home-page/customer-home-page.component";
import {AdminListProductComponent} from "./component/admin/admin-list-product/admin-list-product.component";
import {AdminListUserComponent} from "./component/admin/admin-list-user/admin-list-user.component";
import {AdminUpdateUserComponent} from "./component/admin/admin-update-user/admin-update-user.component";
import {CustomerProfileComponent} from "./component/customer/customer-profile/customer-profile.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {path: 'home', component: HomeComponent,
  children:[
    {path:'',component: CustomerHomePageComponent},
    {path: 'customer-payment',canActivate: [AuthGuard] , component: CustomerPaymentComponent},
    {path: 'customer-shop', component: CustomerShopComponent},
    {path:'customer-product-detail/:id', component: CustomerProductDetailComponent},
  ]},



  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'product-create', component: ProductCreateComponent},
  {path: 'product-edit', component: ProductEditComponent},
  {path: 'admin-list-product', component: AdminListProductComponent},
  {path: 'admin-list-user', component: AdminListUserComponent},
  {path: 'admin-update-user/:id', component: AdminUpdateUserComponent},
  {path: 'customer-profile', component: CustomerProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
