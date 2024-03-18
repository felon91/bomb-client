import 'styled-components';
import {ColorType, FontSizes, Indents} from '@/shared/types/types';

type ColorTypeKeys = keyof typeof ColorType;
type IndentKeys = keyof typeof Indents;
type FontSizeKeys = keyof typeof FontSizes;

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: { [key in ColorTypeKeys]: ColorType };
    indents: { [key in IndentKeys]: Indents };
    fontSize: { [key in FontSizeKeys]: FontSizes };
  }
}
