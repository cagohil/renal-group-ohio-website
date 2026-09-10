export const practiceInfo = {
  name: "The Renal Group",
  tagline: "For Kidney Care",
  establishedNotice: "Serving the Mahoning Valley & Northeast Ohio",
  phone: "(330) 729-0059",
  fax: "(330) 729-9297",
  emergencyOnCall: "(330) 259-4383",
  address: "807 Southwestern Run",
  cityStateZip: "Boardman, Ohio 44514",
  fullAddress: "807 Southwestern Run, Boardman, OH 44514",
  hours: "Monday – Friday: 8:00 AM – 4:00 PM",
  lunchNotice: "Closed for lunch: 11:30 AM – 12:00 PM",
  paymentNotice: "Please direct all payments and correspondence to our Boardman Main Office.",
  website: "www.renalgroupohio.com",
  countiesServed: ["Mahoning County", "Trumbull County", "Columbiana County"],
  citiesCovered: ["Boardman", "Columbiana", "Lisbon", "Salem", "Warren", "Youngstown"],
  mission: "The Physicians of The Renal Group (TRG) are dedicated to providing competent medical care with compassion and respect for human dignity and rights to our patients. We strive to uphold the standards of professionalism and recognize responsibility to our patients is first and foremost. Our mission is to improve the health and well-being of kidney disease patients in Youngstown and Ohio."
};

export const physicians = [
  {
    id: "dr-hilmer-negrete",
    name: "Hilmer Negrete",
    title: "M.D., F.A.C.P., F.A.S.N.",
    role: "Nephrologist & Board-Certified Physician",
    image: "/assets/Hilmer-Negrete.jpg",
    boardCertifications: [
      "Internal Medicine",
      "Nephrology"
    ],
    education: {
      medicalSchool: "National University of San Marcos School of Medicine (Lima, Peru)",
      internship: "Union Memorial Hospital (Baltimore, Maryland)",
      fellowship: "University of Pittsburgh Medical Center (Pittsburgh, Pennsylvania)"
    },
    currentPositions: [
      "Medical Director of Hemodialysis Center – Centers for Dialysis Care Warren (Warren, Ohio)",
      "Medical Director of Hemodialysis Center – Centers for Dialysis Care Youngstown (Youngstown, Ohio)",
      "Clinical Associate Professor of Internal Medicine – Northeastern Ohio University College of Medicine (NEOMED)"
    ],
    memberships: [
      "International Society of Nephrology",
      "American Society of Physicians",
      "American Society of Nephrology",
      "Renal Physicians Association",
      "National Kidney Foundation",
      "Mahoning County Medical Society",
      "Ohio State Medical Association"
    ],
    summary: "Dr. Negrete provides expert nephrology care, leading hemodialysis centers in Warren and Youngstown while mentoring future physicians as a Clinical Associate Professor at NEOMED."
  },
  {
    id: "dr-prakash-roy",
    name: "Prakash N. Roy",
    title: "M.D.",
    role: "Nephrologist & Board-Certified Physician",
    image: "/assets/Prakash-N.-Roy.jpg",
    boardCertifications: [
      "Internal Medicine",
      "Nephrology & Hypertension"
    ],
    education: {
      medicalSchool: "BJ Medical College (Ahmedabad, Gujarat, India)",
      internship: "Harlem Hospital Center at College of Physicians & Surgeons of Columbia University (New York, NY)",
      residency: "Harlem Hospital Center at College of Physicians & Surgeons of Columbia University (New York, NY)",
      fellowship: "Columbia Presbyterian Medical Center (New York, NY)"
    },
    currentPositions: [
      "Medical Director of Hemodialysis Unit – Centers for Dialysis Center Jefferson (Jefferson, Ohio)",
      "Director of Acute Dialysis Fresenius – Salem Regional Medical Center (Salem, Ohio)"
    ],
    memberships: [
      "Mahoning County Medical Society",
      "Ohio State Medical Association"
    ],
    summary: "Dr. Roy brings rigorous training from Columbia University and Columbia Presbyterian Medical Center, serving as Medical Director in Jefferson and Director of Acute Dialysis in Salem."
  }
];

export const advancedPracticeTeam = {
  title: "Advanced Practice Professionals & Clinical Staff",
  subtitle: "Licensed in the State of Ohio",
  description: "Our medical staff consists of Board-Certified physicians alongside Advanced Practice Professionals, Certified Registered Nurse Practitioners (CRNPs), Home Dialysis Registered Nurses, dedicated Social Workers, Registered Dietitians, and skilled Medical Assistants. Together, we deliver coordinated, patient-centered care for kidney patients across northeast Ohio."
};

export const services = [
  {
    id: "nephrology",
    title: "Nephrology",
    tagline: "Specialized Kidney Care",
    shortDesc: "Expert diagnosis and compassionate management of disorders affecting kidney function, filtration, and fluid balance.",
    fullDesc: "Normal kidneys remove extra water and waste products, balance vital body chemicals, control blood pressure, stimulate red blood cell production, and maintain strong bones. When kidney function declines, waste accumulates. Our board-certified nephrologists deliver advanced diagnostic evaluations and long-term care plans to preserve kidney health.",
    highlights: [
      "Thorough laboratory & metabolic kidney evaluations",
      "Diabetic and non-diabetic kidney disease care",
      "Fluid balance, acid-base, and electrolyte management",
      "Coordination with primary care and specialist physicians"
    ]
  },
  {
    id: "chronic-kidney-disease",
    title: "Chronic Kidney Disease",
    tagline: "Preserving Nephron Function",
    shortDesc: "Ongoing care designed to manage kidney disease, slow progression, and protect healthy nephrons.",
    fullDesc: "Chronic Kidney Disease (CKD) is most commonly caused by high blood pressure and diabetes. Because CKD is slow-moving, many people do not experience noticeable symptoms for years. Kidneys contain nearly a million microscopic filters called nephrons. When damaged, remaining nephrons take on extra workload. Early intervention with medication and lifestyle adjustments can slow or halt further damage.",
    highlights: [
      "Early detection and comprehensive stage-by-stage monitoring",
      "Personalized lifestyle and dietary modification plans",
      "Blood pressure and blood sugar optimization",
      "Education to recognize and manage potential symptoms early"
    ]
  },
  {
    id: "hypertension",
    title: "Hypertension Clinic",
    tagline: "Targeted Blood Pressure Management",
    shortDesc: "Specialized treatment and management of high blood pressure and its relationship to kidney health.",
    fullDesc: "Hypertension affects sixty-six million adults nationwide. Untreated high blood pressure can permanently damage major arteries in the heart, brain, kidneys, and eyes. Major clinical trials show most patients require two or more antihypertensive medications along with lifestyle changes. TRG's dedicated Hypertension Clinic designs an individualized strategy to reach optimal targets while fitting each patient's daily routine.",
    highlights: [
      "Thorough assessment of resting and ambulatory blood pressure",
      "Diagnostic testing to rule out secondary causes of hypertension",
      "Targeted multi-medication regimen paired with lifestyle modifications",
      "Seamless coordination and transition back to your family doctor"
    ]
  },
  {
    id: "dialysis",
    title: "Dialysis Services",
    tagline: "Comprehensive Inpatient & Outpatient Care",
    shortDesc: "Comprehensive dialysis care including outpatient and inpatient hemodialysis and peritoneal dialysis.",
    fullDesc: "When kidneys can no longer sufficiently filter waste products from the bloodstream, dialysis therapy steps in to perform this life-saving work. The Renal Group delivers comprehensive dialysis care throughout Trumbull, Mahoning, and Columbiana Counties, supporting both in-center hemodialysis and home-based modalities.",
    highlights: [
      "Inpatient and outpatient hemodialysis management",
      "Vascular access oversight (arteriovenous fistulas and grafts)",
      "Routine monthly lab work and clinical consultations",
      "Multidisciplinary team: Nephrologist, Dialysis RN, Social Worker, Dietitian"
    ]
  },
  {
    id: "home-hemodialysis",
    title: "Home Hemodialysis",
    tagline: "First Program in Mahoning Valley",
    shortDesc: "Information, comprehensive training, and support for patients choosing portable home dialysis options.",
    fullDesc: "The Renal Group owns and operates the first Home Hemodialysis Program in the Mahoning Valley. Advances in technology now allow patients to perform dialysis at home with compact, portable machines that can even accompany them on vacations. Treatments typically require 2.5 to 3 hours a day, 5 to 6 days per week, providing greater scheduling freedom and clinical comfort.",
    highlights: [
      "First dedicated Home Hemodialysis program in the Mahoning Valley",
      "Portable machine allows travel and lifestyle flexibility",
      "Patients keep their current nephrologist (TRG accepts all nephrologist referrals)",
      "Monthly check-up with Nephrologist, Home Dialysis RN, Social Worker, and Dietitian"
    ],
    image: "/assets/home-dialysis-machine.jpg"
  },
  {
    id: "peritoneal-dialysis",
    title: "Peritoneal Dialysis",
    tagline: "Gentle Abdominal Filtration",
    shortDesc: "Home dialysis utilizing the natural peritoneal membrane with manual exchanges or automated nighttime cyclers.",
    fullDesc: "Peritoneal Dialysis uses the peritoneum—the natural space and membrane lining your abdomen—as a dialyzer. Dialysate fluid is introduced through a soft catheter placed during a minor outpatient procedure. Patients can perform manual exchanges (~30 minutes, 4 times daily) or choose Continuous Cycling Peritoneal Dialysis (CCPD), where an automated machine completes exchanges overnight while sleeping.",
    highlights: [
      "Utilizes natural peritoneal membrane without vascular needles",
      "Continuous Cycling Peritoneal Dialysis (CCPD) option while sleeping",
      "Daytime freedom for work, family, and daily activities",
      "Full patient and caregiver clinical training and 24/7 on-call nurse support"
    ],
    image: "/assets/homechoice.jpg"
  },
  {
    id: "transplantation",
    title: "Kidney Transplantation Care",
    tagline: "Pre- & Post-Transplant Management",
    shortDesc: "Evaluation, management, and ongoing compassionate care related to renal transplantation.",
    fullDesc: "Renal transplantation offers an effective kidney replacement option for suitable candidates. TRG physicians conduct meticulous pre-transplant evaluations, collaborate closely with regional transplant centers, and manage critical long-term immunosuppression regimens, graft function monitoring, and post-transplant health.",
    highlights: [
      "Pre-transplant candidate assessment and education",
      "Close partnerships with leading regional transplant surgical centers",
      "Post-transplant immunosuppressant drug monitoring and bloodwork",
      "Long-term allograft surveillance and wellness support"
    ]
  },
  {
    id: "clinical-research",
    title: "Clinical Research Trials",
    tagline: "Advancing Renal Therapeutics",
    shortDesc: "Participation in government-approved clinical research trials and pharmacological studies.",
    fullDesc: "The Renal Group actively participates in government-approved clinical research trials, including novel pharmacological studies for kidney disease and hypertension. We believe that clinical trial participation directly fosters modern medical breakthroughs and leads to superior future care for all kidney patients.",
    highlights: [
      "Government-approved pharmacological research protocols",
      "Access to cutting-edge emerging therapeutic developments",
      "Strict safety oversight and ethical patient protections",
      "Helping advance kidney care standards for future generations"
    ]
  }
];

export const patientJourneySteps = [
  {
    step: "01",
    title: "Connect With Us",
    description: "Contact our Boardman office at (330) 729-0059 or submit an appointment request. We gladly accept physician referrals and patient self-referrals."
  },
  {
    step: "02",
    title: "Meet Your Specialist",
    description: "Meet with your board-certified nephrologist for a thorough, unhurried consultation to review lab work, medical history, and specific kidney health goals."
  },
  {
    step: "03",
    title: "Build Your Care Plan",
    description: "Collaborate on a clear, personalized treatment plan—incorporating tailored medication, nutrition guidelines, or advanced home dialysis options that fit your lifestyle."
  }
];

export const educationalResources = [
  {
    id: "lifestyle-mod",
    title: "Lifestyle Modifications Guide",
    category: "General Health",
    description: "Crucial lifestyle steps to preserve kidney function, manage blood pressure, and maintain cardiovascular vitality.",
    file: "/assets/lifestyle-modifications.pdf",
    badge: "Clinical Guide"
  },
  {
    id: "diabetic-diet",
    title: "The Diabetic Diet",
    category: "Nutrition & Diet",
    description: "Guidance on meal planning, glycemic balance, and dietary choices specifically structured for diabetic kidney health.",
    file: "/assets/the-diabetic-diet.pdf",
    badge: "PDF Guide"
  },
  {
    id: "low-sodium",
    title: "The Low Sodium (Salt) Diet",
    category: "Blood Pressure & Fluid",
    description: "Practical sodium reduction advice to protect kidney nephrons, ease blood vessel strain, and reduce fluid retention.",
    file: "/assets/the-salt-diet.pdf",
    badge: "PDF Guide"
  },
  {
    id: "low-potassium",
    title: "The Low Potassium Diet",
    category: "Nutrition & Diet",
    description: "Dietary strategies to manage serum potassium levels safely and avoid cardiac or muscular complications.",
    file: "/assets/the-potassium-diet.pdf",
    badge: "PDF Guide"
  },
  {
    id: "phosphorus-chart",
    title: "The Phosphorus Finder Chart",
    category: "Nutrition & Diet",
    description: "Comprehensive visual reference chart identifying high and low phosphorus foods to protect bone and vascular health.",
    file: "/assets/the-phosphorus-finder-chart.pdf",
    badge: "Quick Chart"
  },
  {
    id: "protein-diet",
    title: "The Protein Diet",
    category: "Nutrition & Diet",
    description: "Understanding protein intake adjustments for pre-dialysis management versus dialysis replacement needs.",
    file: "/assets/the-protein-diet.pdf",
    badge: "PDF Guide"
  },
  {
    id: "low-cholesterol",
    title: "The Low Cholesterol Diet",
    category: "Cardiovascular",
    description: "Nutritional recommendations to manage blood lipids and maintain healthy arteries throughout your major organs.",
    file: "/assets/the-low-cholesterol-diet.pdf",
    badge: "PDF Guide"
  },
  {
    id: "low-purine",
    title: "The Low Purine Diet",
    category: "Metabolic",
    description: "Managing purine-rich foods to prevent elevated uric acid levels and decrease gout flare-up occurrences.",
    file: "/assets/the-low-purine-diet.pdf",
    badge: "PDF Guide"
  },
  {
    id: "new-patient-referral",
    title: "New Patient Referral & Hospital Follow-Up",
    category: "Patient Forms",
    description: "Official referral and clinical intake document for newly referred patients and hospital discharge follow-ups.",
    file: "/assets/new-patient-referral-hospital-follow-up.pdf",
    badge: "Intake Form"
  }
];

export const trustedExternalOrganizations = [
  {
    name: "National Kidney Foundation (NKF)",
    url: "https://www.kidney.org",
    desc: "Comprehensive kidney disease resources, patient education, and advocacy programs."
  },
  {
    name: "American Association of Kidney Patients (AAKP)",
    url: "https://aakp.org",
    desc: "National nonprofit organization dedicated to improving kidney patient quality of life."
  },
  {
    name: "National Kidney Disease Education Program (NKDEP)",
    url: "https://www.niddk.nih.gov",
    desc: "Evidence-based clinical guidelines and educational tools from the National Institutes of Health."
  },
  {
    name: "Kidney Options",
    url: "https://www.kidneyoptions.com",
    desc: "Clear explanations of treatment pathways including hemodialysis, peritoneal dialysis, and transplantation."
  }
];

export const affiliations = {
  hospitals: [
    { name: "Salem Regional Medical Center", url: "https://www.salemhosp.com" },
    { name: "Mercy Health", url: "https://www.mercy.com" }
  ],
  dialysisUnits: [
    { name: "Centers for Dialysis Care (CDC)", url: "https://www.cdcare.org" },
    { name: "DaVita Kidney Care", url: "https://www.davita.com" },
    { name: "Fresenius Medical Care", url: "https://www.fmcna.com" }
  ],
  teachingInstitutions: [
    { name: "Northeast Ohio Medical University (NEOMED)", url: "https://www.neomed.edu" },
    { name: "Ohio University", url: "https://www.ohio.edu" },
    { name: "Youngstown State University (YSU)", url: "https://www.ysu.edu" }
  ]
};

export const whyChoosePoints = [
  {
    title: "Experienced Specialists",
    description: "Board-certified nephrologists and licensed advanced practice professionals providing expert kidney and hypertension care across the region."
  },
  {
    title: "Comprehensive Care",
    description: "Continuous, cohesive management from early chronic kidney disease and hypertension to home dialysis and renal transplantation."
  },
  {
    title: "Convenient Locations",
    description: "Centrally based in Boardman with clinical affiliations and dialysis directorships serving patients across Mahoning, Trumbull, and Columbiana Counties."
  },
  {
    title: "Patient-Centered Approach",
    description: "Care built on compassionate communication, respect for dignity, and individualized treatment pathways that fit each patient's daily lifestyle."
  }
];

export const quickActionItems = [
  {
    id: "locations",
    title: "Find Our Office",
    subtitle: "807 Southwestern Run, Boardman",
    description: "Get office hours, directions, and regional service coverage details.",
    target: "locations"
  },
  {
    id: "physicians",
    title: "Meet Our Physicians",
    subtitle: "Board-Certified Specialists",
    description: "Learn about our nephrologists, clinical training, and medical directorships.",
    target: "physicians"
  },
  {
    id: "conditions",
    title: "Kidney Conditions",
    subtitle: "CKD, Hypertension & Dialysis",
    description: "Understand kidney function, hypertension management, and treatment options.",
    target: "services"
  },
  {
    id: "resources",
    title: "Patient Resources",
    subtitle: "Forms & Nutrition Guides",
    description: "Download verified dietary PDF guides, intake forms, and educational resources.",
    target: "resources"
  }
];

export const emergencyInfo = {
  headline: "Need Urgent Medical Attention?",
  lifeThreatening: "If you are experiencing a life-threatening medical emergency or require immediate attention, please call 911 or go to the nearest emergency room. Hospital staff will contact one of our physicians.",
  onCallNotice: "We provide an on-call service 24 hours a day, 7 days a week for urgent patient concerns:",
  onCallNumber: "(330) 259-4383",
  regularOfficeNumber: "(330) 729-0059"
};
