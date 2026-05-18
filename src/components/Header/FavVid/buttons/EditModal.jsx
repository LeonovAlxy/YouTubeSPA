import { useState } from 'react';
import {
  Modal,
  Box,
  TextField,
  Button,
  Typography,
  Slider,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from '@mui/material';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewListIcon from '@mui/icons-material/ViewList';
import { sortOptions } from '../../../../services/youtubeApi';

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
  const [query, setQuery] = useState(item.query);
  const [sortBy, setSortBy] = useState('relevance');

  const handleSave = () => {
    if (!name.trim()) {
      alert('Введите название');
      return;
    }
    onSave({ query: query, name: name.trim(), maxResults: size, sortBy });
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2" gutterBottom>
          Изменить запрос
        </Typography>
        <TextField
          fullWidth
          margin="normal"
          label="Запрос"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Название"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <FormControl fullWidth margin="normal" size="small">
          <InputLabel>Сортировать по</InputLabel>
          <Select value={sortBy} onChange={(e) => setSortBy(e.target.value)} label="Сортировать по">
            {sortOptions.map((opt) => (
              <MenuItem key={opt.value} value={opt.value}>
                {opt.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
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
