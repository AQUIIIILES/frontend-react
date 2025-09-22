// src/features/api/pages/HelloPage.jsx
import React, { useEffect, useState } from 'react';
import { Logo, CardStyled, MessageText } from '../styles/HelloPageStyles.js';
import '../styles/animations.css';
import { getHello } from '../services/apiService';
import logo from '../assets/react.svg';

// MUI Components
import { 
  Box,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Container 
} from '@mui/material';

const HelloPage = () => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getHello()
      .then(data => {
        setMessage(data.message || JSON.stringify(data));
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setMessage('Erro ao carregar mensagem');
        setLoading(false);
      });
  }, []);

  return (
    <Container maxWidth="sm" sx={{ mt: 8,}}>
      <CardStyled elevation={6}>
        <CardContent>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Logo src={logo} alt="React Logo"/>
            <Typography>
              <MessageText variant='h4' gutterBottom>Mensagem do Backend</MessageText>
            </Typography>
            {loading ? (
              <CircularProgress />
            ) : (
              <Typography>
                <MessageText variant='h4' gutterBottom>{message}</MessageText>
              </Typography>
            )}
          </Box>
        </CardContent>
      </CardStyled>
    </Container>
  );
}

export default HelloPage;
