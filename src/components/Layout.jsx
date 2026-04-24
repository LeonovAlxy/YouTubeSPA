import Button from '@mui/material/Button';
import { useState } from 'react';
import { fetchVideos } from '../redux/videosSlice';
import { useSelector, useDispatch } from 'react-redux';

function Layout() {
  const [inputSearch, setSearch] = useState('Машина');

  // 1. input отдельный с функцией запроса и кнопки.
  // 2. mui карточка обработка компонента

  const handleSearchChange = (e) => setSearch(e.target.value);
  const dispatch = useDispatch();
  const { loading, videos } = useSelector((store) => store.videos);

  const handleSearchClick = () => dispatch(fetchVideos(inputSearch));
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
              allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
