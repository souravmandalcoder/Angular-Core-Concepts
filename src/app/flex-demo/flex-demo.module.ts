import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexDemoComponent } from './flex-demo.component';
import { FlexDemoRoutingModule } from './flex-demo-routing.module';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [FlexDemoComponent],
  imports: [
    CommonModule,
    FlexDemoRoutingModule,
    CoreModule
  ]
})
export class FlexDemoModule { }
