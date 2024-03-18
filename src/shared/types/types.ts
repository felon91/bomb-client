// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Any = any;
export type AnyObj = Record<string, Any>;

export enum ColorType {
  Red = '#f00',
  Primary = '#9A073C',
  Primary80 = '#920638',
  Primary160 = '#B10C48',
  Primary240 = '#b8708a',

  Secondary = '#0B245B',
  Secondary80 = '#a7b9e0',

  Green = '#3C9A07',

  Black = '#222222',

  Gray = '#656565',
  Gray10 = '#76829E',
  Gray80 = '#D1D8DA',

  Silver = '#E1E0E0',
  Silver80 = '#F9FAF5',

  White = '#fff',
  Transparent = 'transparent',
}

export enum Indents {
  '4px' = '4px',
  '6px' = '6px',
  '8px' = '8px',
  '10px' = '10px',
  '12px' = '12px',
  '16px' = '16px',
  '20px' = '20px',
  '24px' = '24px',
  '28px' = '28px',
  '32px' = '32px',
  '36px' = '36px',
  '40px' = '40px',
  '44px' = '44px',
  '48px' = '48px',
  '52px' = '52px',
  '56px' = '56px',
  '60px' = '60px',
  '112px' = '112px',
}
export enum FontSizes {
  '14px' = '14px',
  '16px' = '16px',
  '18px' = '18px',
  '20px' = '20px',
  '22px' = '22px',
  '24px' = '24px',
  '26px' = '26px',
  '28px' = '28px',
  '30px' = '30px',
  '32px' = '32px',
  '40px' = '40px',
  '64px' = '64px',
}

export enum BreakPoints {
  sm = '576px',
  md = '768px',
  lg = '992px',
  extraLg = '1230px',
  xl = '1480px',
}
