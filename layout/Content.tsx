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
  description: string;
  image: string;
  modalImage: string;
  icon: JSX.Element;
}

const serviceData: Service[] = [
  {
    title: 'INSTALACJE ELEKTRYCZNE',
    description: 'Projektowanie i montaż instalacji elektrycznych w nowych budynkach mieszkalnych i komercyjnych.\nModernizację i rozbudowę istniejących instalacji.\nInstalację i konfigurację systemów oświetleniowych, zarówno wewnętrznych, jak i zewnętrznych.\nMontaż systemów zasilania awaryjnego, w tym generatorów i UPS.\nInstalację systemów zabezpieczeń, takich jak alarmy, monitoring i systemy kontroli dostępu',
    image: '', // Ikona na karcie
    modalImage: '/mnt/data/image.png', // Obraz w modalu
    icon: <ElectricalServicesIcon sx={{ fontSize: 160 }} />,
  },
  {
    title: 'INSTALACJE SMART-HOME',
    description: 'Zdalne sterowanie oświetleniem, ogrzewaniem, klimatyzacją i innymi urządzeniami.\nIntegracja z systemami alarmowymi i monitoringu dla zwiększenia bezpieczeństwa.\nAutomatyzacja rutynowych czynności, takich jak otwieranie/zamykanie rolet czy podlewanie ogrodu.\nWykorzystanie polskiego producenta AMPIO, co gwarantuje wysoką jakość i niezawodność systemów.\nPersonalizowane rozwiązania dostosowane do potrzeb klienta.',
    image: '', // Ikona na karcie
    modalImage: '/mnt/data/image.png', // Obraz w modalu
    icon: <HomeIcon sx={{ fontSize: 160 }} />,
  },
  {
    title: 'POMIARY ELEKTRYCZNE (UBEZPIECZENIA)',
    description: 'Przeglądy i pomiary instalacji elektrycznych w budynkach mieszkalnych, komercyjnych i przemysłowych.\nWystawianie raportów i certyfikatów niezbędnych do ubezpieczenia nieruchomości.\nPomiary rezystancji izolacji, pętli zwarcia, wyłączników różnicowoprądowych i inne.\nDoradztwo w zakresie poprawy bezpieczeństwa instalacji elektrycznych.',
    image: '', // Ikona na karcie
    modalImage: '', // Brak obrazu, użycie ikony w modalu
    icon: <SpeedIcon sx={{ fontSize: 160 }} />,
  },
  {
    title: 'WYSTAWIANIE CERTYFIKATÓW ENERGETYCZNYCH',
    description: 'Ocena efektywności energetycznej budynków.\nWystawianie świadectw charakterystyki energetycznej, które są wymagane przy sprzedaży i wynajmie nieruchomości.\nDoradztwo w zakresie poprawy efektywności energetycznej budynków.\nAnaliza i rekomendacje dotyczące modernizacji instalacji i systemów grzewczych.',
    image: '', // Ikona na karcie
    modalImage: '', // Brak obrazu, użycie ikony w modalu
    icon: <VerifiedIcon sx={{ fontSize: 160 }} />,
  },
  {
    title: 'INSTALACJE BASENOWE',
    description: 'Projektowanie i montaż systemów oświetlenia basenowego.\nInstalacja systemów filtracji i ogrzewania wody.\nMontaż i konfiguracja systemów zabezpieczeń basenowych, takich jak alarmy i monitoring.\nIntegracja z systemami Smart-Home dla zdalnego sterowania i monitorowania.',
    image: '', // Ikona na karcie
    modalImage: '/mnt/data/image.png', // Obraz w modalu
    icon: <PoolIcon sx={{ fontSize: 160 }} />,
  },
  {
    title: 'REGENERACJA FUNDAMENTÓW',
    description: 'Diagnostyka i ocena stanu technicznego fundamentów.\nWykonanie prac naprawczych, takich jak iniekcje uszczelniające i wzmacnianie strukturalne.\nZabezpieczenia przed wilgocią i wodą gruntową.\nMonitorowanie i kontrola stanu fundamentów po zakończeniu prac.',
    image: '', // Ikona na karcie
    modalImage: '/mnt/data/image.png', // Obraz w modalu
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
