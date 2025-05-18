import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';
import MultipleChoice from './MultipleChoice';
import SatzeBilden from './SatzeBilden';
import Leseverstehen from './Leseverstehen';
import Wortschatz from './Wortschatz';

const menuItems = [
  { title: 'Multiple Choice', image: 'MultıpleChoıce.png', route: 'multiple-choice' },
  { title: 'Sätze Bilden', image: 'SatzeBilden.png', route: 'satze-bilden' },
  { title: 'Leseverstehen', image: 'LESEVERSTEHEN.png', route: 'leseverstehen' },
  { title: 'Wortschatz', image: 'WORTSCHATZ.png', route: 'wortschatz' },
  { title: 'Zuordnung', image: 'ZUORDNUNG-2.png', route: 'zuordnung' },
  { title: 'Grammatik', image: 'GRAMMER.png', route: 'grammatik' },
  { title: 'Frage & Antwort', image: 'Frage-Antwort.png', route: 'frage-antwort' }
];

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s',
  backgroundColor: '#FFF8E1',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(255, 152, 0, 0.2)',
  },
}));

const StyledCardMedia = styled(CardMedia)({
  height: 260,
  width: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundColor: 'white',
  borderTopLeftRadius: '8px',
  borderTopRightRadius: '8px',
  objectFit: 'cover',
});

function App() {
  const [page, setPage] = useState('menu');

  const handlePageChange = (newPage) => {
    console.log('Mevcut sayfa:', page);
    console.log('Yeni sayfa:', newPage);
    try {
      setPage(newPage);
      console.log('Sayfa değişimi başarılı');
    } catch (error) {
      console.error('Sayfa değişimi sırasında hata:', error);
    }
  };

  const renderPage = () => {
    console.log('renderPage çağrıldı, mevcut sayfa:', page);
    try {
      switch (page) {
        case 'multiple-choice':
          return <MultipleChoice />;
        case 'satze-bilden':
          return <SatzeBilden />;
        case 'leseverstehen':
          return <Leseverstehen />;
        case 'wortschatz':
          console.log('Wortschatz bileşeni render ediliyor');
          return <Wortschatz />;
        default:
          return (
            <Container maxWidth="lg" sx={{ py: 4, backgroundColor: '#FFF3E0' }}>
              <Typography 
                variant="h4" 
                component="h1" 
                sx={{
                  mb: 4, 
                  fontWeight: 'bold',
                  color: '#E65100',
                  textAlign: 'center',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                DeutschApp
              </Typography>
              <Grid container spacing={3}>
                {menuItems.map((item, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <StyledCard
                      onClick={() => handlePageChange(item.route)}
                      sx={{ cursor: 'pointer' }}
                    >
                      <StyledCardMedia
                        component="img"
                        image={process.env.PUBLIC_URL + '/' + item.image}
                        title={item.title}
                        alt={item.title}
                      />
                      <CardContent sx={{ textAlign: 'center', padding: '12px' }}>
                        <Typography 
                          variant="h6" 
                          component="h2"
                          sx={{
                            color: '#E65100',
                            fontWeight: 'medium',
                            fontSize: '1.1rem'
                          }}
                        >
                          {item.title}
                        </Typography>
                      </CardContent>
                    </StyledCard>
                  </Grid>
                ))}
              </Grid>
            </Container>
          );
      }
    } catch (error) {
      console.error('Sayfa render edilirken hata:', error);
      return (
        <Container maxWidth="md" sx={{ py: 4 }}>
          <Typography variant="h4" color="error">
            Bir hata oluştu. Lütfen sayfayı yenileyin.
          </Typography>
        </Container>
      );
    }
  };

  return renderPage();
}

export default App; 