import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ConfigService } from 'src/app/services/config.service';
@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.scss']
})
export class EntradasComponent implements OnInit {
  public entradasForm: FormGroup = this._fb.group({
    tipo: [null, [Validators.required]],
    valor: [0, [Validators.required]]
  });

  tipo: any[] = [
    { name: "DINHEIRO" },
    { name: "CREDITO" },
    { name: "DEBITO" },
    { name: "VALE" },
    { name: "PAGAMENTO ONLINE" },
    { name: "PIX" }
  ];
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
    this.configService.createData(this.entradasForm.value, 'entrada').then((value) => {
      this.loading = false;
      this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Entrada cadastrada com sucesso' });
    }).catch((error: any) => {
      this.loading = false;
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: error });
    });
  }

}
