import { Component, OnInit } from '@angular/core';
import { unidades } from 'models/modelo.unidades';
import { UnidadesComponent } from 'components/unidades/unidades.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { lista_unidades } from 'utils/unidades-mock';
import { lancamento } from 'models/modelo.lancamento';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { lista_dashboard } from 'utils/dashboard-mocks';

@Component({
  selector: 'DSE-lancamento-geracao-mensal',
  templateUrl: './lancamento-geracao-mensal.component.html',
  styleUrls: ['./lancamento-geracao-mensal.component.scss']
})
export class LancamentoGeracaoMensalComponent implements OnInit {


  constructor(private http: HttpClient, private route:Router, private fb: FormBuilder) { }
  
  public listaUnidades: unidades[] ;
  public unidades:lancamento;

  CustomerForm!: FormGroup;
  submitted = true;

  apelido:unidades;
  total:unidades;
  data:unidades;
  id:unidades;
  
  
  ngOnInit(): void {


    
    this.carregar()

    this.CustomerForm = this.fb.group({
      total: new FormControl(),
      id: [null],
      data: new FormControl(),
  
    })
  }

  cadastrarEnergia(){
    const totalGerado = this.total;

    let mediaUnidades = lista_dashboard[3]

    // mediaUnidades.unidade = totalGerado / 2

//     const data = this.data;
 console.log(this.CustomerForm.value)
// this.buscarId(this.id)
 

alert("Unidade vinculada com sucesso")


    
  }

  carregar(){
    this.http.get<unidades[]>( "http://localhost:3000/lista_unidades" ).subscribe((resultado:unidades[]) => {
      this.listaUnidades = resultado;
  })}

  buscarId(id: unidades): Observable<unidades> {
    const url = `http://localhost:3000/lista_unidades/` + id;
    return this.http.get<unidades>(url);
  }
  update(unidade:unidades, total:unidades,data:unidades): Observable<unidades> {
    const url = `http://localhost:3000/lista_unidades/` + unidade.id;
    return this.http.put<unidades>(url, unidade);
  }

}
