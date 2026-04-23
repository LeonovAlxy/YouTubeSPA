import { createSlice } from '@reduxjs/toolkit';

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

const videosSlice = createSlice({
  name: 'tasks',
  initialState: {
    videos: [],
    loading: false,
    errors: null,
  },
  reducers: {
    addInputText(state, action) {
      state.inputText = action.payload;
    },
    addErrors(state, action) {
      state.errors = action.payload;
    },

    reverse(state) {
      state.tasks.reverse();
    },
  },
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(getTasks.fulfilled, (state, action) => {
  //         state.tasks = action.payload;
  //         state.loading = false;
  //       })

  //       .addCase(addInputTask.fulfilled, (state, action) => {
  //         state.tasks.push(action.payload);
  //         state.inputText = '';
  //         state.errors = '';
  //         state.loading = false;
  //       })
  //       .addCase(deleteTask.fulfilled, (state, action) => {
  //         const index = state.tasks.findIndex((item) => item.id === action.payload);
  //         if (index !== -1) {
  //           state.tasks.splice(index, 1);
  //         }
  //         state.loading = false;
  //       })
  //       .addCase(switchIsDone.fulfilled, (state, action) => {
  //         const taskId = action.payload.id;
  //         const task = state.tasks.find((t) => t.id === taskId);
  //         if (task) {
  //           task.isCompleted = !task.isCompleted;
  //         }
  //         state.loading = false;
  //       })
  //       .addCase(updateTaskName.fulfilled, (state, action) => {
  //         const task = state.tasks.find((task) => task.id === action.payload.id);
  //         if (task) {
  //           task.title = action.payload.newTitle;
  //         }
  //         state.loading = false;
  //       })
  //       .addCase(getDoneTasks.fulfilled, (state, action) => {
  //         state.tasks = action.payload;
  //         state.loading = false;
  //       })
  //       .addCase(getActiveTasks.fulfilled, (state, action) => {
  //         state.tasks = action.payload;
  //         state.loading = false;
  //       })
  //       .addCase(deleteCompletedTasks.fulfilled, (state) => {
  //         state.loading = false;
  //         state.tasks = state.tasks.filter((task) => !task.isCompleted);
  //       })

  //       .addMatcher(
  //         (action) => action.type.endsWith('/rejected'),
  //         (state, action) => {
  //           state.loading = false;
  //           state.errors = action.payload || action.error?.message || 'Произошла ошибка';
  //         }
  //       )
  //       .addMatcher(
  //         (action) => action.type.endsWith('/pending'),
  //         (state) => {
  //           state.loading = true;
  //         }
  //       );
  //   },

  selectors: {
    selectTasks: (state) => state.tasks,
  },
});

export const { addInputText, reverse, addErrors } = videosSlice.actions;

export const { selectTasks } = videosSlice.selectors;

export default videosSlice.reducer;
