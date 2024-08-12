'use client';

import { AppBar, Container, Toolbar } from '@mui/material';

import { LoggiIcon } from '@/components/icons/Loggi';

export const NavBar = () => (
  <>
    <AppBar position="fixed" color={'secondary'} elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <LoggiIcon variation={'light'} />
        </Toolbar>
      </Container>
    </AppBar>
    <Toolbar />
  </>
);
