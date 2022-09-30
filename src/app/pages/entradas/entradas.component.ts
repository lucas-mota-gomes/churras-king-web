import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
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
  constructor(private _fb: FormBuilder, private messageService: MessageService) { }

  ngOnInit(): void {
  }

}
