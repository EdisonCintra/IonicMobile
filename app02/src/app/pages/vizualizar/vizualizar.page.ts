import { Component, OnInit } from '@angular/core';
import {DadosFormulario} from "../models/dados";
import {DadosService} from "../services/dados.service";
import {Router} from "@angular/router";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-vizualizar',
  templateUrl: './vizualizar.page.html',
  styleUrls: ['./vizualizar.page.scss'],
})
export class VizualizarPage implements OnInit {


  dadosCadastrados: DadosFormulario[] = [];



  constructor(public servico : DadosService,
              public rota : Router,
              public alert : AlertController) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.dadosCadastrados = this.servico.listarDados();

  }



}
