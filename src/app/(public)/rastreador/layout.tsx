import { Grid } from '@mui/material';

import { NavBar } from '@/app/(public)/rastreador/_components/nav-bar/NavBar';

export default function TrackerLayout({ children }: { children: React.ReactNode }) {
  return (
    <Grid minHeight={'100dvh'} flexDirection={'column'} container>
      <Grid item>
        <NavBar />
      </Grid>
      <Grid flex={1} item>
        {children}
      </Grid>
      <Grid item>
        <span>Footer</span>
      </Grid>
    </Grid>
  );
}
