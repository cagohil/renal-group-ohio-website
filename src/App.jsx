import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';
import AppointmentModal from './components/AppointmentModal';

// Multipage Route Components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PhysiciansPage from './pages/PhysiciansPage';
import ServicesPage from './pages/ServicesPage';
import EducationPage from './pages/EducationPage';
import LocationsPage from './pages/LocationsPage';
import ContactPage from './pages/ContactPage';
import SideIllustrations from './components/SideIllustrations';

export default function App() {
  const [textSize, setTextSize] = useState('normal'); // 'normal' | 'large' | 'xlarge'
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preselectedDoctor, setPreselectedDoctor] = useState("");

  // Helper to extract page from hash: #/about -> 'about'
  const getPageFromHash = () => {
    const hash = window.location.hash.replace(/^#\/?/, '').trim();
    const validPages = ['home', 'about', 'physicians', 'services', 'education', 'locations', 'contact'];
    if (validPages.includes(hash)) {
      return hash;
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState(getPageFromHash);

  // Synchronize route with hashchange
  useEffect(() => {
    const handleHashChange = () => {
      const page = getPageFromHash();
      setCurrentPage(page);
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Sync accessibility attributes to document root
  useEffect(() => {
    document.documentElement.setAttribute('data-text-size', textSize);
  }, [textSize]);

  useEffect(() => {
    document.documentElement.setAttribute('data-contrast', isHighContrast ? 'high' : 'normal');
  }, [isHighContrast]);

  const navigateTo = (page, doctorName = "") => {
    if (doctorName) {
      setPreselectedDoctor(doctorName);
    }
    window.location.hash = `#/${page}`;
    setCurrentPage(page);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const handleOpenAppointmentModal = (doctorName = "") => {
    setPreselectedDoctor(typeof doctorName === 'string' ? doctorName : "");
    setIsModalOpen(true);
  };

  const handleCloseAppointmentModal = () => {
    setIsModalOpen(false);
    setPreselectedDoctor("");
  };

  // Render active page view
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'about':
        return (
          <AboutPage
            navigateTo={navigateTo}
            onOpenAppointmentModal={handleOpenAppointmentModal}
          />
        );
      case 'physicians':
        return (
          <PhysiciansPage
            navigateTo={navigateTo}
            onOpenAppointmentModal={handleOpenAppointmentModal}
          />
        );
      case 'services':
        return (
          <ServicesPage
            navigateTo={navigateTo}
            onOpenAppointmentModal={handleOpenAppointmentModal}
          />
        );
      case 'education':
        return (
          <EducationPage
            navigateTo={navigateTo}
          />
        );
      case 'locations':
        return (
          <LocationsPage
            navigateTo={navigateTo}
          />
        );
      case 'contact':
        return (
          <ContactPage
            navigateTo={navigateTo}
            preselectedDoctor={preselectedDoctor}
          />
        );
      case 'home':
      default:
        return (
          <HomePage
            navigateTo={navigateTo}
            onOpenAppointmentModal={handleOpenAppointmentModal}
          />
        );
    }
  };

  return (
    <div className="app-layout">
      {/* Subtle Vector Medical Illustrations on Left and Right Viewport Flanks */}
      <SideIllustrations />

      {/* Screen Reader Skip Link */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Sticky Header with Multipage Navigation & Accessibility Toolbar */}
      <Navbar
        currentPage={currentPage}
        navigateTo={navigateTo}
        textSize={textSize}
        setTextSize={setTextSize}
        isHighContrast={isHighContrast}
        setIsHighContrast={setIsHighContrast}
        onOpenAppointmentModal={() => handleOpenAppointmentModal()}
      />

      {/* Active Multipage Content */}
      <main id="main-content" tabIndex="-1" className="main-content-view">
        {renderCurrentPage()}
      </main>

      {/* Comprehensive Medical Footer */}
      <Footer
        currentPage={currentPage}
        navigateTo={navigateTo}
      />

      {/* Mobile Sticky Bar for Senior Patients & Callers */}
      <MobileStickyBar onOpenAppointmentModal={() => handleOpenAppointmentModal()} />

      {/* Global Interactive Appointment Modal */}
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={handleCloseAppointmentModal}
        preselectedDoctor={preselectedDoctor}
      />
    </div>
  );
}
