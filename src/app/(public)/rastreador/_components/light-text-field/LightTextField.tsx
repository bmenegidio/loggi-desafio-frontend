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
  '.MuiFormHelperText-root.Mui-error': {
    width: 'max-content',
    backgroundColor: theme.palette.error.main,
    color: theme.palette.common.white,
    marginLeft: 0,
    paddingBlock: theme.spacing(0.3),
    paddingInline: theme.spacing(1),
  },
}));
