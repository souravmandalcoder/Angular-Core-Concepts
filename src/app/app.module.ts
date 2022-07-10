import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { FormsModule } from "@angular/forms";
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    FullLayoutComponent,
    BlankLayoutComponent,
    DirectivesDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
