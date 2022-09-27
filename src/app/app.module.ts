import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SaidasComponent } from './pages/saidas/saidas.component';
import { NavComponent } from './component/nav/nav.component';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Prime NG
import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SliderModule } from 'primeng/slider';
import { InputNumberModule } from 'primeng/inputnumber';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { SaidaService } from './services/saida.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfigComponent } from './pages/config/config.component';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ConfirmPopupModule } from 'primeng/confirmpopup';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SaidasComponent,
    NavComponent,
    ConfigComponent
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
    TagModule,
    ToastModule,
    HttpClientModule,
    ProgressSpinnerModule,
    CheckboxModule,
    SidebarModule,
    TableModule,
    OverlayPanelModule,
    ConfirmPopupModule
  ],
  providers: [FormBuilder, MessageService, SaidaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
