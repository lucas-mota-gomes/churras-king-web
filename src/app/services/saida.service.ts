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
    return this.http.post(`http://localhost:5001/your-projeto/us-central1/api/saida`, payload).toPromise();
  }

  async getSaida(): Promise<string | any> {
    return this.http.get(`http://localhost:5001/your-projeto/us-central1/api/saida`).toPromise();
  }
}
