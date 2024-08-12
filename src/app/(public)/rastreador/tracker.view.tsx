'use client';

import { Search } from '@mui/icons-material';
import {
  Box,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Typography,
  useTheme,
} from '@mui/material';

import { LightTextField } from '@/app/(public)/rastreador/_components/light-text-field/LightTextField';

export function TrackerView() {
  const theme = useTheme();

  return (
    <>
      <Box sx={{ width: '100%', background: theme.palette.secondary.main }}>
        <Container sx={{ py: 4 }} maxWidth="md">
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
                  <LightTextField
                    size={'medium'}
                    placeholder="Digite o código, por exemplo, ABC7869"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <IconButton edge="start" aria-label="Pesquisar pacote">
                            <Search />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
