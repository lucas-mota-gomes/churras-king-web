import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
// import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(
    private http: HttpClient,
  ) { }

  async createProduto(payload: any): Promise<string | any> {
    return this.http.post(`http://localhost:5001/your-projeto/us-central1/api/config/produto`, payload).toPromise();
  }

  async getProduto(): Promise<string | any> {
    return this.http.get(`http://localhost:5001/your-projeto/us-central1/api/config/produto`).toPromise();
  }
}
