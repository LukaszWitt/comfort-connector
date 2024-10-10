import { Box, Modal, IconButton } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from "next/image";

interface Service {
  title: string;
  image?: string; // Ścieżka do jednego obrazu PNG (opcjonalnie)
  images?: string[]; // Lista ścieżek do wielu obrazów PNG (opcjonalnie)
}

interface ExactOfferProps {
  open: boolean;
  handleClose: () => void;
  service: Service;
}

const ExactOffer: React.FC<ExactOfferProps> = ({ open, handleClose, service }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handlePrevImage = () => {
    if(service.images){
      setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : service.images.length - 1));
    }
    
  };

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex < service.images.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="service-modal-title"
      aria-describedby="service-modal-description"
    >
      <Box
        sx={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90vw",
          maxWidth: "1000px",
          height: "90vh",
          bgcolor: "#031B31",
          boxShadow: 24,
          outline: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          p: 2,
          position: "relative",
        }}
      >
        {/* Ikona do zamykania modala */}
        <Box
          onClick={handleClose}
          sx={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            cursor: 'pointer',
            userSelect: 'none',
            color: "#FDD13C",
            zIndex: 10,
          }}
        >
          <CloseIcon />
        </Box>

        {/* Strzałka do przechodzenia do poprzedniego obrazu */}
        {service.images && service.images.length > 1 && (
          <IconButton
            onClick={handlePrevImage}
            sx={{
              position: 'absolute',
              left: '10px',
              color: "#FDD13C",
              zIndex: 10,
            }}
          >
            <ArrowBackIosIcon />
          </IconButton>
        )}

        {/* Wyświetlanie obrazu */}
        {service.images && service.images.length > 0 ? (
          <Image
            width={200}
            height={200}
            src={service.images[currentIndex]}
            alt={`${service.title} - Page ${currentIndex + 1}`}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
            }}
          />
        ) : service.image ? (
          <Image 
            width={200}
            height={200}
            src={service.image}
            alt={service.title}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
            }}
          />
        ) : (
          <Box sx={{ color: "#FDD13C", textAlign: "center", mt: 2 }}>
            Brak dostępnych obrazów dla tej usługi.
          </Box>
        )}

        {/* Strzałka do przechodzenia do następnego obrazu */}
        {service.images && service.images.length > 1 && (
          <IconButton
            onClick={handleNextImage}
            sx={{
              position: 'absolute',
              right: '10px',
              color: "#FDD13C",
              zIndex: 10,
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        )}
      </Box>
    </Modal>
  );
};

export default ExactOffer;
