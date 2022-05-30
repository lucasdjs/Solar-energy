import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { unidades } from 'models/modelo.unidades';

@Component({
  selector: 'DSE-new-units',
  templateUrl: './new-units.component.html',
  styleUrls: ['./new-units.component.scss']
})
export class NewUnitsComponent implements OnInit {
  
  CustomerForm!: FormGroup;
  submitted = true;

  public listaUnidades: unidades;
  

  apelido:unidades;
  local:unidades;
  marca:unidades;
  modelo: unidades;
  ativo: boolean = false;


  constructor(private fb: FormBuilder, private route:Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.CustomerForm = this.fb.group({
      apelido: new FormControl(Validators.required),
      local: new FormControl(Validators.required),
      marca: new FormControl(Validators.required),
      modelo: new FormControl(Validators.required),
      ativo: new FormControl(),
     
    })

    
}
validar(patch:string){
  
  if (this.CustomerForm.invalid) {
    return ;
  }

  this.http.post( "http://localhost:3000/lista_unidades", this.CustomerForm.value ).subscribe(_ =>this.route.navigateByUrl(patch));

}

 
}
