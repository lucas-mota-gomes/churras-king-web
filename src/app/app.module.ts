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
import { EntradasComponent } from './pages/entradas/entradas.component';
import { ConfigComponent } from './pages/config/config.component';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { MotoboysComponent } from './pages/motoboys/motoboys.component';
import { ProlaboreComponent } from './pages/prolabore/prolabore.component';
import { AdiantamentoComponent } from './pages/adiantamento/adiantamento.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InvestimentosComponent } from './pages/investimentos/investimentos.component';
import { CalendarModule } from 'primeng/calendar';
import { TransporteLojaComponent } from './pages/transporte-loja/transporte-loja.component';
import { MentoriasComponent } from './pages/mentorias/mentorias.component';
import { ExcelService } from './services/excel.service';
import { ChartModule } from 'primeng/chart';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SaidasComponent,
    NavComponent,
    EntradasComponent,
    ConfigComponent,
    MotoboysComponent,
    ProlaboreComponent,
    AdiantamentoComponent,
    InvestimentosComponent,
    TransporteLojaComponent,
    MentoriasComponent,
    DashboardComponent
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
    ConfirmPopupModule,
    InputTextareaModule,
    CalendarModule,
    ChartModule
  ],
  providers: [FormBuilder, MessageService, SaidaService, ExcelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
