import React, { useState } from 'react';
import {
  FileText,
  Download,
  ExternalLink,
  Search,
  BookOpen,
  Filter,
  CheckCircle2
} from 'lucide-react';
import { educationalResources, trustedExternalOrganizations } from '../data/practiceData';
import './EducationHub.css';

export default function EducationHub() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "Nutrition & Diet",
    "Dialysis Guides",
    "Kidney Care Guides",
    "Patient Forms"
  ];

  const filteredResources = educationalResources.filter((item) => {
    const matchesCategory =
      activeCategory === "All" ||
      (activeCategory === "Nutrition & Diet" && (item.category === "Nutrition & Diet" || item.category === "Metabolic")) ||
      (activeCategory === "Dialysis Guides" && (item.category === "Cardiovascular" || item.category === "Blood Pressure & Fluid" || item.id.includes("dialysis") || item.id.includes("failure"))) ||
      (activeCategory === "Kidney Care Guides" && (item.category === "General Health" || item.id.includes("chronic") || item.id.includes("results"))) ||
      (activeCategory === "Patient Forms" && item.category === "Patient Forms");

    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="section education-section" id="education">
      <div className="container">
        <div className="section-header">
          <div className="badge-tag teal">
            <span>Patient Education Hub</span>
          </div>
          <h2 className="section-title">Kidney Health & Nutrition Guides</h2>
          <p className="section-subtitle">
            Managing kidney disease involves practical daily habits, sodium/potassium awareness, and understanding lab values. Access our verified nephrology guides and dietary references.
          </p>
        </div>

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
              placeholder="Search guides, potassium, labs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="education-search-input"
              aria-label="Search educational resources"
            />
          </div>
        </div>

        {/* Resources Grid - Equal Heights */}
        <div className="resources-grid" id="resources">
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
                  aria-label={`Open or download ${item.title} PDF`}
                >
                  <Download size={15} />
                  <span>Download PDF Document</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Dietary Advice Disclaimer Box */}
        <div className="diet-disclaimer-box">
          <CheckCircle2 size={18} className="text-teal" />
          <p>
            <strong>Important Clinical Note on Renal Diets:</strong> Dietary restrictions vary depending on your chronic kidney disease stage, laboratory eGFR, potassium, and phosphorus results. Always discuss with your nephrologist before altering dietary intake.
          </p>
        </div>

        {/* External Trusted Kidney Organizations */}
        <div className="external-orgs-container">
          <div className="external-orgs-header">
            <h3 className="external-orgs-title">Trusted Kidney Care Organizations & National Advocacy</h3>
            <p className="external-orgs-subtitle">
              Additional national resources offering peer education, support groups, and clinical guidance for patients and families.
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
  );
}
