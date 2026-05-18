import { Box, ButtonGroup, Button } from '@mui/material';
import ViewListIcon from '@mui/icons-material/ViewList';
import GridViewIcon from '@mui/icons-material/GridView';
import { setViewMode } from '../../../redux/videosSlice';
import { useDispatch } from 'react-redux';

function MarkUpButtons() {
  const dispatch = useDispatch();
  const setViewModeGrid = () => {
    dispatch(setViewMode('grid'));
  };
  const setViewModeList = () => {
    dispatch(setViewMode('list'));
  };
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'right',
      }}
    >
      <ButtonGroup variant="text" aria-label="Basic button group">
        <Button onClick={setViewModeList}>
          <ViewListIcon />
        </Button>
        <Button onClick={setViewModeGrid}>
          <GridViewIcon />
        </Button>
      </ButtonGroup>
    </Box>
  );
}

export default MarkUpButtons;
