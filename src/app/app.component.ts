import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Piano } from './interfaces/piano.interface';
import { PianoService } from './services/piano.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private readonly pianoService: PianoService = inject(PianoService);
  piano!: Piano;

  ngOnInit(): void {
    this.piano = this.pianoService.getPiano();
  }

  playSound(soundUrl: string) {
    new Audio(soundUrl).play();
  }
}
