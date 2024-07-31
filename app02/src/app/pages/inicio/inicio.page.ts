import { Component, OnInit } from '@angular/core';
import { DadosFormulario } from "../models/dados";
import { DadosService } from "../services/dados.service";
import { AlertController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  dadosCadastrados: DadosFormulario[] = [];
  pos: number = 0;
  indexObj: number = 0;

  constructor(public dados: DadosService,
              public servico: DadosService,
              public rota: Router,
              public alert: AlertController) { }

  ionViewWillEnter() {
    this.listarDados();
  }

  ngOnInit() { }

  listarDados() {
    this.dadosCadastrados = this.dados.visualizarDados();
  }

  async alertExcluir(obj: DadosFormulario) {
    this.indexObj = this.servico.encontrarPosicaoObj(obj);

    const alert = await this.alert.create({
      header: 'Excluir item !',
      message: 'Deseja realmente excluir o item ?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        }, {
          text: 'Excluir',
          handler: async () => {
            this.servico.deletarItem(this.indexObj);
          }
        }
      ]
    });
    await alert.present();
  }

  editarItem(obj: DadosFormulario) {
    this.indexObj = this.servico.encontrarPosicaoObj(obj);
    if (this.indexObj !== -1) {
      this.rota.navigate(['editar/' + this.indexObj]);
    } else {
      console.error("Objeto não encontrado");
    }
  }
}

