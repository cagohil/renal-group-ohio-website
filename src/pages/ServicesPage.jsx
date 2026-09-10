import React from 'react';
import {
  Stethoscope,
  Activity,
  HeartPulse,
  Syringe,
  Home,
  RefreshCw,
  GitPullRequest,
  Microscope,
  CheckCircle2,
  Calendar,
  Phone,
  ArrowRight
} from 'lucide-react';
import { services, practiceInfo } from '../data/practiceData';
import './Pages.css';

const iconMap = {
  nephrology: Stethoscope,
  "chronic-kidney-disease": Activity,
  hypertension: HeartPulse,
  dialysis: Syringe,
  "home-hemodialysis": Home,
  "peritoneal-dialysis": RefreshCw,
  transplantation: GitPullRequest,
  "clinical-research": Microscope
};

export default function ServicesPage({ navigateTo, onOpenAppointmentModal }) {
  return (
    <div className="services-page">
      {/* Page Banner Header */}
      <div className="page-banner">
        <div className="container page-banner-container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <span onClick={() => navigateTo('home')} className="breadcrumb-link">Home</span>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Clinical Services</span>
          </nav>
          <h1 className="page-banner-title">Kidney Care & Clinical Services</h1>
          <p className="page-banner-subtitle">
            Comprehensive nephrology care, blood pressure management, home dialysis pioneering, and clinical research in the Mahoning Valley.
          </p>
        </div>
      </div>

      {/* Main Services Section */}
      <section className="page-content-section">
        <div className="container">
          <div className="services-full-list">
            {services.map((svc) => {
              const Icon = iconMap[svc.id] || Stethoscope;
              return (
                <div key={svc.id} className="service-full-card" id={`service-${svc.id}`}>
                  <div className="service-icon-banner">
                    <Icon size={32} />
                  </div>

                  <div className="service-full-content">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.35rem' }}>
                      <span className="badge-tag teal" style={{ marginBottom: 0 }}>{svc.tagline}</span>
                    </div>
                    <h3>{svc.title}</h3>
                    <p>{svc.fullDesc}</p>

                    {svc.image && (
                      <div style={{ maxWidth: '420px', margin: '1.5rem 0', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
                        <img src={svc.image} alt={svc.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
                      </div>
                    )}

                    <div className="service-key-points">
                      {svc.highlights.map((point, idx) => (
                        <div key={idx} className="service-point-item">
                          <CheckCircle2 size={16} style={{ color: '#0d9488', flexShrink: 0, marginTop: '2px' }} />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '1.25rem', flexWrap: 'wrap' }}>
                      <button
                        onClick={() => onOpenAppointmentModal()}
                        className="btn btn-teal btn-sm"
                      >
                        <Calendar size={15} />
                        <span>Schedule Consultation for {svc.title}</span>
                      </button>

                      <a
                        href={`tel:${practiceInfo.phone.replace(/\D/g, '')}`}
                        className="btn btn-secondary btn-sm"
                      >
                        <Phone size={15} />
                        <span>Call {practiceInfo.phone}</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Consultation CTA Card */}
          <div className="services-consultation-banner" style={{ marginTop: '3.5rem' }}>
            <div className="banner-text">
              <h3>Need a Comprehensive Kidney Evaluation or Second Opinion?</h3>
              <p>Our nephrologists review medical records, abnormal eGFR/creatinine levels, and provide clear clinical guidance.</p>
            </div>
            <div className="banner-actions">
              <button onClick={() => onOpenAppointmentModal()} className="btn btn-teal">
                <Calendar size={18} />
                <span>Schedule Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
