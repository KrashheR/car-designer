import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CarConfigState {
  bodyColor: string;
  isLeftDoorOpen: boolean;
  isRightDoorOpen: boolean;
  isTrunkOpen: boolean;
}

const initialState: CarConfigState = {
  bodyColor: '#FFFF00',
  isLeftDoorOpen: false,
  isRightDoorOpen: false,
  isTrunkOpen: false,
};

export const carConfigSlice = createSlice({
  name: 'carConfig',
  initialState,
  reducers: {
    setBodyColor: (state, action: PayloadAction<string>) => {
      state.bodyColor = action.payload;
    },
    setLeftDoorOpen: (state, action: PayloadAction<boolean>) => {
      state.isLeftDoorOpen = action.payload;
    },
    setRightDoorOpen: (state, action: PayloadAction<boolean>) => {
      state.isRightDoorOpen = action.payload;
    },
    setTrunkOpen: (state, action: PayloadAction<boolean>) => {
      state.isTrunkOpen = action.payload;
    },
  },
});

export const {
  setBodyColor,
  setLeftDoorOpen,
  setRightDoorOpen,
  setTrunkOpen
} = carConfigSlice.actions;

export default carConfigSlice.reducer;
