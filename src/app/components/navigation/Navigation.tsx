'use client';

import React from 'react';
import { useDispatch } from 'react-redux';
import {
  CAMERA_LOCATIONS,
  PORSCHE_INTERACTION_TYPES,
} from '../constants/PorcheModelConstants';
import {
  setTargetCameraLocation,
  setTargetIsCanvasActive,
} from '@/store/features/camera/cameraSlice';
import type { AppDispatch } from '@/store/store';

export function Navigation() {
  const dispatch = useDispatch<AppDispatch>();

  const handleInteriorClick = () => {
    dispatch(setTargetIsCanvasActive(true));
    dispatch(setTargetCameraLocation(PORSCHE_INTERACTION_TYPES.ENTER_INTERIOR));
  };

  const handleExteriorClick = () => {
    dispatch(setTargetIsCanvasActive(true));
    dispatch(setTargetCameraLocation(PORSCHE_INTERACTION_TYPES.EXIT_INTERIOR));
  };

  const handleTrunkClick = () => {
    dispatch(setTargetIsCanvasActive(true));
    dispatch(setTargetCameraLocation(CAMERA_LOCATIONS.EXTERIOR));
  };

  return (
    <ul className="flex cursor-pointer flex-row gap-2 text-lg text-gray-500 font-normal pt-1">
      <li
        className="hover:text-gray-700 transition-all duration-300"
        onClick={handleExteriorClick}
      >
        Exterior
      </li>
      <li
        className="hover:text-gray-700 transition-all duration-300"
        onClick={handleInteriorClick}
      >
        Interior
      </li>
      <li
        className="hover:text-gray-700 transition-all duration-300"
        onClick={handleTrunkClick}
      >
        Trunk
      </li>
    </ul>
  );
}
