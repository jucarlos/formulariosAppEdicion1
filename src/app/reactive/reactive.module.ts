import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { SwitchesComponent } from './pages/switches/switches.component';
import { DynamicComponent } from './pages/dynamic/dynamic.component';
import { BasicComponent } from './pages/basic/basic.component';


@NgModule({
  declarations: [
    SwitchesComponent,
    DynamicComponent,
    BasicComponent
  ],
  imports: [
    CommonModule,
    ReactiveRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReactiveModule { }
