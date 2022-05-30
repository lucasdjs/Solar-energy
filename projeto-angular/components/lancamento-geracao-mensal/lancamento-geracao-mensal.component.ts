import { Component, OnInit } from '@angular/core';
import { unidades } from 'models/modelo.unidades';
import { UnidadesComponent } from 'components/unidades/unidades.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { lista_unidades } from 'utils/unidades-mock';
import { lancamento } from 'models/modelo.lancamento';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'DSE-lancamento-geracao-mensal',
  templateUrl: './lancamento-geracao-mensal.component.html',
  styleUrls: ['./lancamento-geracao-mensal.component.scss']
})
export class LancamentoGeracaoMensalComponent implements OnInit {


  constructor(private http: HttpClient, private route:Router, private fb: FormBuilder) { }
  
  public listaUnidades: unidades[] ;

  apelido:unidades;
  data:unidades;
  total:unidades;
    
  CustomerForm!: FormGroup;
  submitted = true;
  
  
  ngOnInit(): void {
    
    this.carregar()

    this.CustomerForm = this.fb.group({
      total: new FormControl(),
      apelido: new FormControl(),
      data: new FormControl(),

  
    })
  }

  cadastrarEnergia(patch:string){
    this.http.put( "http://localhost:3000/lista_unidades", 1 ).subscribe();
  }


  carregar(){
    this.http.get<unidades[]>( "http://localhost:3000/lista_unidades" ).subscribe((resultado:unidades[]) => {
      this.listaUnidades = resultado;
  })}

}
