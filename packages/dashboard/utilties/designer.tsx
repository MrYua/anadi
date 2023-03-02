interface Breakpoints {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

interface GridProps {
  /**
   * @default 0
   */
  gutter: number | [number, number];
  /**
   * @default Infinity
   */
  rows: number;
  /**
   * @default 80
   */
  rowHeight: number;
  /**
   * @default Infinity
   */
  maxRows: number;
  /**
   * @default 24
   */
  cols: number;

  breakpoints: Breakpoints;
}

const defaultBreakpoints = {
  xs: 2,
  sm: 6,
  md: 8,
  lg: 10,
  xl: 12,
};

const defaultProps = {
  gutter: 0,
  rows: Infinity,
  rowHeight: 80,
  maxRows: Infinity,
  cols: 24,
  breakpoints: defaultBreakpoints,
};

export function createLayout() {
  return <div class="layout">
    
  </div>;
}

/**
 * @description
 * @param props
 */
export function createGrid(props: GridProps) {
  const { gutter } = props;

  return <div class="grid"></div>;
}

export function createLayer() {}

export function createData() {}

export function createBlock() {}

export function createSandbox() {}
