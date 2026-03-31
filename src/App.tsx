/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Download, 
  ExternalLink, 
  Code2, 
  BrainCircuit, 
  Database, 
  Layout, 
  Wrench, 
  ShieldCheck, 
  Award, 
  GraduationCap, 
  ChevronRight,
  Menu,
  X,
  Cpu,
  Globe,
  Terminal
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Types ---
interface Project {
  title: string;
  description: string;
  tech: string[];
  achievement: string;
  link: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

// --- Data ---
const SKILLS: SkillCategory[] = [
  {
    title: "Backend",
    icon: <Database className="w-5 h-5" />,
    skills: ["Python", "Flask", "SQL", ".NET"]
  },
  {
    title: "AI / ML",
    icon: <BrainCircuit className="w-5 h-5" />,
    skills: ["NLP", "Machine Learning", "CNN", "YOLOv8"]
  },
  {
    title: "Frontend",
    icon: <Layout className="w-5 h-5" />,
    skills: ["HTML", "CSS", "JavaScript", "Angular", "React"]
  },
  {
    title: "Tools",
    icon: <Wrench className="w-5 h-5" />,
    skills: ["Docker", "Git", "GitHub", "Netlify", "Streamlit", "n8n"]
  },
  {
    title: "Other",
    icon: <ShieldCheck className="w-5 h-5" />,
    skills: ["Regex", "Google Sheets Automation", "Cybersecurity Basics"]
  }
];

const PROJECTS: Project[] = [
  {
    title: "Activity Monitor",
    description: "Human activity detection system using YOLOv8 for real-time monitoring and classification.",
    tech: ["Python", "YOLOv8", "OpenCV", "PyTorch"],
    achievement: "Achieved 92% accuracy in diverse lighting conditions.",
    link: "https://github.com/Deepak777",
    icon: <Cpu className="w-6 h-6" />
  },
  {
    title: "Legal Document Analyzer",
    description: "NLP-powered tool to extract key clauses and summarize complex legal documents.",
    tech: ["Python", "NLP", "Streamlit", "Spacy"],
    achievement: "Reduced document review time by 60% for legal interns.",
    link: "https://github.com/Deepak777",
    icon: <Terminal className="w-6 h-6" />
  },
  {
    title: "Resume Parser",
    description: "Automated workflow using n8n to parse resumes and sync data with Google Sheets.",
    tech: ["n8n", "JavaScript", "Google Sheets API"],
    achievement: "Processed 500+ resumes with zero manual data entry.",
    link: "https://github.com/Deepak777",
    icon: <Wrench className="w-6 h-6" />
  },
  {
    title: "NL to SQL Generator",
    description: "Converts natural language questions into executable SQL queries using LLMs.",
    tech: ["Python", "Flask", "OpenAI API", "PostgreSQL"],
    achievement: "Enabled non-technical staff to query databases directly.",
    link: "https://github.com/Deepak777",
    icon: <Database className="w-6 h-6" />
  },
  {
    title: "Voice Translator",
    description: "Real-time voice-to-voice translation app deployed as a PWA APK.",
    tech: ["React", "Web Speech API", "Node.js"],
    achievement: "Supports 15+ languages with low latency.",
    link: "https://github.com/Deepak777",
    icon: <Globe className="w-6 h-6" />
  },
  {
    title: "LinkedIn Automation Agent",
    description: "Dockerized agent that automates networking and outreach on LinkedIn.",
    tech: ["n8n", "Docker", "Puppeteer", "Python"],
    achievement: "Increased connection rate by 40% through personalized outreach.",
    link: "https://github.com/Deepak777",
    icon: <Linkedin className="w-6 h-6" />
  }
];

const EXPERIENCE: ExperienceItem[] = [
  {
    role: "AI/ML & Python Developer",
    company: "Cube AI Solutions",
    period: "Present",
    highlights: [
      "Developing ML models for predictive analytics and computer vision.",
      "Building scalable backend APIs using Flask and Python.",
      "Collaborating with cross-functional teams to deliver AI-driven features."
    ]
  },
  {
    role: "Angular Developer / Full Stack Intern",
    company: "Tech Solutions Inc.",
    period: "2023",
    highlights: [
      "Built responsive frontend components using Angular and TypeScript.",
      "Integrated RESTful APIs with frontend services.",
      "Participated in agile sprints and code reviews."
    ]
  }
];

const ACHIEVEMENTS = [
  {
    title: "Award of Excellence",
    org: "Cube AI Solutions",
    desc: "Recognized for outstanding contribution to ML model optimization."
  },
  {
    title: "90%+ Accuracy",
    org: "ML Projects",
    desc: "Consistently achieved high precision in NLP and Computer Vision tasks."
  },
  {
    title: "Security Hardening",
    org: "Personal Project",
    desc: "Implemented advanced encryption in a custom password manager."
  }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      scrolled ? "bg-bg-dark/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tighter gradient-text">DEEPAK.T</a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-bg-card border-b border-white/5 p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-gray-400 hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold mb-4"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-gray-400 max-w-2xl"
      >
        {subtitle}
      </motion.p>
    )}
    <div className="h-1 w-20 bg-brand-primary mt-4 rounded-full" />
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center section-padding overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold tracking-widest uppercase mb-6">
              Available for Opportunities
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6">
              Deepak T
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-400 font-medium mb-8 max-w-3xl">
              Backend Engineer | <span className="text-white">AI/ML Developer</span>
            </h2>
            <p className="text-lg text-gray-500 mb-10 max-w-2xl leading-relaxed">
              Building scalable systems with AI-driven intelligence. Specialized in bridging the gap between complex backend architectures and cutting-edge machine learning models.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="mailto:tdeepakopy@gmail.com" 
                className="flex items-center gap-2 bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                Email Me
              </a>
              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com/in/deepak-t-2b4648203" 
                  target="_blank"
                  className="p-4 glass-card hover:bg-white/5 transition-all text-gray-400 hover:text-white"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="https://github.com/Deepak777" 
                  target="_blank"
                  className="p-4 glass-card hover:bg-white/5 transition-all text-gray-400 hover:text-white"
                >
                  <Github className="w-6 h-6" />
                </a>
                <button className="flex items-center gap-2 p-4 glass-card hover:bg-white/5 transition-all text-gray-400 hover:text-white">
                  <Download className="w-5 h-5" />
                  <span className="hidden sm:inline">Resume</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="About Me" 
            subtitle="A passionate engineer dedicated to solving real-world problems through code and intelligent systems."
          />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-gray-400 leading-relaxed text-lg"
            >
              <p>
                I am a <span className="text-white font-medium">Backend Engineer and AI/ML Developer</span> with a strong foundation in Computer Science. My expertise lies in developing robust backend systems and integrating advanced machine learning models to create intelligent applications.
              </p>
              <p>
                With a problem-solving mindset and a fast-learning capability, I have successfully delivered real-world projects ranging from computer vision monitoring systems to NLP-based document analyzers.
              </p>
              <p>
                I thrive in collaborative environments where I can leverage my technical skills to build scalable, efficient, and impactful solutions.
              </p>
              
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-bg-dark bg-brand-primary/20 flex items-center justify-center text-xs font-bold">
                      {i === 1 ? 'AI' : i === 2 ? 'BE' : 'ML'}
                    </div>
                  ))}
                </div>
                <p className="text-sm">Specialized in Full-Stack AI Integration</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="glass-card p-6 flex flex-col items-center text-center">
                <span className="text-3xl font-bold text-brand-primary mb-2">90%+</span>
                <span className="text-xs uppercase tracking-widest text-gray-500">Model Accuracy</span>
              </div>
              <div className="glass-card p-6 flex flex-col items-center text-center">
                <span className="text-3xl font-bold text-brand-primary mb-2">10+</span>
                <span className="text-xs uppercase tracking-widest text-gray-500">Projects Done</span>
              </div>
              <div className="glass-card p-6 flex flex-col items-center text-center">
                <span className="text-3xl font-bold text-brand-primary mb-2">2+</span>
                <span className="text-xs uppercase tracking-widest text-gray-500">Years Experience</span>
              </div>
              <div className="glass-card p-6 flex flex-col items-center text-center">
                <span className="text-3xl font-bold text-brand-primary mb-2">5+</span>
                <span className="text-xs uppercase tracking-widest text-gray-500">Certifications</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Technical Arsenal" 
            subtitle="My diverse toolkit for building the future of backend and AI."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS.map((category, idx) => (
              <motion.div 
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-8 hover:border-brand-primary/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 rounded-md bg-white/5 text-sm text-gray-400 border border-white/5">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Featured Projects" 
            subtitle="A selection of my best work in AI, Automation, and Backend Engineering."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, idx) => (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card overflow-hidden flex flex-col group"
              >
                <div className="p-8 flex-1">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 rounded-lg bg-brand-primary/10 text-brand-primary">
                      {project.icon}
                    </div>
                    <a href={project.link} target="_blank" className="text-gray-500 hover:text-white transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-brand-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Key Achievement</p>
                    <p className="text-sm text-brand-secondary font-medium italic">
                      "{project.achievement}"
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] font-bold px-2 py-1 rounded bg-brand-primary/5 text-brand-primary border border-brand-primary/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <a 
                  href={project.link}
                  target="_blank"
                  className="p-4 bg-white/5 border-t border-white/5 flex items-center justify-center gap-2 text-sm font-medium hover:bg-brand-primary hover:text-white transition-all"
                >
                  View Project <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Professional Journey" 
            subtitle="My career path and contributions to the industry."
          />

          <div className="space-y-12 max-w-4xl">
            {EXPERIENCE.map((exp, idx) => (
              <motion.div 
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l border-white/10"
              >
                <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-brand-primary shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold">{exp.role}</h3>
                    <p className="text-brand-primary font-medium">{exp.company}</p>
                  </div>
                  <span className="px-4 py-1 rounded-full bg-white/5 text-sm text-gray-400 border border-white/5">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-3">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400">
                      <ChevronRight className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certs */}
      <section className="section-padding bg-white/[0.02]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <SectionHeading title="Education" />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-xl bg-brand-primary/10 text-brand-primary">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">B.E Computer Science Engineering</h3>
                  <p className="text-gray-400 mt-1">Anna University Affiliate</p>
                  <p className="text-sm text-brand-primary mt-4 font-medium">Focus: Software Architecture & Data Science</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div>
            <SectionHeading title="Certifications" />
            <div className="grid grid-cols-2 gap-4">
              {["Python", "Machine Learning", "Data Analytics", "React", "Cybersecurity"].map((cert, idx) => (
                <motion.div 
                  key={cert}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card p-4 flex items-center gap-3"
                >
                  <Award className="w-5 h-5 text-brand-secondary" />
                  <span className="text-sm font-medium">{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Key Achievements" />
          <div className="grid sm:grid-cols-3 gap-6">
            {ACHIEVEMENTS.map((item, idx) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-8 border-l-4 border-l-brand-primary"
              >
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-brand-primary text-sm font-medium mb-4">{item.org}</p>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-brand-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl -mr-32 -mt-32" />
            
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's build something <span className="gradient-text">intelligent</span> together.</h2>
                <p className="text-gray-400 text-lg mb-10">
                  Whether you have a question or just want to say hi, my inbox is always open.
                </p>
                
                <div className="space-y-6">
                  <a href="mailto:tdeepakopy@gmail.com" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-primary transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-widest">Email</p>
                      <p className="text-lg font-medium">tdeepakopy@gmail.com</p>
                    </div>
                  </a>
                  <a href="tel:8838473541" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-primary transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-widest">Phone</p>
                      <p className="text-lg font-medium">+91 8838473541</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <a 
                  href="https://linkedin.com/in/deepak-t-2b4648203" 
                  target="_blank"
                  className="flex items-center justify-between p-6 glass-card hover:bg-white/5 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <Linkedin className="w-6 h-6 text-brand-primary" />
                    <span className="font-bold">LinkedIn</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                </a>
                <a 
                  href="https://github.com/Deepak777" 
                  target="_blank"
                  className="flex items-center justify-between p-6 glass-card hover:bg-white/5 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <Github className="w-6 h-6 text-white" />
                    <span className="font-bold">GitHub</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>
          
          <footer className="mt-20 pt-8 border-t border-white/5 flex flex-wrap justify-between items-center gap-4 text-gray-500 text-sm">
            <p>© 2026 Deepak T. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#projects" className="hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
}
