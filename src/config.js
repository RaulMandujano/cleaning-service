const config = {
  companyName: "First Responders",
  whatsappNumber: "15716055992",
  phone: "+1 (571)605‑5992",
  email: "rywfirstresponders@icloud.com",
  address: "1925 inglebrook dr Woodbridge, VA 22192",
  hours: "24/7",

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
      name: "Hoarding Cleanup",
      description: "Compassionate, discreet cleanup for heavily cluttered spaces, debris removal, and full sanitization.",
      image: "/acaparamiento.png",
      icon: "📦"
    },
    {
      name: "Mold Remediation",
      description: "Certified containment, removal, and prevention of mold growth with safe remediation methods.",
      image: "/remodelación de moho.png",
      icon: "🍄"
    },
    {
      name: "Water Damage Restoration",
      description: "Rapid drying, cleanup, and restoration after leaks, flooding, and emergency water intrusion.",
      image: "/restauracion de agua 1.png",
      icon: "💧"
    },
    {
      name: "Pressure Washing",
      description: "Exterior cleaning for concrete, siding, patios, driveways, and other weather-exposed surfaces.",
      image: "/lavado a presion 1.png",
      icon: "🚿"
    },
    {
      name: "Pest Infestation Cleanup",
      description: "Deep cleaning and sanitization after rodent and pest infestations to restore a safe environment.",
      image: "/infestaciones de roedores.png",
      icon: "🐀"
    },
    {
      name: "Waterproofing",
      description: "Moisture-control and protective sealing solutions that help prevent leaks and long-term damage.",
      image: "/impermeabilizacion.png",
      icon: "🛡️"
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
      location: "Arlington, VA",
      text: "The mold removal was fast and professional. I feel safe in my home again! Highly recommend their team.",
      stars: 5
    },
    {
      name: "John P.",
      location: "Alexandria, VA",
      text: "Amazing deep clean. The attention to detail is unmatched in this city. Every corner was spotless.",
      stars: 5
    },
    {
      name: "Sarah W.",
      location: "Richmond, VA",
      text: "They handled our air duct cleaning perfectly. No mess left behind, just clean air!",
      stars: 5
    },
    {
      name: "Michael R.",
      location: "Virginia Beach, VA",
      text: "Prompt emergency response. They arrived within the hour and stabilized our mold issue immediately.",
      stars: 5
    },
    {
      name: "Emily S.",
      location: "Fairfax, VA",
      text: "The most thorough cleaning service I've ever used. Their team is polite and efficient.",
      stars: 5
    },
    {
      name: "David T.",
      location: "Norfolk, VA",
      text: "Transparent pricing and top-quality results. A truly professional team of experts.",
      stars: 5
    }
  ],

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
