import { Box, Grid } from '@mui/material';
import React, { useState } from 'react';
import ContentOption from '../components/ContentOption';
import ExactOffer from '../components/ExactOffer';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import HomeIcon from '@mui/icons-material/Home'; 
import SpeedIcon from '@mui/icons-material/Speed';
import VerifiedIcon from '@mui/icons-material/Verified';
import PoolIcon from '@mui/icons-material/Pool';
import FoundationIcon from '@mui/icons-material/Foundation';

interface Service {
  title: string;
  image?: string; // Pojedynczy obraz PNG (opcjonalnie)
  images?: string[]; // Lista ścieżek do wielu obrazów PNG (opcjonalnie)
  icon: JSX.Element; // Ikona na karcie
}

const serviceData: Service[] = [
  {
    title: 'INSTALACJE ELEKTRYCZNE',
    image: '/images/uslugielektryczne.png', // Pojedynczy obraz PNG
    icon: <ElectricalServicesIcon sx={{ fontSize: 160 }} />,
  },
  {
    title: 'INSTALACJE SMART-HOME',
    images: [
      '/images/smarthome.png',
      '/images/smarthome(2).png',
      '/images/smarthome(3).png',
    ], // Lista obrazów PNG dla wielu stron
    icon: <HomeIcon sx={{ fontSize: 160 }} />,
  },
  {
    title: 'POMIARY ELEKTRYCZNE (UBEZPIECZENIA)',
    image: '/images/pomiaryicertyfikaty.png', // Pojedynczy obraz PNG
    icon: <SpeedIcon sx={{ fontSize: 160 }} />,
  },
  {
    title: 'WYSTAWIANIE CERTYFIKATÓW ENERGETYCZNYCH',
    image: '/images/pomiaryicertyfikaty.png', // Pojedynczy obraz PNG
    icon: <VerifiedIcon sx={{ fontSize: 160 }} />,
  },
  {
    title: 'INSTALACJE BASENOWE',
    image: '/images/instalacjebasenowe.png', // Pojedynczy obraz PNG
    icon: <PoolIcon sx={{ fontSize: 160 }} />,
  },
  {
    title: 'REGENERACJA FUNDAMENTÓW',
    image: '/images/regeneracjafundamentow.png', // Pojedynczy obraz PNG
    icon: <FoundationIcon sx={{ fontSize: 160 }} />,
  },
];

const Content: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleOpen = (service: Service) => {
    console.log("Opening service:", service);
    setSelectedService(service);
    setOpen(true);
  };

  const handleClose = () => {
    console.log("Closing modal");
    setOpen(false);
    setSelectedService(null);
  };

  return (
    <Box sx={{ paddingTop: '10px' }}>
      <Grid container justifyContent={'center'} spacing={2}>
        {serviceData.map((service, index) => (
          <Grid key={index} display={'flex'} justifyContent={'center'} onClick={() => handleOpen(service)} item xs={12} sm={6} lg={4}>
            <ContentOption text='KLIKNIJ ABY DOWIEDZIEĆ SIĘ WIĘCEJ' image={service.icon} title={service.title} />
          </Grid>
        ))}
      </Grid>
      {selectedService && (
        <ExactOffer open={open} handleClose={handleClose} service={selectedService} />
      )}
    </Box>
  );
};

export default Content;
