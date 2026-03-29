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
      cargo: 'Desenvolvedor Front-end',
      descricao: 'Responsável pela interface e experiência do usuário.',
      foto: 'assets/images/pig-money.png'
    },
    {
      nome: 'Kaillany Lima de Almeida',
      cargo: 'Back-end',
      descricao: 'Responsável pelas regras de negócio.',
      foto: 'assets/images/pig-money.png'
    },
    {
      nome: 'Julia Helena Saffe',
      cargo: 'Back-end',
      descricao: 'Responsável pelas regras de negócio.',
      foto: 'assets/images/pig-money.png'
    },
    {
      nome: 'Rawany Tamires Faustino Lucinda',
      cargo: 'Back-end',
      descricao: 'Responsável pelas regras de negócio.',
      foto: 'assets/images/pig-money.png'
    },
    {
      nome: 'Sara Andrade Timóteo dos Santos',
      cargo: 'Back-end',
      descricao: 'Responsável pelas regras de negócio.',
      foto: 'assets/images/pig-money.png'
    },
    {
      nome: 'Erika Cristina de Oliveira Jacinto',
      cargo: 'Back-end',
      descricao: 'Responsável pelas regras de negócio.',
      foto: 'assets/images/pig-money.png'
    },
    {
      nome: 'Giovanna Lionardo Saraiva',
      cargo: 'Back-end',
      descricao: 'Responsável pelas regras de negócio.',
      foto: 'assets/images/pig-money.png'
    },
    {
      nome: 'Allan Fernandes de Souza Archanjo',
      cargo: 'Back-end',
      descricao: 'Responsável pelas regras de negócio.',
      foto: 'assets/images/pig-money.png'
    },
    {
      nome: 'Jennifer Micaela Ricardo Marques',
      cargo: 'Back-end',
      descricao: 'Responsável pelas regras de negócio.',
      foto: 'assets/images/pig-money.png'
    }
  ];

}
