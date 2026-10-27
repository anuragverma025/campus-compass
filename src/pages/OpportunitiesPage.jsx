import React from 'react';
import { Briefcase } from 'lucide-react';
import PlaceholderPage from './PlaceholderPage';

/**
 * Opportunities Hub Page (Minimal Route Placeholder)
 * Handled by: Member 3 & Member 4
 */
export default function OpportunitiesPage() {
  return (
    <PlaceholderPage
      title="Opportunities Hub"
      description="Curated internships, technical hackathons, scholarships, and research opportunities with deadline bookmarks."
      icon={Briefcase}
      moduleName="Opportunities & Hackathons"
      phase="Phase 2 Pipeline"
    />
  );
}
