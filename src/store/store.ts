import { configureStore } from '@reduxjs/toolkit';
import carConfigReducer from './features/carConfig/carConfigSlice';
import cameraReducer from './features/camera/cameraSlice';

export const store = configureStore({
  reducer: {
    carConfig: carConfigReducer,
    camera: cameraReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
