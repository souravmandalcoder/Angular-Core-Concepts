import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesDemoComponent } from './services-demo.component';
import { CoreModule } from '../core/core.module';
import { ServicesDemoRoutingModule } from './services-demo-routing.module';

@NgModule({
  declarations: [ServicesDemoComponent],
  imports: [
    CommonModule,
    ServicesDemoRoutingModule,
    CoreModule
  ]
})
export class ServicesDemoModule { }
