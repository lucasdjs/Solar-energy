import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Route,  RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { LoginComponent } from 'components/login/login.component';
import { DashboardComponent } from 'components/dashboard/dashboard.component';
import { HeaderComponent } from 'components/header/header.component';
import { UnidadesComponent } from 'components/unidades/unidades.component';
import { LancamentoGeracaoMensalComponent } from 'components/lancamento-geracao-mensal/lancamento-geracao-mensal.component';
import { HomeComponent } from 'pages/home/home.component';
import { NewUnitsComponent } from 'components/new-units/new-units.component';


const ROUTES: Route[] =[
    {
      path:"",
      component: LoginComponent

     },
     {
      path:"home",
      component: HomeComponent

     },
    {
      path:'dashboard',
      component: DashboardComponent
     },
    {
      path:'unidade',
      component: UnidadesComponent
     },
     
    {
      path:'cadastro-de-energia',
      component: LancamentoGeracaoMensalComponent
     },
    {
      path:'new-unity',
      component: NewUnitsComponent
     },
    
]



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent, 
    LancamentoGeracaoMensalComponent,
    UnidadesComponent,
    HomeComponent,
    NewUnitsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
     ReactiveFormsModule,
     BrowserAnimationsModule,
     HttpClientModule

     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
