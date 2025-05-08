'use client';

import { useEffect, useState } from 'react';
import { useSpring } from '@react-spring/three';
import { PorscheModel } from './PorscheModel';
import {
  PORSCHE_RIGHT_DOOR_ROTATIONS,
  PORSCHE_LEFT_DOOR_ROTATIONS,
  PORSCHE_HOOD_ROTATIONS,
} from '../constants/PorcheModelConstants';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { ThreeEvent } from '@react-three/fiber';

interface InteractiveCarProps {
  onLookInside: () => void;
}

export const InteractiveCar = (props: InteractiveCarProps) => {
  const { onLookInside } = props;
  const [isLeftDoorOpen, setIsLeftDoorOpen] = useState(false);
  const [isRightDoorOpen, setIsRightDoorOpen] = useState(false);
  const [isHoodOpen, setIsHoodOpen] = useState(false);

  const bodyColor = useSelector(
    (state: RootState) => state.carConfig.bodyColor
  );

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
    rotation: isHoodOpen
      ? PORSCHE_HOOD_ROTATIONS.OPEN
      : PORSCHE_HOOD_ROTATIONS.CLOSED,
  });

  const handleLeftDoorClick = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    setIsLeftDoorOpen(!isLeftDoorOpen);
  };

  const handleRightDoorClick = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    setIsRightDoorOpen(!isRightDoorOpen);
  };

  const handleHoodClick = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    setIsHoodOpen(!isHoodOpen);
  };

  return (
    <PorscheModel
      onLeftDoorClick={handleLeftDoorClick}
      onRightDoorClick={handleRightDoorClick}
      onLookInsideClick={onLookInside}
      leftDoorRotation={leftDoorRotation}
      rightDoorRotation={rightDoorRotation}
      hoodRotation={hoodRotation}
      onHoodClick={handleHoodClick}
      bodyColor={bodyColor}
    />
  );
};
