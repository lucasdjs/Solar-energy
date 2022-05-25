import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'DSE-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  CustomerForm!: FormGroup;
  submitted = true;
  email:string = "";
  password:string = "";

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.CustomerForm = this.fb.group({
      email: new FormControl('', [ Validators.email]),
      password: new FormControl('', Validators.minLength(8))
    })


  }
  validar() {
    alert("Usuário logado com sucesso!" )
    this.submitted = true;

    if (this.CustomerForm.invalid) {
   
      return ;
      

    }
 

  }
}
