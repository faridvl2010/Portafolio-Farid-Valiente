import {
  Component, signal, ViewChild, ElementRef, AfterViewChecked,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface TLine {
  text: string;
  type: 'input' | 'ok' | 'err' | 'info' | 'out';
}

@Component({
  selector: 'app-terminal-widget',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './terminal-widget.component.html',
  styleUrl: './terminal-widget.component.scss',
})
export class TerminalWidgetComponent implements AfterViewChecked {
  @ViewChild('termBody') termBodyRef!: ElementRef<HTMLDivElement>;
  @ViewChild('cmdInput') cmdInputRef!: ElementRef<HTMLInputElement>;

  open  = signal(false);
  input = signal('');
  history = signal<TLine[]>([
    { text: "Welcome! Type 'help' for commands.", type: 'info' },
  ]);

  private shouldScroll = false;

  toggle() {
    this.open.update(v => !v);
    if (this.open()) {
      setTimeout(() => this.cmdInputRef?.nativeElement.focus(), 50);
    }
  }

  onKey(e: KeyboardEvent) {
    if (e.key !== 'Enter') return;
    const cmd = this.input().trim().toLowerCase();
    if (!cmd) return;
    this.execCommand(cmd);
    this.input.set('');
    this.shouldScroll = true;
  }

  ngAfterViewChecked() {
    if (this.shouldScroll && this.termBodyRef) {
      const el = this.termBodyRef.nativeElement;
      el.scrollTop = el.scrollHeight;
      this.shouldScroll = false;
    }
  }

  private add(...lines: TLine[]) {
    this.history.update(h => [...h, ...lines]);
  }

  private execCommand(cmd: string) {
    this.add({ text: `$ ${cmd}`, type: 'input' });

    switch (cmd) {
      case 'help':
        this.add(
          { text: 'Available commands:', type: 'info' },
          { text: '  whoami   → developer info', type: 'out' },
          { text: '  skills   → top skills', type: 'out' },
          { text: '  contact  → contact info', type: 'out' },
          { text: '  ls       → list sections', type: 'out' },
          { text: '  clear    → clear terminal', type: 'out' },
          { text: '  exit     → close terminal', type: 'out' },
        );
        break;

      case 'whoami':
        this.add(
          { text: 'Farid Alexander Valiente Valbuena', type: 'ok' },
          { text: 'Ingeniero de Sistemas & Computación', type: 'out' },
          { text: '5+ years fullstack experience', type: 'out' },
          { text: 'Bogotá D.C., Colombia', type: 'out' },
        );
        break;

      case 'skills':
        this.add(
          { text: '▸ Top Skills', type: 'info' },
          { text: '  Angular / TypeScript  → 92%', type: 'out' },
          { text: '  Node.js / NestJS      → 92%', type: 'out' },
          { text: '  Java / Spring Boot    → 88%', type: 'out' },
          { text: '  AWS / Docker          → 84%', type: 'out' },
          { text: '  Cypress / Playwright  → 85%', type: 'out' },
        );
        break;

      case 'contact':
        this.add(
          { text: 'email    : faridvl2010@gmail.com', type: 'ok' },
          { text: 'phone    : (57) 3023662207', type: 'out' },
          { text: 'github   : github.com/faridvl2010', type: 'out' },
          { text: 'linkedin : linkedin.com/in/farid-alexander-valiente-valbuena-051014275', type: 'out' },
        );
        break;

      case 'ls':
        this.add(
          { text: 'hero/  about/  skills/  projects/  experience/  contact/', type: 'ok' },
        );
        break;

      case 'clear':
        this.history.set([]);
        break;

      case 'exit':
        this.open.set(false);
        break;

      default:
        this.add({ text: `bash: ${cmd}: command not found. Try 'help'`, type: 'err' });
    }
  }
}
