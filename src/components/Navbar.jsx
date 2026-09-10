import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Sun, Moon, Type, ChevronRight, ShieldAlert, HeartPulse } from 'lucide-react';
import { practiceInfo } from '../data/practiceData';
import './Navbar.css';

export default function Navbar({
  currentPage = 'home',
  navigateTo,
  textSize,
  setTextSize,
  isHighContrast,
  setIsHighContrast,
  onOpenAppointmentModal
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "physicians", label: "Our Physicians" },
    { id: "services", label: "Clinical Services" },
    { id: "education", label: "Resources & Diet" },
    { id: "locations", label: "Locations" },
    { id: "contact", label: "Contact" }
  ];

  const handleLinkClick = (pageId) => {
    setMobileMenuOpen(false);
    if (navigateTo) {
      navigateTo(pageId);
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Top Utility & Emergency Bar */}
      <div className="navbar-top-bar">
        <div className="container navbar-top-container">
          <div className="navbar-top-left">
            <span className="topbar-coverage-chip">
              807 Southwestern Run, Boardman, Ohio 44514
            </span>
            <a
              href={`tel:${practiceInfo.emergencyOnCall.replace(/\D/g, '')}`}
              className="topbar-oncall-link"
              title="24/7 Patient Emergency On-Call line"
            >
              <span className="live-pulse-dot" />
              <span><strong>{practiceInfo.phone}</strong></span>
            </a>
          </div>

          <div className="navbar-top-right">
            {/* Accessibility Font Resizer */}
            <div className="accessibility-control" title="Adjust text size for easier reading">
              <Type size={13} className="control-icon" />
              <span className="control-label">Text Size:</span>
              <div className="size-buttons">
                <button
                  onClick={() => setTextSize('normal')}
                  className={`size-btn ${textSize === 'normal' ? 'active' : ''}`}
                  aria-label="Default font size"
                >
                  A
                </button>
                <button
                  onClick={() => setTextSize('large')}
                  className={`size-btn ${textSize === 'large' ? 'active' : ''}`}
                  aria-label="Large font size"
                >
                  A+
                </button>
                <button
                  onClick={() => setTextSize('xlarge')}
                  className={`size-btn ${textSize === 'xlarge' ? 'active' : ''}`}
                  aria-label="Extra large font size"
                >
                  A++
                </button>
              </div>
            </div>

            {/* High Contrast Toggle */}
            <button
              onClick={() => setIsHighContrast(!isHighContrast)}
              className="contrast-toggle-btn"
              title="Toggle high contrast mode"
              aria-label="Toggle high contrast mode"
            >
              {isHighContrast ? <Sun size={13} /> : <Moon size={13} />}
              <span>{isHighContrast ? "Standard" : "High Contrast"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Navigation Bar */}
      <div className="navbar-main">
        <div className="container navbar-main-container">
          {/* Brand Logo & Title */}
          <a
            href="#/home"
            onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }}
            className="navbar-brand"
            aria-label="The Renal Group - Home"
          >
            {/* <div className="brand-badge-logo"> */}
            <img
              src="/assets/new-logo.png"
              alt="The Renal Group"
              className="brand-logo-img"
            />
            {/* </div> */}
            {/* <div className="brand-text-block">
              <span className="brand-main-title">The Renal Group</span>
              <span className="brand-sub-title">Nephrology & Hypertension Specialists</span>
            </div> */}
          </a>

          {/* Desktop Multipage Navigation Menu */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-list">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <li key={link.id} className="nav-item">
                    <a
                      href={`#/${link.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link.id);
                      }}
                      className={`nav-link ${isActive ? 'active' : ''}`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {link.label}
                      {isActive && <span className="nav-active-pill" />}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Header Actions */}
          <div className="navbar-actions">
            {/* <a
              href={`tel:${practiceInfo.phone.replace(/\D/g, '')}`}
              className="phone-quick-link"
              title="Call our Boardman office"
            >
              <div className="phone-icon-circle">
                <Phone size={14} />
              </div>
              <div className="phone-quick-info">
                <span className="phone-quick-label">Boardman Office</span>
                <span className="phone-quick-num">{practiceInfo.phone}</span>
              </div>
            </a> */}

            <button
              onClick={onOpenAppointmentModal}
              className="btn btn-teal btn-sm nav-cta-btn"
              id="header-appointment-btn"
            >
              <Calendar size={14} />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer" role="dialog" aria-modal="true">
          <div className="mobile-drawer-header">
            <a
              href="#/home"
              onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }}
              className="navbar-brand"
              aria-label="The Renal Group - Home"
            >
              {/* <div className="brand-badge-logo"> */}
              <img
                src="/assets/new-logo.png"
                alt="The Renal Group"
                className="brand-logo-img"
              />
              {/* </div> */}
              {/* <div className="brand-text-block">
              <span className="brand-main-title">The Renal Group</span>
              <span className="brand-sub-title">Nephrology & Hypertension Specialists</span>
            </div> */}
            </a>
            <button
              className="mobile-drawer-close"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <div className="mobile-drawer-body">
            <div className="mobile-drawer-callout">
              <Phone size={18} className="callout-icon" />
              <div>
                <div className="callout-title">Boardman Office</div>
                <a href={`tel:${practiceInfo.phone.replace(/\D/g, '')}`} className="callout-phone">
                  {practiceInfo.phone}
                </a>
              </div>
            </div>

            <nav className="mobile-nav" aria-label="Mobile Navigation">
              <ul className="mobile-nav-list">
                {navLinks.map((link) => {
                  const isActive = currentPage === link.id;
                  return (
                    <li key={link.id} className="mobile-nav-item">
                      <button
                        onClick={() => handleLinkClick(link.id)}
                        className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                      >
                        <span className="mobile-link-text">{link.label}</span>
                        <ChevronRight size={16} className="nav-chevron" />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="mobile-drawer-actions">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenAppointmentModal(); }}
                className="btn btn-teal btn-full"
              >
                <Calendar size={16} />
                <span>Request Appointment</span>
              </button>
              <a
                href={`tel:${practiceInfo.phone.replace(/\D/g, '')}`}
                className="btn btn-primary btn-full"
              >
                <Phone size={16} />
                <span>Call {practiceInfo.phone}</span>
              </a>
            </div>

            <div className="mobile-drawer-footer">
              <div className="mobile-urgent-tag">
                <ShieldAlert size={16} />
                <span>24/7 Physician On-Call: <a href={`tel:${practiceInfo.emergencyOnCall.replace(/\D/g, '')}`}>{practiceInfo.emergencyOnCall}</a></span>
              </div>
              <p className="mobile-address-text">{practiceInfo.fullAddress}</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
