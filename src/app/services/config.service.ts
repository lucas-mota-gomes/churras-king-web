import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(
    private http: HttpClient,
  ) { }

  async createProduto(payload: any): Promise<string | any> {
    return this.http.post(`${environment.url}/config/produto`, payload).toPromise();
  }

  async getProduto(): Promise<string | any> {
    return this.http.get(`${environment.url}/config/produto`).toPromise();
  }

  async createData(payload: any, collection: string): Promise<string | any> {
    return this.http.post(`${environment.url}/data/${collection}`, payload).toPromise();
  }

  async getData(collection: string): Promise<string | any> {
    return this.http.get(`${environment.url}/data/${collection}`).toPromise();
  }

  async deleteData(collection: string, id: string): Promise<string | any> {
    return this.http.delete(`${environment.url}/data/${collection}/${id}`).toPromise();
  }
}
