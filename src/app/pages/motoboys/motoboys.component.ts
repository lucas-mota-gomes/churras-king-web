import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ConfigService } from 'src/app/services/config.service';
@Component({
  selector: 'app-motoboys',
  templateUrl: './motoboys.component.html',
  styleUrls: ['./motoboys.component.scss']
})
export class MotoboysComponent implements OnInit {

  public motoboysForm: FormGroup = this._fb.group({
    nome: [null, [Validators.required]],
    valor: [0, [Validators.required]],
    entregas: [0, [Validators.required]],
    retornos: [0, [Validators.required]],
    taxas: [0, [Validators.required]],
    diaria: [0, [Validators.required]]
  });

  tipo: any[] = [
    { name: "Joao" },
    { name: "Pedro" }
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
    this.configService.createData(this.motoboysForm.value, 'motoboys').then((value) => {
      this.loading = false;
      this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Motoboy cadastrado com sucesso' });
    }).catch((error: any) => {
      this.loading = false;
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: error });
    });
  }

}
