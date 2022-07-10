import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromisesDemoComponent } from './promises-demo.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PromisesDemoComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PromisesDemoRoutingModule { }
