/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, Review, FaqItem, CarType } from './types';

export const SERVICES_DATA: Service[] = [
  {
    id: 'paint-protection-film',
    title: 'Self-Healing PPF (Paint Protection Film)',
    description: 'The ultimate physical armor for luxury supercars. Premium clear or matte polyurethane film with advanced thermal shape memory that absorbs impact and heals surface scratches under the Dubai sun.',
    benefits: [
      'Advanced thermal-healing technology (fine scuffs and wash swirls vanish under solar heat)',
      'High-durability shielding against sharp rock chips, sandstorms, and key scratches',
      'Optically perfect clear gloss or sleek custom satin matte visual styling options',
      'Full bodywork edge-rolling and clinical alignment wrap personally inspected'
    ],
    icon: 'Sparkles',
    priceEstimate: 'AED 8,500',
    bgImage: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80',
    stats: 'Self-Healing'
  },
  {
    id: 'nano-ceramic',
    title: 'Nano-Ceramic Coating Protection',
    description: 'Ultra-hydrophobic molecular liquid glass layer that permanently cross-links with your paint structure. Creates a high-hardness protective glass shield with deep wet-look clarity and mirror reflection.',
    benefits: [
      'Extreme hydrophobic water-beading effect keeps surfaces cleaner for longer',
      '9H quartz mineral hardness providing chemical defense against acids and bird droppings',
      'Advanced solar UV filters that eliminate severe Dubai paint oxidation and fading',
      'Extends and preserves the pristine clarity of rich metallic flakes'
    ],
    icon: 'Shield',
    priceEstimate: 'AED 1,800',
    bgImage: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=800&q=80',
    stats: '9H protection'
  },
  {
    id: 'paint-correction',
    title: 'Multi-Stage Paint Correction & Polish',
    description: 'Surgical micro-compounding and dual-action correction compounding to restore weathered paints. Safely levels down deep surface oxidation, micro-scratches, wash swirls, and etching marks.',
    benefits: [
      'Eliminates heavy wash swirls, rotary hologram tracks, and water spot etching',
      'Calibrated paint thickness measurement to ensure safe leveling tolerances',
      'Restores authentic mirror clarity and pristine depth to clear coats',
      'Conducted using top-tier professional abrasive aggregates under LED inspection'
    ],
    icon: 'Cpu',
    priceEstimate: 'AED 1,200',
    bgImage: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=800&q=80',
    stats: 'Mirror Finish'
  },
  {
    id: 'window-tinting',
    title: 'Premium Heat-Rejection Window Tinting',
    description: 'Advanced multi-layer nano-ceramic window film insulation designed specifically for Dubai’s extreme solar heat. Rejects intensive heat while maintaining absolute optical transparency from within.',
    benefits: [
      'Up to 99% ultraviolet block preventing interior fade and leather degradation',
      'Excellent infrared heat rejection lowering cabin climate control loads',
      'Non-metallized nano-ceramic layer prevents signal interference for custom smart devices',
      'Clean professional film alignment without peeling seams or micro-bubble traces'
    ],
    icon: 'Compass',
    priceEstimate: 'AED 900',
    bgImage: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80',
    stats: 'Solar Block'
  },
  {
    id: 'interior-detailing',
    title: 'Luxury Cabin Interior Deep Cleaning',
    description: 'Comprehensive interior decontamination and physical material nourishment. We safely clean, extract, and maintain premium genuine leathers, synthetic fabrics, and sensitive Alcantara.',
    benefits: [
      'PH-neutral leather decontamination, deep conditioning, and UV defense barrier',
      'Deep steam-extraction of carpets, floor mats, and ceiling linings',
      'Detailed sterilization of dash electronics, ventilation vents, and interior crevices',
      'Odour extraction leaves the interior cabin completely neutral and pure'
    ],
    icon: 'Layers',
    priceEstimate: 'AED 600',
    bgImage: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80',
    stats: 'Cabin Magic'
  },
  {
    id: 'flood-restoration',
    title: 'Exceptional Flood & Water Damage Recovery',
    description: 'Clinical vehicle cabin recovery and complete dry-out sanitation after severe water ingress or flooding incidents. Prevents permanent biological issues and protects floorboards.',
    benefits: [
      'Full interior seat-out extraction to inspect underlying wire panels and flooring',
      'Technical water extraction using professional high-vacuum systems',
      'Multi-phase ozone decontamination countering mold spores and musty odors',
      'Precise electronic component cleaning and logical structural safety check'
    ],
    icon: 'Activity',
    priceEstimate: 'AED 2,500',
    bgImage: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
    stats: 'Complete Rescue'
  },
  {
    id: 'dent-repair',
    title: 'Paintless Dent Repair (PDR)',
    description: 'Bespoke hand-crafted extraction of minor body dings and creases without standard chemical body fillers or repainting. Preserves the original factory paint finish completely.',
    benefits: [
      'Smoothly massaged back to form without changing original bodywork panels',
      'Retains 100% original factory paint finish and vehicle history metrics',
      'Perfect for shopping center door dings, side wall creases, and minor bumps',
      'Saves high-end repaint charges and avoids vehicle depreciation'
    ],
    icon: 'Cpu',
    priceEstimate: 'AED 400',
    bgImage: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
    stats: 'Dent Repair'
  },
];

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-2',
    author: 'Zaid Rayyan',
    rating: 5,
    body: 'The exceptional service I received for my flooded car, swiftly restored to brand new, was truly extraordinary. I was ecstatic upon seeing my car, brought back to an even better state than before. Under the skilled leadership of Mr. Ayman...',
    period: 'a year ago',
    tags: ['Restoration', 'Flood Recovery', 'Attention to Detail'],
    response: 'Thank you so much, We are glad to know that you have had a great experience with Prestige Detailing. We truly appreciate feedbacks like these and aim to always provide level best services.'
  },
  {
    id: 'rev-3',
    author: 'Adel Al Shishani',
    rating: 5,
    body: 'This is the place to go if you want to have one of the best car care services in Dubai. Not only is there work immaculate but the owner is a great person and will always give solid and honest advice.',
    period: '3 years ago',
    tags: ['Honest Advice', 'Immaculate Finish'],
    response: 'Thank you Adel so much, We are glad to know that you have had a great experience with Prestige Detailing. We truly appreciate feedbacks like these and aim to always provide level best services.'
  },
  {
    id: 'rev-4',
    author: 'Paul Cheung',
    rating: 5,
    body: "Now the car’s previously been ceramic coated by Prestige Detailing, but now, for preserving the bodywork for the long-term, I did the whole PPF package! The car is next level 'WOW!' Looks amazing and has the benefit of self-healing PPF.",
    period: '3 years ago',
    tags: ['Ceramic Coating', 'PPF Package', 'Self-Healing Film'],
    response: 'Dear Paul, on behalf of the whole team at Prestige Detailing we thank you for taking the time to give us your feedback. We are glad that you enjoyed our service .. enjoy your ride .. see you soon.'
  },
  {
    id: 'rev-5',
    author: 'Zaid Hamidi',
    rating: 5,
    body: "After nearly a month in the garage for a full restoration, I was ready to replace my car's entire interior—until Prestige Detailing worked their magic! The results were unbelievable; the interior looks brand new. Highly recommended!",
    period: 'a year ago',
    tags: ['Interior Magic', 'Full Restoration', 'Value for Money'],
    response: 'Thank you so much, We are glad to know that you have had a great experience with Prestige Detailing. We truly appreciate feedbacks like these and aim to always provide level best services.'
  },
  {
    id: 'rev-6',
    author: 'Jan Korbijn',
    rating: 5,
    body: 'TODAY MY PORSCHE 911 WAS FULLY WASHED AND MAINTAINED WITH A NANO-CERAMIC COATING AS INTERIOR DEEP CLEANING BY PRESTIGE DETAILING. I HIGHLY RECOMMAND THEM FOR TAKING CARE PROFESSIONALLY OF YOUR PRECIOUSE CAR!',
    period: '5 years ago',
    tags: ['Porsche 911', 'Nano-Ceramic Coating', 'Deep Clean'],
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How long does a full PPF application take at your Dubai Investment Park location?',
    answer: 'A high-end, professional PPF (Paint Protection Film) application typically takes between 3 to 5 business days. This precise timeline incorporates careful exterior preparation, deep chemical clay-bar decontamination, fine multi-stage paint correction to lock in absolute clarity, meticulous dry fitments, clean seam edges folding under body panels, and a rigorous 24-hour heat-lock inspection phase to ensure the film will never peel under severe Dubai sun conditions.'
  },
  {
    id: 'faq-2',
    question: 'What is the absolute difference between Ceramic Coating and Paint Protection Film (PPF)?',
    answer: 'Ceramic Coating is a chemical liquid silica micro-layer that seals your paint on a molecular level, providing elite gloss, hydrophobic properties (beading moisture run-off), stain defense, and ultra-slickness. Paint Protection Film (PPF) is a physical, heavy-duty transparent polyurethane shield that absorbs physical impacts like rocks, scratches, road debris, sandstorm abrasion, and even has a self-healing memory layer that levels out light swirls when exposed to engine or ambient sun heat.'
  },
  {
    id: 'faq-3',
    question: 'Will self-healing film really heal scratches under the Dubai sun?',
    answer: 'Yes, absolutely! The advanced, premium polyurethane PPF has an elastic shape memory layer. When fine micro-scratches, wash swirls, or key strokes touch the surface, they disturb the elastic shape. When the car sits under the sun (over 30°C, typical in Dubai daily), or warm water is poured on it, the polymer bonds naturally self-align back to their flat, factory-fresh shape, making micro-scratches completely vanish in minutes.'
  },
  {
    id: 'faq-4',
    question: 'Can you restore heavily sun-scorched paint or cement-stained bodywork?',
    answer: 'Yes, absolutely. Under the meticulous direction of Mr. Ayman, we specialize in advanced paint restoration to rescue sun-damaged paint (typical for Dubai-driven Defenders and classics) and lift tough rain or cement-etched stains. We carefully evaluate paint depth tolerances, utilize surgical dual-action rotary compounding, and restore clear coats back to a spectacular showroom state.'
  },
  {
    id: 'faq-5',
    question: 'How do I maintain my car after receiving your 9H Nano-Ceramic Coating?',
    answer: 'While the coating resists chemicals and severe build-ups, maintaining the hydrophobic flow is simple: wash the car weekly using pH-neutral automotive shampoo, use the clean double-bucket wash technique to avoid grinding dirt, and avoid washing in direct midday sun. Ayman will give you an honest advice kit with premium updates upon handover.'
  }
];

export const CAR_TYPES: CarType[] = [
  {
    id: 'supercar',
    label: 'Supercar',
    multiplier: 1.2,
    icon: 'Flame',
    example: 'Porsche 911, Ferrari F8, Lamborghini Aventador'
  },
  {
    id: 'sedan',
    label: 'Coupe / Sedan',
    multiplier: 1.0,
    icon: 'Car',
    example: 'BMW M5, Mercedes E-Class, Audi RS6'
  },
  {
    id: 'suv',
    label: 'Luxury SUV / Offroad',
    multiplier: 1.3,
    icon: 'Compass',
    example: 'G-Wagon, Defender, Nissan Patrol V8, Range Rover'
  }
];
