import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectoresComponent } from './pages/selectores/selectores.component';

const routes: Routes = [

  {
    path: '',
    children: [
      { path: 'selectores', component: SelectoresComponent },
      { path: '**', redirectTo: 'selectores' }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectoresRoutingModule { }
