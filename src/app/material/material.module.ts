import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponent } from './material.component';
import { MaterialRoutingModule } from './material-routing.module';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [MaterialComponent],
  imports: [
    CommonModule,
    MaterialRoutingModule,
    CoreModule, FormsModule
  ]
})
export class MaterialModule { }
