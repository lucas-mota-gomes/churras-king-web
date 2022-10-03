import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import { ExcelService } from 'src/app/services/excel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private readonly configService: ConfigService, private excelService: ExcelService) { }

  ngOnInit(): void {

  }

  public async exportAll(){
    let adiantamentos = await this.configService.getData('adiantamento');
    this.deleteKey(adiantamentos);
    let entradas = await this.configService.getData('entrada');
    this.deleteKey(entradas);
    let investimentos = await this.configService.getData('investimento');
    this.deleteKey(investimentos);
    let motoboys = await this.configService.getData('motoboys');
    this.deleteKey(motoboys);
    let prolabore = await this.configService.getData('prolabore');
    this.deleteKey(prolabore);
    let saidas = await this.configService.getData('saida');
    this.deleteKey(saidas);
    let transporteLoja = await this.configService.getData('transporte_loja');
    this.deleteKey(transporteLoja);

    this.excelService.exportAsExcelFileMulti([
      adiantamentos.DATA,
      entradas.DATA,
      investimentos.DATA,
      motoboys.DATA,
      prolabore.DATA,
      saidas.DATA,
      transporteLoja.DATA
    ], 'Relatorio');
  }

  private deleteKey(array: any){
    for (const item of array.DATA) {
      delete item['@collectionName'];
      delete item['id'];
      delete item['updated'];
      delete item['@collectionId'];
      delete item['@expand'];
    }
  }
}
