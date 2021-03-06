import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes:Routes=[
    {path:'',redirectTo:'/login'},
    {path:'/login',component:LoginComponent}
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    LoginComponent
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { 

  
}