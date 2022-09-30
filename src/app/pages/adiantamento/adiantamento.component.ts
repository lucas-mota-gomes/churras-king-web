import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-adiantamento',
  templateUrl: './adiantamento.component.html',
  styleUrls: ['./adiantamento.component.scss']
})
export class AdiantamentoComponent implements OnInit {
  nomes: any[] = [
    { name: "Joao" },
    { name: "Pedro" }
  ];

  tipos: any[] = [
    { name: "Consumo" },
    { name: "Dinheiro" },
    { name: "Emprestimo" }
  ];

  status: any[] = [
    { name: "Pago" },
    { name: "A Pagar" }
  ];

  public adiantamentoForm: FormGroup = this._fb.group({
    nome: [this.nomes[0].name, [Validators.required]],
    valor: [0, [Validators.required]],
    tipo: [this.tipos[0].name, [Validators.required]],
    status: [this.status[0].name, [Validators.required]],
    description: [null, [Validators.required]]
  });

  public loading: boolean = false;
  public animate: boolean = false;
  constructor(private _fb: FormBuilder, private messageService: MessageService, private configService: ConfigService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.animate = true;
    }, 1000);
  }

  teste() {
    console.log(this.adiantamentoForm.value);
  }

  public salvar() {
    this.loading = true;
    this.configService.createData(this.adiantamentoForm.value, 'adiantamento').then((value) => {
      this.loading = false;
      this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Adiantamento cadastrado com sucesso' });
    }).catch((error: any) => {
      this.loading = false;
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: error });
    });
  }

}
