import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { unidades } from 'models/modelo.unidades';

@Injectable({
  providedIn: 'root'
})
export class UnidadesService {

  constructor(private _httpclient:HttpClient) { }
  private url = "http://localhost:3000/lista_unidades";

  getUnidades(): Observable<unidades[]>{
  return this._httpclient.get<unidades[]>(this.url);
  }
  buscarId(id:string):Observable<unidades>{
    const url = `http://localhost:3000/lista_unidades/` + id;
    return this._httpclient.get<unidades>(url)
  }
}

