import React from 'react';
import { X } from 'lucide-react';
import AppointmentContact from './AppointmentContact';
import './AppointmentModal.css';

export default function AppointmentModal({ isOpen, onClose, preselectedDoctor = "" }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-dialog appointment-modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={22} />
        </button>
        <AppointmentContact preselectedDoctor={preselectedDoctor} />
      </div>
    </div>
  );
}
