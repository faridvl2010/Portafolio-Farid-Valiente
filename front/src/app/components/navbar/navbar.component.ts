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
  scrolled       = signal(false);
  menuOpen       = signal(false);
  activeSection  = signal('hero');

  readonly links = [
    { label: 'Inicio',      href: '#hero'       },
    { label: 'Sobre mí',    href: '#about'      },
    { label: 'Skills',      href: '#skills'     },
    { label: 'Proyectos',   href: '#projects'   },
    { label: 'Experiencia', href: '#experience' },
    { label: 'Contacto',    href: '#contact'    },
  ];

  private readonly sectionIds = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 60);
    this.updateActiveSection();
  }

  private updateActiveSection() {
    const offset = 140;
    for (const id of [...this.sectionIds].reverse()) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= offset) {
        this.activeSection.set(id);
        return;
      }
    }
    this.activeSection.set('hero');
  }

  isActive(href: string): boolean {
    return href === `#${this.activeSection()}`;
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
