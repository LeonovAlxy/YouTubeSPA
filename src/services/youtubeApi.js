import axios from 'axios';

const apiYT = axios.create({
  baseURL: import.meta.env.VITE_API_YOUTUBE_BASE_URL,
  params: {
    key: import.meta.env.VITE_YOUTUBE_API_KEY,
    part: 'snippet',
    type: 'video',
    maxResults: 25,
  },
});

apiYT.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error('YouTube API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  },
);

export const sortOptions = [
  { value: 'relevance', label: 'По релевантности' },
  { value: 'date', label: 'По дате' },
  { value: 'viewCount', label: 'По просмотрам' },
  { value: 'rating', label: 'По рейтингу' },
  { value: 'title', label: 'По названию' },
  { value: 'videoCount', label: 'По количеству видео' },
];

export default apiYT;
