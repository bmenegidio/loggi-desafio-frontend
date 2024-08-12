import { TextFieldProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

export const LightTextField = styled(TextField)<TextFieldProps>(({ theme }) => ({
  '.MuiInputBase-root': {
    background: theme.palette.common.white,
    '&:hover': { '.MuiOutlinedInput-notchedOutline': { border: 'none' } },
    '.MuiOutlinedInput-input': {
      color: theme.palette.common.black,
      textTransform: 'uppercase',
    },
  },
}));
