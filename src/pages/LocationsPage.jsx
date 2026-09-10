import React from 'react';
import {
  MapPin,
  Phone,
  Printer,
  Clock,
  Navigation,
  Accessibility,
  Car,
  Mail,
  CheckCircle
} from 'lucide-react';
import { practiceInfo } from '../data/practiceData';
import '../components/LocationsSection.css';
import './Pages.css';

export default function LocationsPage({ navigateTo }) {
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    practiceInfo.fullAddress
  )}`;

  return (
    <div className="locations-page">
      {/* Page Banner Header */}
      <div className="page-banner">
        <div className="container page-banner-container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <span onClick={() => navigateTo('home')} className="breadcrumb-link">Home</span>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Locations & Access</span>
          </nav>
          <h1 className="page-banner-title">Office Location & Regional Access</h1>
          <p className="page-banner-subtitle">
            Conveniently based in Boardman, Ohio, providing nephrology consultations and dialysis oversight across Northeast Ohio.
          </p>
        </div>
      </div>

      {/* Main Locations Section */}
      <section className="page-content-section">
        <div className="container">
          <div className="locations-layout-grid">
            {/* Boardman Office Card */}
            <div className="office-card">
              <div>
                <div className="office-card-badge">
                  <span className="office-status-pill">Main Practice Headquarters</span>
                </div>

                <h2 className="office-title">Boardman Main Office</h2>
                <p className="office-tagline">The Renal Group – For Kidney Care</p>

                <div className="office-details-list">
                  <div className="office-detail-row">
                    <div className="detail-icon-wrap">
                      <MapPin size={20} className="text-teal" />
                    </div>
                    <div className="detail-content">
                      <span className="detail-label">Office Address</span>
                      <p className="detail-value">{practiceInfo.address}</p>
                      <p className="detail-subvalue">{practiceInfo.cityStateZip}</p>
                    </div>
                  </div>

                  <div className="office-detail-row">
                    <div className="detail-icon-wrap">
                      <Phone size={20} className="text-teal" />
                    </div>
                    <div className="detail-content">
                      <span className="detail-label">Office Telephone</span>
                      <a href={`tel:${practiceInfo.phone.replace(/\D/g, '')}`} className="detail-link-phone">
                        {practiceInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="office-detail-row">
                    <div className="detail-icon-wrap">
                      <Printer size={20} className="text-teal" />
                    </div>
                    <div className="detail-content">
                      <span className="detail-label">Confidential Fax</span>
                      <p className="detail-value">{practiceInfo.fax}</p>
                    </div>
                  </div>

                  <div className="office-detail-row">
                    <div className="detail-icon-wrap">
                      <Clock size={20} className="text-teal" />
                    </div>
                    <div className="detail-content">
                      <span className="detail-label">Operating Hours</span>
                      <p className="detail-value">{practiceInfo.hours}</p>
                      <span className="detail-lunch-notice">{practiceInfo.lunchNotice}</span>
                    </div>
                  </div>
                </div>

                <div className="office-notice-box">
                  <Mail size={18} className="text-navy" style={{ flexShrink: 0 }} />
                  <p>
                    <strong>Billing & Correspondence:</strong> {practiceInfo.paymentNotice}
                  </p>
                </div>
              </div>

              <div className="office-card-actions">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-teal btn-directions"
                >
                  <Navigation size={18} />
                  <span>Get Driving Directions</span>
                </a>
                <a
                  href={`tel:${practiceInfo.phone.replace(/\D/g, '')}`}
                  className="btn btn-secondary"
                >
                  <Phone size={18} />
                  <span>Call {practiceInfo.phone}</span>
                </a>
              </div>
            </div>

            {/* Map & Regional Coverage Column */}
            <div className="locations-map-column">
              <div className="styled-map-container">
                <iframe
                  title="The Renal Group Boardman Office Map"
                  src="https://maps.google.com/maps?q=807%20Southwestern%20Run,%20Boardman,%20OH%2044514&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="embedded-google-map"
                ></iframe>

                <div className="map-overlay-badge">
                  <MapPin size={15} className="text-teal" />
                  <span>807 Southwestern Run, Boardman, OH</span>
                </div>
              </div>

              <div className="regional-coverage-card">
                <h3 className="coverage-title">Regional Service Areas & Counties</h3>
                <p className="coverage-desc">
                  Patients travel to our Boardman office from communities across Northeast Ohio:
                </p>

                <div className="counties-chips">
                  {practiceInfo.countiesServed.map((county, idx) => (
                    <span key={idx} className="county-chip">
                      <CheckCircle size={14} className="text-teal" />
                      <span>{county}</span>
                    </span>
                  ))}
                </div>

                <div className="cities-flex-list">
                  <span className="cities-label">Communities Served:</span>
                  <div className="cities-pills">
                    {practiceInfo.citiesCovered.map((city, idx) => (
                      <span key={idx} className="city-pill">{city}, OH</span>
                    ))}
                  </div>
                </div>

                <div className="accessibility-notes">
                  <div className="access-item">
                    <Accessibility size={18} className="text-teal" />
                    <span>Ground-floor entrance, wide ADA compliant hallways & wheelchair accessibility</span>
                  </div>
                  <div className="access-item">
                    <Car size={18} className="text-teal" />
                    <span>Free, convenient surface parking directly in front of the clinical entrance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
