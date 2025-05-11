'use client';

import React from 'react';
import { useSpring } from '@react-spring/three';
import { PorscheModel } from './PorscheModel';
import {
  PORSCHE_LEFT_DOOR_ROTATIONS,
  PORSCHE_RIGHT_DOOR_ROTATIONS,
  PORSCHE_HOOD_ROTATIONS,
  CAMERA_LOCATIONS,
} from '../constants/PorcheModelConstants';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { ThreeEvent } from '@react-three/fiber';
import type { CameraLocation } from '../viewer/InteractiveViewer';
import {
  setTrunkOpen,
  setLeftDoorOpen,
  setRightDoorOpen,
} from '@/store/features/carConfig/carConfigSlice';
import {
  selectIsLeftDoorOpen,
  selectIsRightDoorOpen,
  selectIsTrunkOpen,
  selectBodyColor,
} from '@/store/features/carConfig/carConfigSelectors';

interface InteractiveCarProps {
  onHotspotInteraction: (interactionType: string) => void;
  cameraLocation: CameraLocation;
}

export function InteractiveCar({
  onHotspotInteraction,
  cameraLocation,
}: InteractiveCarProps) {
  const dispatch = useDispatch<AppDispatch>();
  const isLeftDoorOpen = useSelector(selectIsLeftDoorOpen);
  const isRightDoorOpen = useSelector(selectIsRightDoorOpen);
  const isTrunkOpen = useSelector(selectIsTrunkOpen);
  const bodyColor = useSelector(selectBodyColor);

  const { rotation: leftDoorRotation } = useSpring({
    rotation: isLeftDoorOpen
      ? PORSCHE_LEFT_DOOR_ROTATIONS.OPEN
      : PORSCHE_LEFT_DOOR_ROTATIONS.CLOSED,
  });

  const { rotation: rightDoorRotation } = useSpring({
    rotation: isRightDoorOpen
      ? PORSCHE_RIGHT_DOOR_ROTATIONS.OPEN
      : PORSCHE_RIGHT_DOOR_ROTATIONS.CLOSED,
  });

  const { rotation: hoodRotation } = useSpring({
    rotation: isTrunkOpen
      ? PORSCHE_HOOD_ROTATIONS.OPEN
      : PORSCHE_HOOD_ROTATIONS.CLOSED,
  });

  const toggleLeftDoor = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    dispatch(setLeftDoorOpen(!isLeftDoorOpen));
  };
  const toggleRightDoor = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    dispatch(setRightDoorOpen(!isRightDoorOpen));
  };
  const toggleHood = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    dispatch(setTrunkOpen(!isTrunkOpen));
  };

  const showEnterHotspot =
    isLeftDoorOpen && cameraLocation !== CAMERA_LOCATIONS.INTERIOR;
  const showExitHotspot = cameraLocation === CAMERA_LOCATIONS.INTERIOR;

  return (
    <group>
      <PorscheModel
        onLeftDoorClick={toggleLeftDoor}
        onRightDoorClick={toggleRightDoor}
        onHoodClick={toggleHood}
        onHotspotInteraction={onHotspotInteraction}
        leftDoorRotation={leftDoorRotation as any}
        rightDoorRotation={rightDoorRotation as any}
        hoodRotation={hoodRotation as any}
        bodyColor={bodyColor}
        scale={[1, 1, 1]}
        position={[0, 0, 0]}
        showEnterHotspot={showEnterHotspot}
        showExitHotspot={showExitHotspot}
      />
    </group>
  );
}
