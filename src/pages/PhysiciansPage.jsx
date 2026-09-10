import React from 'react';
import {
  Award,
  GraduationCap,
  Building,
  CheckCircle2,
  Calendar,
  Phone,
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { physicians, advancedPracticeTeam, practiceInfo } from '../data/practiceData';
import './Pages.css';

export default function PhysiciansPage({ navigateTo, onOpenAppointmentModal }) {
  return (
    <div className="physicians-page">
      {/* Page Banner Header */}
      <div className="page-banner">
        <div className="container page-banner-container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <span onClick={() => navigateTo('home')} className="breadcrumb-link">Home</span>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Our Physicians</span>
          </nav>
          <h1 className="page-banner-title">Our Board-Certified Physicians</h1>
          <p className="page-banner-subtitle">
            Meet the experienced nephrologists guiding kidney care, dialysis directorships, and hypertension management across Northeast Ohio.
          </p>
        </div>
      </div>

      {/* Main Physicians List Section */}
      <section className="page-content-section">
        <div className="container">
          {physicians.map((doc) => (
            <div key={doc.id} className="doctor-profile-card" id={`physician-${doc.id}`}>
              <div className="doctor-photo-col">
                <img
                  src={doc.image}
                  alt={`Dr. ${doc.name}, ${doc.title}`}
                  loading="lazy"
                />
              </div>

              <div className="doctor-content-col">
                <div className="doctor-header-group">
                  <h2 className="doctor-card-name">Dr. {doc.name}, {doc.title}</h2>
                  <span className="doctor-card-title-pill">{doc.role}</span>
                </div>

                {/* Training & Certifications 2-Col Grid */}
                <div className="doctor-info-grid">
                  <div className="doctor-info-block">
                    <h4>Board Certifications</h4>
                    {doc.boardCertifications.map((cert, i) => (
                      <p key={i}>✓ {cert}</p>
                    ))}
                  </div>

                  <div className="doctor-info-block">
                    <h4>Medical Training & Education</h4>
                    <p><strong>Fellowship:</strong> {doc.education.fellowship}</p>
                    {doc.education.residency && <p><strong>Residency:</strong> {doc.education.residency}</p>}
                    <p><strong>Medical School:</strong> {doc.education.medicalSchool}</p>
                  </div>
                </div>

                {/* Biography Text */}
                <div className="doctor-bio-body">
                  <p>{doc.bio}</p>
                </div>

                {/* Directorships & Societies */}
                <div style={{ marginBottom: '1.5rem', fontSize: '0.9rem', color: '#475569' }}>
                  <strong>Leadership & Society Memberships:</strong>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                    {doc.currentPositions.map((pos, i) => (
                      <span key={i} style={{ background: '#f1f5f9', padding: '0.25rem 0.65rem', borderRadius: '6px', fontWeight: 600, color: '#0f172a' }}>
                        {pos}
                      </span>
                    ))}
                    {doc.memberships.map((mem, i) => (
                      <span key={i} style={{ background: '#f0fdfa', padding: '0.25rem 0.65rem', borderRadius: '6px', fontWeight: 600, color: '#0f766e', border: '1px solid #ccfbf1' }}>
                        {mem}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="doctor-card-actions">
                  <button
                    onClick={() => onOpenAppointmentModal(doc.name)}
                    className="btn btn-teal"
                  >
                    <Calendar size={16} />
                    <span>Request Appointment with Dr. {doc.name.split(' ').pop()}</span>
                  </button>

                  <a
                    href={`tel:${practiceInfo.phone.replace(/\D/g, '')}`}
                    className="btn btn-secondary"
                  >
                    <Phone size={16} />
                    <span>Call Office: {practiceInfo.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* Advanced Practice Clinical Team Banner */}
          <div className="advanced-practice-card" style={{ marginTop: '3rem' }}>
            <div className="advanced-practice-icon-box">
              <Award size={32} className="text-teal" />
            </div>
            <div className="advanced-practice-content">
              <div className="advanced-practice-tag">{advancedPracticeTeam.subtitle}</div>
              <h3 className="advanced-practice-title">{advancedPracticeTeam.title}</h3>
              <p className="advanced-practice-desc">{advancedPracticeTeam.description}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
