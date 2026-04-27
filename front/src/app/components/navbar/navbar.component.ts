import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  scrolled = signal(false);
  menuOpen = signal(false);

  readonly links = [
    { label: 'Inicio',      href: '#hero' },
    { label: 'Sobre mí',    href: '#about' },
    { label: 'Skills',      href: '#skills' },
    { label: 'Proyectos',   href: '#projects' },
    { label: 'Experiencia', href: '#experience' },
    { label: 'Contacto',    href: '#contact' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 60);
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

  scrollTo(href: string) {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
    this.closeMenu();
  }
}
