/**
 * Campus Compass — Application Configuration
 * Centralizes access to environment variables (import.meta.env) with type-safe fallbacks.
 */

export const APP_CONFIG = {
  appName: import.meta.env.VITE_APP_NAME || 'Campus Compass',
  tagline: import.meta.env.VITE_APP_TAGLINE || 'The Student Life Assistant',
  version: import.meta.env.VITE_APP_VERSION || '0.1.0-alpha',
  env: import.meta.env.VITE_APP_ENV || 'development',
  storagePrefix: import.meta.env.VITE_STORAGE_PREFIX || 'campus_compass_',
  maxCourses: Number(import.meta.env.VITE_MAX_COURSES) || 8,
  defaultSemester: import.meta.env.VITE_DEFAULT_SEMESTER || 'Fall 2026',
  enableMockData: import.meta.env.VITE_ENABLE_MOCK_DATA !== 'false',
  enableAnalytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
  publicApiBaseUrl: import.meta.env.VITE_PUBLIC_API_BASE_URL || '',
};

export default APP_CONFIG;
