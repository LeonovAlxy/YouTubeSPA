import { useState } from 'react';
import { Modal, Box, TextField, Button, Typography, Slider } from '@mui/material';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewListIcon from '@mui/icons-material/ViewList';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const EditModal = ({ item, open, onClose, onSave }) => {
  const [name, setName] = useState(item.name);
  const [size, setSize] = useState(item.maxResults);

  const handleSave = () => {
    if (!name.trim()) {
      alert('Введите название');
      return;
    }
    onSave({ query: item.query, name: name.trim(), maxResults: size });
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2" gutterBottom>
          Изменить запрос
        </Typography>
        <TextField fullWidth margin="normal" label="Запрос" value={item.query} disabled />
        <TextField
          fullWidth
          margin="normal"
          label="Название"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Typography variant="subtitle2" gutterBottom sx={{ mt: 1 }}>
          Максимальное количество
        </Typography>
        <Slider
          aria-label="Размер запроса"
          valueLabelDisplay="auto"
          value={size}
          onChange={(event, newValue) => setSize(newValue)}
          step={1}
          min={1}
          max={50}
        />

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 2 }}>
          <Button onClick={onClose}>Не сохранять</Button>
          <Button onClick={handleSave} variant="contained">
            Сохранить
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default EditModal;
