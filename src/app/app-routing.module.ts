import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './component/nav/nav.component';
import { AdiantamentoComponent } from './pages/adiantamento/adiantamento.component';
import { ConfigComponent } from './pages/config/config.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EntradasComponent } from './pages/entradas/entradas.component';
import { HomeComponent } from './pages/home/home.component';
import { InvestimentosComponent } from './pages/investimentos/investimentos.component';
import { MotoboysComponent } from './pages/motoboys/motoboys.component';
import { ProlaboreComponent } from './pages/prolabore/prolabore.component';
import { SaidasComponent } from './pages/saidas/saidas.component';
import { TransporteLojaComponent } from './pages/transporte-loja/transporte-loja.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'sistema', component: NavComponent, children: [
      { path: 'saidas', component: SaidasComponent },
      { path: 'entradas', component: EntradasComponent },
      { path: 'motoboys', component: MotoboysComponent },
      { path: 'prolabore', component: ProlaboreComponent },
      { path: 'adiantamento', component: AdiantamentoComponent },
      { path: 'investimentos', component: InvestimentosComponent },
      { path: 'transporte-loja', component: TransporteLojaComponent },
      { path: 'dashBoard', component: DashboardComponent },
      { path: 'config', component: ConfigComponent }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
