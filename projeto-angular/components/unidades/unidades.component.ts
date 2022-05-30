import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { unidades } from 'models/modelo.unidades';
import { lista_unidades } from 'utils/unidades-mock';
import { UnidadesService } from 'services/unidades.service';
import { Router } from '@angular/router';
import { DashboardComponent } from 'components/dashboard/dashboard.component';
import { lista_dashboard } from 'utils/dashboard-mocks';


@Component({
  selector: 'DSE-unidades',
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.scss']
})
export class UnidadesComponent implements OnInit {

  constructor(private http: HttpClient, private route:Router) { }

  public listaUnidades: unidades[];
  ngOnInit(): void {
    this.carregar()
    
  }
  
  remover(id:number){
    this.http.delete( "http://localhost:3000/lista_unidades/"+id  ).subscribe()
    this.carregar()
  } 

  carregar(){
    this.http.get<unidades[]>( "http://localhost:3000/lista_unidades" ).subscribe((resultado:unidades[]) => {
      this.listaUnidades = resultado;
     
      let totalUnidades = lista_dashboard[0]
      let unidadesAtivas = lista_dashboard[1]
      let unidadesInativas = lista_dashboard[2]

      const converteUnd = JSON.stringify(resultado)
      
      
      const contadorAtivos = resultado.filter(item=> item.ativo===true)
      unidadesAtivas.unidade = contadorAtivos.length

      const contadorInativos = resultado.filter(item=> item.ativo===false)
      unidadesInativas.unidade = contadorInativos.length


      for(let index = 0; index<=resultado.length; index++){
      totalUnidades.unidade = index;

      } 
   
      
     }

   ) 
  }


  
  }




