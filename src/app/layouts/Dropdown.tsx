'use client';

import Link from 'next/link';
import React from 'react';

type DropdownColumnItem = {
  label: string;
  href: string;
};

interface DropdownProps {
  label: string;
  columns: DropdownColumnItem[][];
}

export const Dropdown: React.FC<DropdownProps> = ({ label, columns }) => {
  return (
    <li className='relative group'>
      <button className='text-brand-purple font-semibold text-base focus:outline-none'>
        {label}
      </button>
      <div
        className='
          absolute left-0 top-full
          bg-white
          rounded-lg shadow-lg border
          hidden group-hover:flex
          z-50
          py-2
          translate-y-[24px]
          before:content-[""]
          before:absolute
          before:top-[-24px]
          before:left-0
          before:w-full
          before:h-[24px]
        '
      >
        {columns.map((column, colIndex) => (
          <ul key={colIndex} className='min-w-[200px]'>
            {column.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className='
                    block px-4 py-2
                    whitespace-nowrap
                    text-sm font-medium
                    hover:bg-brand-purple/10
                  '
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </li>
  );
};
