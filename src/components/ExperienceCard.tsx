import React from 'react';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  icon: React.ReactNode;
}

export function ExperienceCard({ title, company, period, description, icon }: ExperienceCardProps) {
  return (
    <div className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800/70 transition-all duration-300 transform hover:-translate-y-1 border border-gray-700">
      <div className="flex items-start gap-4">
        <div className="text-cyan-400">{icon}</div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
          <p className="text-cyan-400 font-medium mb-1">{company}</p>
          <p className="text-gray-400 text-sm mb-3">{period}</p>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
}