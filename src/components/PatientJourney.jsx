import React from 'react';
import { PhoneCall, UserCheck, FileCheck, ArrowRight, Calendar } from 'lucide-react';
import { patientJourneySteps, practiceInfo } from '../data/practiceData';
import './PatientJourney.css';

const stepIcons = [PhoneCall, UserCheck, FileCheck];

export default function PatientJourney({ onOpenAppointmentModal }) {
  return (
    <section className="section patient-journey-section section-alt" id="journey">
      <div className="container">
        <div className="section-header">
          <div className="badge-tag teal">
            <span>Clear Path Forward</span>
          </div>
          <h2 className="section-title">Your Kidney Care Journey</h2>
          <p className="section-subtitle">
            We understand that navigating kidney health can feel overwhelming. Our process is designed to be clear, supportive, and unhurried at every single step.
          </p>
        </div>

        {/* 3-Step Interconnected Timeline */}
        <div className="journey-timeline-wrapper">
          <div className="journey-steps-grid">
            {patientJourneySteps.map((step, idx) => {
              const Icon = stepIcons[idx] || PhoneCall;
              return (
                <div key={idx} className="journey-step-card">
                  <div className="journey-step-header">
                    <div className="step-number-badge">
                      <span>0{step.step}</span>
                    </div>
                    <div className="journey-icon-wrap">
                      <Icon size={22} />
                    </div>
                  </div>

                  <div className="journey-card-content">
                    <span className="journey-step-subtitle">Step 0{step.step}</span>
                    <h3 className="journey-step-title">{step.title}</h3>
                    <p className="journey-step-desc">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Journey Call-to-action */}
        <div className="journey-cta-box">
          <div className="journey-cta-text">
            <h4>Ready to take control of your kidney health?</h4>
            <p>Our experienced staff handles insurance verification, coordinates prior medical and lab records, and prepares a personalized visit.</p>
          </div>
          <div className="journey-buttons">
            <button onClick={onOpenAppointmentModal} className="btn btn-teal">
              <Calendar size={17} />
              <span>Request First Visit</span>
            </button>
            <a href={`tel:${practiceInfo.phone.replace(/\D/g, '')}`} className="btn btn-secondary">
              <PhoneCall size={17} />
              <span>Call {practiceInfo.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
