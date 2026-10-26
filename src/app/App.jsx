import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Sidebar from '../components/layout/Sidebar';
import AppRoutes from './routes';
import './App.css';

/**
 * Main Application Root
 * Handled by: Member 1 (Project foundation, routing, integration)
 * Wraps layout components and React Router provider.
 */
export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <BrowserRouter>
      <div className="app-shell">
        <Header
          onToggleMobileMenu={() => setMobileMenuOpen((prev) => !prev)}
          isMobileMenuOpen={mobileMenuOpen}
        />
        <div className="app-body">
          <Sidebar
            isOpen={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            isCollapsed={isCollapsed}
            onToggleCollapse={() => setIsCollapsed((prev) => !prev)}
          />
          <main className="app-main" id="main-content">
            <AppRoutes />
          </main>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
