import React from 'react';
import { AlertCircle, Phone, Clock, ShieldAlert } from 'lucide-react';
import { emergencyInfo, practiceInfo } from '../data/practiceData';
import './EmergencyBanner.css';

export default function EmergencyBanner() {
  return (
    <aside className="emergency-banner-section" aria-label="Urgent Medical Instructions">
      <div className="container">
        <div className="emergency-banner-card">
          <div className="emergency-icon-col">
            <div className="emergency-alert-icon">
              <ShieldAlert size={32} />
            </div>
          </div>

          <div className="emergency-content-col">
            <span className="emergency-badge">Urgent Medical Notice</span>
            <h3 className="emergency-headline">{emergencyInfo.headline}</h3>
            <p className="emergency-body-text">
              {emergencyInfo.lifeThreatening}
            </p>

            <div className="emergency-contact-strip">
              <div className="emergency-item primary-urgent">
                <Phone size={18} />
                <div>
                  <span className="urgent-item-label">24/7 Urgent On-Call Line:</span>
                  <a href={`tel:${emergencyInfo.onCallNumber.replace(/\D/g, '')}`} className="urgent-phone-link">
                    {emergencyInfo.onCallNumber}
                  </a>
                </div>
              </div>

              <div className="emergency-item standard-office">
                <Clock size={18} />
                <div>
                  <span className="urgent-item-label">Regular Office Hours (Mon–Fri, 8AM–4PM):</span>
                  <a href={`tel:${practiceInfo.phone.replace(/\D/g, '')}`} className="office-phone-link">
                    {practiceInfo.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
