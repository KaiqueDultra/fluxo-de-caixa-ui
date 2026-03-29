import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss',
})
export class CadastroComponent {

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  // ✅ FORM
  form = this.fb.nonNullable.group({
    nome: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    telefone: ['', [Validators.required, Validators.minLength(10)]],
    senha: ['', [Validators.required, Validators.minLength(6)]],
  });

  // ✅ TOAST
  toastVisible = false;
  toastMessage = '';

  // ✅ LOADING
  isLoading = false;

  showToast(message: string) {
    this.toastMessage = message;
    this.toastVisible = true;
  }

  // ✅ SUBMIT
  onSubmit() {
    if (this.form.invalid || this.isLoading) return;

    this.isLoading = true;

    this.authService.register(this.form.value).subscribe({
      next: () => {

        // 🔥 1. MOSTRA O TOAST
        this.showToast('Conta criada com sucesso! 🎉');

        // 🔥 2. DEIXA O ANGULAR RESPIRAR (renderizar)
        setTimeout(() => {

          // 🔥 3. ESPERA + NAVEGA
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 1500);

        }, 50);

        this.isLoading = false;
      },
      error: () => {
        this.showToast('Erro ao cadastrar usuário ❌');
        this.isLoading = false;
      }
    });
  }
}
