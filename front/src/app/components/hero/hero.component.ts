import {
  Component, OnInit, OnDestroy, AfterViewInit,
  signal, inject, ViewChild, ElementRef,
} from '@angular/core';
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
export class HeroComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('matrixCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  private readonly portfolioService = inject(PortfolioService);

  profile    = signal<Profile | null>(null);
  typedText  = signal('');
  showCursor = signal(true);

  private readonly phrases = [
    'Desarrollador Fullstack Senior',
    'Arquitecto de Software',
    'Ingeniero de Sistemas',
    'Backend Specialist',
    'Problem Solver',
  ];
  private phraseIndex  = 0;
  private charIndex    = 0;
  private deleting     = false;
  private typeTimer?:   ReturnType<typeof setTimeout>;
  private cursorTimer?: ReturnType<typeof setInterval>;
  private rafId?:       number;
  private resizeObs?:   ResizeObserver;

  ngOnInit() {
    this.portfolioService.getProfile().subscribe({ next: p => this.profile.set(p) });
    this.startTyping();
    this.cursorTimer = setInterval(() => this.showCursor.update(v => !v), 530);
  }

  ngAfterViewInit() {
    this.initMatrix();
  }

  ngOnDestroy() {
    clearTimeout(this.typeTimer);
    clearInterval(this.cursorTimer);
    cancelAnimationFrame(this.rafId!);
    this.resizeObs?.disconnect();
  }

  private initMatrix() {
    const canvas = this.canvasRef.nativeElement;
    const ctx    = canvas.getContext('2d')!;

    const chars = '01アイウエカキサシスタチハヒフマミラリルABCDEF{}[]()<>/\\#$';
    const size  = 13;
    let cols: number, drops: number[];

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      cols  = Math.floor(canvas.width / size);
      drops = new Array(cols).fill(1);
    };
    resize();

    this.resizeObs = new ResizeObserver(resize);
    this.resizeObs.observe(canvas);

    const draw = () => {
      ctx.fillStyle = 'rgba(10,10,15,0.055)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${size}px monospace`;

      for (let i = 0; i < cols; i++) {
        const ch      = chars[Math.floor(Math.random() * chars.length)];
        const opacity = Math.random() * 0.45 + 0.08;
        ctx.fillStyle = `rgba(0,255,136,${opacity})`;
        ctx.fillText(ch, i * size, drops[i] * size);
        if (drops[i] * size > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
      this.rafId = requestAnimationFrame(draw);
    };
    this.rafId = requestAnimationFrame(draw);
  }

  private startTyping() {
    const current = this.phrases[this.phraseIndex];
    if (!this.deleting) {
      this.typedText.set(current.slice(0, ++this.charIndex));
      if (this.charIndex === current.length) {
        this.deleting = true;
        this.typeTimer = setTimeout(() => this.startTyping(), 2200);
        return;
      }
    } else {
      this.typedText.set(current.slice(0, --this.charIndex));
      if (this.charIndex === 0) {
        this.deleting     = false;
        this.phraseIndex  = (this.phraseIndex + 1) % this.phrases.length;
      }
    }
    this.typeTimer = setTimeout(() => this.startTyping(), this.deleting ? 55 : 95);
  }

  scrollTo(id: string) {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
