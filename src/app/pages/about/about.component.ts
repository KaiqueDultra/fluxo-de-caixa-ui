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
      nome: 'Bruna Callemi',
      cargo: 'Desenvolvedor Front-end',
      descricao: 'Responsável pela interface e experiência do usuário.',
      foto: 'assets/images/pig-money.png'
    },
    {
      nome: 'Outro Nome',
      cargo: 'Back-end',
      descricao: 'Responsável pelas regras de negócio.',
      foto: 'assets/images/pig-money.png'
    },
    {
      nome: 'Outro Nome',
      cargo: 'Back-end',
      descricao: 'Responsável pelas regras de negócio.',
      foto: 'assets/images/pig-money.png'
    },
    {
      nome: 'Outro Nome',
      cargo: 'Back-end',
      descricao: 'Responsável pelas regras de negócio.',
      foto: 'assets/images/pig-money.png'
    },
    {
      nome: 'Outro Nome',
      cargo: 'Back-end',
      descricao: 'Responsável pelas regras de negócio.',
      foto: 'assets/images/pig-money.png'
    }
  ];

}
