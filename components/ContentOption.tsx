import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React, { ReactNode } from 'react';

interface ContentOptionProps {
  text: string;
  image: ReactNode;
  title: string;
}

const ContentOption: React.FC<ContentOptionProps> = ({ text, image: ImageComponent, title }) => {
  return (
    <Box display={'flex'} alignItems={'center'} justifyContent={'center'} paddingBottom={'10px'} width={'350px'}>  
      <Card sx={{
        width: '300px',
        border: '2px solid #FDD13C',
        height: '350px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#031B31',
        color: '#FDD13C',
        margin: '10px',
        '&:hover':{
          borderColor: 'white',
          cursor: 'pointer'
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
          <Typography variant="body2" sx={{ color: '#FDD13C' }}>
            {text}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ContentOption;
