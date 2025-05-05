import { configureStore } from '@reduxjs/toolkit';
import carConfigReducer from './features/carConfigSlice';

export const store = configureStore({
  reducer: {
    carConfig: carConfigReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
