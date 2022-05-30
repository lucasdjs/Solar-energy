import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { unidades } from 'models/modelo.unidades';
import { Observable } from 'rxjs';
import { UnidadesService } from 'services/unidades.service';


@Component({
  selector: 'DSE-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  CustomerForm!: FormGroup;
  submitted = true;

   listaUnidades: unidades;

  apelido:unidades;
  local:unidades;
  marca:unidades;
  modelo: unidades;
  ativo: unidades;

  constructor(private fb: FormBuilder, private http: HttpClient, private unidadeService:UnidadesService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
   
    const id = this.route.snapshot.paramMap.get('id')
 this.buscarId(id).subscribe(unidade =>{
   this.listaUnidades = unidade;

   this.CustomerForm = this.fb.group({
    apelido: new FormControl(),
    local: new FormControl(),
    marca: new FormControl(),
    modelo: new FormControl(),
    ativo: new FormControl(),
   
  })
   
 })


  }

  buscarId(id:string):Observable<unidades>{
    const url = `http://localhost:3000/lista_unidades/` + id;
    return this.http.get<unidades>(url)
  }
  // update(unidade: unidades):Observable<unidades>{
  //   const url = `http://localhost:3000/lista_unidades/` + unidade.id;
  //   return this.http.put<unidades>(url, unidade)
  // }

  atualizarUnidade(): void{

  }

}
