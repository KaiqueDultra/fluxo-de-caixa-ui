import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {

  integrantes = [
    {
      nome: 'Bruna Paz Callemi Lucas',
      descricao: 'Responsável pela interface e experiência do usuário.',
      foto: 'assets/images/bruna.jpeg'
    },
    {
      nome: 'Kaillany Lima de Almeida',
      descricao: 'Responsável pela interface e experiência do usuário.',
      foto: 'assets/images/pig-money.png'
    },
    {
      nome: 'Julia Helena Saffe',
      descricao: 'Responsável pelas imagens e icons usados no Fluxo de Caixa.',
      foto: 'assets/images/julia.jpeg'
    },
    {
      nome: 'Rawany Tamires Faustino Lucinda',
      descricao: 'Responsável pelos empreendedores que utilizaram o Fluxo de Caixa.',
      foto: 'assets/images/rawany.jpeg'
    },
    {
      nome: 'Sara Andrade Timóteo dos Santos',
      descricao: 'Responsável pelos patrocinadores do Fluxo de Caixa.',
      foto: 'assets/images/pig-money.png'
    },
    {
      nome: 'Erika Cristina de Oliveira Jacinto',
      descricao: 'Responsável pelos patrocinadores do Fluxo de Caixa.',
      foto: 'assets/images/erika.jpeg'
    },
    {
      nome: 'Giovanna Lionardo Saraiva',
      descricao: 'Responsável pelas regras de negócio.',
      foto: 'assets/images/giovanna.jpeg'
    },
    {
      nome: 'Allan Fernandes de Souza Archanjo',
      descricao: 'Responsável pelo desenvolvimento da planilha.',
      foto: 'assets/images/pig-money.png'
    },
    {
      nome: 'Jennifer Micaela Ricardo Marques',
      descricao: 'Responsável pelas regras de negócio.',
      foto: 'assets/images/jennifer.jpeg'
    }
  ];

}
