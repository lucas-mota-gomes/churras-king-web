import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

Injectable({ providedIn: "root" })
export class SaidaService {

  constructor(
    private http: HttpClient,
  ) { }

  async createSaida(payload: any): Promise<string | any> {
    return this.http.post(`http://localhost:5001/your-projeto/us-central1/api/saida`, payload).toPromise();
  }

  async getSaida(): Promise<string | any> {
    return this.http.get(`http://localhost:5001/your-projeto/us-central1/api/saida`).toPromise();
  }
}
