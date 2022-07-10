import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypescriptDemoComponent } from './typescript-demo.component';
import { TypescriptDemoRoutingModule } from './typescript-demo-routing.module';


@NgModule({
  declarations: [TypescriptDemoComponent],
  imports: [
    CommonModule,
    TypescriptDemoRoutingModule
  ]
})
export class TypescriptDemoModule { }
