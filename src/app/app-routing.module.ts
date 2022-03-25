import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from "./component/product/product-list/product-list.component";
import {ProductCreateComponent} from "./component/product/product-create/product-create.component";
import {ProductEditComponent} from "./component/product/product-edit/product-edit.component";
import {LoginComponent} from "./component/user/login/login.component";
import {SignupComponent} from "./component/user/signup/signup.component";
import {HomeComponent} from "./component/home/home.component";
import {AuthGuard} from "./security/auth.guard";
import {CustomerProductDetailComponent} from "./component/customer/customer-product-detail/customer-product-detail.component";
import {AdminListProductComponent} from "./component/admin/admin-list-product/admin-list-product.component";
import {AdminListUserComponent} from "./component/admin/admin-list-user/admin-list-user.component";

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
  {path: 'admin-list-product', component: AdminListProductComponent},
  {path: 'admin-list-user', component: AdminListUserComponent},
  {path:'customer-product-detail', component: CustomerProductDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
