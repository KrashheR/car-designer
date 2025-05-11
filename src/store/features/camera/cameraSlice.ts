import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CAMERA_LOCATIONS } from '@/app/components/constants/PorcheModelConstants';
import type {
  CameraLocation,
  CameraInteractionType,
} from '@/app/components/viewer/InteractiveViewer';

interface CameraState {
  targetCameraLocation: CameraLocation;
  targetIsCanvasActive: boolean;
  cameraInteractionType: CameraInteractionType | null;
}

const initialState: CameraState = {
  targetCameraLocation: CAMERA_LOCATIONS.EXTERIOR,
  targetIsCanvasActive: false,
  cameraInteractionType: null,
};

export const cameraSlice = createSlice({
  name: 'camera',
  initialState,
  reducers: {
    setTargetCameraLocation: (state, action: PayloadAction<CameraLocation>) => {
      state.targetCameraLocation = action.payload;
    },
    setTargetIsCanvasActive: (state, action: PayloadAction<boolean>) => {
      state.targetIsCanvasActive = action.payload;
    },
    setCameraInteractionType: (
      state,
      action: PayloadAction<CameraInteractionType | null>
    ) => {
      state.cameraInteractionType = action.payload;
    },
  },
});

export const {
  setTargetCameraLocation,
  setTargetIsCanvasActive,
  setCameraInteractionType,
} = cameraSlice.actions;

export default cameraSlice.reducer;
