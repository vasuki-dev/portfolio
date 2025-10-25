import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
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
  nodes = [
    { name: 'Angular', icon: 'assets/icons/angular.svg' },
    { name: 'JavaScript', icon: 'assets/icons/javascript.svg' },
    { name: 'Typescript', icon: 'assets/icons/typescript.svg' },
    { name: 'NodeJS', icon: 'assets/icons/nodejs.svg' },
    { name: 'SQL', icon: 'assets/icons/sql.svg' },
  ];

  radii = [140, 190, 250, 310, 370];
  speeds = [14, 20, 26, 32, 38];

  ngOnInit() { }

  getOrbitStyle(i: number) {
    const radius = 130 + i * 60;   // distance from center
    const duration = 25 + i * 5;   // slower rotation for outer planets
    const delay = i * 4;           // start at different times
    const angle = i * (360 / this.nodes.length); // evenly spaced angle
    return {
      width: `${radius * 2}px`,
      height: `${radius * 2}px`,
      transform: `translate(-50%, -50%) rotate(${angle}deg)`,
      animation: `rotate ${duration}s linear infinite`,
      'animation-delay': `${delay}s`
    };
  }
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
