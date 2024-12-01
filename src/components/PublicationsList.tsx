import React from 'react';
import { PublicationCard } from './PublicationCard';
import { publications } from '../data/publications';

export function PublicationsList() {
  const publishedPapers = publications.filter(pub => pub.status === 'published');
  const inProgressPapers = publications.filter(pub => pub.status === 'in-progress');
  const conferencePapers = publications.filter(pub => pub.status === 'conference');
  const abstractPapers = publications.filter(pub => pub.status === 'abstract');

  return (
    <div className="space-y-12">
      <section>
        <h3 className="text-2xl font-semibold text-cyan-400 mb-6">Published Papers</h3>
        <div className="space-y-4">
          {publishedPapers.map(publication => (
            <PublicationCard key={publication.id} publication={publication} />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-semibold text-cyan-400 mb-6">Papers in Progress</h3>
        <div className="space-y-4">
          {inProgressPapers.map(publication => (
            <PublicationCard key={publication.id} publication={publication} />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-semibold text-cyan-400 mb-6">Conference Proceedings</h3>
        <div className="space-y-4">
          {conferencePapers.map(publication => (
            <PublicationCard key={publication.id} publication={publication} />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-semibold text-cyan-400 mb-6">Abstracts</h3>
        <div className="space-y-4">
          {abstractPapers.map(publication => (
            <PublicationCard key={publication.id} publication={publication} />
          ))}
        </div>
      </section>
    </div>
  );
}