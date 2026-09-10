import React, { useState } from 'react';
import {
  Calendar,
  Phone,
  Mail,
  Send,
  CheckCircle,
  ShieldCheck,
  Clock,
  MapPin
} from 'lucide-react';
import { practiceInfo, physicians, emergencyInfo } from '../data/practiceData';
import '../components/AppointmentContact.css';
import './Pages.css';

export default function ContactPage({ navigateTo, preselectedDoctor = "" }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    patientStatus: "new",
    serviceNeeded: "General Nephrology Consultation",
    preferredDoctor: preselectedDoctor || "No Preference (First Available)",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="contact-page">
      {/* Page Banner Header */}
      <div className="page-banner">
        <div className="container page-banner-container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <span onClick={() => navigateTo('home')} className="breadcrumb-link">Home</span>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Contact & Appointments</span>
          </nav>
          <h1 className="page-banner-title">Schedule an Appointment or Referral</h1>
          <p className="page-banner-subtitle">
            We welcome new patients, self-referrals, and physician consultations. Complete our online request form or contact our Boardman office directly.
          </p>
        </div>
      </div>

      {/* Main Appointment Section */}
      <section className="page-content-section">
        <div className="container">
          <div className="appointment-wrapper-grid">
            {/* Left Column: Direct Phone & Practice Information */}
            <div className="appointment-info-col">
              <div className="badge-tag teal">
                <span>Patient Scheduling</span>
              </div>
              <h2 className="appointment-title">We Are Here to Assist You</h2>
              <p className="appointment-desc">
                Whether you need a second opinion on abnormal bloodwork, ongoing CKD management, or a consultation with one of our board-certified nephrologists, our staff is ready to help.
              </p>

              {/* Immediate Telephone Card */}
              <div className="phone-schedule-card">
                <div className="phone-card-icon">
                  <Phone size={24} className="text-teal" />
                </div>
                <div className="phone-card-content">
                  <span className="phone-card-subtitle">Call Our Boardman Office Directly</span>
                  <a href={`tel:${practiceInfo.phone.replace(/\D/g, '')}`} className="phone-card-number">
                    {practiceInfo.phone}
                  </a>
                  <span className="phone-card-hours">Monday – Friday: 8:00 AM – 4:00 PM</span>
                </div>
              </div>

              {/* 24/7 Urgent Care Box */}
              <div style={{ background: '#fff7ed', border: '1px solid #fed7aa', borderRadius: '16px', padding: '1.25rem 1.5rem', marginBottom: '1.75rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#c2410c', textTransform: 'uppercase' }}>24/7 Patient Urgent On-Call Line</span>
                <p style={{ margin: '0.25rem 0 0.5rem 0', fontSize: '0.9rem', color: '#431407' }}>
                  For urgent kidney health concerns or dialysis access emergencies outside regular hours:
                </p>
                <a href={`tel:${emergencyInfo.onCallNumber.replace(/\D/g, '')}`} style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 800, color: '#ea580c' }}>
                  {emergencyInfo.onCallNumber}
                </a>
              </div>

              {/* Practice Commitments */}
              <div className="appointment-perks-list">
                <div className="perk-item">
                  <ShieldCheck size={20} className="text-teal" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong>Self-Referrals Accepted</strong>
                    <p>You do not need a physician's referral to schedule an initial consultation.</p>
                  </div>
                </div>

                <div className="perk-item">
                  <CheckCircle size={20} className="text-teal" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong>Insurance Coverage</strong>
                    <p>We work with Medicare, Medicaid, and major commercial healthcare plans in Ohio.</p>
                  </div>
                </div>

                <div className="perk-item">
                  <MapPin size={20} className="text-teal" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong>Boardman Office</strong>
                    <p>{practiceInfo.fullAddress}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Appointment Form Card */}
            <div className="appointment-form-col">
              <div className="appointment-form-card">
                {submitted ? (
                  <div className="submission-success-state" role="alert">
                    <div className="success-icon-circle">
                      <CheckCircle size={44} className="text-teal" />
                    </div>
                    <h3 className="success-title">Appointment Request Received</h3>
                    <p className="success-text">
                      Thank you, <strong>{formData.fullName}</strong>. A Renal Group patient coordinator will contact you at <strong>{formData.phone || formData.email}</strong> during regular business hours to confirm your appointment time and required records.
                    </p>
                    <div className="success-reassurance">
                      <p>If you have urgent clinical questions right now, please call our office at <strong>(330) 729-0059</strong>.</p>
                    </div>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: "",
                          phone: "",
                          email: "",
                          patientStatus: "new",
                          serviceNeeded: "General Nephrology Consultation",
                          preferredDoctor: "No Preference (First Available)",
                          message: ""
                        });
                      }}
                      className="btn btn-secondary"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="appointment-form">
                    <div className="form-header-line">
                      <h3 className="form-title">Request an Appointment</h3>
                      <span className="form-required-note">* Required fields</span>
                    </div>

                    {/* Patient Status Radio */}
                    <div className="form-group">
                      <label className="form-label">Patient Status *</label>
                      <div className="status-radio-group">
                        <label className={`radio-pill ${formData.patientStatus === 'new' ? 'selected' : ''}`}>
                          <input
                            type="radio"
                            name="patientStatus"
                            value="new"
                            checked={formData.patientStatus === 'new'}
                            onChange={handleChange}
                          />
                          <span>New Patient</span>
                        </label>
                        <label className={`radio-pill ${formData.patientStatus === 'existing' ? 'selected' : ''}`}>
                          <input
                            type="radio"
                            name="patientStatus"
                            value="existing"
                            checked={formData.patientStatus === 'existing'}
                            onChange={handleChange}
                          />
                          <span>Existing Patient</span>
                        </label>
                      </div>
                    </div>

                    {/* Full Name & Phone */}
                    <div className="form-row-2">
                      <div className="form-group">
                        <label htmlFor="contactFullName" className="form-label">Full Name *</label>
                        <input
                          type="text"
                          id="contactFullName"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="First and last name"
                          className="form-control"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="contactPhone" className="form-label">Phone Number *</label>
                        <input
                          type="tel"
                          id="contactPhone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(330) 000-0000"
                          className="form-control"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="form-group">
                      <label htmlFor="contactEmail" className="form-label">Email Address (Optional)</label>
                      <input
                        type="email"
                        id="contactEmail"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@example.com"
                        className="form-control"
                      />
                    </div>

                    {/* Reason for Visit & Preferred Doctor */}
                    <div className="form-row-2">
                      <div className="form-group">
                        <label htmlFor="contactService" className="form-label">Reason for Visit</label>
                        <select
                          id="contactService"
                          name="serviceNeeded"
                          value={formData.serviceNeeded}
                          onChange={handleChange}
                          className="form-control"
                        >
                          <option value="General Nephrology Consultation">General Nephrology Consultation</option>
                          <option value="Chronic Kidney Disease (CKD)">Chronic Kidney Disease (CKD)</option>
                          <option value="Hypertension & Blood Pressure">Hypertension & Blood Pressure</option>
                          <option value="Dialysis Consultation">Dialysis Consultation</option>
                          <option value="Home Hemodialysis Program">Home Hemodialysis Program</option>
                          <option value="Peritoneal Dialysis">Peritoneal Dialysis</option>
                          <option value="Kidney Transplant Follow-up">Kidney Transplant Follow-up</option>
                          <option value="Clinical Research Trial">Clinical Research Trial</option>
                          <option value="Other / Second Opinion">Other / Second Opinion</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="contactDoctor" className="form-label">Preferred Physician</label>
                        <select
                          id="contactDoctor"
                          name="preferredDoctor"
                          value={formData.preferredDoctor}
                          onChange={handleChange}
                          className="form-control"
                        >
                          <option value="No Preference (First Available)">First Available Physician</option>
                          <option value="Dr. Hilmer Negrete, M.D.">Dr. Hilmer Negrete, M.D.</option>
                          <option value="Dr. Prakash N. Roy, M.D.">Dr. Prakash N. Roy, M.D.</option>
                        </select>
                      </div>
                    </div>

                    {/* Notes */}
                    <div className="form-group">
                      <label htmlFor="contactMessage" className="form-label">Message / Details</label>
                      <textarea
                        id="contactMessage"
                        name="message"
                        rows="3"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Describe your questions, abnormal lab values, or preferred days of the week..."
                        className="form-control"
                      ></textarea>
                    </div>

                    {/* HIPAA Confidentiality Guarantee */}
                    <div className="hipaa-privacy-notice">
                      <ShieldCheck size={16} className="text-teal" style={{ flexShrink: 0 }} />
                      <span>Your medical information is held in strict clinical confidentiality according to HIPAA standards.</span>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-teal btn-submit-request"
                      id="submit-contact-btn"
                    >
                      {isSubmitting ? (
                        <span>Submitting Request...</span>
                      ) : (
                        <>
                          <Send size={17} />
                          <span>Submit Appointment Request</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
