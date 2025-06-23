import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks: [
        { id: 1, title: 'Initial Dummy Task', status: 'todo' },
    ],
};

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask(state, action) {
            state.tasks.push(action.payload);
        },
    },
});

// Export reducer to be included in store
export default taskSlice.reducer;

// Export actions for dispatching
export const { addTask } = taskSlice.actions;