import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
} from '@angular/forms';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [
    ReactiveFormsModule,
    RouterOutlet
  ]
})
export class AppComponent {

}
