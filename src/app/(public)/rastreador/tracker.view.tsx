'use client';

import { Search } from '@mui/icons-material';
import { Box, Grid, IconButton, InputAdornment, Typography, useTheme } from '@mui/material';
import { Controller } from 'react-hook-form';

import { LightTextField } from '@/app/(public)/rastreador/_components/light-text-field/LightTextField';
import { useTrackerViewModel } from '@/app/(public)/rastreador/use-tracker.viewmodel';
import { Container } from '@/components/layout/container/Container';

export function TrackerView() {
  const theme = useTheme();
  const { navigateToPackageSearch, control, handleSubmit, errors } = useTrackerViewModel();

  return (
    <>
      <Box sx={{ width: '100%', background: theme.palette.secondary.main }}>
        <Container>
          <Grid container spacing={6} flexDirection={'column'}>
            <Grid item xs={12}>
              <Typography
                variant="h4"
                fontWeight="bold"
                textAlign={'center'}
                color={theme.palette.common.white}
              >
                Rastrear seu pedido ficou fácil, basta informar o código de rastreio!
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Grid xs={12} md={7} sx={{ margin: 'auto' }} item>
                  <form onSubmit={handleSubmit(navigateToPackageSearch)}>
                    <Controller
                      control={control}
                      name={'packageCode'}
                      render={({ field }) => (
                        <LightTextField
                          {...field}
                          error={!!errors?.packageCode?.message}
                          helperText={errors?.packageCode?.message}
                          size={'medium'}
                          placeholder="Ex.: ABC7869"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <IconButton
                                  edge="start"
                                  aria-label="Pesquisar pacote"
                                  onClick={handleSubmit(navigateToPackageSearch)}
                                >
                                  <Search />
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        />
                      )}
                    />
                  </form>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
