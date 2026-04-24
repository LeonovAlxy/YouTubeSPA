import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiYT from '../services/youtubeApi';
// export const deleteCompletedTasks = createAsyncThunk(
//   'tasks/deleteCompletedTasks',
//   async (_, { getState, rejectWithValue }) => {
//     try {
//       const store = getState();
//       const completedTasks = store.tasks.tasks.filter((item) => item.isCompleted === true);
//       if (completedTasks.length === 0) {
//         return;
//       }
//       const deletePromises = completedTasks.map((task) => api.delete(`/todos/${task.id}`));
//       await Promise.all(deletePromises);

//       return;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );
export const fetchVideos = createAsyncThunk(
  'videos/fetch Videos',
  async (searchInput, { getState, rejectWithValue }) => {
    if (!searchInput.trim()) return rejectWithValue('Поисковый запрос не может быть пустым');
    try {
      const data = await apiYT.get('/search', {
        params: { q: searchInput, maxResults: 5 },
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
    videos: [],
    loading: false,
    errors: null,
  },
  reducers: {},
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
  },
});

// export const { addInputText, reverse, addErrors } = videosSlice.actions;

export const { selectTasks } = videosSlice.selectors;

export default videosSlice.reducer;
