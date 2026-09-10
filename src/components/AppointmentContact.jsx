import React, { useState } from 'react';
import {
  Calendar,
  Phone,
  Mail,
  Send,
  CheckCircle,
  ShieldCheck,
  Clock,
  MapPin,
  HelpCircle
} from 'lucide-react';
import { practiceInfo, physicians } from '../data/practiceData';
import './AppointmentContact.css';

export default function AppointmentContact({ preselectedDoctor = "" }) {
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
    }, 700);
  };

  return (
    <section className="section appointment-section" id="contact">
      <div className="container">
        <div className="appointment-wrapper-grid">
          {/* Left Column: Direct Call & Practice Details */}
          <div className="appointment-info-col">
            <div className="badge-tag teal">
              <span>Direct Scheduling</span>
            </div>

            <h2 className="appointment-title">Schedule an Appointment or Referral</h2>
            <p className="appointment-desc">
              We gladly welcome new patients, existing patient follow-ups, and physician referrals. Complete the form or call our Boardman office directly.
            </p>

            {/* Direct Telephone Scheduling Card */}
            <div className="phone-schedule-card">
              <div className="phone-card-icon">
                <Phone size={24} className="text-teal" />
              </div>
              <div className="phone-card-content">
                <span className="phone-card-subtitle">Prefer to schedule immediately by phone?</span>
                <a href={`tel:${practiceInfo.phone.replace(/\D/g, '')}`} className="phone-card-number">
                  {practiceInfo.phone}
                </a>
                <span className="phone-card-hours">Mon – Fri: 8:00 AM – 4:00 PM</span>
              </div>
            </div>

            {/* Key Information Points */}
            <div className="appointment-perks-list">
              <div className="perk-item">
                <ShieldCheck size={20} className="text-teal" />
                <div>
                  <strong>Accepting Self-Referrals</strong>
                  <p>You do not need a physician's referral note to schedule an initial consultation.</p>
                </div>
              </div>

              <div className="perk-item">
                <CheckCircle size={20} className="text-teal" />
                <div>
                  <strong>Major Insurance Coverage</strong>
                  <p>We work with Medicare, Medicaid, and major commercial healthcare plans.</p>
                </div>
              </div>

              <div className="perk-item">
                <Clock size={20} className="text-teal" />
                <div>
                  <strong>Prompt Scheduling</strong>
                  <p>Our triage coordinators prioritize urgent clinical lab evaluations.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Appointment Form */}
          <div className="appointment-form-col">
            <div className="appointment-form-card">
              {submitted ? (
                <div className="submission-success-state" role="alert">
                  <div className="success-icon-circle">
                    <CheckCircle size={48} className="text-teal" />
                  </div>
                  <h3 className="success-title">Appointment Request Received</h3>
                  <p className="success-text">
                    Thank you, <strong>{formData.fullName}</strong>. A Renal Group patient coordinator will contact you at <strong>{formData.phone || formData.email}</strong> during regular business hours to confirm your appointment details.
                  </p>
                  <div className="success-reassurance">
                    <p>If you have urgent medical questions right now, please call our office at <strong>(330) 729-0059</strong>.</p>
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

                  {/* Name & Phone */}
                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="fullName" className="form-label">Full Name *</label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="First and last name"
                        className="form-control"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
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
                    <label htmlFor="email" className="form-label">Email Address (Optional)</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@example.com"
                      className="form-control"
                    />
                  </div>

                  {/* Service & Preferred Doctor */}
                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="serviceNeeded" className="form-label">Service / Reason</label>
                      <select
                        id="serviceNeeded"
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
                        <option value="Kidney Transplant Care">Kidney Transplant Care</option>
                        <option value="Clinical Research Trial">Clinical Research Trial</option>
                        <option value="Other / Unsure">Other / Unsure</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="preferredDoctor" className="form-label">Preferred Physician</label>
                      <select
                        id="preferredDoctor"
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

                  {/* Additional Notes */}
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message or Special Requests</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly describe your questions, recent lab tests, or preferred days of the week..."
                      className="form-control"
                    ></textarea>
                  </div>

                  {/* HIPAA & Privacy Assurance */}
                  <div className="hipaa-privacy-notice">
                    <ShieldCheck size={16} className="text-teal" />
                    <span>Your medical information is held in strict clinical confidentiality. We will never share your details.</span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-teal btn-submit-request"
                    id="submit-appointment-btn"
                  >
                    {isSubmitting ? (
                      <span>Sending Request...</span>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Send Appointment Request</span>
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
  );
}
