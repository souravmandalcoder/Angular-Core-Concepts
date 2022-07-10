import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesDemoComponent } from './services-demo.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ServicesDemoComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ServicesDemoRoutingModule { }
