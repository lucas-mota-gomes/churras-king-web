import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-transporte-loja',
  templateUrl: './transporte-loja.component.html',
  styleUrls: ['./transporte-loja.component.scss']
})
export class TransporteLojaComponent implements OnInit {

  public entradasForm: FormGroup = this._fb.group({
    valor: [0, [Validators.required]]
  });

  public loading: boolean = false;
  public animate: boolean = false;
  constructor(private _fb: FormBuilder, private messageService: MessageService, private configService: ConfigService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.animate = true;
    }, 1000);
  }

  public salvar() {
    this.loading = true;
    this.configService.createData(this.entradasForm.value, 'transporte_loja').then((value) => {
      this.loading = false;
      this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'transporte-loja cadastrada com sucesso' });
    }).catch((error: any) => {
      this.loading = false;
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: error });
    });
  }

}
