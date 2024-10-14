import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React, { ReactNode } from 'react';

interface ContentOptionProps {
  text: string;
  image: ReactNode; // Ikona na karcie
  title: string;
}

const ContentOption: React.FC<ContentOptionProps> = ({ text, image: ImageComponent, title }) => {
  return (
    <Box display={'flex'} alignItems={'center'} justifyContent={'center'} paddingBottom={'10px'} width={'350px'}>
      <Card sx={{
        width: '300px',
        border: '2px solid #FDD13C',
        height: '320px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#031B31',
        color: '#FDD13C',
        margin: '10px',
        '@media (hover: hover) and (pointer: fine)': {
          '&:hover': {
            borderColor: '#FDD13C',
            cursor: 'pointer',
            boxShadow: '0 0 15px 8px rgba(253, 209, 60, 0.75)',
          }
        }
      }}>
        {React.isValidElement(ImageComponent) ? (
          <Box sx={{ fontSize: 40, color: '#FDD13C', marginTop: '20px' }}>
            {ImageComponent}
          </Box>
        ) : (
          <CardMedia
            component="img"
            image={ImageComponent as string}
            alt={title}
            sx={{ width: '100px', margin: '20px auto' }}
          />
        )}
        <CardContent sx={{ textAlign: 'center', color: '#FDD13C' }}>
          <Typography gutterBottom variant="h5" component="div" sx={{ color: '#FDD13C' }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: '#E5E5E5' }}>
            {text}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ContentOption;
