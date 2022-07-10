import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservablesDemoComponent } from './observables-demo.component';
import { ObservablesDemoRoutingModule } from './observables-demo-routing.module';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [ObservablesDemoComponent],
  imports: [
    CommonModule,
    ObservablesDemoRoutingModule,
    CoreModule
  ]
})
export class ObservablesDemoModule { }
