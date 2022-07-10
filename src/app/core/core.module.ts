import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { RupeePipe } from './pipes/rupee.pipe';
import { ImpureSortPipe } from './pipes/impure-sort.pipe';
import { PureSortPipe } from './pipes/pure-sort.pipe';
import { MatLibModule } from './mat-lib/mat-lib.module';
import { ConfirmationComponent } from './dialogbox/confirmation/confirmation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

const directives_components_pipes = [
  HighlightDirective,
  RupeePipe,
  PureSortPipe,
  ImpureSortPipe
  // customDirective,
  // somePipe
]

const modules = [
  FormsModule,
  CommonModule,
  MatLibModule,
  FlexLayoutModule,
  ReactiveFormsModule
]

@NgModule({
  declarations: [...directives_components_pipes, ConfirmationComponent],
  imports: [
    CommonModule,
    ...modules
  ],
  entryComponents: [ConfirmationComponent],
  exports: [...directives_components_pipes, ...modules, ConfirmationComponent]

})
export class CoreModule { }
