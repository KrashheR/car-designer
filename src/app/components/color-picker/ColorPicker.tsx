'use client';

import { useDispatch } from 'react-redux';
import { setBodyColor } from '@/store/features/carConfigSlice';
import { AppDispatch } from '@/store/store';
import { PORSHE_BODY_COLORS } from '../constants/PorcheModelConstants';

export function ColorPicker() {
  const dispatch = useDispatch<AppDispatch>();

  const handleColorChange = (color: string) => {
    dispatch(setBodyColor(color));
  };

  return (
    <div className="fixed top-1/2 right-4 transform -translate-y-1/2 p-4 bg-gray-200 rounded-lg shadow-lg flex flex-col space-y-3">
      {PORSHE_BODY_COLORS.map((color) => (
        <button
          key={color.name}
          onClick={() => handleColorChange(color.hex)}
          className="w-8 h-8 rounded-full border-2 border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-transform hover:scale-110"
          style={{ backgroundColor: color.hex }}
          aria-label={`Change color to ${color.name}`}
        >
          {color.name}
        </button>
      ))}
    </div>
  );
}
