import React from 'react';
import { BookOpen } from 'lucide-react';
import PlaceholderPage from './PlaceholderPage';

/**
 * Academic Planner Page (Minimal Route Placeholder)
 * Handled by: Member 1 & Member 2
 */
export default function PlannerPage() {
  return (
    <PlaceholderPage
      title="Academic Planner"
      description="Track coursework deadlines, lab records, assignment boards, and exam dates with countdown tickers."
      icon={BookOpen}
      moduleName="Academic Deadlines & Planner"
      phase="Phase 2 Pipeline"
    />
  );
}
