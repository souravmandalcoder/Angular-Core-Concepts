import { NgModule } from '@angular/core'; 
import { ParentDemoComponent } from './parent-demo.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ParentDemoComponent
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
export class ParentDemoRoutingModule { }
