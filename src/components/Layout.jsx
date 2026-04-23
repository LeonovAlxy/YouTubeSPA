import apiYT from '../services/youtubeApi';
import Button from '@mui/material/Button';
import { useState } from 'react';

function Layout() {
  const [inputSearch, setSearch] = useState('Машина');
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  // 1. перенести в слайсы хранение, запрос (получает inputSearch , а в инпуте передается) и загрузку.
  // 2. mui карточка разделить на компонент
  // 3. input отдельны2 туда приходит функция запроса внутри хранится стейт запроса.

  const handleSearchChange = (e) => setSearch(e.target.value);

  const handleSearchClick = async () => {
    if (!inputSearch.trim()) return;
    setLoading(true);
    try {
      const data = await apiYT.get('/search', {
        params: { q: inputSearch, maxResults: 5 },
      });

      const items = data.items.map((item) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        channelTitle: item.snippet.channelTitle,
      }));
      setVideos(items);
    } catch (error) {
      console.error('Ошибка поиска:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input type="text" value={inputSearch} onChange={handleSearchChange} />
      <Button variant="contained" onClick={handleSearchClick}>
        {loading ? 'Поиск...' : 'Искать'}
      </Button>

      <div style={{ marginTop: '20px', display: 'grid', gap: '10px' }}>
        {videos.map((video) => (
          <div
            key={video.id}
            style={{
              border: '1px solid #b31d1d',
              borderRadius: '12px',
              width: '300px',
              padding: '12px',
            }}
          >
            <iframe
              width="270px"
              height="150px"
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              frameBorder="0"
              allow="a autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div style={{ marginTop: '12px' }}>
              <h3>{video.title}</h3>
              <p>Канал: {video.channelTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Layout;
