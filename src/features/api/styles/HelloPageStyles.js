import { styled, Typography } from "@mui/material";
import { Card } from "@mui/material";

export const Logo = styled('img')({
    width: 100,
    height: 100,
    animation: 'spin 20s linear infinite',
    marginBottom: 20,
});

export const CardStyled = styled(Card)(({ theme }) => ({
    borderRadius: theme.spacing(3),
    backgroundColor: '#000000', // preto sólido
}));


export const MessageText = styled(Typography)({
  fontWeight: 500,
  color: '#61dafb',
  textDecoration: 'inherit',
});