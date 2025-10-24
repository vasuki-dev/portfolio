import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements AfterViewInit {
  titles = [
    'Angular Developer',
    'Frontend Developer',
    'Backend Developer',
    'Full-Stack Developer',
    'Blogger'
  ];
  private typingElement!: HTMLElement;
  private text = '';
  private wordIndex = 0;
  private charIndex = 0;
  private deleting = false;
  constructor(private router: Router) { }
  ngAfterViewInit(): void {
    // Start typing only after view is fully loaded
    const el = document.querySelector('.typing-text') as HTMLElement;
    if (el) {
      this.typingElement = el;
      this.typeEffect();
    } else {
      console.error('Typing element not found!');
    }
  }
  viewWork() {
    this.router.navigate(['/project'])
  }
  private typeEffect() {
    const currentWord = this.titles[this.wordIndex];
    const speed = this.deleting ? 70 : 150;

    if (this.deleting) {
      this.text = currentWord.substring(0, this.charIndex--);
    } else {
      this.text = currentWord.substring(0, this.charIndex++);
    }

    this.typingElement.textContent = this.text;

    // Word complete
    if (!this.deleting && this.text === currentWord) {
      this.deleting = true;
      setTimeout(() => this.typeEffect(), 1000); // pause before deleting
      return;
    }

    // Word deleted completely
    if (this.deleting && this.text === '') {
      this.deleting = false;
      this.wordIndex = (this.wordIndex + 1) % this.titles.length;
    }

    setTimeout(() => this.typeEffect(), speed);
  }
}
