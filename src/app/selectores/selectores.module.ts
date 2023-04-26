import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectoresComponent } from './pages/selectores/selectores.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectoresRoutingModule } from './selectores-routing.module';



@NgModule({
  declarations: [
    SelectoresComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SelectoresRoutingModule
  ]
})
export class SelectoresModule { }
