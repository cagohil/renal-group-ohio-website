import React from 'react';
import {
  Calendar,
  Phone,
  ArrowRight,
  ShieldCheck,
  Award,
  Heart,
  FileText,
  MapPin,
  Clock,
  CheckCircle2,
  Stethoscope,
  Activity,
  HeartPulse,
  Home,
  ExternalLink,
  Building2,
  GraduationCap
} from 'lucide-react';
import { practiceInfo, physicians } from '../data/practiceData';
import './HomePage.css';
import './Pages.css';

const clinicalAffiliations = [
  {
    category: "Hospitals",
    icon: Building2,
    badgeColor: "teal",
    description: "Inpatient admitting privileges and emergency nephrology consultations across regional hospital systems.",
    items: [
      { name: "Salem Regional Medical Center", url: "https://www.salemhosp.com", displayUrl: "www.salemhosp.com" },
      { name: "Mercy Health", url: "http://www.hmpartners.org", displayUrl: "www.hmpartners.org" }
    ]
  },
  {
    category: "Dialysis Units",
    icon: Activity,
    badgeColor: "sky",
    description: "Medical directorships, outpatient hemodialysis, and peritoneal dialysis care across regional units.",
    items: [
      { name: "Centers for Dialysis Care", url: "https://www.cdcare.org", displayUrl: "www.cdcare.org" },
      { name: "DaVita", url: "https://www.davita.com", displayUrl: "www.davita.com" },
      { name: "Fresenius Medical Care", url: "https://www.fmcna.com", displayUrl: "www.fmcna.com" }
    ]
  },
  {
    category: "Teaching Institutions",
    icon: GraduationCap,
    badgeColor: "gold",
    description: "Academic teaching appointments, clinical faculty leadership, and medical student training.",
    items: [
      { name: "Northeast Ohio Medical University", url: "https://www.neomed.edu", displayUrl: "www.neomed.edu" },
      { name: "Ohio University", url: "https://www.ohio.edu", displayUrl: "www.ohio.edu" },
      { name: "Youngstown State University", url: "https://www.ysu.edu", displayUrl: "www.ysu.edu" }
    ]
  }
];

export default function HomePage({ navigateTo, onOpenAppointmentModal }) {
  return (
    <div className="homepage-wrapper">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-mesh-glow" />
        <div className="container hero-container">
          <div className="hero-layout-grid">
            <div className="hero-text-content">
              <div className="hero-welcome-badge">
                <span className="hero-pulse-dot" />
                <span>Welcoming New Patients & Physician Referrals</span>
              </div>

              <h1 className="hero-main-heading">
                Specialized Kidney Care.<br />
                <span className="text-teal-gradient">Compassionate & Close to Home.</span>
              </h1>

              <p className="hero-lead-paragraph">
                The Renal Group is an independent nephrology practice dedicated to preserving kidney function, managing complex hypertension, and guiding dialysis care across Mahoning, Trumbull, and Columbiana Counties.
              </p>

              <div className="hero-button-group">
                <button
                  onClick={() => onOpenAppointmentModal()}
                  className="btn btn-teal btn-lg"
                  id="hero-request-appointment-btn"
                >
                  <Calendar size={18} />
                  <span>Request an Appointment</span>
                </button>

                <button
                  onClick={() => navigateTo('physicians')}
                  className="btn btn-secondary btn-lg"
                  id="hero-meet-physicians-btn"
                >
                  <span>Meet Our Physicians</span>
                  <ArrowRight size={18} />
                </button>
              </div>

              <div className="hero-trust-pills">
                <div className="trust-pill-item">
                  <CheckCircle2 size={16} className="text-wellness" />
                  <span>Board-Certified Nephrologists</span>
                </div>
                <div className="trust-pill-item">
                  <CheckCircle2 size={16} className="text-wellness" />
                  <span>Mahoning Valley Home Hemo Pioneer</span>
                </div>
                <div className="trust-pill-item">
                  <CheckCircle2 size={16} className="text-wellness" />
                  <span>24/7 Physician On-Call Line</span>
                </div>
              </div>
            </div>

            <div className="hero-media-column">
              <div className="hero-image-wrapper">
                <img
                  src="/assets/hero-consultation.jpg"
                  alt="Nephrologist providing compassionate care at The Renal Group"
                  className="hero-featured-photo"
                />

                <div className="hero-badge-float badge-float-top">
                  <div className="badge-float-icon icon-teal">
                    <Phone size={18} />
                  </div>
                  <div className="badge-float-text">
                    <span className="badge-float-tag">MAIN OFFICE</span>
                    <a href={`tel:${practiceInfo.phone.replace(/\D/g, '')}`} className="badge-float-link">
                      {practiceInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="hero-badge-float badge-float-bottom">
                  <div className="badge-float-icon icon-navy">
                    <MapPin size={18} />
                  </div>
                  <div className="badge-float-text">
                    <span className="badge-float-tag">ADDRESS</span>
                    <span className="badge-float-title">807 Southwestern Run, Boardman</span>
                  </div>
                </div>
              </div>

              <div className="hero-metrics-strip">
                <div className="metric-strip-item">
                  <span className="metric-number">30+</span>
                  <span className="metric-label">Years Valley Service</span>
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

      {/* Clinical Affiliations & Partnerships Section */}
      <section className="affiliations-section" aria-label="Clinical Affiliations & Partnerships">
        <div className="container">
          <div className="section-header">
            <div className="badge-tag teal">
              <Building2 size={13} />
              <span>Clinical Network</span>
            </div>
            <h2 className="section-title">Clinical Affiliations & Partnerships</h2>
            <p className="section-subtitle">
              Our board-certified nephrologists maintain hospital admitting privileges, medical directorships, and academic teaching appointments across Northeast Ohio.
            </p>
          </div>

          <div className="affiliations-categories-grid">
            {clinicalAffiliations.map((cat) => {
              const IconComponent = cat.icon;
              return (
                <div key={cat.category} className="affiliation-category-card">
                  <div className="category-card-header">
                    <div className={`category-icon-box ${cat.badgeColor}`}>
                      <IconComponent size={24} />
                    </div>
                    <h3 className="category-card-title">{cat.category}</h3>
                  </div>

                  <p className="category-card-desc">{cat.description}</p>

                  <div className="category-links-list">
                    {cat.items.map((item) => (
                      <a
                        key={item.name}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="affiliation-link-item"
                        title={`Visit ${item.name} website (${item.displayUrl})`}
                      >
                        <div className="affiliation-link-info">
                          <span className="affiliation-name">{item.name}</span>
                          <span className="affiliation-url-text">{item.displayUrl}</span>
                        </div>
                        <ExternalLink size={15} className="affiliation-ext-icon" />
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Clinical Focus Areas */}
      <section className="page-content-section alt-bg">
        <div className="container">
          <div className="section-header">
            <div className="badge-tag teal">
              <span>Clinical Offerings</span>
            </div>
            <h2 className="section-title">Specialized Kidney Care Programs</h2>
            <p className="section-subtitle">
              Expert diagnosis and continuous clinical management tailored to each stage of your kidney health journey.
            </p>
          </div>

          <div className="quick-action-grid">
            <div className="quick-action-card" onClick={() => navigateTo('services', '', 'service-chronic-kidney-disease')}>
              <div className="quick-action-top">
                <div className="quick-action-icon-box">
                  <Activity size={24} />
                </div>
                <span className="quick-action-pill">Chronic Care</span>
              </div>
              <div className="quick-action-body">
                <h3 className="quick-action-title">Chronic Kidney Disease (CKD)</h3>
                <p className="quick-action-desc">
                  Proactive management to slow CKD progression, preserve remaining nephron filtration, and manage mineral bone metabolism.
                </p>
              </div>
              <div className="quick-action-footer">
                <span className="quick-action-arrow-text">View Care Details</span>
                <div className="quick-action-arrow-circle"><ArrowRight size={15} /></div>
              </div>
            </div>

            <div className="quick-action-card" onClick={() => navigateTo('services', '', 'service-hypertension')}>
              <div className="quick-action-top">
                <div className="quick-action-icon-box">
                  <HeartPulse size={24} />
                </div>
                <span className="quick-action-pill">Specialty Clinic</span>
              </div>
              <div className="quick-action-body">
                <h3 className="quick-action-title">Hypertension Care Clinic</h3>
                <p className="quick-action-desc">
                  Comprehensive treatment for resistant and secondary high blood pressure through tailored medication regimens and lifestyle adjustments.
                </p>
              </div>
              <div className="quick-action-footer">
                <span className="quick-action-arrow-text">View Care Details</span>
                <div className="quick-action-arrow-circle"><ArrowRight size={15} /></div>
              </div>
            </div>

            <div className="quick-action-card" onClick={() => navigateTo('services', '', 'service-home-hemodialysis')}>
              <div className="quick-action-top">
                <div className="quick-action-icon-box">
                  <Home size={24} />
                </div>
                <span className="quick-action-pill">Valley Pioneer</span>
              </div>
              <div className="quick-action-body">
                <h3 className="quick-action-title">Home Hemodialysis & PD</h3>
                <p className="quick-action-desc">
                  Empowering patients with home therapy options: Home Hemodialysis (NxStage cycler) and automated Peritoneal Dialysis (HomeChoice).
                </p>
              </div>
              <div className="quick-action-footer">
                <span className="quick-action-arrow-text">View Care Details</span>
                <div className="quick-action-arrow-circle"><ArrowRight size={15} /></div>
              </div>
            </div>

            <div className="quick-action-card" onClick={() => navigateTo('education')}>
              <div className="quick-action-top">
                <div className="quick-action-icon-box">
                  <FileText size={24} />
                </div>
                <span className="quick-action-pill">Patient Resources</span>
              </div>
              <div className="quick-action-body">
                <h3 className="quick-action-title">Renal Diet Guides (PDF)</h3>
                <p className="quick-action-desc">
                  Download free clinical reference guides on potassium, phosphorus, sodium restrictions, and lab test interpretation.
                </p>
              </div>
              <div className="quick-action-footer">
                <span className="quick-action-arrow-text">Browse 9 Guides</span>
                <div className="quick-action-arrow-circle"><ArrowRight size={15} /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Heritage & Philosophy */}
      <section className="page-content-section">
        <div className="container">
          <div className="medical-two-col">
            <div className="prose-content">
              <div className="badge-tag teal">
                <span>About Our Practice</span>
              </div>
              <h2>Compassionate Kidney Medicine Grounded in Respect & Dignity</h2>
              <p>
                For over three decades, The Renal Group has served as a beacon of specialized nephrology care in Northeast Ohio. Our board-certified physicians, skilled nurse practitioners, and clinical staff work in close collaboration with primary care physicians and regional hospital systems.
              </p>
              <p>
                We maintain an unwavering commitment to remaining an independent clinical practice—allowing our sole allegiance to be our patients and their families.
              </p>

              <blockquote className="clinical-quote">
                "The Physicians of The Renal Group are dedicated to providing competent medical care with compassion and respect for human dignity and rights to our patients. Our mission is to improve the health and well-being of kidney disease patients in Youngstown and Ohio."
                <cite>— Clinical Mission Statement</cite>
              </blockquote>

              <button onClick={() => navigateTo('about')} className="btn btn-secondary">
                <span>Learn More About Our Heritage</span>
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="practice-highlight-box">
              <div className="trust-image-card">
                <img
                  src="/assets/care-puts-first.jpg"
                  alt="Clinical staff consulting with patient"
                  className="trust-main-image"
                  loading="lazy"
                />
                <div className="trust-overlay-badge">
                  <span className="badge-number">1st</span>
                  <div className="badge-desc-wrap">
                    <span className="badge-kicker">VALLEY MILESTONE</span>
                    <span className="badge-desc">Pioneered Mahoning Valley's First Home Hemodialysis Program</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Physician Spotlight Teaser */}
      <section className="page-content-section alt-bg">
        <div className="container">
          <div className="section-header">
            <div className="badge-tag teal">
              <span>Physician Leadership</span>
            </div>
            <h2 className="section-title">Meet Our Board-Certified Specialists</h2>
            <p className="section-subtitle">
              Experienced, respected nephrologists with decades of clinical leadership in the Mahoning Valley.
            </p>
          </div>

          <div className="physicians-grid">
            {physicians.map((doc) => (
              <div key={doc.id} className="physician-card">
                <div className="physician-photo-wrapper">
                  <img
                    src={doc.image}
                    alt={`Dr. ${doc.name}`}
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

                  <p className="physician-summary-text">{doc.summary}</p>

                  <div className="physician-actions">
                    <button
                      onClick={() => navigateTo('physicians')}
                      className="btn btn-secondary btn-sm"
                    >
                      <span>Full Bio & Credentials</span>
                      <ArrowRight size={14} />
                    </button>

                    <button
                      onClick={() => onOpenAppointmentModal(doc.name)}
                      className="btn btn-teal btn-sm"
                    >
                      <Calendar size={14} />
                      <span>Book with Dr. {doc.name.split(' ').pop()}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <button onClick={() => navigateTo('physicians')} className="btn btn-secondary">
              <span>View Full Physician Profiles, Fellowships & Certifications</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Ready to Schedule Banner */}
      <section className="page-content-section">
        <div className="container">
          <div className="services-consultation-banner">
            <div className="banner-text">
              <h3>Have Questions About Your Kidney Health or Need a Consultation?</h3>
              <p>We welcome self-referrals and patient consults. Our staff will coordinate prior laboratory tests and insurance verification.</p>
            </div>
            <div className="banner-actions">
              <button onClick={() => onOpenAppointmentModal()} className="btn btn-teal">
                <Calendar size={18} />
                <span>Schedule Consultation</span>
              </button>
              <a href={`tel:${practiceInfo.phone.replace(/\D/g, '')}`} className="btn btn-secondary">
                <Phone size={18} />
                <span>Call {practiceInfo.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
