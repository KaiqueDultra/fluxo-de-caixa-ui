import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  modalAberto = false;
  isDownloading = false;

  toastVisible = false;
  toastMessage = '';

  constructor(private cdr: ChangeDetectorRef) {}

  abrirModal() {
    this.modalAberto = true;
    document.body.style.overflow = 'hidden';
  }

  fecharModal() {
    this.modalAberto = false;
    document.body.style.overflow = 'auto';
  }

  confirmarDownload() {
    if (this.isDownloading) return;

    this.isDownloading = true;

    const link = document.createElement('a');
    link.href = 'assets/files/Fluxo_de_Caixa.xlsx';
    link.download = 'fluxo-de-caixa.xlsx';
    link.click();

    setTimeout(() => {
      this.modalAberto = false;
      this.isDownloading = false;
      document.body.style.overflow = 'auto';

      this.cdr.detectChanges();

      this.showToast('Download da planilha realizado com sucesso!');
    }, 3000);
  }

  showToast(message: string) {
    this.toastMessage = message;
    this.toastVisible = true;

    this.cdr.detectChanges();

    setTimeout(() => {
      this.toastVisible = false;
      this.cdr.detectChanges();
    }, 6000);
  }
}
