const config = {
  companyName: "Raise Cleaning Co.",
  whatsappNumber: "18015551234",
  phone: "1-801-555-1234",
  email: "leon@cleaning.com",
  address: "1234 Cleaning Way, Salt Lake City, UT 84101",
  hours: "Mon - Fri: 8:00 AM - 6:00 PM",

  hero: {
    title: "Professional Mold Removal & Expert Cleaning Services",
    subtitle:
      "High-end restoration and cleaning solutions for modern homes. Eco-friendly, certified, and guaranteed results.",
    buttonText: "Schedule Inspection",
    secondaryButtonText: "View Case Studies",
    features: [
      "Certified Mold Specialists",
      "Eco-Friendly Products",
      "100% Satisfaction Guarantee",
      "Available 24/7 for Emergencies"
    ],
    stats: [
      { label: "Projects Done", value: "1,200+" },
      { label: "Happy Clients", value: "98%" },
      { label: "Response Time", value: "60 min" }
    ],
    trustIndicators: [
      { icon: "🛡️", text: "Licensed & Insured" },
      { icon: "⭐️", text: "5.0 Google Rating" },
      { icon: "🤝", text: "Local Partner" }
    ],
    experienceStat: "15+ Years Experience"
  },

  services: [
    {
      name: "Mold Remediation",
      description: "Complete removal and prevention of mold spores using advanced HEPA filtration.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
      icon: "🍄"
    },
    {
      name: "Deep Home Cleaning",
      description: "Top-to-bottom sanitization using hospital-grade, eco-friendly cleaning agents.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6954?auto=format&fit=crop&q=80&w=800",
      icon: "🧹"
    },
    {
      name: "Air Duct Cleaning",
      description: "Improve indoor air quality by removing dust, allergens, and debris from your HVAC system.",
      image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=800",
      icon: "💨"
    }
  ],

  emergency: {
    title: "Need Emergency Mold Removal?",
    subtitle: "Our specialists are standing by 24/7 to help you restore your home.",
    primaryButtonText: "Llamar Ahora",
    secondaryButtonText: "Contactar"
  },

  whyChooseUs: [
    {
      title: "Licensed & Insured",
      description: "Full liability coverage for your peace of mind and protection.",
      icon: "Shield"
    },
    {
      title: "Eco-Friendly Products",
      description: "Safe for kids, pets, and the environment. No harsh chemicals.",
      icon: "Leaf"
    },
    {
      title: "24/7 Availability",
      description: "Emergency response team available around the clock.",
      icon: "Clock"
    },
    {
      title: "IICRC Certified",
      description: "Our technicians are industry-certified experts.",
      icon: "Award"
    },
    {
      title: "Advanced Technology",
      description: "Using HEPA filtration and thermal imaging tools.",
      icon: "Tools"
    },
    {
      title: "Satisfaction Guaranteed",
      description: "We don't leave until you are 100% happy with the results.",
      icon: "Gem"
    }
  ],

  process: {
    title: "Our Professional Process",
    subtitle: "We follow a strict, scientific approach to ensure your home is completely safe and free of contaminants.",
    buttonText: "Get Your Free Inspection",
    steps: [
      { step: "01", title: "Inspection", description: "Visual and thermal imaging to locate the source.", icon: "Search" },
      { step: "02", title: "Containment", description: "Preventing cross-contamination of spores.", icon: "Lock" },
      { step: "03", title: "Remediation", description: "Removing contaminated materials safely.", icon: "Trash" },
      { step: "04", title: "Testing", description: "Verification that your home is safe and clean.", icon: "Check" }
    ]
  },

  testimonials: [
    {
      name: "Maria L.",
      location: "Cottonwood Heights, UT",
      text: "The mold removal was fast and professional. I feel safe in my home again! Highly recommend their team.",
      stars: 5
    },
    {
      name: "John P.",
      location: "Salt Lake City, UT",
      text: "Amazing deep clean. The attention to detail is unmatched in this city. Every corner was spotless.",
      stars: 5
    },
    {
      name: "Sarah W.",
      location: "Sandy, UT",
      text: "They handled our air duct cleaning perfectly. No mess left behind, just clean air!",
      stars: 5
    },
    {
      name: "Michael R.",
      location: "Draper, UT",
      text: "Prompt emergency response. They arrived within the hour and stabilized our mold issue immediately.",
      stars: 5
    },
    {
      name: "Emily S.",
      location: "Murray, UT",
      text: "The most thorough cleaning service I've ever used. Their team is polite and efficient.",
      stars: 5
    },
    {
      name: "David T.",
      location: "South Jordan, UT",
      text: "Transparent pricing and top-quality results. A truly professional team of experts.",
      stars: 5
    }
  ],

  colors: {
    primary: "#0f6a60",
    primaryDark: "#0c524d",
    secondary: "#b7b22b",
    logoDark: "#6e5e47",
    logoMid: "#958773",
    logoLight: "#d8dee4",
    logoLightest: "#edf0f5",
    surface: "#ffffff",
    logoText: "#2c2c28",
    mutedText: "#5f5b4f",
    gradientHero: "linear-gradient(145deg, rgba(110, 94, 71, 0.65), rgba(214, 219, 224, 0.95)), radial-gradient(circle at top right, rgba(214, 219, 224, 0.8), transparent 45%)",
    sectionDivider: "rgba(110, 94, 71, 0.25)"
  },

  footer: {
    description: "The trusted name in high-end mold removal and property restoration across the state. Dedicated to clean air and healthy homes since 2009.",
    links: [
      { name: "Home", target: "hero" },
      { name: "Services", target: "services" },
      { name: "Why Us", target: "why-choose-us" },
      { name: "Process", target: "reviews" },
      { name: "Reviews", target: "reviews" },
      { name: "Contact", target: "contact" }
    ],
    socials: [
      { name: "Facebook", url: "#", icon: "Facebook" },
      { icon: "Instagram", url: "#", name: "Instagram" },
      { icon: "LinkedIn", url: "#", name: "LinkedIn" }
    ]
  }
};

export default config;
