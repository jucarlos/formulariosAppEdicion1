import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { TemplateRoutingModule } from './template-routing.module';


import { BasicComponent } from './pages/basic/basic.component';
import { DynamicComponent } from './pages/dynamic/dynamic.component';
import { SwitchesComponent } from './pages/switches/switches.component';


@NgModule({
  declarations: [
    BasicComponent,
    DynamicComponent,
    SwitchesComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    FormsModule
  ],
  
})
export class TemplateModule { }
