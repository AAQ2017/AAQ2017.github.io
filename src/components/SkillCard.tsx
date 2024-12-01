import React from 'react';

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
}

export function SkillCard({ title, icon }: SkillCardProps) {
  return (
    <div className="bg-[#12121a] p-6 rounded-xl hover:bg-[#16161f] transition-all duration-300 transform hover:-translate-y-1 border border-gray-800 flex items-center gap-4">
      <div className="text-cyan-400">{icon}</div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
  );
}