export const products = [
  {
    id: "eggs",
    title: "Fresh Table Eggs (White & Brown)",
    shortDesc: "Premium quality, thick-shell table eggs sourced from hygienic farms.",
    description: "We export high-quality fresh table eggs, known for their strong shells and high nutritional value. Sourced from biosecure farms, our eggs are cleaned, sorted by weight, and packed in shock-proof trays to ensure zero breakage during transit.",
    image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&q=80&w=1200", 
    specs: [
      { label: "Weight", value: "50g - 55g (Medium) / 55g - 60g (Large)" },
      { label: "Shell Color", value: "White / Brown" },
      { label: "Packaging", value: "30 Eggs/Tray, 12 Trays/Carton (360 Eggs)" },
      { label: "Shelf Life", value: "3 - 6 Months (Reefer at +4°C)" }
    ],
    features: [
      "Free from Salmonella & Antibiotics",
      "Thick Shell for Reduced Breakage",
      "Washed & Sanitized Surface"
    ]
  },
  {
    id: "potatoes",
    title: "Fresh Potatoes (Jyoti & Laukar)",
    shortDesc: "Farm-fresh, hand-picked potatoes with high starch content and long shelf life.",
    description: "We export premium quality fresh potatoes sourced directly from the fertile belts of India. Our potatoes are washed, graded by size, and packed in breathable mesh bags to ensure freshness during long-transit voyages. Ideal for both table consumption and industrial processing.",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=1200",
    specs: [
      { label: "Variety", value: "Jyoti / Laukar / Chandramukhi" },
      { label: "Size", value: "45mm+ (Medium) / 55mm+ (Large)" },
      { label: "Packaging", value: "5kg / 10kg / 20kg / 50kg Mesh Bags" },
      { label: "Shelf Life", value: "2 - 3 Months (Stored at 3-5°C)" }
    ],
    features: [
      "Washed & Soil Free",
      "Firm Texture & Thin Skin",
      "Free from Sprouting & Green Heads"
    ]
  },
  {
    id: "onion",
    title: "Premium Red & White Onions",
    shortDesc: "Farm-fresh, pungency-controlled onions sourced from Nashik.",
    description: "Sourced directly from India's onion capital, our logistics ensure controlled humidity transport to prevent sprouting and weight loss during transit to the Gulf or Asia.",
    image: "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&q=80&w=800",
    specs: [
      { label: "Size", value: "45mm - 60mm+" },
      { label: "Origin", value: "Nashik / Gujarat, India" },
      { label: "Packaging", value: "Mesh Bags (5kg - 25kg)" },
      { label: "Shelf Life", value: "45+ Days (Transit Optimized)" }
    ],
    features: [
      "Humidity-controlled containers",
      "Global GAP certified sourcing",
      "Phytosanitary certification provided"
    ]
  },
  {
    id: "rice",
    title: "Basmati & Non-Basmati Rice",
    shortDesc: "Aged long-grain Basmati and premium Sona Masoori.",
    description: "Exporting the fragrance of India. We handle 1121 Steam, Sella, and Raw varieties. Rigorous sorting ensures 0% foreign matter and perfect grain length.",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=800",
    specs: [
      { label: "Variety", value: "1121 Golden Sella, Steam Basmati" },
      { label: "Moisture", value: "< 12% Max" },
      { label: "Broken", value: "Under 2%" },
      { label: "Length", value: "8.35mm Average" }
    ],
    features: [
      "Aged for 12-24 months for aroma",
      "SGS quality inspection ready",
      "Silo-stored to prevent infestation"
    ]
  },
  {
    id: "spices",
    title: "Whole & Ground Spices",
    shortDesc: "Turmeric, Cumin, Cardamom, and Chilli.",
    description: "High-curcumin Turmeric and bold Cardamom. We ensure all shipments meet phytosanitary standards and ASTA color values for European and Middle Eastern markets.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800",
    specs: [
      { label: "Certifications", value: "FSSAI, Spices Board India" },
      { label: "Forms", value: "Whole, Powder, Oleoresins" },
      { label: "Purity", value: "99% Min (Adulteration Free)" },
      { label: "Packaging", value: "Vacuum Sealed / Bulk PP" }
    ],
    features: [
      "Steam sterilized for EU standards",
      "Direct farm-to-port logistics",
      "Customized blend grinding available"
    ]
  },
  {
    id: "jewellery",
    title: "Handcrafted Luxury Jewellery",
    shortDesc: "Hallmarked gold and certified diamonds for boutiques.",
    description: "Bridging Indian craftsmanship with global aesthetics. We provide BIS Hallmarked gold and certified diamonds with secure, fully insured logistics.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800",
    specs: [
      { label: "Gold Purity", value: "18k, 22k, 24k BIS Hallmarked" },
      { label: "Diamonds", value: "VVS / VS Certified (GIA/IGI)" },
      { label: "Process", value: "3D CAD to Master Casting" },
      { label: "Logistics", value: "Brinks / Malca-Amit Secure" }
    ],
    features: [
      "Ethically sourced conflict-free gems",
      "Customized boutique branding",
      "International door-to-door insurance"
    ]
  },
  {
    id: "meat",
    title: "Frozen Buffalo & Poultry",
    shortDesc: "Halal-certified, boneless, and hygienically processed.",
    description: "Strict adherence to Halal standards and cold-chain integrity. Sourced from APEDA-approved plants to ensure acceptance in Oman, UAE, and China.",
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&q=80&w=800",
    specs: [
      { label: "Cuts", value: "Tenderloin, Topside, Bobby Veal" },
      { label: "Certification", value: "100% Halal (APEDA Approved)" },
      { label: "Temperature", value: "-18°C Controlled" },
      { label: "Origin", value: "Indian High-Grade Abattoirs" }
    ],
    features: [
      "Continuous cold-chain monitoring",
      "Vacuum-packed for shelf-life",
      "BSE-free certified herds"
    ]
  },
  {
    id: "engineering",
    title: "Engineering & Machine Parts",
    shortDesc: "Precision-engineered components for industrial use.",
    description: "OEM and aftermarket parts for textile, automotive, and heavy machinery. We focus on dimensional accuracy and provide material test certificates (MTC).",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    specs: [
      { label: "Materials", value: "Stainless Steel, Cast Iron, Alloys" },
      { label: "Standards", value: "DIN, ASTM, ISO 9001" },
      { label: "Finish", value: "Anodized / Galvanized / CNC" },
      { label: "Documentation", value: "MTC & Third-party inspection" }
    ],
    features: [
      "Zero-tolerance precision machining",
      "Batch-coded for traceability",
      "Anti-corrosive export packaging"
    ]
  },
  {
    id: "electronics",
    title: "Electronic Copper Cathodes",
    shortDesc: "High-purity copper cathodes and assemblies.",
    description: "Sourcing high-grade cathodes for conductivity and electronics manufacturing. We ensure proper passivation and packaging to prevent oxidation during sea transit.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    specs: [
      { label: "Purity", value: "99.99% LME Grade A" },
      { label: "Application", value: "Wiring, PCBs, Electroplating" },
      { label: "Size", value: "Standard Sheets / Custom Cuts" },
      { label: "Origin", value: "Verified Tier-1 Refineries" }
    ],
    features: [
      "Passivation against salt-air oxidation",
      "Seaworthy specialized bundling",
      "Official Assay certificates provided"
    ]
  }
];