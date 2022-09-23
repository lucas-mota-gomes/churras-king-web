import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SaidasComponent } from './pages/saidas/saidas.component';
import { NavComponent } from './component/nav/nav.component';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';

//Prime NG
import {DropdownModule} from 'primeng/dropdown';
import {SelectButtonModule} from 'primeng/selectbutton';
import {SliderModule} from 'primeng/slider';
import {InputNumberModule} from 'primeng/inputnumber';
import { TagModule } from 'primeng/tag';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SaidasComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    SelectButtonModule,
    BrowserAnimationsModule,
    SliderModule,
    FormsModule,
    InputNumberModule,
    ReactiveFormsModule,
    TagModule
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
