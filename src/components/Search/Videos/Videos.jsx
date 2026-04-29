import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import VideoCard from './VideoCard';
import VideoCardList from './VideoCardList';
import Button from '@mui/material/Button';
import MarkUpButtons from './MarkupButtons';

function Videos() {
  const { videos, loading, searchText, viewMode } = useSelector((store) => store.videos);

  if (loading && !videos.length) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!videos.length && !loading) {
    return (
      <Box sx={{ textAlign: 'center', mt: 8, p: 3 }}>
        <Typography variant="h6">😕 Видео не найдены</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Попробуйте ввести другой запрос
        </Typography>
      </Box>
    );
  }

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
        {videos.length > 0 && (
          <Typography variant="h6">
            Видео по запросу: «{searchText}» ({videos.length})
          </Typography>
        )}
        <MarkUpButtons />
      </Box>
      <Box
        sx={{
          display: `${viewMode}`,
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: 3,
          justifyContent: 'center',
          p: 2,
        }}
      >
        {videos.map((video) =>
          viewMode === 'list' ? (
            <VideoCardList key={video.id} video={video} />
          ) : (
            <VideoCard key={video.id} video={video} />
          ),
        )}
      </Box>
    </>
  );
}

export default Videos;
