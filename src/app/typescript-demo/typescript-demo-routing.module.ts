import { NgModule } from '@angular/core';
import { TypescriptDemoComponent } from './typescript-demo.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TypescriptDemoComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TypescriptDemoRoutingModule { }
