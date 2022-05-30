import { unidades } from "./modelo.unidades";

export class lancamento extends unidades{

    data:Date;
   total:number = 0;

   constructor(id:number, apelido:string, local: string,marca:string, modelo:string, ativo:boolean,unidade:string, data: Date, total:number){

    super(id,apelido,local,marca,modelo,ativo);

    this.data = data;
    this.total = total;

}
}