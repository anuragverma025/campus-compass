import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import AppRoutes from './routes';

/**
 * Main Application Root
 * Handled by: Member 1 (Project foundation, routing, integration)
 * Wraps layout components and React Router provider.
 */
export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main style={{ flex: 1 }}>
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
