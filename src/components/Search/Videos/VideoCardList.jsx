import { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: '900px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 2,
  overflow: 'hidden',
  outline: 'none',
};

function VideoCardList({ video }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card
        onClick={() => setOpen(!open)}
        sx={{
          width: 1,
          borderRadius: 3,
          overflow: 'hidden',
          transition: '0.2s ease-in-out',
          '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 12px 24px rgb(25, 118, 210)' },
          cursor: 'pointer',
          display: 'flex',
          mb: 2,
        }}
      >
        <CardMedia
          component="iframe"
          height="180"
          src={`https://www.youtube.com/embed/${video.id}`}
          title={video.title}
          allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          sx={{ pointerEvents: 'none', maxWidth: '40%' }}
        />
        <CardContent sx={{ width: '60%' }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              fontSize: '1rem',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              alignSelf: 'center',
            }}
          >
            {video.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 1, fontSize: '0.8rem', alignSelf: 'center' }}
          >
            {video.channelTitle}
          </Typography>
        </CardContent>
      </Card>

      <Modal open={open} onClose={() => setOpen(!open)}>
        <Box sx={modalStyle}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', bgcolor: '#1976d2', p: 1 }}>
            <IconButton onClick={() => setOpen(!open)} sx={{ color: 'white' }}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box sx={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
            <iframe
              src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            />
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default VideoCardList;
