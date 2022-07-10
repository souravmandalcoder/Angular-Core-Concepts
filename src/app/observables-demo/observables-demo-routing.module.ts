import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservablesDemoComponent } from './observables-demo.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: ObservablesDemoComponent
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ObservablesDemoRoutingModule { }
