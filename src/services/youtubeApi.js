import axios from 'axios';

const apiYT = axios.create({
  baseURL: import.meta.env.VITE_API_YOUTUBE_BASE_URL,
  params: {
    key: import.meta.env.VITE_YOUTUBE_API_KEY,
    part: 'snippet',
    type: 'video',
    maxResults: 12,
  },
});

apiYT.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error('YouTube API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  },
);

export default apiYT;
