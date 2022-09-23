import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-saidas',
  templateUrl: './saidas.component.html',
  styleUrls: ['./saidas.component.scss']
})
export class SaidasComponent implements OnInit {
  categorias: any[] = [
    { name: "BEBIDAS" },
    { name: "CARNES" },
    { name: "DESCARTAVEL" },
    { name: "EQUIPAMENTOS" },
    { name: "ESCRITORIO" },
    { name: "HORTIFRUT" },
    { name: "LATICINEOS" },
    { name: "LIMPEZA" },
    { name: "MANUTENÇÃO" },
    { name: "PROLABORE" },
    { name: "SEGURANCA" },
    { name: "TRANSPORTE" }
  ];

  produtos: any[] = [
    { name: "B1" },
    { name: "B2" },
    { name: "B3" },
    { name: "BOBINA ESTRELA" },
    { name: "BOBINA PICOTADA" },
    { name: "BOBINA TERMICA" },
    { name: "BOLSA GRANDE" },
    { name: "BOLSA PEQUENA" },
    { name: "CANUDO" },
    { name: "COADOR" },
    { name: "COMANDA" },
    { name: "COPO 300" },
    { name: "ESPETO" },
    { name: "FILME" },
    { name: "GARFO" },
    { name: "GRAMPO" },
    { name: "INTERFOLHA" },
    { name: "KRAFT" },
    { name: "LAMINADO" },
    { name: "LAMINADO 7,5" },
    { name: "LUVA" },
    { name: "MARMITA M-90" },
    { name: "PAPEL ACOPLADO" },
    { name: "POTES" },
    { name: "PREGADOR" },
    { name: "SACO DE LIXO" },
    { name: "TERMICA" },
    { name: "TOUCA" },
    { name: "CANETA" },
    { name: "PANO DE MAO" },
    { name: "PANO DE CHAO" },
    { name: "FITA DUREX" },
  ];

  public saidasForm: FormGroup = this._fb.group({
    categoria: [this.categorias[0].name, [Validators.required]],
    tipo: [null, [Validators.required]],
    produto: [this.produtos[0].name, [Validators.required]],
    qtCaixa: [0, [Validators.required]],
    qtPorCaixa: [0, [Validators.required]],
    qtTotCaixa: [0, [Validators.required]],
    vUniPac: [0, [Validators.required]],
    vUni: [0, [Validators.required]],
    vTot: [0, [Validators.required]],
    status: [false, [Validators.required]]
  });

  slider: number = 0;
  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
  }

  teste(event: any) {

  }

  updateValues() {
    this.setControler('qtTotCaixa', this.getControler('qtPorCaixa') * this.getControler('qtCaixa'));
    this.setControler('vTot', this.getControler('qtCaixa') * this.getControler('vUniPac'));

    if (this.getControler('qtPorCaixa') > 0 || this.getControler('qtTotCaixa') > 0) {
      this.setControler('vUni', this.getControler('vTot') / this.getControler('qtTotCaixa'));
    }
  }

  getControler(controler: string) {
    return this.saidasForm.get(controler)?.value;
  }

  setControler(controler: string, value: any) {
    return this.saidasForm.get(controler)?.setValue(value);
  }

}
