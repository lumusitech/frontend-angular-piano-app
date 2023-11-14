export interface Piano {
  id: string;
  keys: key[];
}

export interface key {
  id: string;
  soundUrl: string;
  bgColor: string;
}
