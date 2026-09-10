import React from 'react';
import {
  Calendar,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  MapPin,
  Clock,
  Sparkles
} from 'lucide-react';
import { practiceInfo } from '../data/practiceData';
import './Hero.css';

export default function Hero({ onOpenAppointmentModal }) {
  const scrollToServices = (e) => {
    e.preventDefault();
    const element = document.querySelector('#services');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="hero-section" id="hero">
      {/* Subtle Background Glows */}
      <div className="hero-mesh-glow" aria-hidden="true" />
      <div className="hero-grid-pattern" aria-hidden="true" />

      <div className="container hero-container">
        <div className="hero-layout-grid">
          {/* Left Hero Content */}
          <div className="hero-text-content">
            <div className="hero-welcome-badge">
              <span className="hero-pulse-dot" />
              <span>Welcoming New Patients & Self-Referrals</span>
            </div>

            <h1 className="hero-main-heading">
              Expert Kidney Care.<br />
              <span className="text-teal-gradient">Close to Home.</span>
            </h1>

            <p className="hero-lead-paragraph">
              Compassionate, board-certified nephrologists dedicated to protecting your kidney function, managing complex hypertension, and empowering you to live your healthiest life across the Mahoning Valley.
            </p>

            {/* Primary Action Buttons */}
            <div className="hero-button-group">
              <button
                onClick={onOpenAppointmentModal}
                className="btn btn-teal btn-lg hero-cta-btn"
                id="hero-request-appointment-btn"
              >
                <Calendar size={18} />
                <span>Request an Appointment</span>
              </button>

              <a
                href="#services"
                onClick={scrollToServices}
                className="btn btn-secondary btn-lg hero-secondary-btn"
              >
                <span>Explore Care Services</span>
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Credential Checkmarks Bar */}
            <div className="hero-trust-pills">
              <div className="trust-pill-item">
                <CheckCircle2 size={16} className="text-wellness" />
                <span>Board-Certified Specialists</span>
              </div>
              <div className="trust-pill-item">
                <CheckCircle2 size={16} className="text-wellness" />
                <span>Home Hemodialysis Pioneer</span>
              </div>
              <div className="trust-pill-item">
                <CheckCircle2 size={16} className="text-wellness" />
                <span>Hospital & Dialysis Directorships</span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Showcase */}
          <div className="hero-media-column">
            <div className="hero-image-wrapper">
              <img
                src="/assets/hero-consultation.jpg"
                alt="Nephrologist providing compassionate care to patient at The Renal Group"
                className="hero-featured-photo"
              />

              {/* Floating Reassurance Badge 1: 24/7 On-Call */}
              <div className="hero-badge-float badge-float-top">
                <div className="badge-float-icon icon-teal">
                  <PhoneCall size={18} />
                </div>
                <div className="badge-float-text">
                  <a href={`tel:${practiceInfo.phone.replace(/\D/g, '')}`} className="badge-float-link">
                    {practiceInfo.phone}
                  </a>
                </div>
              </div>

              {/* Floating Reassurance Badge 2: Boardman Main Office */}
              <div className="hero-badge-float badge-float-bottom">
                <div className="badge-float-icon icon-navy">
                  <MapPin size={18} />
                </div>
                <div className="badge-float-text">
                  <span className="badge-float-tag">MAIN OFFICE</span>
                  <span className="badge-float-title">807 Southwestern Run, Boardman</span>
                </div>
              </div>
            </div>

            {/* Practice Credential Highlights Strip Below Image */}
            <div className="hero-metrics-strip">
              <div className="metric-strip-item">
                <span className="metric-number">30+</span>
                <span className="metric-label">Years Valley Dedication</span>
              </div>
              <div className="metric-strip-divider" />
              <div className="metric-strip-item">
                <span className="metric-number">1st</span>
                <span className="metric-label">Home Hemo Pioneer</span>
              </div>
              <div className="metric-strip-divider" />
              <div className="metric-strip-item">
                <span className="metric-number">24/7</span>
                <span className="metric-label">Physician Access</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
