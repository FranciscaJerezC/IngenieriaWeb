import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ValparaisoComponent } from './components/valparaiso/valparaiso.component';
import { MetropolitanaComponent } from './components/metropolitana/metropolitana.component';
import { BiobioComponent } from './components/biobio/biobio.component';
import { AraucaniaComponent } from './components/araucania/araucania.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ValparaisoComponent,
    MetropolitanaComponent,
    BiobioComponent,
    AraucaniaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
