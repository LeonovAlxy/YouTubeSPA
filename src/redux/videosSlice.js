import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiYT from '../services/youtubeApi';

export const fetchVideos = createAsyncThunk(
  'videos/fetch Videos',
  async ({ query, maxResults = 25 }, { rejectWithValue }) => {
    if (!query.trim()) return rejectWithValue('Поисковый запрос не может быть пустым');
    try {
      const data = await apiYT.get('/search', {
        params: { q: query, maxResults },
      });

      const items = data.items.map((item) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        channelTitle: item.snippet.channelTitle,
      }));

      return items;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  },
);

const videosSlice = createSlice({
  name: 'videos',
  initialState: {
    searchText: '',
    videos: [],
    loading: false,
    errors: null,
    viewMode: 'grid',
  },
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    clearErrors: (state) => {
      state.errors = null;
    },
    setViewMode: (state, action) => {
      state.viewMode = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.videos = action.payload;
        state.loading = false;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.loading = false;
        state.errors = action.payload;
      })
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state) => {
          state.loading = true;
        },
      );
  },
  selectors: {
    selectVideos: (state) => state.videos,
    selectSearchText: (state) => state.searchText,
    selectLoading: (state) => state.loading,
  },
});

export const { setSearchText, clearErrors, setViewMode } = videosSlice.actions;

export const { selectTasks, selectSearchText, selectLoading } = videosSlice.selectors;

export default videosSlice.reducer;
