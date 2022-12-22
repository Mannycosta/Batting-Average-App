export type Player = {
  id: string;
  playerName: string;
  singles: number;
  doubles: number;
  triples: number;
  homeruns: number;
  walks: number;
  atBats: number;
  hits: number;
  outs: number;
};

export type Roster = Player[];
