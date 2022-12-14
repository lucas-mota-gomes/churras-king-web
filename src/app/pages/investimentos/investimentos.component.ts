import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ConfigService } from 'src/app/services/config.service';
import { ExcelService } from 'src/app/services/excel.service';
@Component({
  selector: 'app-investimentos',
  templateUrl: './investimentos.component.html',
  styleUrls: ['./investimentos.component.scss']
})
export class InvestimentosComponent implements OnInit {
  status: any[] = [
    { name: "Pago" },
    { name: "A Pagar" }
  ];
  public investimentosForm: FormGroup = this._fb.group({
    dataPagamento: [new Date(), [Validators.required]],
    parcelas: [null, [Validators.required]],
    description: [null, [Validators.required]],
    valor: [0, [Validators.required]],
    status: [this.status[0].name, [Validators.required]]
  });


  public loading: boolean = false;
  public animate: boolean = false;
  constructor(private excelService: ExcelService, private _fb: FormBuilder, private messageService: MessageService, private configService: ConfigService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.animate = true;
    }, 1000);
  }

  async exportar() {
    const dados = await this.configService.getData('investimento');
    for (const item of dados.DATA) {
      delete item['@collectionName'];
      delete item['id'];
      delete item['updated'];
      delete item['@collectionId'];
      delete item['@expand'];
    }
    this.excelService.exportAsExcelFile(dados.DATA, "Investimentos")
  }

  public salvar() {
    this.loading = true;
    this.configService.createData(this.investimentosForm.value, 'investimento').then((value) => {
      this.loading = false;
      this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Investimento cadastrado com sucesso' });
    }).catch((error: any) => {
      this.loading = false;
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: error });
    });
  }

}
