import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginComponent } from './login.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [{ path: '', component: LoginComponent  , children:[
  {path : 'login', component  : LoginPageComponent},
  {path : 'signup', component  : SignUpComponent},

]
} ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
