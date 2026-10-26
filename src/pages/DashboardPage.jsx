import React from 'react';
import { LayoutDashboard } from 'lucide-react';
import PlaceholderPage from './PlaceholderPage';

/**
 * Dashboard Page (Minimal Route Placeholder)
 * Handled by: Member 1 & Full Team
 */
export default function DashboardPage() {
  return (
    <PlaceholderPage
      title="Student Dashboard"
      description="Unified command center aggregating imminent deadlines, today's lecture schedule, and active prep streaks."
      icon={LayoutDashboard}
      moduleName="Unified Dashboard"
      phase="Phase 2 Pipeline"
    />
  );
}
