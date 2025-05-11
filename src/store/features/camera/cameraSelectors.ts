import type { RootState } from '../../store';
import type { CameraLocation } from '@/app/components/viewer/InteractiveViewer';

const selectCamera = (state: RootState) => state.camera;

export const selectCameraLocation = (state: RootState) =>
  selectCamera(state).targetCameraLocation;

export const selectIsCanvasActive = (state: RootState) =>
  selectCamera(state).targetIsCanvasActive;

export const selectCameraInteractionType = (state: RootState) =>
  selectCamera(state).cameraInteractionType;
