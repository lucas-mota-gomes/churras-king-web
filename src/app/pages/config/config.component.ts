import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  public display: boolean[] = [];
  public sideBar: string = '';
  public productName: string = '';
  public productType: string = '';
  public productData: any = [];
  public categoryData: any = [];
  public motoboyData: any = [];
  constructor(private configService: ConfigService, private messageService: MessageService) { }
  ngOnInit(): void {

  }

  open(s: string) {
    switch (s) {
      case 'Produto':
        this.display[0] = true;
        this.getProducts();
        break;

      case 'Categoria':
        this.display[1] = true;
        this.getCategorias();
        break;

      case 'Motoboy':
        this.display[2] = true;
        this.getMotoboys();
        break;

      default:
        break;
    }
  }

  async getProducts() {
    this.productData = await this.configService.getProduto();
  }

  async getCategorias() {
    this.categoryData = await this.configService.getData('categorias');
  }

  async getMotoboys() {
    this.motoboyData = await this.configService.getData('motoboy');
  }

  public delete(collection: string, id: string) {
    this.configService.deleteData(collection, id).then((value: any) => {
      this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Produto deletado com sucesso!' });
    }).catch((error: any) => {
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao deletar produto!' });
    })
  }

  newProduct() {
    this.configService.createProduto({ name: this.productName, type: this.productType }).then((value: any) => {
      this.productData.DATA.push({
        name: this.productName,
        type: this.productType,
        id: value.DATA.id
      });
      this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Produto cadastrado com sucesso!' });
    }).catch((error: any) => {
      console.log("🚀 ~ file: config.component.ts ~ line 50 ~ ConfigComponent ~ this.configService.createProduto ~ error", error);
    })
  }

  newData(colletion: any, data: any) {
    this.configService.createData(data, colletion).then((value: any) => {
      this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Dado cadastrado com sucesso!' });
    }).catch((error: any) => {
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao cadastrar dado!' });
    })
  }

  teste(categoria: any) {
    console.log(categoria);
  }

  async getData(colletion: any): Promise<any> {
    const dados: any = await this.configService.getData(colletion);
    return dados.DATA
  }

  getDados(collection: string): any {
    return this.getData(collection);
  }

}
