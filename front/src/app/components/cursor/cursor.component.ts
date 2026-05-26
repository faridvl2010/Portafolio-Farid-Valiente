import { Component, OnInit, OnDestroy, signal } from '@angular/core';

@Component({
  selector: 'app-cursor',
  standalone: true,
  template: `
    <div class="cursor-dot" [style.left.px]="pos().x" [style.top.px]="pos().y"></div>
    <div class="cursor-ring"
         [style.left.px]="ring().x"
         [style.top.px]="ring().y"
         [class.hover]="hovered()"></div>
  `,
  styleUrl: './cursor.component.scss',
})
export class CursorComponent implements OnInit, OnDestroy {
  pos     = signal({ x: -200, y: -200 });
  ring    = signal({ x: -200, y: -200 });
  hovered = signal(false);

  private rx = -200;
  private ry = -200;
  private rafId?: number;

  private readonly onMove = (e: MouseEvent) => {
    this.pos.set({ x: e.clientX, y: e.clientY });
    this.hovered.set(
      !!(e.target as Element)?.closest(
        'a, button, [role="button"], .tag, input, textarea, select, label'
      )
    );
  };

  ngOnInit() {
    document.addEventListener('mousemove', this.onMove);
    const lerp = () => {
      const { x, y } = this.pos();
      this.rx += (x - this.rx) * 0.12;
      this.ry += (y - this.ry) * 0.12;
      this.ring.set({ x: this.rx, y: this.ry });
      this.rafId = requestAnimationFrame(lerp);
    };
    this.rafId = requestAnimationFrame(lerp);
  }

  ngOnDestroy() {
    document.removeEventListener('mousemove', this.onMove);
    cancelAnimationFrame(this.rafId!);
  }
}
