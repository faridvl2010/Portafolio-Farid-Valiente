import { Component, OnInit, signal, output } from '@angular/core';
import { CommonModule } from '@angular/common';

interface BootLine {
  text: string;
  type: 'cmd' | 'ok' | 'warn' | 'info';
}

@Component({
  selector: 'app-boot-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './boot-screen.component.html',
  styleUrl: './boot-screen.component.scss',
})
export class BootScreenComponent implements OnInit {
  readonly done = output<void>();

  lines    = signal<BootLine[]>([]);
  progress = signal(0);
  finished = signal(false);
  visible  = signal(true);

  private readonly sequence: BootLine[] = [
    { text: '> Initializing portfolio v2.0.0...', type: 'cmd' },
    { text: '> Loading Angular 17 runtime...', type: 'cmd' },
    { text: '  [OK]  Framework bootstrapped', type: 'ok' },
    { text: '> Connecting to Node.js API...', type: 'cmd' },
    { text: '  [OK]  Backend ready', type: 'ok' },
    { text: '> Loading skill modules...', type: 'cmd' },
    { text: '  [OK]  Java / Spring Boot loaded', type: 'ok' },
    { text: '  [OK]  Angular / TypeScript loaded', type: 'ok' },
    { text: '  [OK]  Docker / AWS / Azure loaded', type: 'ok' },
    { text: '> Verifying experience data...', type: 'cmd' },
    { text: '  [OK]  5+ years confirmed', type: 'ok' },
    { text: '> Running system diagnostics...', type: 'cmd' },
    { text: '  [WARN] Coffee.level → critical', type: 'warn' },
    { text: '  [OK]  Problem solving → optimal', type: 'ok' },
    { text: '> All systems operational. Welcome!', type: 'ok' },
  ];

  ngOnInit() {
    if (sessionStorage.getItem('fv_booted')) {
      this.visible.set(false);
      this.done.emit();
      return;
    }
    this.runSequence();
  }

  private runSequence() {
    let i = 0;
    const step = () => {
      if (i >= this.sequence.length) {
        this.finished.set(true);
        sessionStorage.setItem('fv_booted', '1');
        setTimeout(() => { this.visible.set(false); this.done.emit(); }, 800);
        return;
      }
      this.lines.update(ls => [...ls, this.sequence[i++]]);
      this.progress.set(Math.round((i / this.sequence.length) * 100));
      setTimeout(step, 80 + Math.random() * 100);
    };
    step();
  }

  skip() {
    this.finished.set(true);
    sessionStorage.setItem('fv_booted', '1');
    setTimeout(() => { this.visible.set(false); this.done.emit(); }, 350);
  }
}
