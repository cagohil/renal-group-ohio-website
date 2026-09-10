import React from 'react';
import './SideIllustrations.css';

export default function SideIllustrations() {
  return (
    <div className="side-illustrations-layer" aria-hidden="true">
      {/* Left Flank Medical Illustration */}
      <aside className="side-flank side-flank-left">
        <svg
          className="flank-svg flank-left-svg"
          viewBox="0 0 220 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="flank-teal-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0d9488" stopOpacity="0.25" />
              <stop offset="60%" stopColor="#0284c7" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#0c233c" stopOpacity="0.04" />
            </linearGradient>

            <linearGradient id="flank-gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c49746" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#d97706" stopOpacity="0.05" />
            </linearGradient>

            <pattern id="medical-grid-left" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="#0d9488" fillOpacity="0.12" />
            </pattern>
          </defs>

          {/* Background subtle micro-dot mesh */}
          <rect x="0" y="80" width="140" height="740" fill="url(#medical-grid-left)" />

          {/* Organic Nephron Flow Lines */}
          <path
            d="M-20 60 C40 140, 90 220, 40 320 C-10 420, 80 500, 30 620 C-20 740, 70 820, 10 900"
            stroke="url(#flank-teal-grad)"
            strokeWidth="2.5"
            strokeDasharray="6 4"
          />
          <path
            d="M-40 100 C30 180, 130 260, 70 380 C10 500, 110 580, 50 700 C-10 820, 90 860, 30 920"
            stroke="#0c233c"
            strokeWidth="1.5"
            strokeOpacity="0.08"
          />

          {/* Floating Medical Crosses */}
          <g transform="translate(110, 140)" opacity="0.45">
            <rect x="10" y="2" width="6" height="22" rx="3" fill="#0d9488" />
            <rect x="2" y="10" width="22" height="6" rx="3" fill="#0d9488" />
            <circle cx="13" cy="13" r="1.5" fill="#ffffff" />
          </g>

          <g transform="translate(60, 460)" opacity="0.3">
            <rect x="8" y="2" width="5" height="18" rx="2.5" fill="#c49746" />
            <rect x="2" y="8" width="18" height="5" rx="2.5" fill="#c49746" />
          </g>

          <g transform="translate(130, 740)" opacity="0.35">
            <rect x="10" y="2" width="6" height="22" rx="3" fill="#0284c7" />
            <rect x="2" y="10" width="22" height="6" rx="3" fill="#0284c7" />
          </g>

          {/* Biological Molecular Nodes & Hexagons */}
          <g transform="translate(80, 260)">
            <polygon
              points="30,5 55,19 55,47 30,61 5,47 5,19"
              stroke="#0d9488"
              strokeWidth="1.2"
              fill="rgba(13, 148, 136, 0.03)"
              strokeOpacity="0.28"
            />
            <circle cx="30" cy="5" r="3" fill="#0d9488" fillOpacity="0.4" />
            <circle cx="55" cy="19" r="2.5" fill="#0284c7" fillOpacity="0.4" />
            <circle cx="55" cy="47" r="2.5" fill="#0d9488" fillOpacity="0.4" />
            <circle cx="30" cy="61" r="3" fill="#c49746" fillOpacity="0.45" />
            <circle cx="5" cy="47" r="2.5" fill="#0c233c" fillOpacity="0.3" />
            <circle cx="5" cy="19" r="2.5" fill="#0d9488" fillOpacity="0.4" />
          </g>

          {/* Pulsing Vital Line Segment */}
          <path
            d="M 5 580 L 45 580 L 55 565 L 65 605 L 75 570 L 85 590 L 95 580 L 140 580"
            stroke="#0d9488"
            strokeWidth="1.5"
            strokeOpacity="0.32"
          />

          {/* Soft ambient gradient glow circles */}
          <circle cx="20" cy="200" r="70" fill="#0d9488" fillOpacity="0.04" filter="blur(20px)" />
          <circle cx="40" cy="680" r="80" fill="#0284c7" fillOpacity="0.04" filter="blur(25px)" />
        </svg>
      </aside>

      {/* Right Flank Medical Illustration */}
      <aside className="side-flank side-flank-right">
        <svg
          className="flank-svg flank-right-svg"
          viewBox="0 0 220 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="flank-teal-grad-r" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0d9488" stopOpacity="0.25" />
              <stop offset="60%" stopColor="#0284c7" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#0c233c" stopOpacity="0.04" />
            </linearGradient>

            <pattern id="medical-grid-right" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="22" cy="2" r="1.2" fill="#0284c7" fillOpacity="0.12" />
            </pattern>
          </defs>

          {/* Background subtle micro-dot mesh */}
          <rect x="80" y="100" width="140" height="720" fill="url(#medical-grid-right)" />

          {/* Elegant Stylized Kidney Contour Illustration */}
          <g transform="translate(70, 180)" opacity="0.32">
            {/* Renal Silhouette Outline */}
            <path
              d="M 60 10 C 105 10, 125 50, 125 95 C 125 155, 95 200, 50 200 C 15 200, 5 170, 20 140 C 35 110, 35 85, 20 60 C 10 40, 25 10, 60 10 Z"
              stroke="#0d9488"
              strokeWidth="2"
              fill="rgba(13, 148, 136, 0.02)"
            />
            {/* Inner Calyx / Filtration Pathways */}
            <path
              d="M 32 100 C 50 90, 70 70, 85 55"
              stroke="#0284c7"
              strokeWidth="1.5"
              strokeDasharray="3 3"
            />
            <path
              d="M 35 110 C 65 110, 85 110, 95 115"
              stroke="#0d9488"
              strokeWidth="1.5"
              strokeDasharray="3 3"
            />
            <path
              d="M 32 120 C 50 130, 70 150, 85 165"
              stroke="#c49746"
              strokeWidth="1.5"
              strokeDasharray="3 3"
            />
          </g>

          {/* Flowing Filtration Arc Stream */}
          <path
            d="M240 40 C180 140, 120 240, 180 340 C240 440, 140 540, 190 660 C240 780, 150 840, 210 920"
            stroke="url(#flank-teal-grad-r)"
            strokeWidth="2.5"
            strokeDasharray="6 4"
          />
          <path
            d="M260 80 C190 190, 90 280, 150 400 C210 520, 110 610, 170 730 C230 850, 130 890, 190 940"
            stroke="#c49746"
            strokeWidth="1.5"
            strokeOpacity="0.22"
          />

          {/* Floating Medical Crosses */}
          <g transform="translate(65, 80)" opacity="0.35">
            <rect x="10" y="2" width="6" height="22" rx="3" fill="#0d9488" />
            <rect x="2" y="10" width="22" height="6" rx="3" fill="#0d9488" />
          </g>

          <g transform="translate(125, 490)" opacity="0.4">
            <rect x="9" y="2" width="6" height="20" rx="3" fill="#c49746" />
            <rect x="2" y="9" width="20" height="6" rx="3" fill="#c49746" />
          </g>

          <g transform="translate(50, 720)" opacity="0.3">
            <rect x="8" y="2" width="5" height="18" rx="2.5" fill="#0284c7" />
            <rect x="2" y="8" width="18" height="5" rx="2.5" fill="#0284c7" />
          </g>

          {/* Molecular Ring Accents */}
          <g transform="translate(85, 580)">
            <polygon
              points="30,5 55,19 55,47 30,61 5,47 5,19"
              stroke="#0284c7"
              strokeWidth="1.2"
              fill="rgba(2, 132, 199, 0.03)"
              strokeOpacity="0.28"
            />
            <circle cx="30" cy="5" r="3" fill="#0284c7" fillOpacity="0.4" />
            <circle cx="55" cy="19" r="2.5" fill="#0d9488" fillOpacity="0.4" />
            <circle cx="55" cy="47" r="2.5" fill="#c49746" fillOpacity="0.45" />
            <circle cx="30" cy="61" r="3" fill="#0d9488" fillOpacity="0.4" />
            <circle cx="5" cy="47" r="2.5" fill="#0284c7" fillOpacity="0.4" />
            <circle cx="5" cy="19" r="2.5" fill="#0c233c" fillOpacity="0.3" />
          </g>

          {/* Soft Ambient Radial Glows */}
          <circle cx="190" cy="220" r="80" fill="#0d9488" fillOpacity="0.04" filter="blur(25px)" />
          <circle cx="170" cy="640" r="90" fill="#c49746" fillOpacity="0.035" filter="blur(30px)" />
        </svg>
      </aside>
    </div>
  );
}
