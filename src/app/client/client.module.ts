import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ClientFormComponent } from './client-form/client-form.component';
import { ClientRegisterComponent } from './client-register/client-register.component';

const clientRoutes : Routes = [

{path:'client/register',component:ClientRegisterComponent}

]

@NgModule({
  declarations: [
    ClientFormComponent,
    ClientRegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ClientModule { }
