import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Collapse } from 'bootstrap';
@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  isScrolled = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50)
  }
  constructor(private elementRef: ElementRef) {}

  closeNavbar() {
    const navbar = this.elementRef.nativeElement.querySelector('.navbar-collapse');
    const bsCollapse = Collapse.getInstance(navbar) || new Collapse(navbar, { toggle: false });
    bsCollapse.hide();
  }

}
