import { Container as MuiContainer, ContainerProps } from '@mui/material';

export const Container = ({ children, ...restProps }: ContainerProps) => (
  <MuiContainer maxWidth={'md'} sx={{ py: 4 }} {...restProps}>
    {children}
  </MuiContainer>
);
