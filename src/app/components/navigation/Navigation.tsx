import React from 'react';

export function Navigation() {
  return (
    <ul className="flex cursor-pointer flex-row gap-2 text-lg text-gray-500 font-normal pt-1">
      <li className="hover:text-gray-700 transition-all duration-300">
        Exterior
      </li>
      <li className="hover:text-gray-700 transition-all duration-300">
        Interior
      </li>
      <li className="hover:text-gray-700 transition-all duration-300">Trunk</li>
    </ul>
  );
}
