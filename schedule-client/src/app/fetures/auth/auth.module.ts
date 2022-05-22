import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AUTH_ROUTES } from './auth-routhing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(AUTH_ROUTES),
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class AuthModule { }
