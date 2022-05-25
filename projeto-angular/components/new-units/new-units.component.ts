import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'DSE-new-units',
  templateUrl: './new-units.component.html',
  styleUrls: ['./new-units.component.scss']
})
export class NewUnitsComponent implements OnInit {
  
  CustomerForm!: FormGroup;
  submitted = true;

  apelido:string = "";
  local:string = "";
  marca:string = "";
  modelo: string = "";



  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.CustomerForm = this.fb.group({
      apelido: new FormControl(Validators.required),
      local: new FormControl(Validators.required),
      marca: new FormControl(Validators.required),
      modelo: new FormControl(Validators.required),
     
    })

    
}
validar(){
  
  this.submitted = true;
  
  if (this.CustomerForm.invalid) {
    return ;
  }
}
}
