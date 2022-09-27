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
        break;

      default:
        break;
    }
  }

  async getProducts(){
    this.productData = await this.configService.getProduto();
  }

  newProduct(){
    this.configService.createProduto({name: this.productName, type: this.productType}).then((value: any)=>{
      this.productData.DATA.push({
        name: this.productName,
        type: this.productType,
        id: value.DATA.id
      });
      this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Produto cadastrado com sucesso!' });
    }).catch((error:any) => {
      console.log("🚀 ~ file: config.component.ts ~ line 50 ~ ConfigComponent ~ this.configService.createProduto ~ error", error);
    })
  }

}
