import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categorias: any[] = [
    "Carnes",
    "Laticineos",
    "HortFrut",
    "Descartaveis",
    "Bebidas",
    "Manutenção",
    "Equipamentos",
    "Prolabore",
    "Escritório",
    "Segurança",
    "Limpeza"
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
