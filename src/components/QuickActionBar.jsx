import React from 'react';
import { MapPin, Users, HeartPulse, FileText, ArrowRight } from 'lucide-react';
import './QuickActionBar.css';

export default function QuickActionBar() {
  const actions = [
    {
      id: "action-locations",
      icon: MapPin,
      title: "Find a Location",
      desc: "Locate our Boardman main office and regional care clinics across 3 counties.",
      link: "#locations",
      badge: "Regional Access"
    },
    {
      id: "action-physicians",
      icon: Users,
      title: "Meet Our Physicians",
      desc: "Learn about Dr. Negrete & Dr. Roy's credentials, leadership, and experience.",
      link: "#physicians",
      badge: "Board-Certified"
    },
    {
      id: "action-conditions",
      icon: HeartPulse,
      title: "Kidney Conditions",
      desc: "Explore care pathways for CKD, hypertension, dialysis modalities, and transplant.",
      link: "#services",
      badge: "Comprehensive"
    },
    {
      id: "action-education",
      icon: FileText,
      title: "Patient Diet Guides",
      desc: "Download verified nephrology diet PDF guides, sodium limits, and lab charts.",
      link: "#education",
      badge: "9 Free Guides"
    }
  ];

  const handleCardClick = (e, link) => {
    e.preventDefault();
    const target = document.querySelector(link);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="quick-action-section" aria-label="Quick Access Services">
      <div className="container">
        <div className="quick-action-grid">
          {actions.map((act) => {
            const Icon = act.icon;
            return (
              <a
                key={act.id}
                href={act.link}
                onClick={(e) => handleCardClick(e, act.link)}
                className="quick-action-card"
                id={act.id}
              >
                <div className="quick-action-top">
                  <div className="quick-action-icon-box">
                    <Icon size={22} />
                  </div>
                  <span className="quick-action-pill">{act.badge}</span>
                </div>

                <div className="quick-action-body">
                  <h3 className="quick-action-title">{act.title}</h3>
                  <p className="quick-action-desc">{act.desc}</p>
                </div>

                <div className="quick-action-footer">
                  <span className="quick-action-arrow-text">Explore</span>
                  <div className="quick-action-arrow-circle">
                    <ArrowRight size={15} />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
