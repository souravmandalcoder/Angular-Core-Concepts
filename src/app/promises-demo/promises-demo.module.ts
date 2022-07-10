import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromisesDemoComponent } from './promises-demo.component';
import { PromisesDemoRoutingModule } from './promises-demo-routing.module';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [PromisesDemoComponent],
  imports: [
    CommonModule,
    PromisesDemoRoutingModule,
    CoreModule
  ]
})
export class PromisesDemoModule { }
