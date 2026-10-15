'use client'

import React, { useState, useEffect } from 'react'
import {
  Cpu,
  Stethoscope,
  BrainCircuit,
  Briefcase,
  TrendingUp,
  Scale,
  Palette,
  Plane,
  Sprout,
  Search,
  ArrowRight,
  GraduationCap,
  Building2,
  CheckCircle2,
  Clock,
  Sparkles,
  X,
  MessageCircle,
  PhoneCall,
  Info,
  ExternalLink,
  Layers,
  LayoutGrid,
} from 'lucide-react'
import { useTheme } from 'next-themes'
import { FadeUp } from '@/components/ui/motion-text'
import GlassFolder, { ArtPreset, FolderFile } from '@/components/ui/glass-folder-cards'
import { openCourseEnquiry } from '@/components/site/student-enquiry-modal'
import { cn } from '@/lib/utils'

export type CourseDetail = {
  id: string
  name: string
  degree: string
  duration: string
  eligibility: string
  entrances: string[]
  description: string
  topColleges: string[]
  careerRoles: string[]
  specializations?: string[]
}

export type StreamCategory = {
  id: string
  label: string
  shortLabel: string
  icon: React.ElementType
  tagline: string
  accentColor: string
  artPreset?: ArtPreset
  image?: string
  courses: CourseDetail[]
}

export const STREAMS_DATA: StreamCategory[] = [
  {
    id: 'engineering',
    label: 'Engineering & Technology',
    shortLabel: 'Engineering',
    icon: Cpu,
    tagline: 'Core engineering streams and emerging high-tech disciplines',
    accentColor: '#00C2FF',
    artPreset: 'ember',
    courses: [
      {
        id: 'cse',
        name: 'Computer Science & Engineering (CSE)',
        degree: 'B.E. / B.Tech',
        duration: '4 Years',
        eligibility: '10+2 with Physics, Chemistry & Mathematics (min 45% aggregate)',
        entrances: ['KCET', 'COMEDK', 'JEE Main', 'Management Quota'],
        description: 'Software architecture, algorithms, distributed computing, full-stack systems and cloud development.',
        topColleges: ['RV College of Engineering (RVCE)', 'BMS College of Engineering (BMSCE)', 'Ramaiah Institute of Technology (MSRIT)', 'PES University', 'Dayananda Sagar (DSCE)', 'BIT Bangalore'],
        careerRoles: ['Software Development Engineer (SDE)', 'Systems Architect', 'Cloud DevOps Engineer', 'Solutions Architect'],
        specializations: ['AI & ML', 'Cloud Computing', 'Cybersecurity', 'Data Systems'],
      },
      {
        id: 'ise',
        name: 'Information Science & Engineering (ISE)',
        degree: 'B.E. / B.Tech',
        duration: '4 Years',
        eligibility: '10+2 with PCM (min 45% aggregate)',
        entrances: ['KCET', 'COMEDK', 'Management Quota'],
        description: 'Information security, enterprise databases, data analytics, software lifecycle engineering and web services.',
        topColleges: ['RVCE', 'BMSCE', 'MSRIT', 'PES University', 'BIT Bangalore', 'New Horizon College of Engineering'],
        careerRoles: ['Data Engineer', 'Information Architect', 'Backend Developer', 'IT Consultant'],
        specializations: ['Network Security', 'Database Administration', 'Web Technologies'],
      },
      {
        id: 'ece',
        name: 'Electronics & Communication (ECE)',
        degree: 'B.E. / B.Tech',
        duration: '4 Years',
        eligibility: '10+2 with PCM (min 45% aggregate)',
        entrances: ['KCET', 'COMEDK', 'JEE Main', 'Management Quota'],
        description: 'VLSI circuit design, embedded computing, 5G/telecom signal processing, RF engineering and IoT hardware.',
        topColleges: ['RVCE', 'BMSCE', 'MSRIT', 'PES University', 'Dayananda Sagar (DSCE)', 'BIT Bangalore'],
        careerRoles: ['VLSI Design Engineer', 'Embedded Firmware Engineer', 'Telecom Systems Engineer', 'Hardware Architect'],
        specializations: ['VLSI & Microelectronics', 'Embedded Systems', 'Signal Processing'],
      },
      {
        id: 'eee',
        name: 'Electrical & Electronics Engineering (EEE)',
        degree: 'B.E. / B.Tech',
        duration: '4 Years',
        eligibility: '10+2 with PCM (min 45% aggregate)',
        entrances: ['KCET', 'COMEDK', 'Management Quota'],
        description: 'Power grid systems, electric vehicle (EV) powertrain tech, renewable solar/wind energy and industrial robotics.',
        topColleges: ['RVCE', 'BMSCE', 'MSRIT', 'DSCE', 'BIT Bangalore'],
        careerRoles: ['EV Systems Engineer', 'Power Systems Analyst', 'Control Systems Engineer', 'Grid Automation Specialist'],
      },
      {
        id: 'mech',
        name: 'Mechanical & Mechatronics Engineering',
        degree: 'B.E. / B.Tech',
        duration: '4 Years',
        eligibility: '10+2 with PCM (min 45% aggregate)',
        entrances: ['KCET', 'COMEDK', 'Management Quota'],
        description: 'Combines mechanical engineering, micro-controllers, industrial automation, CAD/CAM and smart manufacturing.',
        topColleges: ['BMSCE', 'RVCE', 'MSRIT', 'DSCE', 'PES University'],
        careerRoles: ['Automation Engineer', 'Robotics Systems Designer', 'Automotive CAE Engineer', 'Manufacturing Manager'],
      },
      {
        id: 'aero',
        name: 'Aeronautical & Aerospace Engineering',
        degree: 'B.E. / B.Tech',
        duration: '4 Years',
        eligibility: '10+2 with Physics, Chem & Maths (min 50%)',
        entrances: ['KCET', 'COMEDK', 'JEE Main', 'Management Quota'],
        description: 'Aerodynamics, propulsion systems, flight mechanics, satellite payloads, defense avionics and drone engineering.',
        topColleges: ['RVCE', 'BMSCE', 'Dayananda Sagar (DSCE)', 'Acharya Institute of Technology', 'Nitte Meenakshi (NMIT)'],
        careerRoles: ['Aerospace Design Engineer', 'Flight Test Analyst', 'Drone/UAV Developer', 'Propulsion Specialist'],
      },
      {
        id: 'biotech-eng',
        name: 'Biotechnology & Biomedical Tech',
        degree: 'B.E. / B.Tech',
        duration: '4 Years',
        eligibility: '10+2 with PCM or PCMB (min 45%)',
        entrances: ['KCET', 'COMEDK', 'Management Quota'],
        description: 'Bioinformatics, biomedical instrumentation, medical device design, genetic engineering and bioprocess tech.',
        topColleges: ['RVCE', 'BMSCE', 'MSRIT', 'PES University'],
        careerRoles: ['Biomedical Device Engineer', 'Bioinformatics Analyst', 'Clinical Research Associate', 'Biotech Scientist'],
      },
      {
        id: 'civil',
        name: 'Civil & Environmental Engineering',
        degree: 'B.E. / B.Tech',
        duration: '4 Years',
        eligibility: '10+2 with PCM (min 45% aggregate)',
        entrances: ['KCET', 'COMEDK', 'Management Quota'],
        description: 'Structural design, smart urban infrastructure, transportation hubs, geotechnical and environmental engineering.',
        topColleges: ['BMSCE', 'RVCE', 'MSRIT', 'DSCE', 'BIT Bangalore'],
        careerRoles: ['Structural Engineer', 'Project Planning Lead', 'Environmental Consultant', 'BIM Modeler'],
      },
    ],
  },
  {
    id: 'medicine',
    label: 'Medicine, Nursing & Allied Health Sciences',
    shortLabel: 'Doctors & Healthcare',
    icon: Stethoscope,
    tagline: 'Healthcare, clinical research, surgery, nursing and paramedic studies',
    accentColor: '#56D8E7',
    image: '/images/whatsapp/campus_7.jpeg',
    artPreset: 'glacier',
    courses: [
      {
        id: 'mbbs',
        name: 'Medicine & Surgery (MBBS / MD / MS)',
        degree: 'MBBS (UG) / MD-MS (PG)',
        duration: '5.5 Years (incl. 1 Yr Internship)',
        eligibility: '10+2 with Physics, Chemistry & Biology (min 50%) + Valid NEET-UG Score',
        entrances: ['NEET-UG', 'KEA Counselling', 'MCC All India Quota'],
        description: 'Full clinical anatomy, physiology, pharmacology, pathology, internal medicine, surgery and emergency clinical rotations.',
        topColleges: ["St. John's Medical College", 'Bangalore Medical College (BMCRI)', 'MS Ramaiah Medical College', 'Kempegowda Institute (KIMS)', 'Vydehi Institute of Medical Sciences', 'BGS Global Institute'],
        careerRoles: ['Registered Physician / Surgeon', 'Medical Consultant', 'Clinical Researcher', 'Hospital Department Head'],
      },
      {
        id: 'nursing',
        name: 'B.Sc Nursing & Post-Basic B.Sc Nursing',
        degree: 'B.Sc Nursing',
        duration: '4 Years',
        eligibility: '10+2 with PCB and English (min 45% aggregate, min age 17 yrs)',
        entrances: ['KEA Karnataka CET / Institutional Entrance', 'Merit Quota'],
        description: 'Patient care, surgical assistance, critical care nursing, pediatric health, community nursing & global healthcare credentials (NCLEX/OET ready).',
        topColleges: ["St. John's College of Nursing", 'MS Ramaiah Institute of Nursing', 'Vydehi Institute of Nursing', 'KIMS College of Nursing', 'Manipal Hospital Academy'],
        careerRoles: ['Clinical Staff Nurse', 'Critical Care / ICU Specialist', 'Nurse Educator', 'Overseas Registered Nurse (UK/US/Gulf)'],
      },
      {
        id: 'bpt',
        name: 'Physiotherapy (BPT) & Occupational Therapy',
        degree: 'BPT',
        duration: '4.5 Years (incl. 6 Months Internship)',
        eligibility: '10+2 with Physics, Chemistry & Biology (min 45%)',
        entrances: ['Direct Merit', 'Institutional Counselling'],
        description: 'Musculoskeletal rehabilitation, neuro-rehab, sports injury recovery, cardiopulmonary physical therapy and posture science.',
        topColleges: ['MS Ramaiah College of Physiotherapy', 'Vydehi Institute', 'Kempegowda (KIMS)', 'Padmashree Institute', 'Krupanidhi College'],
        careerRoles: ['Sports Physiotherapist', 'Neuro-Rehab Consultant', 'Ergonomics Specialist', 'Private Clinic Director'],
      },
      {
        id: 'mlt',
        name: 'Medical Laboratory Technology (B.Sc MLT)',
        degree: 'B.Sc MLT',
        duration: '3.5 - 4 Years',
        eligibility: '10+2 with PCB (min 45%) or Diploma in MLT (Lateral Entry)',
        entrances: ['KEA Counselling', 'Direct Merit Quota'],
        description: 'Diagnostic pathology, hematology, microbiology, molecular diagnostics, biochemical blood testing and lab management.',
        topColleges: ['BMCRI Allied Health', "St. John's Medical College", 'Ramaiah Allied Health', 'Vydehi Institute'],
        careerRoles: ['Senior Diagnostic Technologist', 'Pathology Lab Manager', 'Molecular Genetic Lab Tech', 'Quality Assurance Officer'],
      },
      {
        id: 'ott',
        name: 'Anesthesia & Operation Theatre Tech (B.Sc OTT)',
        degree: 'B.Sc OTT',
        duration: '3.5 - 4 Years',
        eligibility: '10+2 with PCB (min 45%)',
        entrances: ['Direct Merit', 'KEA Counselling'],
        description: 'Surgical table preparation, sterile zone management, anesthetic gases/monitors operation, ICU ventilators and surgical emergency support.',
        topColleges: ['MS Ramaiah Allied Health', 'Kempegowda (KIMS)', 'Vydehi Medical College', 'BGS Global Institute'],
        careerRoles: ['Chief OT Technologist', 'Anesthesia Assistant', 'Critical Care Support Lead', 'Surgical Equipment Specialist'],
      },
      {
        id: 'mit',
        name: 'Radiology & Imaging Technology (B.Sc MIT)',
        degree: 'B.Sc MIT',
        duration: '3.5 - 4 Years',
        eligibility: '10+2 with Physics, Chemistry & Biology',
        entrances: ['Direct Merit', 'KEA Counselling'],
        description: 'MRI scanning, CT scan diagnostics, X-ray radiography, ultrasound imaging, radiation safety and PACS imaging networks.',
        topColleges: ["St. John's Medical College", 'Ramaiah Allied Health', 'Vydehi Medical College', 'BMCRI'],
        careerRoles: ['MRI/CT Radiographer', 'Radiological Safety Officer', 'Diagnostic Imaging Specialist', 'Clinical Application Specialist'],
      },
      {
        id: 'cardiac-care',
        name: 'Cardiac Care & Respiratory Care Tech',
        degree: 'B.Sc Cardiac Tech',
        duration: '3.5 - 4 Years',
        eligibility: '10+2 with Physics, Chemistry & Biology',
        entrances: ['Direct Merit', 'KEA Counselling'],
        description: 'Invasive and non-invasive cardiac diagnostics, cardiac catheterization lab assistance, echocardiograms and pacemaker monitoring.',
        topColleges: ['Jayadeva Institute of Cardiology', 'Narayana Health Academy', 'MS Ramaiah Medical College', 'Vydehi Institute'],
        careerRoles: ['Cath Lab Technologist', 'Echocardiographer', 'Cardiovascular Technologist', 'ICU Respiratory Specialist'],
      },
      {
        id: 'optometry',
        name: 'Optometry & Ophthalmic Technology (B.Optom)',
        degree: 'Bachelor of Optometry',
        duration: '4 Years',
        eligibility: '10+2 with PCB/PCM (min 45%)',
        entrances: ['Direct Merit', 'Institutional Test'],
        description: 'Vision correction, refractive surgery care, contact lens specialization, binocular vision therapy and ocular pathology.',
        topColleges: ['Sankara Eye Hospital Academy', 'Narayana Nethralaya Post Graduate Institute', 'MS Ramaiah Allied Health'],
        careerRoles: ['Clinical Optometrist', 'Ophthalmic Consultant', 'Vision Research Specialist', 'Optical Retail Entrepreneur'],
      },
    ],
  },
  {
    id: 'ai-cyber',
    label: 'Artificial Intelligence, Data & Cybersecurity',
    shortLabel: 'AI, Data & Cyber',
    icon: BrainCircuit,
    tagline: 'Next-generation digital computing, autonomous systems and cloud protection',
    accentColor: '#8052FF',
    artPreset: 'verdant',
    courses: [
      {
        id: 'ai-ml',
        name: 'Artificial Intelligence & Machine Learning (AI & ML)',
        degree: 'B.Tech / B.E.',
        duration: '4 Years',
        eligibility: '10+2 with PCM (min 45% aggregate)',
        entrances: ['KCET', 'COMEDK', 'JEE Main', 'Management Quota'],
        description: 'Deep neural networks, LLMs, computer vision, natural language processing (NLP), reinforcement learning and AI system engineering.',
        topColleges: ['IIIT Bangalore (IIITB)', 'RV University', 'PES University', 'REVA University', 'CMR Institute of Technology', 'Christ University (Kengeri)'],
        careerRoles: ['Machine Learning Engineer', 'AI Research Associate', 'Data Scientist', 'NLP/Computer Vision Engineer'],
        specializations: ['Generative AI', 'Deep Learning', 'Autonomous Robotics'],
      },
      {
        id: 'data-science',
        name: 'Data Science & Business Analytics',
        degree: 'B.Tech / B.Sc / BCA',
        duration: '3 - 4 Years',
        eligibility: '10+2 with Mathematics / Computer Science / Statistics',
        entrances: ['KCET', 'Institutional Merit', 'Management Quota'],
        description: 'Big Data platforms, predictive modeling, statistical modeling, business intelligence pipelines and data visualization.',
        topColleges: ['IIIT Bangalore', 'Jain University (FET)', 'Christ University', 'RV University', 'REVA University'],
        careerRoles: ['Data Scientist', 'Business Intelligence Analyst', 'Big Data Architect', 'Quantitative Analyst'],
      },
      {
        id: 'cybersecurity',
        name: 'Cybersecurity & Digital Forensics',
        degree: 'B.Tech / B.Sc',
        duration: '4 Years',
        eligibility: '10+2 with PCM (min 45% aggregate)',
        entrances: ['KCET', 'COMEDK', 'Direct Quota'],
        description: 'Ethical hacking, penetration testing, cryptography, cloud security architecture, digital forensics and incident response.',
        topColleges: ['RV University', 'Jain University (FET)', 'CMRIT', 'REVA University', 'Dayananda Sagar University (DSU)'],
        careerRoles: ['Security Operations Center (SOC) Analyst', 'Penetration Tester', 'Cyber Forensics Investigator', 'Information Security Officer'],
      },
      {
        id: 'cloud-devops',
        name: 'Cloud Computing & DevOps',
        degree: 'B.Tech / BCA',
        duration: '3 - 4 Years',
        eligibility: '10+2 with Mathematics / Computer Science',
        entrances: ['Merit Quota', 'Institutional Test'],
        description: 'AWS, Azure & GCP infrastructure, Kubernetes containerization, CI/CD automated deployment pipelines and microservices.',
        topColleges: ['REVA University', 'CMRIT', 'Jain University', 'Presidency University'],
        careerRoles: ['Cloud Solutions Architect', 'DevOps Automation Engineer', 'Site Reliability Engineer (SRE)', 'Platform Engineer'],
      },
      {
        id: 'blockchain-fintech',
        name: 'Blockchain Technology & FinTech Systems',
        degree: 'B.Tech / B.Sc',
        duration: '4 Years',
        eligibility: '10+2 with PCM (min 45%)',
        entrances: ['KCET', 'COMEDK', 'Direct Quota'],
        description: 'Distributed ledger technology, smart contract development, cryptographic consensus and decentralized finance (DeFi) platforms.',
        topColleges: ['IIIT Bangalore', 'RV University', 'Jain University'],
        careerRoles: ['Smart Contract Developer', 'Blockchain Architect', 'FinTech Solutions Engineer', 'Web3 Analyst'],
      },
    ],
  },
  {
    id: 'management',
    label: 'Management & Business Administration',
    shortLabel: 'Management & MBA',
    icon: Briefcase,
    tagline: 'Leadership, corporate strategy, operations and entrepreneurship',
    accentColor: '#FFD166',
    artPreset: 'dusk',
    courses: [
      {
        id: 'bba-regular',
        name: 'Bachelor of Business Administration (BBA Regular & Honors)',
        degree: 'BBA (UG)',
        duration: '3 - 4 Years',
        eligibility: '10+2 from any recognized board with min 50% aggregate',
        entrances: ['Christ Entrance (CUET)', 'Institutional Merit', 'Direct Admission'],
        description: 'Foundations of marketing, business finance, organisational behavior, corporate communications and managerial economics.',
        topColleges: ['Christ University (Main & BGR)', "St. Joseph's University", 'Mount Carmel College (MCC)', 'Kristu Jayanti College', 'Alliance University'],
        careerRoles: ['Business Development Associate', 'Management Trainee', 'Marketing Executive', 'Operations Analyst'],
        specializations: ['Finance', 'Marketing', 'HR', 'Business Analytics'],
      },
      {
        id: 'mba-pgdm',
        name: 'Master of Business Administration (MBA / PGDM)',
        degree: 'MBA / PGDM (PG)',
        duration: '2 Years',
        eligibility: "Bachelor's degree in any discipline with min 50% aggregate",
        entrances: ['CAT', 'XAT', 'MAT', 'CMAT', 'PGCET / KMAT'],
        description: 'Executive strategy, brand positioning, investment banking, corporate valuation, supply chain leadership and business transformation.',
        topColleges: ['IIM Bangalore (IIMB)', 'XIME Bangalore', 'SIBM Bangalore', 'Christ University School of Business', "St. Joseph's Institute (SJIM)", 'Alliance School of Business'],
        careerRoles: ['Management Consultant', 'Investment Banker', 'Product Marketing Manager', 'Supply Chain Director', 'HR Business Partner'],
      },
      {
        id: 'bba-analytics',
        name: 'BBA in Business Analytics & Intelligence',
        degree: 'BBA Analytics',
        duration: '3 - 4 Years',
        eligibility: '10+2 with Mathematics / Statistics / Commerce (min 50%)',
        entrances: ['Institutional Entrance', 'Merit Quota'],
        description: 'Data-driven decision making, Python/R for business, PowerBI/Tableau visualization, predictive consumer analytics and market forecasting.',
        topColleges: ['Christ University', 'Jain University (CMS)', 'Alliance University', 'REVA University'],
        careerRoles: ['Business Analyst', 'Customer Insights Analyst', 'Marketing Analytics Lead', 'Strategy Associate'],
      },
      {
        id: 'bba-intl-business',
        name: 'BBA in International Business & Global Logistics',
        degree: 'BBA (IB)',
        duration: '3 Years',
        eligibility: '10+2 in any stream (min 50%)',
        entrances: ['Direct Merit', 'Institutional Interview'],
        description: 'Cross-border trade agreements, global supply chains, maritime shipping documentation, import-export customs and foreign exchange management.',
        topColleges: ["St. Joseph's", 'Mount Carmel College', 'Kristu Jayanti', 'Acharya Institutes'],
        careerRoles: ['Global Trade Specialist', 'Export-Import Manager', 'International Logistics Coordinator', 'Supply Chain Planner'],
      },
      {
        id: 'healthcare-mgmt',
        name: 'Healthcare & Hospital Administration (BBA/MHA)',
        degree: 'BBA / MHA / MBA Healthcare',
        duration: '2 - 3 Years',
        eligibility: '10+2 for UG; Any Graduation (B.Sc/MBBS/BDS preferred) for PG',
        entrances: ['Institutional Merit', 'KMAT / PGCET'],
        description: 'Super-specialty hospital operations, NABH accreditation standards, healthcare IT, medical insurance claims and clinical facility management.',
        topColleges: ['MS Ramaiah Institute of Healthcare', 'Vydehi Institute', 'Padmashree Institute', 'Acharya Institutes'],
        careerRoles: ['Hospital Operations Manager', 'Quality & Accreditation Lead', 'Healthcare Claims Director', 'Clinic Operations Head'],
      },
    ],
  },
  {
    id: 'commerce',
    label: 'Commerce & Finance',
    shortLabel: 'Commerce & Finance',
    icon: TrendingUp,
    tagline: 'Accounting, auditing, banking, taxation and economic analysis',
    accentColor: '#10B981',
    artPreset: 'glacier',
    courses: [
      {
        id: 'bcom-ca-cma',
        name: 'B.Com Integrated with CA / CMA',
        degree: 'B.Com Honors',
        duration: '3 - 4 Years',
        eligibility: '10+2 with Commerce / Mathematics (min 50% aggregate)',
        entrances: ['Direct College Merit', 'CA Foundation / CMA Foundation'],
        description: 'Simultaneous university graduation and coaching for Chartered Accountancy (ICAI) and Cost & Management Accountancy (ICMAI).',
        topColleges: ["St. Joseph's Commerce College (SJCC)", 'Christ University', 'Mount Carmel College (MCC)', 'MES College Malleswaram', 'Kristu Jayanti College'],
        careerRoles: ['Statutory Auditor', 'Chartered Accountant', 'Taxation Consultant', 'Corporate Controller'],
      },
      {
        id: 'bcom-acca',
        name: 'B.Com Integrated with ACCA (UK)',
        degree: 'B.Com International Finance',
        duration: '3 Years',
        eligibility: '10+2 with Commerce / Mathematics (min 50%)',
        entrances: ['Institutional Merit', 'Direct Interview'],
        description: 'Global accounting standards with up to 9 paper exemptions for the internationally recognized ACCA qualification.',
        topColleges: ['Christ University', "St. Joseph's Commerce College", 'Jain University (CMS)', 'Mount Carmel College'],
        careerRoles: ['International Financial Analyst', 'Risk Advisory Consultant', 'Big 4 Assurance Associate', 'Global Controller'],
      },
      {
        id: 'bcom-banking',
        name: 'B.Com in Banking, Insurance & Financial Markets',
        degree: 'B.Com (Banking & Finance)',
        duration: '3 Years',
        eligibility: '10+2 with Commerce (min 50%)',
        entrances: ['Direct Merit Quota'],
        description: 'Retail & corporate banking regulations, fintech platforms, wealth management, insurance underwriting and stock equity analysis.',
        topColleges: ['SJCC', 'Kristu Jayanti College', 'MES College', 'BMS College of Commerce'],
        careerRoles: ['Wealth Manager', 'Credit Risk Analyst', 'Investment Banker Associate', 'Commercial Banking Officer'],
      },
    ],
  },
  {
    id: 'law',
    label: 'Law & Legal Studies',
    shortLabel: 'Law & Legal Studies',
    icon: Scale,
    tagline: 'Constitutional, corporate, criminal and international jurisprudence',
    accentColor: '#F59E0B',
    artPreset: 'aurora',
    courses: [
      {
        id: 'ba-llb',
        name: 'BA LL.B / BBA LL.B (5-Year Integrated Honors)',
        degree: 'Integrated Law (UG)',
        duration: '5 Years',
        eligibility: '10+2 in any stream (min 45% aggregate; 40% for SC/ST)',
        entrances: ['CLAT', 'LSAT India', 'Institutional Law Entrance'],
        description: 'Corporate law, mergers & acquisitions, intellectual property, constitutional debates, criminal litigation, moot courts and judicial internships.',
        topColleges: ['National Law School of India University (NLSIU)', 'KLE Society’s Law College', 'CMR Law School', 'Ramaiah College of Law', 'Christ University School of Law', 'Alliance School of Law'],
        careerRoles: ['Corporate Legal Counsel', 'Litigation Advocate', 'Judicial Services Officer', 'Intellectual Property Attorney'],
        specializations: ['Corporate Law', 'Cyber Law', 'IPR', 'International Trade'],
      },
      {
        id: 'llm',
        name: 'Master of Laws (LL.M)',
        degree: 'LL.M (Post-Graduate)',
        duration: '1 - 2 Years',
        eligibility: 'LL.B or 5-Year Integrated Law Degree (min 50% aggregate)',
        entrances: ['CLAT PG', 'University Law Test'],
        description: 'Advanced legal theory, international commercial arbitration, constitutional jurisprudence and cross-border digital governance.',
        topColleges: ['NLSIU Bangalore', 'Christ University', 'Ramaiah College of Law'],
        careerRoles: ['Legal Advisor to MNCs', 'High Court Advocate', 'Legal Scholar / Professor', 'Arbitrator'],
      },
    ],
  },
  {
    id: 'design',
    label: 'Design, Animation & Fashion',
    shortLabel: 'Design & Fashion',
    icon: Palette,
    tagline: 'Visual arts, spatial design, fashion technology and media production',
    accentColor: '#EC4899',
    artPreset: 'aurora',
    courses: [
      {
        id: 'ux-ui',
        name: 'User Experience (UX/UI) & Interaction Design',
        degree: 'B.Des / B.Sc',
        duration: '4 Years',
        eligibility: '10+2 from any stream (min 50% aggregate)',
        entrances: ['UCEED', 'NID DAT', 'Design Aptitude Test (DAT) / Portfolio'],
        description: 'Human-computer interaction (HCI), design systems, user research, wireframing/prototyping in Figma and design accessibility.',
        topColleges: ['Srishti Manipal Institute of Art & Design', 'National Institute of Design (NID R&D Campus)', 'RV University School of Design', 'Jain University School of Design'],
        careerRoles: ['Lead Product Designer', 'UX/UI Designer', 'Interaction Architect', 'Design Strategist'],
      },
      {
        id: 'fashion-design',
        name: 'Fashion Design & Apparel Technology',
        degree: 'B.Des / B.FTech',
        duration: '4 Years',
        eligibility: '10+2 from any stream (min 50%)',
        entrances: ['NIFT Entrance Exam', 'Institutional DAT'],
        description: 'Garment construction, textile science, trend forecasting, sustainable fashion production, haute couture and retail brand management.',
        topColleges: ['NIFT Bangalore', 'Army Institute of Fashion & Design (AIFD)', 'JD Institute of Fashion Technology', 'Srishti Manipal'],
        careerRoles: ['Fashion Designer', 'Apparel Merchandiser', 'Textile Stylist', 'Fashion Brand Director'],
      },
      {
        id: 'animation-vfx',
        name: '3D Animation, VFX & Game Design',
        degree: 'B.Sc Animation / B.Des',
        duration: '3 - 4 Years',
        eligibility: '10+2 from any stream',
        entrances: ['Portfolio Evaluation', 'Creative Aptitude Test'],
        description: 'Character modeling in Maya/Blender, Unreal Engine game design, CGI lighting, cinematic VFX compositing in Nuke and motion graphics.',
        topColleges: ['Srishti Manipal', 'Animaster Academy', 'Jain University', 'Asian Academy of Film & Television'],
        careerRoles: ['3D Character Artist', 'VFX Compositor', 'Game Environment Designer', 'Motion Graphics Lead'],
      },
    ],
  },
  {
    id: 'hospitality',
    label: 'Hospitality, Hotel Management & Aviation',
    shortLabel: 'Hospitality & Aviation',
    icon: Plane,
    tagline: 'Global tourism, culinary arts, hotel operations and airport management',
    accentColor: '#0EA5E9',
    artPreset: 'dusk',
    courses: [
      {
        id: 'hotel-mgmt',
        name: 'Bachelor of Hotel Management (BHM)',
        degree: 'BHM / B.Sc Hospitality',
        duration: '4 Years',
        eligibility: '10+2 from any stream with English as a compulsory subject',
        entrances: ['NCHMCT JEE', 'Direct Institutional Interview'],
        description: 'Front office operations, luxury food & beverage service, culinary gastronomy, housekeeping science and hotel asset management.',
        topColleges: ['IHM Bangalore (Seshadri Road)', 'MS Ramaiah College of Hotel Management', 'Christ University Dept of Hotel Management', 'Acharya Institute', 'Kristu Jayanti College'],
        careerRoles: ['5-Star Hotel General Manager', 'Executive Chef', 'Food & Beverage Director', 'Luxury Brand Concierge'],
      },
      {
        id: 'aviation-airport',
        name: 'Aviation & Airport Operations Management (BBA Aviation)',
        degree: 'BBA Aviation Management',
        duration: '3 Years',
        eligibility: '10+2 in any stream (min 50%)',
        entrances: ['Direct College Merit', 'Personal Interview'],
        description: 'Airport terminal logistics, airline ticketing systems (Amadeus/Sabre), air traffic regulations, cargo handling and flight safety protocols.',
        topColleges: ['Presidency University', 'Acharya Institutes', 'Kristu Jayanti College', 'Krupanidhi Degree College'],
        careerRoles: ['Airport Operations Executive', 'Ground Handling Manager', 'Airline Customer Service Officer', 'Air Cargo Operations Lead'],
      },
      {
        id: 'cabin-crew',
        name: 'Cabin Crew & Flight Attendant Training',
        degree: 'Diploma / Certificate in In-Flight Operations',
        duration: '1 Year',
        eligibility: '10+2 pass with fluency in English & Hindi, physical grooming standards',
        entrances: ['Screening Interview & Medical Assessment'],
        description: 'In-flight hospitality, emergency ditching & evacuation, first aid certification, interpersonal diplomacy and international etiquette.',
        topColleges: ['Frankfinn Institute Bangalore', 'Kingfisher Academy Tie-ups', 'Acharya Institutes'],
        careerRoles: ['International Flight Attendant', 'Senior Cabin Crew Member', 'In-Flight Services Supervisor'],
      },
    ],
  },
  {
    id: 'agriculture',
    label: 'Agriculture & Food Technology',
    shortLabel: 'Agriculture & Food Tech',
    icon: Sprout,
    tagline: 'Agribusiness, food safety, agronomy and sustainable farming systems',
    accentColor: '#84CC16',
    artPreset: 'verdant',
    courses: [
      {
        id: 'bsc-agri',
        name: 'B.Sc (Hons) Agriculture',
        degree: 'B.Sc (Hons) Agri',
        duration: '4 Years',
        eligibility: '10+2 with Physics, Chemistry, Biology / Mathematics (min 50%)',
        entrances: ['KCET Agriculture Practical Quota', 'ICAR AIEEA'],
        description: 'Crop genetics, soil pathology, agronomic production, smart precision farming, agricultural economics and organic certification.',
        topColleges: ['University of Agricultural Sciences (UAS - GKVK Bangalore)', 'College of Agriculture Hebbal', 'Rai Technology University', 'Jain University School of Sciences'],
        careerRoles: ['Agricultural Officer (Government/NABARD)', 'Agronomy Consultant', 'Seed & Agri-Input Specialist', 'Farm Management Executive'],
      },
      {
        id: 'food-tech',
        name: 'B.Tech Food Technology & Safety',
        degree: 'B.Tech Food Tech',
        duration: '4 Years',
        eligibility: '10+2 with PCM or PCMB (min 45%)',
        entrances: ['KCET', 'COMEDK', 'Direct Quota'],
        description: 'Food preservation science, microbiology, dairy & beverage processing technology, FSSAI regulatory compliance and packaging design.',
        topColleges: ['UAS GKVK Bangalore', 'Jain University', 'Ramaiah University of Applied Sciences'],
        careerRoles: ['Food Safety Auditor', 'Quality Assurance Technologist', 'Product R&D Scientist', 'Food Processing Plant Manager'],
      },
    ],
  },
]

export function CoursesDirectory() {
  const [activeStreamId, setActiveStreamId] = useState<string>('engineering')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [selectedCourse, setSelectedCourse] = useState<CourseDetail | null>(null)
  const [viewMode, setViewMode] = useState<'both' | 'folders' | 'grid'>('both')

  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  const folderTone = mounted && resolvedTheme === 'dark' ? 'dark' : 'light'

  const activeStream =
    STREAMS_DATA.find((s) => s.id === activeStreamId) || STREAMS_DATA[0]

  // Filter courses based on search query or active stream
  const displayedCourses = searchQuery.trim()
    ? STREAMS_DATA.flatMap((s) => s.courses).filter(
        (c) =>
          c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          c.degree.toLowerCase().includes(searchQuery.toLowerCase()) ||
          c.topColleges.some((col) =>
            col.toLowerCase().includes(searchQuery.toLowerCase())
          )
      )
    : activeStream.courses

  const handleOpenInfo = (course: CourseDetail) => {
    setSelectedCourse(course)
  }

  const handleSelectCourseFile = (file: FolderFile, stream: StreamCategory) => {
    // Find the corresponding course in the stream
    const matched = stream.courses.find(
      (c) => c.name.toLowerCase() === file.name.toLowerCase() || c.name.includes(file.name)
    )
    if (matched) {
      setSelectedCourse(matched)
    } else {
      // If direct match not found, construct detail and open enquiry
      openCourseEnquiry(file.name, stream.label)
    }
  }

  const handleGetAdmission = (courseName: string) => {
    const message = encodeURIComponent(
      `Hi Education to Career Bridge, I want to get admission assistance for ${courseName} in Bangalore colleges.`
    )
    window.open(`https://wa.me/917795354043?text=${message}`, '_blank')
  }

  return (
    <section
      id="courses-directory"
      className="relative bg-background py-24 sm:py-32 border-b border-border overflow-hidden transition-colors duration-300"
    >
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_10%,rgba(0,194,255,0.07),transparent_75%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <FadeUp delay={0}>
              <span className="text-[12px] font-mono font-medium tracking-[0.2em] text-[#00C2FF] uppercase">
                BANGALORE HIGHER EDUCATION DIRECTORY
              </span>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2 className="mt-3 font-heading text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-foreground leading-[1.05]">
                Explore 100+ Degrees, Branches &amp; Premier Colleges.
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="mt-4 text-[16px] sm:text-[18px] text-muted-foreground font-light leading-relaxed">
                Curated from our official Bangalore Higher Education Directory. Tap any 3D Glass Folder to pull out real course sheets, explore verified eligibility, and connect for direct admission guidance.
              </p>
            </FadeUp>
          </div>

          {/* View Mode Toggle */}
          <FadeUp delay={0.25} className="shrink-0 flex items-center gap-2 p-1.5 rounded-2xl border border-border bg-card/60 backdrop-blur-md">
            <button
              type="button"
              onClick={() => setViewMode('both')}
              className={cn(
                'flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer',
                viewMode === 'both'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <Sparkles className="size-3.5" />
              <span>All Views</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('folders')}
              className={cn(
                'flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer',
                viewMode === 'folders'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <Layers className="size-3.5" />
              <span>3D Glass Folders</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              className={cn(
                'flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer',
                viewMode === 'grid'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <LayoutGrid className="size-3.5" />
              <span>Course Cards</span>
            </button>
          </FadeUp>
        </div>

        {/* Search Bar */}
        <FadeUp delay={0.25} className="mt-10 max-w-xl">
          <div className="relative flex items-center">
            <Search className="absolute left-4 size-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search CSE, MBBS, BBA, Nursing, RVCE, St. John's, NLSIU..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-2xl border border-input bg-card/80 backdrop-blur-md pl-11 pr-10 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 text-xs font-mono text-muted-foreground hover:text-foreground cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </FadeUp>

        {/* Major Streams Horizontal Selector (Matching Attached Reference Image) */}
        {!searchQuery && (
          <FadeUp delay={0.3} className="mt-8">
            <div className="flex items-center gap-2 overflow-x-auto pb-4 pt-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {STREAMS_DATA.map((stream) => {
                const Icon = stream.icon
                const isActive = stream.id === activeStreamId
                return (
                  <button
                    key={stream.id}
                    onClick={() => setActiveStreamId(stream.id)}
                    className={cn(
                      'shrink-0 flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-[13px] font-medium transition-all duration-300 border select-none cursor-pointer',
                      isActive
                        ? 'border-[#00C2FF] bg-[#00C2FF]/15 text-foreground shadow-[0_0_20px_rgba(0,194,255,0.25)] font-semibold'
                        : 'border-border bg-card/60 text-muted-foreground hover:border-primary/40 hover:text-foreground'
                    )}
                  >
                    <Icon
                      className={cn(
                        'size-4',
                        isActive ? 'text-[#00C2FF]' : 'text-muted-foreground'
                      )}
                    />
                    <span>{stream.shortLabel}</span>
                  </button>
                )
              })}
            </div>

            {/* Active Stream Tagline banner */}
            <div className="mt-4 p-4 rounded-2xl border border-border bg-card/70 flex items-center justify-between gap-4 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <span className="size-2 rounded-full bg-[#00C2FF] animate-pulse" />
                <span className="text-sm text-muted-foreground font-light">
                  <strong className="text-foreground font-medium">{activeStream.label}:</strong>{' '}
                  {activeStream.tagline}
                </span>
              </div>
              <span className="hidden sm:inline-block text-xs font-mono text-[#00C2FF] font-medium">
                {activeStream.courses.length} Specializations Mapped
              </span>
            </div>
          </FadeUp>
        )}

        {/* ------------------------------------------------------------- */}
        {/* 01. SIGNATURE 3D GLASS FOLDER CARDS SHOWCASE DESK             */}
        {/* ------------------------------------------------------------- */}
        {(viewMode === 'both' || viewMode === 'folders') && !searchQuery && (
          <div className="mt-12 pt-6 pb-12 border-y border-border relative">
            <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[11px] font-mono tracking-widest text-[#00C2FF] uppercase font-medium">
                  INTERACTIVE 3D GLASS FOLDERS
                </span>
                <h3 className="font-heading text-xl sm:text-2xl text-foreground font-normal mt-0.5">
                  Hover to Lean Glass · Click to Open · Select Any Course
                </h3>
              </div>
              <p className="text-xs font-mono text-muted-foreground">
                Showing {activeStream.shortLabel} Folder Archive
              </p>
            </div>

            {/* Glass Folders Row / Grid */}
            <div className="relative flex flex-wrap items-end justify-center gap-x-12 gap-y-16 py-6">
              {/* Primary Active Stream Folder */}
              <div className="flex flex-col items-center">
                <GlassFolder
                  key={activeStream.id + folderTone}
                  label={activeStream.shortLabel}
                  meta={`${activeStream.courses.length} Degrees`}
                  tone={folderTone}
                  art={activeStream.artPreset || 'aurora'}
                  image={activeStream.image}
                  seed={activeStream.id.length * 13 + 7}
                  width={340}
                  defaultOpen={true}
                  action="more"
                  menu={[
                    {
                      label: `Enquire About ${activeStream.shortLabel}`,
                      onSelect: () => openCourseEnquiry(activeStream.label, activeStream.label),
                    },
                    {
                      label: 'WhatsApp Founder (+91 77953 54043)',
                      onSelect: () => handleGetAdmission(activeStream.label),
                    },
                  ]}
                  files={activeStream.courses.slice(0, 4).map((c, idx) => ({
                    name: c.name,
                    meta: `${c.degree} · ${c.duration}`,
                    art: (['ember', 'aurora', 'dusk', 'glacier', 'verdant'] as ArtPreset[])[idx % 5],
                  }))}
                  onFileSelect={(file) => handleSelectCourseFile(file, activeStream)}
                />
                <span className="mt-4 text-xs font-mono text-muted-foreground">
                  Active: <strong>{activeStream.label}</strong> (Click course to enquire)
                </span>
              </div>

              {/* Sibling Featured Stream 1 */}
              {(() => {
                const siblingStream1 =
                  STREAMS_DATA[(STREAMS_DATA.findIndex((s) => s.id === activeStreamId) + 1) % STREAMS_DATA.length]
                return (
                  <div className="hidden md:flex flex-col items-center">
                    <GlassFolder
                      key={siblingStream1.id + folderTone}
                      label={siblingStream1.shortLabel}
                      meta={`${siblingStream1.courses.length} Degrees`}
                      tone={folderTone}
                      art={siblingStream1.artPreset || 'dusk'}
                      image={siblingStream1.image}
                      seed={siblingStream1.id.length * 17 + 5}
                      width={330}
                      defaultOpen={false}
                      action="more"
                      menu={[
                        {
                          label: `Explore ${siblingStream1.shortLabel}`,
                          onSelect: () => setActiveStreamId(siblingStream1.id),
                        },
                        {
                          label: 'Ask More Info',
                          onSelect: () => openCourseEnquiry(siblingStream1.label, siblingStream1.label),
                        },
                      ]}
                      files={siblingStream1.courses.slice(0, 4).map((c, idx) => ({
                        name: c.name,
                        meta: `${c.degree} · ${c.duration}`,
                        art: (['verdant', 'glacier', 'ember', 'aurora'] as ArtPreset[])[idx % 4],
                      }))}
                      onFileSelect={(file) => handleSelectCourseFile(file, siblingStream1)}
                    />
                    <button
                      type="button"
                      onClick={() => setActiveStreamId(siblingStream1.id)}
                      className="mt-4 text-xs font-mono text-primary hover:underline cursor-pointer"
                    >
                      Switch to {siblingStream1.shortLabel} →
                    </button>
                  </div>
                )
              })()}

              {/* Sibling Featured Stream 2 */}
              {(() => {
                const siblingStream2 =
                  STREAMS_DATA[(STREAMS_DATA.findIndex((s) => s.id === activeStreamId) + 2) % STREAMS_DATA.length]
                return (
                  <div className="hidden xl:flex flex-col items-center">
                    <GlassFolder
                      key={siblingStream2.id + folderTone}
                      label={siblingStream2.shortLabel}
                      meta={`${siblingStream2.courses.length} Degrees`}
                      tone={folderTone}
                      art={siblingStream2.artPreset || 'glacier'}
                      image={siblingStream2.image}
                      seed={siblingStream2.id.length * 23 + 9}
                      width={330}
                      defaultOpen={false}
                      action="more"
                      menu={[
                        {
                          label: `Explore ${siblingStream2.shortLabel}`,
                          onSelect: () => setActiveStreamId(siblingStream2.id),
                        },
                        {
                          label: 'Ask More Info',
                          onSelect: () => openCourseEnquiry(siblingStream2.label, siblingStream2.label),
                        },
                      ]}
                      files={siblingStream2.courses.slice(0, 4).map((c, idx) => ({
                        name: c.name,
                        meta: `${c.degree} · ${c.duration}`,
                        art: (['dusk', 'ember', 'aurora', 'verdant'] as ArtPreset[])[idx % 4],
                      }))}
                      onFileSelect={(file) => handleSelectCourseFile(file, siblingStream2)}
                    />
                    <button
                      type="button"
                      onClick={() => setActiveStreamId(siblingStream2.id)}
                      className="mt-4 text-xs font-mono text-primary hover:underline cursor-pointer"
                    >
                      Switch to {siblingStream2.shortLabel} →
                    </button>
                  </div>
                )
              })()}
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* 02. DETAILED COURSES CARDS GRID                               */}
        {/* ------------------------------------------------------------- */}
        {(viewMode === 'both' || viewMode === 'grid' || searchQuery) && (
          <div className="mt-8">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                Showing {displayedCourses.length} Detailed Course Cards
              </span>
              <span className="text-xs font-mono text-[#00C2FF]">
                Verified Bangalore Directory
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {displayedCourses.map((course) => (
                <div
                  key={course.id}
                  onClick={() => handleOpenInfo(course)}
                  className="group relative rounded-2xl border border-border bg-card p-6 flex flex-col justify-between transition-all duration-300 hover:border-primary/60 hover:shadow-[0_12px_36px_rgba(0,194,255,0.12)] cursor-pointer overflow-hidden text-card-foreground"
                >
                  <div>
                    {/* Degree & Duration Header */}
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium">
                        {course.degree}
                      </span>
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="size-3" />
                        <span>{course.duration}</span>
                      </span>
                    </div>

                    {/* Course Name */}
                    <h3 className="mt-4 font-heading text-lg font-normal text-foreground group-hover:text-primary transition-colors leading-snug">
                      {course.name}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-xs sm:text-[13px] text-muted-foreground font-light leading-relaxed line-clamp-3">
                      {course.description}
                    </p>

                    {/* Top Colleges snippet */}
                    <div className="mt-4 pt-3 border-t border-border">
                      <span className="text-[11px] font-mono text-muted-foreground block mb-1 flex items-center gap-1.5">
                        <Building2 className="size-3 text-[#00C2FF]" />
                        <span>Premier Colleges:</span>
                      </span>
                      <p className="text-xs text-foreground/80 line-clamp-1 font-light">
                        {course.topColleges.slice(0, 3).join(', ')}
                        {course.topColleges.length > 3 ? '...' : ''}
                      </p>
                    </div>
                  </div>

                  {/* Default Footer & HOVER ACTION BUTTONS */}
                  <div className="mt-5 pt-3 border-t border-border relative">
                    {/* Default resting state */}
                    <div className="flex items-center justify-between text-xs text-muted-foreground group-hover:opacity-0 transition-opacity">
                      <span className="font-mono text-[11px] text-[#00C2FF]">
                        Tap for Syllabus &amp; Fees
                      </span>
                      <ArrowRight className="size-3.5 text-muted-foreground" />
                    </div>

                    {/* Hover Reveal: "Ask More Info" & "Get Admission" */}
                    <div className="absolute inset-x-0 bottom-0 top-2 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          openCourseEnquiry(course.name, activeStream.label)
                        }}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-medium text-foreground bg-secondary hover:bg-secondary/80 border border-border transition-all cursor-pointer"
                      >
                        <MessageCircle className="size-3.5 text-primary" />
                        <span>Ask More Info</span>
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleGetAdmission(course.name)
                        }}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold text-white bg-primary hover:bg-violet-hover shadow-[0_0_15px_rgba(128,82,255,0.4)] transition-all cursor-pointer"
                      >
                        <GraduationCap className="size-3.5" />
                        <span>Get Admission</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {displayedCourses.length === 0 && (
          <div className="mt-12 text-center py-12 border border-border rounded-2xl bg-card">
            <p className="text-foreground text-base">
              No specific courses found for &quot;{searchQuery}&quot;.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Contact our academic team at +91 77953 54043 for customized course mapping.
            </p>
          </div>
        )}
      </div>

      {/* ------------------------------------------------------------- */}
      {/* COURSE DETAILED OVERVIEW MODAL                                */}
      {/* ------------------------------------------------------------- */}
      {selectedCourse && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.5)] text-card-foreground my-auto [scrollbar-width:thin]">
            {/* Close Button */}
            <button
              onClick={() => setSelectedCourse(null)}
              className="absolute top-5 right-5 p-2 rounded-full border border-border bg-card/60 text-muted-foreground hover:text-foreground hover:bg-card transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="size-5" />
            </button>

            {/* Modal Header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium text-primary bg-primary/10 border border-primary/20">
                  {selectedCourse.degree} · {selectedCourse.duration}
                </span>
                <span className="text-xs text-muted-foreground font-mono">
                  Official Bangalore Directory
                </span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl text-foreground font-normal leading-tight">
                {selectedCourse.name}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground font-light leading-relaxed">
                {selectedCourse.description}
              </p>
            </div>

            {/* Eligibility & Entrance Exams */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl border border-border bg-secondary/40">
                <span className="text-[11px] font-mono text-[#00C2FF] uppercase tracking-wider block mb-1 font-medium">
                  Eligibility Criteria
                </span>
                <p className="text-xs sm:text-sm text-foreground/90 font-light leading-snug">
                  {selectedCourse.eligibility}
                </p>
              </div>

              <div className="p-4 rounded-2xl border border-border bg-secondary/40">
                <span className="text-[11px] font-mono text-[#00C2FF] uppercase tracking-wider block mb-1 font-medium">
                  Entrance &amp; Admission Routes
                </span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {selectedCourse.entrances.map((e) => (
                    <span
                      key={e}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-card border border-border text-foreground"
                    >
                      {e}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Top Colleges in Bangalore */}
            <div className="mt-6">
              <span className="text-xs font-mono text-[#00C2FF] uppercase tracking-wider block mb-2 flex items-center gap-1.5 font-medium">
                <Building2 className="size-3.5" />
                <span>Premier Colleges in Bangalore Mapped in Directory:</span>
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedCourse.topColleges.map((college) => (
                  <div
                    key={college}
                    className="flex items-center gap-2 p-2.5 rounded-xl border border-border bg-secondary/30 text-xs text-foreground"
                  >
                    <CheckCircle2 className="size-3.5 text-[#00C2FF] shrink-0" />
                    <span className="truncate">{college}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Outcomes */}
            <div className="mt-6">
              <span className="text-xs font-mono text-amber uppercase tracking-wider block mb-2 flex items-center gap-1.5 font-medium">
                <Sparkles className="size-3.5" />
                <span>Expected High-Growth Career Roles:</span>
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedCourse.careerRoles.map((role) => (
                  <span
                    key={role}
                    className="px-3 py-1 rounded-full text-xs bg-amber/10 border border-amber/30 text-foreground font-medium"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="mt-8 pt-5 border-t border-border flex flex-col sm:flex-row items-center gap-3">
              {/* Ask More Info (Triggers Enquiry Form with course pre-selected) */}
              <button
                onClick={() => {
                  const courseName = selectedCourse.name
                  setSelectedCourse(null)
                  openCourseEnquiry(courseName, activeStream.label)
                }}
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl text-sm font-semibold text-white bg-primary hover:bg-violet-hover transition-all shadow-[0_0_25px_rgba(128,82,255,0.4)] cursor-pointer"
              >
                <MessageCircle className="size-4" />
                <span>Ask More Info / Contact Us</span>
              </button>

              {/* Get Admission Assistance */}
              <button
                onClick={() => handleGetAdmission(selectedCourse.name)}
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl text-sm font-semibold text-black bg-[#00C2FF] hover:bg-[#56D8E7] transition-all shadow-[0_0_25px_rgba(0,194,255,0.4)] cursor-pointer"
              >
                <GraduationCap className="size-4" />
                <span>Get Admission Assistance</span>
              </button>

              {/* Direct Phone Call */}
              <a
                href="tel:+917795354043"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl text-sm font-medium text-foreground border border-border bg-card hover:bg-muted transition-all"
              >
                <PhoneCall className="size-4 text-[#00C2FF]" />
                <span>Call Us</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
