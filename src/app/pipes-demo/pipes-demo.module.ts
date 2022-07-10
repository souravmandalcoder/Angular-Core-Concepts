import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesDemoComponent } from './pipes-demo.component';
import { PipesDemoRoutingModule } from './pipes-demo-routing.module';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PipesDemoComponent],
  imports: [
    CommonModule,
    CoreModule,
    PipesDemoRoutingModule,
    FormsModule
  ]
})
export class PipesDemoModule { }
