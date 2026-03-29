import { Component, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {

  form: any;

  toastVisible = false;
  toastMessage = '';
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private cdr: ChangeDetectorRef // 🔥 ADICIONADO
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]
    });
  }

  showToast(message: string) {
    this.toastMessage = message;
    this.toastVisible = true;

    // 🔥 força render do Angular
    this.cdr.detectChanges();

    setTimeout(() => {
      this.toastVisible = false;
      this.cdr.detectChanges();
    }, 3000);
  }

  onSubmit() {
    if (this.form.invalid || this.isLoading) return;

    this.isLoading = true;

    this.authService.login(this.form.value)
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe({
        next: () => {
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          console.log('Erro login:', err);

          const mensagemBackend =
            err?.error?.message ||
            err?.error?.erro ||
            'Email ou senha inválidos ❌';

          this.showToast(mensagemBackend);
        }
      });
  }
}
