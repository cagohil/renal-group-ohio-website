import React from 'react';
import {
  Shield,
  Heart,
  Users,
  Building,
  Award,
  Calendar,
  Phone,
  ArrowRight,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { practiceInfo, affiliations, advancedPracticeTeam } from '../data/practiceData';
import './Pages.css';

export default function AboutPage({ navigateTo, onOpenAppointmentModal }) {
  return (
    <div className="about-page">
      {/* Page Banner Header */}
      <div className="page-banner">
        <div className="container page-banner-container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <span onClick={() => navigateTo('home')} className="breadcrumb-link">Home</span>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">About Us</span>
          </nav>
          <h1 className="page-banner-title">About The Renal Group</h1>
          <p className="page-banner-subtitle">
            Providing specialized, compassionate nephrology care and pioneering dialysis treatments throughout the Mahoning Valley for over thirty years.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="page-content-section">
        <div className="container">
          <div className="medical-two-col">
            {/* Left Main Article */}
            <div className="prose-content">
              <div className="badge-tag teal">
                <span>Our Heritage & Mission</span>
              </div>
              <h2>Dedicated to Exceptional Kidney Care in Northeast Ohio</h2>

              <p>
                The Renal Group was founded with a singular purpose: to deliver the highest quality nephrology care to the residents of Mahoning, Trumbull, and Columbiana Counties. Over the past three decades, we have guided thousands of individuals and their families through complex kidney diseases, hypertension management, and dialysis therapies.
              </p>

              <blockquote className="clinical-quote">
                "The Physicians of The Renal Group (TRG) are dedicated to providing competent medical care with compassion and respect for human dignity and rights to our patients. We strive to uphold the standards of professionalism and recognize our duty to our patients first and foremost."
                <cite>— From The Renal Group Clinical Charter</cite>
              </blockquote>

              <h3>An Independent Practice Focused Exclusively on Patients</h3>
              <p>
                Unlike large hospital networks with conflicting administrative priorities, The Renal Group is proud to be an independent medical practice. Our clinical autonomy ensures that:
              </p>
              <ul>
                <li><strong>Patients come first:</strong> Every medical decision is made strictly in the best interest of our patient's longevity and quality of life.</li>
                <li><strong>Direct physician access:</strong> Our patients build meaningful, continuous relationships with our board-certified nephrologists.</li>
                <li><strong>Collaborative care:</strong> We maintain active clinical privileges and directorships across regional medical systems, seamlessly coordinating your care with your primary care doctor.</li>
              </ul>

              <div style={{ margin: '2rem 0' }}>
                <img
                  src="/assets/care-puts-first.jpg"
                  alt="Nephrologist reviewing clinical progress with patient"
                  style={{ borderRadius: '16px', border: '1px solid #e2e8f0', width: '100%' }}
                />
              </div>

              <h3>Pioneers in Valley Home Dialysis</h3>
              <p>
                The Renal Group is honored to have pioneered the <strong>first Home Hemodialysis Program in the Mahoning Valley</strong>. Recognizing that home dialysis modalities offer patients improved vitality, flexible schedules, and better cardiovascular outcomes, our practice invested early in specialized patient training, home equipment infrastructure, and 24/7 clinical on-call support.
              </p>

              <h3>Our Advanced Practice Nursing & Clinical Support Team</h3>
              <p>
                Nephrology requires meticulous multidisciplinary care. In addition to our board-certified physicians, our clinical team includes Certified Registered Nurse Practitioners (CRNPs), registered renal nurses, dialysis coordinators, and nutrition counselors. Together, we assist patients with medication titration, laboratory tracking, dietary modifications, and dialysis access monitoring.
              </p>

              <div style={{ marginTop: '2.5rem' }}>
                <button onClick={() => navigateTo('physicians')} className="btn btn-primary">
                  <span>Meet Our Board-Certified Physicians</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Right Clinical Sidebar */}
            <aside className="clinical-sidebar">
              <div className="clinical-sidebar-card">
                <h3 className="sidebar-card-title">Practice Overview</h3>

                <div className="sidebar-contact-list">
                  <div className="sidebar-contact-item">
                    <Building size={18} className="sidebar-item-icon" />
                    <div>
                      <span className="sidebar-item-label">Main Clinic Headquarters</span>
                      <p className="sidebar-item-val">{practiceInfo.fullAddress}</p>
                    </div>
                  </div>

                  <div className="sidebar-contact-item">
                    <Phone size={18} className="sidebar-item-icon" />
                    <div>
                      <span className="sidebar-item-label">Telephone Appointments</span>
                      <a href={`tel:${practiceInfo.phone.replace(/\D/g, '')}`} className="sidebar-item-phone">
                        {practiceInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="sidebar-contact-item">
                    <Shield size={18} className="sidebar-item-icon" />
                    <div>
                      <span className="sidebar-item-label">24/7 Patient Urgent Line</span>
                      <a href={`tel:${practiceInfo.emergencyOnCall.replace(/\D/g, '')}`} style={{ color: '#ea580c', fontWeight: 800 }}>
                        {practiceInfo.emergencyOnCall}
                      </a>
                    </div>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1.25rem' }}>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0c233c', marginBottom: '0.85rem' }}>
                    Clinical & Institutional Network:
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    <div>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#0d9488', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.35rem' }}>
                        Hospitals
                      </span>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                        <a href="https://www.salemhosp.com" target="_blank" rel="noopener noreferrer" className="sidebar-network-link">
                          <span>Salem Regional Medical Center</span>
                          <ExternalLink size={12} />
                        </a>
                        <a href="http://www.hmpartners.org" target="_blank" rel="noopener noreferrer" className="sidebar-network-link">
                          <span>Mercy Health</span>
                          <ExternalLink size={12} />
                        </a>
                      </div>
                    </div>

                    <div>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#0284c7', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.35rem' }}>
                        Dialysis Units
                      </span>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                        <a href="https://www.cdcare.org" target="_blank" rel="noopener noreferrer" className="sidebar-network-link">
                          <span>Centers for Dialysis Care</span>
                          <ExternalLink size={12} />
                        </a>
                        <a href="https://www.davita.com" target="_blank" rel="noopener noreferrer" className="sidebar-network-link">
                          <span>DaVita</span>
                          <ExternalLink size={12} />
                        </a>
                        <a href="https://www.fmcna.com" target="_blank" rel="noopener noreferrer" className="sidebar-network-link">
                          <span>Fresenius Medical Care</span>
                          <ExternalLink size={12} />
                        </a>
                      </div>
                    </div>

                    <div>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#b45309', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.35rem' }}>
                        Teaching Institutions
                      </span>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                        <a href="https://www.neomed.edu" target="_blank" rel="noopener noreferrer" className="sidebar-network-link">
                          <span>Northeast Ohio Medical University</span>
                          <ExternalLink size={12} />
                        </a>
                        <a href="https://www.ohio.edu" target="_blank" rel="noopener noreferrer" className="sidebar-network-link">
                          <span>Ohio University</span>
                          <ExternalLink size={12} />
                        </a>
                        <a href="https://www.ysu.edu" target="_blank" rel="noopener noreferrer" className="sidebar-network-link">
                          <span>Youngstown State University</span>
                          <ExternalLink size={12} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '1.5rem' }}>
                  <button onClick={() => onOpenAppointmentModal()} className="btn btn-teal" style={{ width: '100%' }}>
                    <Calendar size={16} />
                    <span>Request Appointment</span>
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
