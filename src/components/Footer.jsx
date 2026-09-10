import React from 'react';
import { Phone, MapPin, Printer, Clock, ShieldCheck, Heart, ArrowUp, ExternalLink } from 'lucide-react';
import { practiceInfo } from '../data/practiceData';
import './Footer.css';

const hospitalPartners = [
  {
    name: "Salem Regional Medical Center",
    short: "Salem Regional",
    logo: "/assets/partners/salem-regional.svg",
    url: "https://www.salemregional.com"
  },
  {
    name: "Mercy Health – St. Elizabeth",
    short: "Mercy Health",
    logo: "/assets/partners/mercy-health.svg",
    url: "http://www.hmpartners.org"
  },
  {
    name: "Centers for Dialysis Care",
    short: "CDC Ohio",
    logo: "/assets/partners/centers-for-dialysis-care.svg",
    url: "https://www.cdcare.org"
  },
  {
    name: "DaVita Kidney Care",
    short: "DaVita",
    logo: "/assets/partners/davita.svg",
    url: "https://www.davita.com"
  },
  {
    name: "Fresenius Kidney Care",
    short: "Fresenius",
    logo: "/assets/partners/fresenius.svg",
    url: "https://www.freseniuskidneycare.com"
  },
  {
    name: "NEOMED",
    short: "NEOMED",
    logo: "/assets/partners/neomed.svg",
    url: "https://www.neomed.edu"
  }
];

export default function Footer({ currentPage, navigateTo }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (pageId) => {
    if (navigateTo) {
      navigateTo(pageId);
    }
  };

  return (
    <footer className="footer-wrapper">
      {/* Top Footer Affiliations Bar with Actual Partner Logos */}
      <div className="footer-affiliations-bar">
        <div className="container">
          <div className="affiliations-flex">
            <div className="affiliations-title-wrap">
              <span className="affiliations-lead">Clinical Affiliations & Hospital Partnerships</span>
              <span className="affiliations-sub-lead">Direct Admitting & Dialysis Directorships</span>
            </div>

            <div className="affiliations-logos-row">
              {hospitalPartners.map((partner) => (
                <a
                  key={partner.name}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-partner-badge"
                  title={`Visit ${partner.name} (${partner.url})`}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="footer-partner-img"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Col 1: Brand & Identity */}
            <div className="footer-col brand-col">
              <div className="footer-brand">
                <img src="/assets/footer-logo.png" alt="The Renal Group" className="footer-logo" />
                {/* <div className="footer-brand-text"> */}
                {/* <h3 className="footer-brand-title">The Renal Group</h3> */}
                {/* </div> */}
              </div>

              <span className="footer-brand-sub">Nephrology & Hypertension</span>

              <p className="footer-mission-text">
                Dedicated to providing competent medical care with compassion and respect for human dignity to patients across the Youngstown and Mahoning Valley region.
              </p>

              <div className="footer-emergency-callout">
                <strong>24/7 On-Call Physician Hotline:</strong>
                <a href={`tel:${practiceInfo.emergencyOnCall.replace(/\D/g, '')}`}>
                  {practiceInfo.emergencyOnCall}
                </a>
              </div>
            </div>

            {/* Col 2: Multipage Navigation */}
            <div className="footer-col">
              <h4 className="footer-col-title">Pages</h4>
              <ul className="footer-links-list">
                <li><button onClick={() => handleNavClick('home')} className="footer-link-btn">Home</button></li>
                <li><button onClick={() => handleNavClick('about')} className="footer-link-btn">About Our Practice</button></li>
                <li><button onClick={() => handleNavClick('physicians')} className="footer-link-btn">Meet Our Physicians</button></li>
                <li><button onClick={() => handleNavClick('services')} className="footer-link-btn">Clinical Services</button></li>
                <li><button onClick={() => handleNavClick('education')} className="footer-link-btn">Diet & Nutrition Guides</button></li>
                <li><button onClick={() => handleNavClick('locations')} className="footer-link-btn">Office Locations</button></li>
                <li><button onClick={() => handleNavClick('contact')} className="footer-link-btn">Appointments & Contact</button></li>
              </ul>
            </div>

            {/* Col 3: Services Summary */}
            <div className="footer-col">
              <h4 className="footer-col-title">Kidney Care Specialties</h4>
              <ul className="footer-links-list">
                <li><button onClick={() => handleNavClick('services')} className="footer-link-btn">General Nephrology</button></li>
                <li><button onClick={() => handleNavClick('services')} className="footer-link-btn">Chronic Kidney Disease (CKD)</button></li>
                <li><button onClick={() => handleNavClick('services')} className="footer-link-btn">Hypertension Care Clinic</button></li>
                <li><button onClick={() => handleNavClick('services')} className="footer-link-btn">Inpatient & Outpatient Dialysis</button></li>
                <li><button onClick={() => handleNavClick('services')} className="footer-link-btn">Home Hemodialysis (NxStage)</button></li>
                <li><button onClick={() => handleNavClick('services')} className="footer-link-btn">Peritoneal Dialysis (HomeChoice)</button></li>
                <li><button onClick={() => handleNavClick('services')} className="footer-link-btn">Transplant Follow-Up Care</button></li>
                <li><button onClick={() => handleNavClick('services')} className="footer-link-btn">Clinical Research Trials</button></li>
              </ul>
            </div>

            {/* Col 4: Main Office & Hours */}
            <div className="footer-col contact-col">
              <h4 className="footer-col-title">Boardman Office</h4>
              <div className="footer-contact-items">
                <div className="footer-contact-item">
                  <MapPin size={18} className="footer-icon" />
                  <div>
                    <span>{practiceInfo.address}</span>
                    <span>{practiceInfo.cityStateZip}</span>
                  </div>
                </div>

                <div className="footer-contact-item">
                  <Phone size={18} className="footer-icon" />
                  <div>
                    <a href={`tel:${practiceInfo.phone.replace(/\D/g, '')}`} className="footer-phone-bold">
                      {practiceInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="footer-contact-item">
                  <Printer size={18} className="footer-icon" />
                  <span>Fax: {practiceInfo.fax}</span>
                </div>

                <div className="footer-contact-item">
                  <Clock size={18} className="footer-icon" />
                  <div>
                    <span>{practiceInfo.hours}</span>
                    <span className="footer-lunch">{practiceInfo.lunchNotice}</span>
                  </div>
                </div>
              </div>

              <div className="footer-billing-note">
                {practiceInfo.paymentNotice}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimers & Emergency Notice */}
      <div className="footer-disclaimers">
        <div className="container">
          <div className="emergency-disclaimer-box">
            <strong>Emergency Medical Disclosure:</strong> In the event of a life-threatening medical emergency, please dial 911 or visit the nearest hospital emergency department immediately. Hospital staff will contact our on-call physician.
          </div>

          <p className="medical-disclaimer-text">
            <strong>Medical Disclaimer:</strong> The clinical information provided on this website is for educational purposes only and does not constitute medical advice or a physician-patient relationship. Always consult a board-certified physician regarding any questions about kidney diseases or treatment options.
          </p>

          <div className="footer-bottom-bar">
            <div className="footer-copyright">
              © {new Date().getFullYear()} The Renal Group. All rights reserved. Serving Youngstown, Boardman, Warren, Salem, and Northeast Ohio.
            </div>

            <div className="footer-bottom-right">
              <span>Design By <a href="https://www.exultitsolution.com" target="_blank" rel="noopener noreferrer" className="footer-designer-link">Exult IT Solution</a></span>
              <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Back to top">
                <span>Top</span>
                <ArrowUp size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
