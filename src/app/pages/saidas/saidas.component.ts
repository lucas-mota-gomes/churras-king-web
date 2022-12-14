import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ConfigService } from 'src/app/services/config.service';
import { ExcelService } from 'src/app/services/excel.service';
import { SaidaService } from 'src/app/services/saida.service';

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
  // Medida 0: Unidade, 1 float
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

  public loading: boolean = false;
  public isCopy: boolean[] = [];
  public productData: any = [];
  public categoryData: any = [];
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
  public animate: boolean = false;
  slider: number = 0;
  constructor(
    private _fb: FormBuilder,
    private messageService: MessageService,
    private saidaService: SaidaService,
    private configService: ConfigService,
    private excelService: ExcelService
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.animate = true;
    }, 1000);
    this.getProducts();
  }

  teste(event: any) {

  }

  addSingle() {
    this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Saída cadastrada com sucesso' });
  }

  updateValues() {
    this.setControler('qtTotCaixa', this.getControler('qtPorCaixa') * this.getControler('qtCaixa'));
    this.setControler('vTot', this.getControler('qtCaixa') * this.getControler('vUniPac'));

    if (this.getControler('qtPorCaixa') > 0 || this.getControler('qtTotCaixa') > 0) {
      this.setControler('vUni', this.getControler('vTot') / this.getControler('qtTotCaixa'));
    }
  }

  async getProducts() {
    this.productData = await this.configService.getProduto();
    this.categoryData = await this.configService.getData('categorias');
  }

  async exportar() {
    const saidas = await this.configService.getData('saida');
    for (const item of saidas.DATA) {
      delete item['@collectionName'];
      delete item['id'];
      delete item['updated'];
      delete item['@collectionId'];
      delete item['@expand'];
    }
    this.excelService.exportAsExcelFile(saidas.DATA, "Saidas")
  }

  getControler(controler: string) {
    return this.saidasForm.get(controler)?.value;
  }

  setControler(controler: string, value: any) {
    return this.saidasForm.get(controler)?.setValue(value);
  }

  salvar() {
    this.loading = true;
    const body = {
      tipo: this.saidasForm.value.tipo.name,
      categoria: this.saidasForm.value.categoria,
      produto: this.saidasForm.value.produto.name,
      quantidade_de_caixas: this.saidasForm.value.qtCaixa,
      quantidade_por_caixa: this.saidasForm.value.qtPorCaixa,
      valor_unidade_pacote: this.saidasForm.value.vUniPac,
      quantidade_total_por_caixa: this.saidasForm.value.qtTotCaixa,
      valor: this.saidasForm.value.vTot,
      valor_unidade: this.saidasForm.value.vUni
    }
    console.log("🚀 ~ file: saidas.component.ts ~ line 122 ~ SaidasComponent ~ salvar ~ body", body)
    this.saidaService.createSaida(body).then((result: any) => {
      if (this.isCopy && this.isCopy[0] != true) {
        this.saidasForm = this._fb.group({
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
      }
      this.addSingle();
      this.loading = false;
    }).catch((error: any) => {
      this.loading = false;
      console.log(error);
    })
  }

}
