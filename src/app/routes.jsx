import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import DashboardPage from '../pages/DashboardPage';
import PlannerPage from '../pages/PlannerPage';
import TimetablePage from '../pages/TimetablePage';
import OpportunitiesPage from '../pages/OpportunitiesPage';
import PlacementPage from '../pages/PlacementPage';

/**
 * Campus Compass App Routes
 * Centralized route definitions for navigation destinations and fallback 404.
 * Handled by: Member 1 (Project foundation, routing, integration)
 */
export default function AppRoutes() {
  return (
    <Routes>
      {/* Overview / Landing Screen */}
      <Route path="/" element={<HomePage />} />

      {/* Core Navigation Destinations */}
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/planner" element={<PlannerPage />} />
      <Route path="/timetable" element={<TimetablePage />} />
      {/* Alias /calendar to /timetable */}
      <Route path="/calendar" element={<Navigate to="/timetable" replace />} />
      <Route path="/opportunities" element={<OpportunitiesPage />} />
      <Route path="/placement" element={<PlacementPage />} />

      {/* Fallback 404 Route */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
