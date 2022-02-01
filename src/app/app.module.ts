import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { TextFormComponent } from './text-form/text-form.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    HttpClientXsrfModule.disable()//didnt fix the issue
  ],
  declarations: [
    AppComponent,
    TextFormComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
