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
        deleteTask(state, action) {
            const idToDelete = action.payload;
            state.tasks = state.tasks.filter(task => task.id !== idToDelete);
        }
    },
});

// Export reducer to be included in store
export default taskSlice.reducer;

// Export actions for dispatching
export const { addTask, deleteTask } = taskSlice.actions;