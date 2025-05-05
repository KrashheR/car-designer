import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CarConfigState {
  bodyColor: string;
}

const initialState: CarConfigState = {
  bodyColor: '#FFFF00',
};

export const carConfigSlice = createSlice({
  name: 'carConfig',
  initialState,
  reducers: {
    setBodyColor: (state, action: PayloadAction<string>) => {
      state.bodyColor = action.payload;
    },
  },
});

export const { setBodyColor } = carConfigSlice.actions;

export default carConfigSlice.reducer;
