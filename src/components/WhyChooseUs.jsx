import React from 'react';
import { UserCheck, Stethoscope, MapPin, Heart, ArrowRight } from 'lucide-react';
import { whyChoosePoints } from '../data/practiceData';
import './WhyChooseUs.css';

const icons = [UserCheck, Stethoscope, MapPin, Heart];

export default function WhyChooseUs({ onOpenAppointmentModal }) {
  return (
    <section className="section why-choose-section">
      <div className="container">
        <div className="section-header">
          <div className="badge-tag">
            <span>Our Distinction</span>
          </div>
          <h2 className="section-title">Why Patients and Referring Physicians Choose The Renal Group</h2>
          <p className="section-subtitle">
            Providing high-caliber clinical medicine, accessible physician leadership, and deep community roots across the Mahoning Valley for decades.
          </p>
        </div>

        <div className="why-choose-grid">
          {whyChoosePoints.map((item, index) => {
            const Icon = icons[index] || UserCheck;
            return (
              <div key={index} className="why-card">
                <div className="why-card-top">
                  <span className="why-card-number">0{index + 1}</span>
                  <div className="why-icon-box">
                    <Icon size={24} className="text-teal" />
                  </div>
                </div>
                <h3 className="why-card-title">{item.title}</h3>
                <p className="why-card-desc">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Local Healthcare Network Callout */}
        <div className="referrals-banner">
          <div className="referrals-banner-content">
            <h3 className="referrals-title">Referring Physicians & Healthcare Providers</h3>
            <p className="referrals-text">
              We collaborate closely with primary care providers, cardiologists, endocrinologists, and hospitalists across northeast Ohio. We welcome consultative and transfer referrals, ensuring timely clinical notes and coordinated patient transitions.
            </p>
          </div>
          <div className="referrals-cta-box">
            <a
              href="/assets/new-patient-referral-hospital-follow-up.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <span>Download Referral Form (PDF)</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
