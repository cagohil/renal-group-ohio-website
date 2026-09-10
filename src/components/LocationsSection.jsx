import React from 'react';
import {
  MapPin,
  Phone,
  Printer,
  Clock,
  Navigation,
  CheckCircle,
  Car,
  Accessibility,
  Mail,
  ShieldAlert
} from 'lucide-react';
import { practiceInfo } from '../data/practiceData';
import './LocationsSection.css';

export default function LocationsSection() {
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    practiceInfo.fullAddress
  )}`;

  return (
    <section className="section locations-section section-alt" id="locations">
      <div className="container">
        <div className="section-header">
          <div className="badge-tag">
            <span>Regional Access</span>
          </div>
          <h2 className="section-title">Convenient Care Across Northeast Ohio</h2>
          <p className="section-subtitle">
            Centrally located in Boardman, Ohio, providing patient consultations, clinical evaluations, and dialysis directorships throughout the Mahoning Valley.
          </p>
        </div>

        <div className="locations-layout-grid">
          {/* Main Office Information Card */}
          <div className="office-card">
            <div className="office-card-badge">
              <span className="office-status-pill">Main Practice Headquarters</span>
            </div>

            <h3 className="office-title">Boardman Main Office</h3>
            <p className="office-tagline">The Renal Group – For Kidney Care</p>

            <div className="office-details-list">
              {/* Address */}
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

              {/* Phone */}
              <div className="office-detail-row">
                <div className="detail-icon-wrap">
                  <Phone size={20} className="text-teal" />
                </div>
                <div className="detail-content">
                  <span className="detail-label">Main Telephone</span>
                  <a href={`tel:${practiceInfo.phone.replace(/\D/g, '')}`} className="detail-link-phone">
                    {practiceInfo.phone}
                  </a>
                </div>
              </div>

              {/* Fax */}
              <div className="office-detail-row">
                <div className="detail-icon-wrap">
                  <Printer size={20} className="text-teal" />
                </div>
                <div className="detail-content">
                  <span className="detail-label">Confidential Medical Fax</span>
                  <p className="detail-value">{practiceInfo.fax}</p>
                </div>
              </div>

              {/* Hours */}
              <div className="office-detail-row">
                <div className="detail-icon-wrap">
                  <Clock size={20} className="text-teal" />
                </div>
                <div className="detail-content">
                  <span className="detail-label">Office Operating Hours</span>
                  <p className="detail-value">{practiceInfo.hours}</p>
                  <span className="detail-lunch-notice">{practiceInfo.lunchNotice}</span>
                </div>
              </div>
            </div>

            {/* Correspondence & Payment Notice Box */}
            <div className="office-notice-box">
              <Mail size={18} className="text-navy" />
              <p>
                <strong>Billing & Correspondence:</strong> {practiceInfo.paymentNotice}
              </p>
            </div>

            {/* Actions */}
            <div className="office-card-actions">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-teal btn-directions"
                id="get-directions-btn"
              >
                <Navigation size={18} />
                <span>Get Driving Directions</span>
              </a>
              <a
                href={`tel:${practiceInfo.phone.replace(/\D/g, '')}`}
                className="btn btn-secondary"
              >
                <Phone size={18} />
                <span>Call Boardman Office</span>
              </a>
            </div>
          </div>

          {/* Regional Map & Coverage Column */}
          <div className="locations-map-column">
            {/* Styled Map Container */}
            <div className="styled-map-container">
              <iframe
                title="The Renal Group Boardman Office Map"
                src="https://maps.google.com/maps?q=807%20Southwestern%20Run,%20Boardman,%20OH%2044514&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="embedded-google-map"
              ></iframe>

              <div className="map-overlay-badge">
                <MapPin size={16} className="text-teal" />
                <span>807 Southwestern Run, Boardman, OH</span>
              </div>
            </div>

            {/* Regional Coverage Grid */}
            <div className="regional-coverage-card">
              <h4 className="coverage-title">Regional Service Areas & Communities</h4>
              <p className="coverage-desc">
                Patients regularly travel to our Boardman clinic from communities across three northeast Ohio counties:
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
  );
}
