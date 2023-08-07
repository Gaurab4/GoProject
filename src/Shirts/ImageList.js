import { Box, Card, CardMedia, Dialog, DialogContent, IconButton } from '@mui/material';
import React, { useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';

const ImageList = ({ images }) => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(390px, 1fr))', gridGap: '15px', pt: 2 }}>
        {images[0].url.map((image, index) => (
          <Card key={index} hoverable sx={{ maxWidth: 1030, height: 650, borderRadius: 0, boxShadow: 0 }}>
            <CardMedia sx={{ cursor:'zoom-in', height: 680}} image={image} onClick={() => handleImageClick(image)} />
          </Card>
        ))}
      </Box>

     
      <Dialog open={open} onClose={handleClose} maxWidth="lg" >
        <DialogContent onClick={handleClose} sx={{ p: 0 ,cursor:'zoom-out'}}>
          <IconButton
            sx={{ position: 'absolute', top: 0, right: 0, color: 'white', zIndex: 1 }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
          <img src={selectedImage} alt="Enlarged" style={{ width: '100%', height: '100vh', objectFit: 'contain' }} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageList;
