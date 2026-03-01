import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  toastVisible = false;
  toastMessage = '';

  showPlanilhaToast() {
    this.toastMessage = 'Planilha ainda não disponível para download';
    this.toastVisible = true;
  }

  closeToast() {
    this.toastVisible = false;
  }
}

