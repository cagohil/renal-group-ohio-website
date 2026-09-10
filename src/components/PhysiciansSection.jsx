import React, { useState } from 'react';
import {
  Award,
  GraduationCap,
  Building,
  CheckCircle,
  Calendar,
  X,
  Phone,
  BookOpen,
  Users
} from 'lucide-react';
import { physicians, advancedPracticeTeam, practiceInfo } from '../data/practiceData';
import './PhysiciansSection.css';

export default function PhysiciansSection({ onOpenAppointmentModal }) {
  const [selectedPhysician, setSelectedPhysician] = useState(null);

  const handleOpenBio = (physician) => {
    setSelectedPhysician(physician);
  };

  const handleCloseBio = () => {
    setSelectedPhysician(null);
  };

  return (
    <section className="section physicians-section" id="physicians">
      <div className="container">
        <div className="section-header">
          <div className="badge-tag teal">
            <span>Medical Leadership</span>
          </div>
          <h2 className="section-title">Meet Our Board-Certified Nephrologists</h2>
          <p className="section-subtitle">
            Specializing in kidney care, hypertension, and dialysis management, Dr. Hilmer Negrete and Dr. Prakash N. Roy bring decades of dedicated medical service to patients across Northeast Ohio.
          </p>
        </div>

        {/* 2-Column Equal-Height Physicians Grid */}
        <div className="physicians-grid">
          {physicians.map((doc) => (
            <div key={doc.id} className="physician-card" id={`doctor-${doc.id}`}>
              <div className="physician-photo-wrapper">
                <img
                  src={doc.image}
                  alt={`Dr. ${doc.name}, ${doc.title}`}
                  className="physician-photo"
                  loading="lazy"
                />
                <div className="physician-badge-pill">
                  <Award size={14} />
                  <span>Board Certified Nephrologist</span>
                </div>
              </div>

              <div className="physician-details">
                <div className="physician-header">
                  <h3 className="physician-name">
                    Dr. {doc.name}
                    <span className="physician-credentials">{doc.title}</span>
                  </h3>
                  <p className="physician-role">{doc.role}</p>
                </div>

                {/* Board Certifications */}
                <div className="cert-box">
                  <span className="cert-label">Certifications</span>
                  <div className="cert-tags">
                    {doc.boardCertifications.map((c, i) => (
                      <span key={i} className="cert-tag">{c}</span>
                    ))}
                  </div>
                </div>

                {/* Key Training & Leadership */}
                <div className="physician-key-points">
                  <div className="key-point-item">
                    <GraduationCap size={16} className="point-icon" />
                    <span><strong>Fellowship:</strong> {doc.education.fellowship}</span>
                  </div>
                  <div className="key-point-item">
                    <Building size={16} className="point-icon" />
                    <span><strong>Leadership:</strong> {doc.currentPositions[0]}</span>
                  </div>
                </div>

                <p className="physician-summary-text">{doc.summary}</p>

                {/* Card CTA Actions - Aligned horizontally at bottom */}
                <div className="physician-actions">
                  <button
                    onClick={() => handleOpenBio(doc)}
                    className="btn btn-secondary btn-sm"
                    aria-label={`View full background of Dr. ${doc.name}`}
                  >
                    <BookOpen size={15} />
                    <span>View Credentials</span>
                  </button>

                  <button
                    onClick={() => onOpenAppointmentModal(doc.name)}
                    className="btn btn-teal btn-sm"
                    aria-label={`Request appointment with Dr. ${doc.name}`}
                  >
                    <Calendar size={15} />
                    <span>Book with Dr. {doc.name.split(' ').pop()}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clinical Team / Advanced Practice Professionals Callout */}
        <div className="advanced-practice-card">
          <div className="advanced-practice-icon-box">
            <Users size={28} className="text-teal" />
          </div>
          <div className="advanced-practice-content">
            <div className="advanced-practice-tag">{advancedPracticeTeam.subtitle}</div>
            <h3 className="advanced-practice-title">{advancedPracticeTeam.title}</h3>
            <p className="advanced-practice-desc">{advancedPracticeTeam.description}</p>
          </div>
        </div>
      </div>

      {/* Full Bio Modal */}
      {selectedPhysician && (
        <div className="modal-overlay" onClick={handleCloseBio} role="dialog" aria-modal="true">
          <div className="modal-dialog physician-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={handleCloseBio} aria-label="Close bio">
              <X size={20} />
            </button>

            <div className="modal-physician-header">
              <img
                src={selectedPhysician.image}
                alt={selectedPhysician.name}
                className="modal-physician-thumb"
              />
              <div>
                <span className="badge-tag teal">Board-Certified Specialist</span>
                <h2 className="modal-physician-name">
                  Dr. {selectedPhysician.name}, {selectedPhysician.title}
                </h2>
                <p className="modal-physician-subtitle">{selectedPhysician.role}</p>
              </div>
            </div>

            <div className="modal-physician-content">
              {/* Board Certifications */}
              <div className="modal-section-block">
                <h4 className="modal-section-title">
                  <Award size={17} className="text-teal" />
                  <span>Board Certifications</span>
                </h4>
                <ul className="modal-checklist">
                  {selectedPhysician.boardCertifications.map((item, idx) => (
                    <li key={idx}>
                      <CheckCircle size={15} className="text-teal" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Education & Training */}
              <div className="modal-section-block">
                <h4 className="modal-section-title">
                  <GraduationCap size={17} className="text-teal" />
                  <span>Education & Advanced Clinical Training</span>
                </h4>
                <div className="modal-edu-details">
                  <div className="edu-row">
                    <strong>Medical School:</strong> {selectedPhysician.education.medicalSchool}
                  </div>
                  <div className="edu-row">
                    <strong>Internship:</strong> {selectedPhysician.education.internship}
                  </div>
                  {selectedPhysician.education.residency && (
                    <div className="edu-row">
                      <strong>Residency:</strong> {selectedPhysician.education.residency}
                    </div>
                  )}
                  <div className="edu-row">
                    <strong>Fellowship:</strong> {selectedPhysician.education.fellowship}
                  </div>
                </div>
              </div>

              {/* Current Positions */}
              <div className="modal-section-block">
                <h4 className="modal-section-title">
                  <Building size={17} className="text-teal" />
                  <span>Current Directorships & Appointments</span>
                </h4>
                <ul className="modal-checklist">
                  {selectedPhysician.currentPositions.map((pos, idx) => (
                    <li key={idx}>
                      <CheckCircle size={15} className="text-teal" />
                      <span>{pos}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Professional Memberships */}
              <div className="modal-section-block">
                <h4 className="modal-section-title">
                  <Award size={17} className="text-teal" />
                  <span>Professional Medical Society Memberships</span>
                </h4>
                <div className="modal-tags-flex">
                  {selectedPhysician.memberships.map((m, idx) => (
                    <span key={idx} className="society-tag">{m}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-physician-footer">
              <button
                onClick={() => { handleCloseBio(); onOpenAppointmentModal(selectedPhysician.name); }}
                className="btn btn-teal"
              >
                <Calendar size={17} />
                <span>Request Appointment with Dr. {selectedPhysician.name}</span>
              </button>
              <a href={`tel:${practiceInfo.phone.replace(/\D/g, '')}`} className="btn btn-secondary">
                <Phone size={17} />
                <span>Call {practiceInfo.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
