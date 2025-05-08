'use client';

import { useDispatch } from 'react-redux';
import { setBodyColor } from '@/store/features/carConfigSlice';
import { AppDispatch } from '@/store/store';
import { PORSCHE_BODY_COLORS } from '../constants/PorcheModelConstants';

export function ColorPicker() {
  const dispatch = useDispatch<AppDispatch>();

  const handleColorChange = (color: string) => {
    dispatch(setBodyColor(color));
  };

  return (
    <div className="absolute top-1/2 right-4 transform -translate-y-2/2 p-4 bg-white rounded-lg flex flex-col space-y-3">
      <h2 className="text-lg font-bold text-gray-700">Select Car Color</h2>
      <ul className="flex flex-wrap gap-2 flex-col">
        {PORSCHE_BODY_COLORS.map((color) => (
          <li key={color.name} className="w-full">
            <button
              onClick={() => handleColorChange(color.hex)}
              className="flex items-center gap-2 justify-start w-full cursor-pointer hover:bg-gray-50 rounded-lg text-gray-700"
              aria-label={`Change color to ${color.name}`}
            >
              <span 
                className="w-8 h-8 rounded-full border border-gray-300" 
                style={{ backgroundColor: color.hex }}
              />
              <span className="text-md font-medium text-gray-900">{color.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

