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
  private audioClips: { [key: string]: HTMLAudioElement } = {};
  piano!: Piano;

  ngOnInit(): void {
    // preload sounds to avoid big delay
    this.audioClips['c4'] = new Audio('../../assets/sonidos/c4.wav');
    this.audioClips['d4'] = new Audio('../../assets/sonidos/d4.wav');
    this.audioClips['d4'] = new Audio('../../assets/sonidos/d4.wav');
    this.audioClips['e4'] = new Audio('../../assets/sonidos/e4.wav');
    this.audioClips['f4'] = new Audio('../../assets/sonidos/f4.wav');
    this.audioClips['g4'] = new Audio('../../assets/sonidos/g4.wav');
    this.audioClips['a4'] = new Audio('../../assets/sonidos/a4.wav');
    this.audioClips['b4'] = new Audio('../../assets/sonidos/b4.wav');

    this.piano = this.pianoService.getPiano();
  }

  playSound(note: string) {
    this.audioClips[note].currentTime = 0;
    this.audioClips[note].play();
  }
}
