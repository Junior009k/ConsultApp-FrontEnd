import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './component/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
  ReactiveFormsModule, // ParConfiguración de rutas
  ], 
  exports:[
    LoginComponent
  ]
})
export class AuthModule { }
