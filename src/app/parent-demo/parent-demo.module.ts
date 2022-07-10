import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentDemoComponent } from './parent-demo.component';
import { CoreModule } from '../core/core.module';
import { ParentDemoRoutingModule } from './parent-demo-routing.module';
import { ChildDemoComponent } from './child-demo/child-demo.component';
import { Child2Component } from './child2/child2.component';

@NgModule({
  declarations: [ParentDemoComponent, ChildDemoComponent, Child2Component],
  imports: [
    CommonModule,
    CoreModule,
    ParentDemoRoutingModule
  ]
})
export class ParentDemoModule { }
