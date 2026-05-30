export const site = {
  name: "Carve 24×7",
  tagline: "Cut. Shape. Sculpt.",
  shortDesc:
    "A premium 24×7 fitness destination in Vasundhara, Ghaziabad — strength, cardio, functional training, and transformation coaching built for serious results.",
  url: "https://carve24x7.com",
  address: {
    line1: "1st Floor, Olive Street, Olive County",
    line2: "Sector 5, Vasundhara",
    city: "Ghaziabad",
    region: "Uttar Pradesh",
    postal: "201012",
    country: "India",
  },
  phones: ["+91 87500 01034", "+91 87500 01037"],
  email: "hello@carve24x7.com",
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    youtube: "https://youtube.com/",
    x: "https://x.com/",
  },
  hours: "Open 24 hours · 7 days a week",
  mapEmbed:
    "https://www.google.com/maps?q=Olive+County+Sector+5+Vasundhara+Ghaziabad&output=embed",
};

export type Service = {
  title: string;
  description: string;
  icon: string;
};

export const services: Service[] = [
  {
    title: "Strength Training",
    description:
      "Hammer Strength, free weights, and an Olympic platform engineered for hypertrophy and powerlifting.",
    icon: "dumbbell",
  },
  {
    title: "Cardio Zone",
    description:
      "Treadmills, ellipticals, stair climbers and assault bikes with personal entertainment screens.",
    icon: "heart",
  },
  {
    title: "Personal Training",
    description:
      "1:1 coaching with certified trainers — periodised programming, form correction, and accountability.",
    icon: "trainer",
  },
  {
    title: "Functional & HIIT",
    description:
      "Battle ropes, sleds, kettlebells, plyo boxes — burn fat and build athleticism in 45 minutes.",
    icon: "spark",
  },
  {
    title: "Yoga & Zumba",
    description:
      "Mobility, mindfulness and dance-cardio classes led by specialist instructors all week.",
    icon: "lotus",
  },
  {
    title: "Nutrition Coaching",
    description:
      "Personalised diet plans, body composition tracking and macro guidance from in-house nutritionists.",
    icon: "leaf",
  },
];

export const plans = [
  {
    name: "Quarterly",
    price: "₹4,999",
    period: "/ 3 months",
    highlight: false,
    features: [
      "Full gym & cardio access",
      "Group classes included",
      "Locker & shower facility",
      "Body composition analysis",
    ],
  },
  {
    name: "Half Yearly",
    price: "₹7,999",
    period: "/ 6 months",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Everything in Quarterly",
      "2 PT sessions / month",
      "Customised diet plan",
      "Free guest pass (x2)",
      "Steam & sauna access",
    ],
  },
  {
    name: "Annual",
    price: "₹12,999",
    period: "/ 12 months",
    highlight: false,
    features: [
      "Everything in Half Yearly",
      "Unlimited PT add-ons at 30% off",
      "Quarterly transformation review",
      "Priority booking on classes",
    ],
  },
];

export const stats = [
  { value: "24/7", label: "Open Every Day" },
  { value: "8,000+", label: "Sq. Ft. Training Floor" },
  { value: "15+", label: "Certified Coaches" },
  { value: "40+", label: "Weekly Classes" },
];

export const features = [
  {
    title: "24×7 Access",
    body: "Train on your schedule — early mornings, lunch breaks or after midnight. Your fitness, no excuses.",
  },
  {
    title: "Imported Equipment",
    body: "Premium Hammer Strength, Life Fitness and Precor stations on a vibration-dampened floor.",
  },
  {
    title: "Certified Coaches",
    body: "K11, ACE and ACSM certified trainers with combined 50+ years of transformation experience.",
  },
  {
    title: "Steam, Sauna & Shower",
    body: "Recover like an athlete with full locker rooms, hot showers and dedicated steam chambers.",
  },
  {
    title: "Hygiene First",
    body: "UV-sanitised equipment, climate control and weekly deep cleans across every zone.",
  },
  {
    title: "Members-Only App",
    body: "Book classes, track workouts and message your coach — all from your phone.",
  },
];

export const faqs = [
  {
    q: "When is Carve 24×7 opening in Vasundhara?",
    a: "We're putting the finishing touches on our flagship at Olive County, Sector 5. Drop your number on the contact form to receive launch-day pricing.",
  },
  {
    q: "Do you really stay open 24 hours?",
    a: "Yes. Members get secure card-access entry round the clock, with trained staff on the floor during peak hours and CCTV monitoring at all times.",
  },
  {
    q: "Are there separate timings or zones for women?",
    a: "We're an inclusive unisex gym with women-only group classes (Zumba, yoga, strength basics) and female trainers available throughout the day.",
  },
  {
    q: "Can I get a trial session before joining?",
    a: "Absolutely — book a free guided tour and one complimentary workout. We'll walk you through equipment, classes and the right plan for your goals.",
  },
  {
    q: "Do you offer diet and transformation plans?",
    a: "Yes. Every Half-Yearly and Annual membership includes a personalised nutrition plan, monthly check-ins and progress tracking.",
  },
];

export const testimonials = [
  {
    name: "Rohan Mehta",
    role: "Lost 14 kg in 4 months",
    quote:
      "The coaches actually pay attention to your form. I've trained in three other gyms — none felt this serious about results.",
  },
  {
    name: "Ananya Sharma",
    role: "Marathon trainee",
    quote:
      "Clean, well-lit and never overcrowded. The functional zone is exactly what I needed for endurance work.",
  },
  {
    name: "Vikram Singh",
    role: "Powerlifter",
    quote:
      "Proper deadlift platforms, calibrated plates, and chalk allowed. That alone makes Carve worth it.",
  },
];
