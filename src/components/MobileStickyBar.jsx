import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { practiceInfo } from '../data/practiceData';
import './MobileStickyBar.css';

export default function MobileStickyBar({ onOpenAppointmentModal }) {
  return (
    <div className="mobile-sticky-action-bar" aria-label="Quick Actions">
      <a
        href={`tel:${practiceInfo.phone.replace(/\D/g, '')}`}
        className="sticky-action-btn sticky-call-btn"
        id="mobile-sticky-call-btn"
        aria-label="Call Boardman Office"
      >
        <Phone size={18} />
        <span>Call Office</span>
      </a>

      <button
        onClick={onOpenAppointmentModal}
        className="sticky-action-btn sticky-appointment-btn"
        id="mobile-sticky-appointment-btn"
        aria-label="Request an Appointment"
      >
        <Calendar size={18} />
        <span>Request Appointment</span>
      </button>
    </div>
  );
}
