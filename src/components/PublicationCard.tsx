import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';
import type { Publication } from '../data/publications';

interface PublicationCardProps {
  publication: Publication;
}

export function PublicationCard({ publication }: PublicationCardProps) {
  const statusColors = {
    'published': 'bg-green-500/20 text-green-400',
    'in-progress': 'bg-yellow-500/20 text-yellow-400',
    'conference': 'bg-purple-500/20 text-purple-400',
    'abstract': 'bg-blue-500/20 text-blue-400'
  };

  return (
    <div className="bg-gray-800/30 p-6 rounded-xl hover:bg-gray-800/40 transition-all duration-300 border border-gray-700">
      <div className="flex items-start gap-4">
        <div className="text-cyan-400 mt-1">
          <FileText className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusColors[publication.status]}`}>
              {publication.status.charAt(0).toUpperCase() + publication.status.slice(1)}
            </span>
            <span className="text-gray-400 text-sm">{publication.year}</span>
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">{publication.title}</h3>
          <p className="text-gray-300 text-sm mb-2">{publication.authors}</p>
          <p className="text-cyan-400 text-sm">{publication.journal}</p>
          {publication.doi && (
            <a
              href={`https://doi.org/${publication.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
            >
              DOI: {publication.doi}
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {publication.url && (
            <a
              href={publication.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
            >
              View Abstract
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}