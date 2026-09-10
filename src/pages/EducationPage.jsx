import React, { useState } from 'react';
import {
  FileText,
  Download,
  ExternalLink,
  Search,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { educationalResources, trustedExternalOrganizations } from '../data/practiceData';
import '../components/EducationHub.css';
import './Pages.css';

export default function EducationPage({ navigateTo }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "Nutrition & Diet",
    "Dialysis Guides",
    "Kidney Disease",
    "Patient Forms"
  ];

  const filteredResources = educationalResources.filter((item) => {
    const matchesCategory =
      activeCategory === "All" ||
      (activeCategory === "Nutrition & Diet" && (item.category === "Nutrition & Diet" || item.category === "Metabolic")) ||
      (activeCategory === "Dialysis Guides" && (item.category === "Cardiovascular" || item.id.includes("dialysis") || item.id.includes("failure"))) ||
      (activeCategory === "Kidney Disease" && (item.category === "General Health" || item.category === "Blood Pressure & Fluid")) ||
      (activeCategory === "Patient Forms" && item.category === "Patient Forms");

    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="education-page">
      {/* Page Banner Header */}
      <div className="page-banner">
        <div className="container page-banner-container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <span onClick={() => navigateTo('home')} className="breadcrumb-link">Home</span>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Patient Resources & Education</span>
          </nav>
          <h1 className="page-banner-title">Patient Resources & Kidney Diet Guides</h1>
          <p className="page-banner-subtitle">
            Download verified nephrology diet reference charts, educational booklets, and patient registration forms to support your kidney care.
          </p>
        </div>
      </div>

      {/* Main Education Hub Section */}
      <section className="page-content-section">
        <div className="container">
          {/* Search & Filter Toolbar */}
          <div className="education-toolbar">
            <div className="filter-categories" role="tablist">
              {categories.map((cat) => (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={activeCategory === cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`category-pill ${activeCategory === cat ? 'active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="search-input-wrapper">
              <Search size={17} className="search-icon" />
              <input
                type="text"
                placeholder="Search potassium, phosphorus, dialysis..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="education-search-input"
                aria-label="Search educational resources"
              />
            </div>
          </div>

          {/* 9 PDF Resources Grid */}
          <div className="resources-grid">
            {filteredResources.map((item) => (
              <div key={item.id} className="resource-card">
                <div className="resource-card-header">
                  <div className="resource-icon-box">
                    <FileText size={22} />
                  </div>
                  <span className="resource-badge">{item.badge}</span>
                </div>

                <div className="resource-card-body">
                  <div className="resource-category-label">{item.category}</div>
                  <h3 className="resource-title">{item.title}</h3>
                  <p className="resource-desc">{item.description}</p>
                </div>

                <div className="resource-card-footer">
                  <a
                    href={item.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm resource-download-btn"
                    aria-label={`Download ${item.title} PDF`}
                  >
                    <Download size={15} />
                    <span>Download PDF Guide</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Dietary Advice Disclaimer Box */}
          <div className="diet-disclaimer-box">
            <CheckCircle2 size={20} className="text-teal" style={{ flexShrink: 0 }} />
            <p>
              <strong>Important Clinical Note on Renal Diets:</strong> Dietary restrictions for sodium, potassium, and phosphorus vary significantly based on your individual kidney function stage (eGFR) and current blood chemistry results. Always consult your nephrologist and clinical dietitian before making significant nutritional modifications.
            </p>
          </div>

          {/* External Trusted Kidney Organizations */}
          <div className="external-orgs-container">
            <div className="external-orgs-header">
              <h3 className="external-orgs-title">Trusted National Kidney Care Organizations</h3>
              <p className="external-orgs-subtitle">
                Reliable patient advocacy networks, support groups, and educational resources for patients and families.
              </p>
            </div>

            <div className="external-orgs-grid">
              {trustedExternalOrganizations.map((org, index) => (
                <a
                  key={index}
                  href={org.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external-org-card"
                >
                  <div className="org-card-top">
                    <h4 className="org-name">{org.name}</h4>
                    <ExternalLink size={15} className="org-ext-icon" />
                  </div>
                  <p className="org-desc">{org.desc}</p>
                  <span className="org-link-text">Visit official website &rarr;</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
