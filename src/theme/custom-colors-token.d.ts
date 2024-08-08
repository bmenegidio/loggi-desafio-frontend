import { Palette, PaletteOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    gradient: {
      primary: Palette['primary'];
      secondary: Palette['primary'];
    };
  }
  interface PaletteOptions {
    gradient: {
      primary: PaletteOptions['primary'];
      secondary: PaletteOptions['primary'];
    };
  }
}
