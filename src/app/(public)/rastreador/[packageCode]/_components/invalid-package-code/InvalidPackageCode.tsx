import { KeyboardBackspace } from '@mui/icons-material';
import { Button, Card, CardContent, Grid, Typography } from '@mui/material';
import Link from 'next/link';

type Param = { packageCode: string };

export const InvalidPackageCode = ({ packageCode }: Param) => (
  <Card>
    <CardContent>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography gutterBottom variant="h5">
            Por favor, verifique o código de Rastreio
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            O código informado: <strong>{packageCode}</strong> é inválido!
          </Typography>
        </Grid>
        <Grid mt={2} item>
          <Link href={'/rastreador'}>
            <Button size={'small'} startIcon={<KeyboardBackspace />}>
              Voltar e pesquisar outro código
            </Button>
          </Link>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
