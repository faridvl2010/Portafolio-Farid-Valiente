import {
  Component, signal, inject, ViewChild, ElementRef, AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortfolioService } from '../../services/portfolio.service';
import { RevealDirective } from '../../directives/reveal.directive';
import { ToastService } from '../../services/toast.service';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  size: number; color: string;
  rotation: number; rotVel: number;
  life: number;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  @ViewChild('confettiCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  private readonly portfolioService = inject(PortfolioService);
  private readonly toast = inject(ToastService);

  form: ContactForm = { name: '', email: '', subject: '', message: '' };
  submitted = signal(false);
  sending   = signal(false);

  readonly socials = [
    { icon: 'fab fa-github',   label: 'GitHub',   url: 'https://github.com/faridvl2010' },
    { icon: 'fab fa-linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/farid-alexander-valiente-valbuena-051014275' },
    { icon: 'fas fa-envelope', label: 'Email',    url: 'mailto:faridvl2010@gmail.com' },
  ];

  onSubmit() {
    if (!this.form.name || !this.form.email || !this.form.message) return;
    this.sending.set(true);
    setTimeout(() => {
      this.sending.set(false);
      this.submitted.set(true);
      this.form = { name: '', email: '', subject: '', message: '' };
      setTimeout(() => this.fireConfetti(), 50);
    }, 1200);
  }

  resetForm() {
    this.submitted.set(false);
  }

  private fireConfetti() {
    const canvas = this.canvasRef?.nativeElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#00ff88', '#00d4ff', '#9d4edd', '#ffbd2e', '#ff4757'];
    const particles: Particle[] = Array.from({ length: 100 }, () => ({
      x: canvas.width  / 2,
      y: canvas.height * 0.55,
      vx: (Math.random() - 0.5) * 14,
      vy: -(Math.random() * 12 + 4),
      size: Math.random() * 7 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * Math.PI * 2,
      rotVel: (Math.random() - 0.5) * 0.25,
      life: 1,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;
      for (const p of particles) {
        p.x  += p.vx;
        p.y  += p.vy;
        p.vy += 0.35;
        p.vx *= 0.985;
        p.rotation += p.rotVel;
        p.life -= 0.013;
        if (p.life <= 0) continue;
        alive = true;
        ctx.save();
        ctx.globalAlpha = p.life;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size * 0.5);
        ctx.restore();
      }
      if (alive) requestAnimationFrame(animate);
      else ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
    requestAnimationFrame(animate);
    this.toast.show('¡Mensaje enviado! Te responderé pronto.', 'success');
  }
}
