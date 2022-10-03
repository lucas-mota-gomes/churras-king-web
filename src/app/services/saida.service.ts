import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SaidaService {

  constructor(
    private http: HttpClient,
  ) { }

  async createSaida(payload: any): Promise<string | any> {
    return this.http.post(`${environment.url}/saida`, payload).toPromise();
  }

  async getSaida(): Promise<string | any> {
    return this.http.get(`${environment.url}/saida`).toPromise();
  }
}
