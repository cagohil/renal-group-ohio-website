import React from 'react';
import { X, Wrench, Phone, Clock, ShieldAlert } from 'lucide-react';
import { practiceInfo } from '../data/practiceData';
import './AppointmentModal.css';

export default function AppointmentModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-dialog appointment-modal-dialog maintenance-modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="maintenance-container">
          <div className="maintenance-icon-badge">
            <Wrench size={36} className="maintenance-icon" />
          </div>

          <span className="maintenance-pill">System Maintenance</span>

          <h2 className="maintenance-title">Appointment Scheduling Under Maintenance</h2>

          <p className="maintenance-message">
            We are currently upgrading our online appointment scheduling system to improve your experience. We apologize for any temporary inconvenience.
          </p>

          <button onClick={onClose} className="btn btn-secondary btn-close-modal">
            <span>Close</span>
          </button>
        </div>
      </div>
    </div>
  );
}
