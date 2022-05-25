import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { unidades } from 'models/modelo.unidades';
import { lista_unidades } from 'utils/unidades-mock';
import { UnidadesService } from 'services/unidades.service';

@Component({
  selector: 'DSE-unidades',
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.scss']
})
export class UnidadesComponent implements OnInit {

  // listaUnidades: unidades[] = lista_unidades;

  constructor(private usuariosServices: UnidadesService) { }

  public listaUnidades: unidades[];
  ngOnInit(): void {
   this.usuariosServices.getUnidades().subscribe(
     retorno =>{
       this.listaUnidades = retorno.map(item =>{
         return new unidades(
           item.id,
           item.apelido,
           item.local,
           item.marca,
           item.modelo
          )
         })
     }
   ) 

  }

}
