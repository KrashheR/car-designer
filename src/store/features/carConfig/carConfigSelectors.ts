import { RootState } from '@/store/store';

const carConfigSelector = (state: RootState) => state.carConfig;

export const selectBodyColor = (state: RootState) =>
  carConfigSelector(state).bodyColor;

export const selectIsLeftDoorOpen = (state: RootState) =>
  carConfigSelector(state).isLeftDoorOpen;

export const selectIsRightDoorOpen = (state: RootState) =>
  carConfigSelector(state).isRightDoorOpen;

export const selectIsTrunkOpen = (state: RootState) =>
  carConfigSelector(state).isTrunkOpen;
