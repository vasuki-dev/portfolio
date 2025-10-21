import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { RouterModule } from '@angular/router';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header,RouterModule,Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio-website');
}
