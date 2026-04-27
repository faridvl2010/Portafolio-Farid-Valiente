import { Component, OnInit, OnDestroy, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { Profile } from '../../models/portfolio.model';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit, OnDestroy {
  private readonly portfolioService = inject(PortfolioService);

  profile = signal<Profile | null>(null);
  typedText = signal('');
  showCursor = signal(true);

  private readonly phrases = [
    'Ingeniero de Sistemas',
    'Full Stack Developer',
    'Software Architect',
    'Problem Solver',
  ];
  private phraseIndex = 0;
  private charIndex = 0;
  private deleting = false;
  private typeTimer?: ReturnType<typeof setTimeout>;
  private cursorTimer?: ReturnType<typeof setInterval>;

  ngOnInit() {
    this.portfolioService.getProfile().subscribe({
      next: (p) => this.profile.set(p),
    });
    this.startTyping();
    this.cursorTimer = setInterval(() => this.showCursor.update(v => !v), 500);
  }

  ngOnDestroy() {
    clearTimeout(this.typeTimer);
    clearInterval(this.cursorTimer);
  }

  private startTyping() {
    const current = this.phrases[this.phraseIndex];

    if (!this.deleting) {
      this.typedText.set(current.slice(0, ++this.charIndex));
      if (this.charIndex === current.length) {
        this.deleting = true;
        this.typeTimer = setTimeout(() => this.startTyping(), 2000);
        return;
      }
    } else {
      this.typedText.set(current.slice(0, --this.charIndex));
      if (this.charIndex === 0) {
        this.deleting = false;
        this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
      }
    }

    this.typeTimer = setTimeout(() => this.startTyping(), this.deleting ? 60 : 100);
  }

  scrollTo(id: string) {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
