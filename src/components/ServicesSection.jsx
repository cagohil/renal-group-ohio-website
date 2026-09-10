import React, { useState } from 'react';
import {
  Stethoscope,
  Activity,
  HeartPulse,
  Syringe,
  Home,
  RefreshCw,
  GitPullRequest,
  Microscope,
  ArrowRight,
  CheckCircle2,
  X,
  Calendar,
  Phone,
  Sparkles
} from 'lucide-react';
import { services, practiceInfo } from '../data/practiceData';
import './ServicesSection.css';

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

export default function ServicesSection({ onOpenAppointmentModal }) {
  const [selectedService, setSelectedService] = useState(null);

  const handleOpenModal = (service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return (
    <section className="section services-section section-alt" id="services">
      <div className="container">
        <div className="section-header">
          <div className="badge-tag teal">
            <span>Specialized Clinical Programs</span>
          </div>
          <h2 className="section-title">Comprehensive Kidney Care Services</h2>
          <p className="section-subtitle">
            From early-stage kidney disease and resistant hypertension to dialysis coordination and transplant follow-up, our team delivers personalized nephrology care at every stage.
          </p>
        </div>

        {/* Unified 3-Column Services Grid */}
        <div className="services-grid" id="dialysis">
          {services.map((service) => {
            const Icon = iconMap[service.id] || Stethoscope;
            return (
              <div key={service.id} className="service-card" id={`service-${service.id}`}>
                <div className="service-card-top">
                  <div className="service-icon-box">
                    <Icon size={24} className="service-icon" />
                  </div>
                  <span className="service-tagline-badge">{service.tagline}</span>
                </div>

                <div className="service-card-body">
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-desc">{service.shortDesc}</p>

                  <div className="service-highlights-list">
                    {service.highlights.slice(0, 3).map((item, i) => (
                      <div key={i} className="service-highlight-item">
                        <CheckCircle2 size={15} className="highlight-check" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="service-card-footer">
                  <button
                    onClick={() => handleOpenModal(service)}
                    className="service-learn-more-btn"
                    aria-label={`View clinical details for ${service.title}`}
                  >
                    <span>View Care Details</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Dialysis Innovation Spotlight */}
        <div className="dialysis-spotlight-card">
          <div className="spotlight-content">
            <div className="badge-tag sky">
              <span>Home Dialysis Pioneers</span>
            </div>
            <h3 className="spotlight-title">Leading the Valley in Home Dialysis Therapies</h3>
            <p className="spotlight-desc">
              As the practice that introduced home hemodialysis to the Mahoning Valley, The Renal Group provides comprehensive patient training, home equipment setup, and dedicated 24/7 nephrologist support for both Home Hemodialysis (HHD) and Peritoneal Dialysis (PD).
            </p>
            <div className="spotlight-actions">
              <button
                onClick={() => handleOpenModal(services.find(s => s.id === 'home-hemodialysis') || services[4])}
                className="btn btn-teal btn-sm"
              >
                <span>Explore Home Dialysis Options</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>

          <div className="spotlight-images">
            <div className="spotlight-thumb-wrap">
              <img
                src="/assets/home-dialysis-machine.jpg"
                alt="Modern NxStage Home Hemodialysis system"
                className="spotlight-img"
                loading="lazy"
              />
              <span className="spotlight-label">Home Hemodialysis System</span>
            </div>
            <div className="spotlight-thumb-wrap">
              <img
                src="/assets/homechoice.jpg"
                alt="HomeChoice Automated Peritoneal Dialysis cycler"
                className="spotlight-img"
                loading="lazy"
              />
              <span className="spotlight-label">Automated PD Cycler</span>
            </div>
          </div>
        </div>

        {/* Bottom Consultation Banner */}
        <div className="services-consultation-banner">
          <div className="banner-text">
            <h3>Need a Nephrology Evaluation or Second Opinion?</h3>
            <p>Our physicians review medical records, abnormal eGFR/creatinine levels, and provide clear second opinions or self-referral evaluations.</p>
          </div>
          <div className="banner-actions">
            <button onClick={onOpenAppointmentModal} className="btn btn-teal">
              <Calendar size={18} />
              <span>Schedule Consultation</span>
            </button>
            <a href={`tel:${practiceInfo.phone.replace(/\D/g, '')}`} className="btn btn-secondary">
              <Phone size={18} />
              <span>{practiceInfo.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="modal-overlay" onClick={handleCloseModal} role="dialog" aria-modal="true">
          <div className="modal-dialog service-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={handleCloseModal} aria-label="Close modal">
              <X size={20} />
            </button>

            <div className="modal-badge-wrapper">
              <span className="badge-tag teal">{selectedService.tagline}</span>
            </div>

            <h2 className="modal-service-title">{selectedService.title}</h2>

            <div className="modal-service-body">
              <p className="modal-lead-desc">{selectedService.shortDesc}</p>

              {selectedService.image && (
                <div className="modal-image-container">
                  <img src={selectedService.image} alt={selectedService.title} />
                </div>
              )}

              <div className="modal-full-text">
                <h4 className="modal-section-heading">Clinical Overview & Care Approach</h4>
                <p>{selectedService.fullDesc}</p>
              </div>

              <div className="modal-clinical-highlights">
                <h4 className="modal-section-heading">Key Clinical Highlights</h4>
                <div className="modal-highlights-grid">
                  {selectedService.highlights.map((item, idx) => (
                    <div key={idx} className="modal-highlight-item">
                      <CheckCircle2 size={16} className="text-teal" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer-actions">
              <button
                onClick={() => { handleCloseModal(); onOpenAppointmentModal(); }}
                className="btn btn-teal"
              >
                <Calendar size={18} />
                <span>Request Appointment for {selectedService.title}</span>
              </button>
              <a href={`tel:${practiceInfo.phone.replace(/\D/g, '')}`} className="btn btn-secondary">
                <Phone size={18} />
                <span>Call {practiceInfo.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
