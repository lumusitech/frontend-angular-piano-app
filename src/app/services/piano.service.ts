import { Injectable } from '@angular/core';
import { Piano } from '../interfaces/piano.interface';

const piano: Piano = {
  id: '',
  keys: [
    {
      id: 'c4',
      soundUrl: '../../assets/sonidos/c4.wav',
      bgColor: 'rgb(35, 100, 170)',
    },
    {
      id: 'd4',
      soundUrl: '../../assets/sonidos/d4.wav',
      bgColor: 'rgb(61, 165, 217)',
    },
    {
      id: 'e4',
      soundUrl: '../../assets/sonidos/e4.wav',
      bgColor: 'rgb(115, 191, 184)',
    },
    {
      id: 'f4',
      soundUrl: '../../assets/sonidos/f4.wav',
      bgColor: 'rgb(254, 198, 1)',
    },
    {
      id: 'g4',
      soundUrl: '../../assets/sonidos/g4.wav',
      bgColor: 'rgb(234, 115, 23)',
    },
    {
      id: 'a4',
      soundUrl: '../../assets/sonidos/a4.wav',
      bgColor: 'rgb(243, 179, 145)',
    },
    {
      id: 'b4',
      soundUrl: '../../assets/sonidos/b4.wav',
      bgColor: 'rgb(246, 212, 186)',
    },
  ],
};

@Injectable({ providedIn: 'root' })
export class PianoService {
  getPiano(): Piano {
    return structuredClone(piano);
  }
}
