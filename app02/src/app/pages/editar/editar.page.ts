import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DadosFormulario } from "../models/dados";
import { DadosService } from "../services/dados.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {
  id: number | null = null;

  dadosFormulario: DadosFormulario = {
    nome: '',
    telefone: '',
    endereco: '',
    sexo: false,
    cidade: [],
    interesses: []
  };

  cidade1: boolean = false;
  cidade2: boolean = false;
  cidade3: boolean = false;

  interesse1: boolean = false;
  interesse2: boolean = false;
  interesse3: boolean = false;
  interesse4: boolean = false;

  constructor(public dados: DadosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.id = +idParam;
      this.carregarDados(this.id);
    }
  }

  carregarDados(id: number) {
    const dadosExistentes = this.dados.getDadosById(id);
    if (dadosExistentes) {
      this.dadosFormulario = { ...dadosExistentes };
      this.cidade1 = this.dadosFormulario.cidade.includes('Cidade 1');
      this.cidade2 = this.dadosFormulario.cidade.includes('Cidade 2');
      this.cidade3 = this.dadosFormulario.cidade.includes('Cidade 3');
      this.interesse1 = this.dadosFormulario.interesses.includes('Esportes');
      this.interesse2 = this.dadosFormulario.interesses.includes('Músicas');
      this.interesse3 = this.dadosFormulario.interesses.includes('Leitura');
      this.interesse4 = this.dadosFormulario.interesses.includes('Artes');
    }
  }

  salvar(form: NgForm) {
    if (form.valid) {
      this.dadosFormulario.cidade = [];
      if (this.cidade1) this.dadosFormulario.cidade.push("Cidade 1");
      if (this.cidade2) this.dadosFormulario.cidade.push("Cidade 2");
      if (this.cidade3) this.dadosFormulario.cidade.push("Cidade 3");

      this.dadosFormulario.interesses = [];
      if (this.interesse1) this.dadosFormulario.interesses.push("Esportes");
      if (this.interesse2) this.dadosFormulario.interesses.push("Músicas");
      if (this.interesse3) this.dadosFormulario.interesses.push("Leitura");
      if (this.interesse4) this.dadosFormulario.interesses.push("Artes");

      if (this.id !== null) {
        this.dados.atualizarDados(this.id, this.dadosFormulario);
      } else {
        this.dados.adicionarDados(this.dadosFormulario);
      }

      this.router.navigate(['/home']);
    } else {
      console.error('Formulário inválido. Verifique os campos.');
    }
  }
}
