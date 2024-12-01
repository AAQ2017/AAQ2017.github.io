import React from 'react';

interface ResearchCardProps {
  type: 'publication' | 'conference' | 'in-progress' | 'abstract';
  title: string;
  authors: string;
  venue: string;
  year: string;
}

export function ResearchCard({ type, title, authors, venue, year }: ResearchCardProps) {
  return (
    <div className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800/70 transition-all duration-300 border border-gray-700">
      <div className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3
        ${type === 'publication' ? 'bg-purple-500/20 text-purple-400' :
        type === 'conference' ? 'bg-emerald-500/20 text-emerald-400' :
        'bg-amber-500/20 text-amber-400'}">
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-1">{authors}</p>
      <p className="text-cyan-400 text-sm">{venue}</p>
      <p className="text-gray-500 text-sm mt-2">{year}</p>
    </div>
  );
}