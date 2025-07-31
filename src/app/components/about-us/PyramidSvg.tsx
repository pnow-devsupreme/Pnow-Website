import React from 'react';
import { FaBinoculars, FaBriefcase, FaUserTie } from 'react-icons/fa';

export default function PyramidSvg() {
  return (
    <svg
      viewBox='0 0 300 225'
      xmlns='http://www.w3.org/2000/svg'
      className='w-full h-auto'
    >
      {/* Base triangle */}
      <polygon points='150,0 0,225 300,225' fill='#0D004D' />

      {/* Divider lines */}
      <line x1='30' y1='75' x2='270' y2='75' stroke='#fff' strokeWidth='3' />
      <line x1='60' y1='150' x2='240' y2='150' stroke='#fff' strokeWidth='3' />

      {/* Top icon: binoculars */}
      <g transform='translate(138,20)'>
        <FaBinoculars size={20} className='text-white' />
      </g>

      {/* Middle icon: user‑tie */}
      <g transform='translate(138,95)'>
        <FaUserTie size={20} className='text-white' />
      </g>

      {/* Bottom icon: briefcase */}
      <g transform='translate(138,170)'>
        <FaBriefcase size={20} className='text-white' />
      </g>
    </svg>
  );
}
