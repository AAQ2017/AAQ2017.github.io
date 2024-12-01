import React from 'react';

interface EducationCardProps {
  degree: string;
  institution: string;
  year: string;
  icon: React.ReactNode;
}

export function EducationCard({ degree, institution, year, icon }: EducationCardProps) {
  return (
    <div className="bg-[#12121a] p-6 rounded-xl hover:bg-[#16161f] transition-all duration-300 transform hover:-translate-y-1 border border-gray-800">
      <div className="flex items-start gap-4">
        <div className="text-cyan-400">{icon}</div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-1">{degree}</h3>
          <p className="text-cyan-400 font-medium mb-1">{institution}</p>
          <p className="text-gray-400 text-sm">{year}</p>
        </div>
      </div>
    </div>
  );
}