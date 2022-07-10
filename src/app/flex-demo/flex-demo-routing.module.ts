import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexDemoComponent } from './flex-demo.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FlexDemoComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FlexDemoRoutingModule { }
