import React from 'react';

interface TabPanelProps {
  children: React.ReactNode;
  index: number;
  value: number;
}

export function TabPanel({ children, value, index }: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      className={`transition-all duration-300 ${
        value === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      {value === index && children}
    </div>
  );
}