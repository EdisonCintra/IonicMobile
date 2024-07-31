import { Component, OnInit } from '@angular/core';
import { DadosFormulario } from '../models/dados';
import {Router} from "@angular/router";
import {DadosService} from "../services/dados.service";
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {

  dadosFormulario: DadosFormulario = {
    nome: '',
    telefone: '',
    endereco: '',
    sexo: false,
    cidade: [] as string[],
    interesses: [] as string[]

  };

  cidade1: boolean = false;
  cidade2: boolean = false;
  cidade3: boolean = false;

  interesse1: boolean = false;
  interesse2: boolean = false;
  interesse3: boolean = false;
  interesse4: boolean = false;

  constructor(public dados : DadosService, public route : Router) { }

  salvar(form: NgForm) {
    if (form.valid) {
      if (this.dadosFormulario.sexo=== undefined || this.dadosFormulario.sexo === null) {
        this.dadosFormulario.sexo = false;
      }

      if (this.cidade1) {
        this.dadosFormulario.cidade.push("Cidade 1");
      }
      if (this.cidade2) {
        this.dadosFormulario.cidade.push("Cidade 2 ");
      }
      if (this.cidade3) {
        this.dadosFormulario.cidade.push("Cidade 3");
      }

      if (this.interesse1) {
        this.dadosFormulario.interesses.push("Esportes ");
      }
      if (this.interesse2) {
        this.dadosFormulario.interesses.push("Músicas");
      }
      if (this.interesse3) {
        this.dadosFormulario.interesses.push("Leitura");
      }
      if (this.interesse4) {
        this.dadosFormulario.interesses.push("Artes");
      }

      console.log('Dados do formulário:', JSON.stringify(this.dadosFormulario));
      this.dados.adicionarDados(this.dadosFormulario)

      this.resetFormulario();
      this.route.navigate(['/home'])
    } else {
      console.error('Formulário inválido. Verifique os campos.');
    }
  }
  resetFormulario() {
    this.dadosFormulario.nome = '';
    this.dadosFormulario.telefone = '';
    this.dadosFormulario.endereco = '';
    this.dadosFormulario.sexo= false;
    this.dadosFormulario.cidade = [];
    this.dadosFormulario.interesses = [];
  }

  ngOnInit() {
  }

  atualizarOpcao1() {
    this.cidade1 = !this.cidade1;
  }

  atualizarOpcao2() {
    this.cidade2 = !this.cidade2;
  }

  atualizarOpcao3() {
    this.cidade3 = !this.cidade3;
  }

  atualizarOpcao5() {
    this.interesse1 = !this.interesse1;
  }


  atualizarOpcao6() {
    this.interesse2 = !this.interesse2;
  }

  atualizarOpcao7() {
    this.interesse3 = !this.interesse3;
  }

  atualizarOpcao8() {
    this.interesse4 = !this.interesse4;
  }


  cadastrar(){

  }
}
