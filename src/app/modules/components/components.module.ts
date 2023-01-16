import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { FormModule } from './form/form.module';

@NgModule({
  imports: [
    FormModule
  ]
})
export class ComponentsModule { }
