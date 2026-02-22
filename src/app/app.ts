import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [
    ReactiveFormsModule
  ]
})
export class AppComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [
        Validators.required,
        Validators.pattern(/^[0-9]{10,11}$/),
        Validators.minLength(10),
        this.onlyNumbersPhone
      ]]
    });
  }

  onlyNumbersPhone(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (value && !/^\d+$/.test(value)) {
      return { onlyNumbers: true}
    }
    return null;
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Dados do formulário:', this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
