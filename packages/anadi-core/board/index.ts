export interface Node {
  x: number;
  y: number;
  w: number;
  h: number;
  i: string;
  name: string;
  static: boolean;
  component: string;
}

export type Nodes = Node[];

export interface Options {
  data: Nodes;
  preventCollision?: boolean;
  responsive?: boolean;
}
