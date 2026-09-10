import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { practiceInfo } from '../data/practiceData';
import './MobileStickyBar.css';

export default function MobileStickyBar({ onOpenAppointmentModal }) {
  return (
    <div className="mobile-floating-actions" aria-label="Mobile Quick Actions">
      <a
        href={`tel:${practiceInfo.phone.replace(/\D/g, '')}`}
        className="floating-action-fab fab-call"
        id="mobile-sticky-call-btn"
        title={`Call ${practiceInfo.phone}`}
        aria-label={`Call ${practiceInfo.phone}`}
      >
        <Phone size={20} />
      </a>

      <button
        onClick={onOpenAppointmentModal}
        className="floating-action-fab fab-appointment"
        id="mobile-sticky-appointment-btn"
        title="Request an Appointment"
        aria-label="Request an Appointment"
      >
        <Calendar size={20} />
      </button>
    </div>
  );
}
