import React from 'react';
import {
  Shield,
  Clock,
  MapPin,
  Heart,
  Award,
  CheckCircle2,
  Stethoscope
} from 'lucide-react';
import './TrustSection.css';

export default function TrustSection() {
  const trustValues = [
    {
      icon: Stethoscope,
      title: "Specialized Nephrology Care",
      desc: "Dedicated entirely to kidney disease prevention, diagnosis, advanced hypertension, and dialysis therapy."
    },
    {
      icon: Award,
      title: "Experienced Clinical Team",
      desc: "Led by board-certified nephrologists, specialized renal nurses, and kidney nutrition specialists."
    },
    {
      icon: MapPin,
      title: "Convenient Regional Access",
      desc: "Serving patients throughout Youngstown, Boardman, Warren, Salem, Columbiana, and Lisbon."
    },
    {
      icon: Heart,
      title: "Compassionate Long-Term Care",
      desc: "Lifelong patient relationships built on empathy, dignity, education, and empowering families."
    }
  ];

  return (
    <section className="section trust-section" id="about">
      <div className="container">
        <div className="trust-grid">
          {/* Left Column: Authentic Practice Photography & Valley Pioneer Badge */}
          <div className="trust-media-col">
            <div className="trust-image-card">
              <img
                src="/assets/care-puts-first.jpg"
                alt="The Renal Group clinical staff consulting with a kidney patient"
                className="trust-main-image"
                loading="lazy"
              />
              <div className="trust-overlay-badge">
                <span className="badge-number">1st</span>
                <div className="badge-desc-wrap">
                  <span className="badge-kicker">MAHONING VALLEY MILESTONE</span>
                  <span className="badge-desc">Pioneered the Area's First Home Hemodialysis Program</span>
                </div>
              </div>
            </div>

            {/* Local Practice Commitment Box */}
            <div className="practice-local-commitment">
              <h4 className="commitment-title">Independent & Dedicated Exclusively to You</h4>
              <p className="commitment-body">
                The Renal Group maintains close clinical affiliations with regional hospitals and dialysis centers while keeping our primary allegiance solely to our patients and their families.
              </p>
            </div>
          </div>

          {/* Right Column: Mission & Core Value Pillars */}
          <div className="trust-content-col">
            <div className="badge-tag teal">
              <span>About The Renal Group</span>
            </div>

            <h2 className="trust-heading">
              Comprehensive Kidney Care with a Patient-First Approach
            </h2>

            <p className="trust-intro-lead">
              The Renal Group is a specialized nephrology practice providing comprehensive care for patients with kidney disease, difficult hypertension, and dialysis needs across Northeast Ohio.
            </p>

            <blockquote className="trust-mission-quote">
              "The Physicians of The Renal Group are dedicated to providing competent medical care with compassion and respect for human dignity. We strive to uphold the highest standards of medical professionalism, recognizing our duty to our patients first and foremost."
            </blockquote>

            {/* 2x2 Value Pillars Grid */}
            <div className="trust-values-grid">
              {trustValues.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div key={idx} className="trust-value-item">
                    <div className="value-icon-box">
                      <Icon size={20} />
                    </div>
                    <div className="value-text-box">
                      <h3 className="value-title">{val.title}</h3>
                      <p className="value-desc">{val.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Credential Badges Footer */}
            <div className="trust-badges-footer">
              <span className="trust-badge-pill">
                <CheckCircle2 size={15} className="text-wellness" />
                <span>Self-Referrals Accepted</span>
              </span>
              <span className="trust-badge-pill">
                <CheckCircle2 size={15} className="text-wellness" />
                <span>24/7 Physician On-Call Line</span>
              </span>
              <span className="trust-badge-pill">
                <CheckCircle2 size={15} className="text-wellness" />
                <span>Clinical Research Sites</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
