import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ConfigService } from 'src/app/services/config.service';
import { ExcelService } from 'src/app/services/excel.service';

@Component({
  selector: 'app-prolabore',
  templateUrl: './prolabore.component.html',
  styleUrls: ['./prolabore.component.scss']
})
export class ProlaboreComponent implements OnInit {

  public motoboysForm: FormGroup = this._fb.group({
    valor: [0, [Validators.required]],
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
    const saidas = await this.configService.getData('prolabore');
    for (const item of saidas.DATA) {
      delete item['@collectionName'];
      delete item['id'];
      delete item['updated'];
      delete item['@collectionId'];
      delete item['@expand'];
    }
    this.excelService.exportAsExcelFile(saidas.DATA, "Prolabore")
  }

  public salvar() {
    this.loading = true;
    this.configService.createData(this.motoboysForm.value, 'prolabore').then((value) => {
      this.loading = false;
      this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Prolabore cadastrado com sucesso' });
    }).catch((error: any) => {
      this.loading = false;
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: error });
    });
  }
}
