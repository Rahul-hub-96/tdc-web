import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';

import { LoginComponent } from './login.component';

const routes: Routes = [{ path: '', component: LoginComponent, children:[
  {path : '', component  : LoginPageComponent}
]
} ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
