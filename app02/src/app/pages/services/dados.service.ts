import { Injectable } from '@angular/core';
import { DadosFormulario } from '../models/dados';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  private dadosFormularios: DadosFormulario[] = [];
  indice : number = 0 ;

  constructor() { }

  public adicionarDados(dados: DadosFormulario){

    this.dadosFormularios.push({...dados});
    console.log("add dados serviço2: "+JSON.stringify(this.dadosFormularios))

  }

  public visualizarDados(){
    console.log("visualizar dados serviço: "+JSON.stringify(this.dadosFormularios))
    return this.dadosFormularios;

  }



  public listarDados(){
    console.log("Listar dados: "+JSON.stringify(this.dadosFormularios))
    return this.dadosFormularios;
  }


  public encontrarPosicaoObj(objProcurado : DadosFormulario) : number{

    const pos = this.dadosFormularios.findIndex(obj => JSON.stringify(obj) === JSON.stringify(objProcurado));
    //console.log("Pos: "+pos);
    return pos;

  }


  public deletarItem(index : number){
    this.dadosFormularios.splice(index,1);
  }

  atualizarDados(index: number, dados: DadosFormulario) {
    this.dadosFormularios[index] = dados;
  }

  getDadosById(id: number): DadosFormulario | undefined {
    return this.dadosFormularios[id];
  }




}
