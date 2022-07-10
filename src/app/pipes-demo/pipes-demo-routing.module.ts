import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PipesDemoComponent } from './pipes-demo.component';

const routes: Routes = [
  {
    path: '',
    component: PipesDemoComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PipesDemoRoutingModule { }
