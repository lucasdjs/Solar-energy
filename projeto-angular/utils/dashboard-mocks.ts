import { unidades } from "models/modelo.unidades";
import { lista_unidades } from "./unidades-mock";
import { UnidadesComponent } from "components/unidades/unidades.component";
import { HttpClient } from "@angular/common/http";


 export let lista_dashboard =[
    {titulo:"Total de unidades",unidade:0},
    {titulo:"Unidades Ativas",unidade:0}, 
    {titulo:"Unidades Inativas",unidade:0},
    {titulo:"Média de unidades",unidade:0}
  ]

