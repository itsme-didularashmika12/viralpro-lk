export interface ServiceItem {
  name: string;
  description: string;
  sinhalaName?: string;
  popular?: boolean;
}

export interface ServiceCategory {
  id: string;
  title: string;
  sinhalaTitle: string;
  shortDesc: string;
  iconName: string;
  badge?: string;
  items: ServiceItem[];
}

export interface PackageItem {
  id: string;
  name: string;
  sinhalaName: string;
  badge?: string;
  priceDisplay: string;
  sinhalaPriceNote: string;
  description: string;
  features: string[];
  recommendedFor: string;
  whatsappMessage: string;
  isPopular?: boolean;
}

export interface PortfolioItem {
  id: string;
  title: string;
  sinhalaTitle: string;
  category: "videos" | "social" | "design" | "web" | "systems";
  categoryLabel: string;
  tag: string;
  image: string;
  description: string;
  deliverables: string[];
  isConcept: boolean;
}

export interface FAQItem {
  question: string;
  sinhalaQuestion: string;
  answer: string;
  sinhalaAnswer: string;
  category: "general" | "video" | "pricing" | "services";
}

export interface TeamRole {
  role: string;
  sinhalaRole: string;
  focus: string;
  description: string;
  iconName: string;
}

export interface AudienceCard {
  id: string;
  title: string;
  sinhalaTitle: string;
  description: string;
  examples: string[];
  idealFor: string;
  ctaText: string;
  whatsappMessage: string;
}

export const siteConfig = {
  brand: {
    name: "ViralPro LK",
    tagline: "Create. Promote. Grow.",
    sinhalaTagline: "ඔබේ Business එකේ Digital වැඩ — එකම තැනකින්.",
    heroSub: "Social Media, Promotional Videos, Design, Websites, Apps, Business Systems සහ තවත් Digital Solutions.",
    locationText: "Serving Anuradhapura • Expanding across Sri Lanka",
    locationCity: "Anuradhapura, Sri Lanka",
    phone: "074 167 1668",
    phoneInternational: "+94741671668",
    whatsappHandle: "@viralprolk",
    socialHandle: "@viralprolk",
    facebookUrl: "https://www.facebook.com/profile.php?id=61594376443247",
    tiktokUrl: "https://www.tiktok.com/@viralprolk",
    instagramUrl: "https://www.instagram.com/viralprolk",
    youtubeUrl: "https://www.youtube.com/@viralprolk",
    whatsappUrl: "https://wa.me/94741671668",
  },

  // WhatsApp Pre-filled message generator
  getWhatsAppUrl(message?: string): string {
    const defaultMsg = "Hi ViralPro LK, I'm interested in digital services for my business.";
    return `https://wa.me/94741671668?text=${encodeURIComponent(message || defaultMsg)}`;
  },

  targetAudience: [
    {
      id: "small",
      title: "Small Business",
      sinhalaTitle: "කුඩා ව්‍යාපාර (Small Business)",
      description: "ඔබේ ව්‍යාපාරය ආරම්භ කළ අලුත හෝ සාමාන්‍ය මට්ටමේ පවත්වාගෙන යන ව්‍යාපාර සඳහා සුදුසුම මූලික පැකේජ.",
      examples: ["Shops & Boutiques", "Cafes & Bakers", "Beauty Salons", "Restaurants", "Tuition Classes", "Home Businesses", "Small Service Providers"],
      idealFor: "ඉක්මනින් Customersලා ආකර්ෂණය කරගැනීමට අවශ්‍ය ව්‍යාපාර",
      ctaText: "Get Starter Package",
      whatsappMessage: "Hi ViralPro LK, I have a Small Business and I'm interested in your digital promotion services.",
    },
    {
      id: "medium",
      title: "Medium Business",
      sinhalaTitle: "මධ්‍යම පරිමාණ ව්‍යාපාර (Medium Business)",
      description: "වැඩි පාරිභෝගික පිරිසකට ළඟා වීමට සහ Brand එක ශක්තිමත් කිරීමට අවශ්‍ය ව්‍යාපාර සඳහා.",
      examples: ["Growing Companies", "Retail Outlets", "Hotels & Resorts", "Higher Education Institutes", "Local Brands", "Service Companies"],
      idealFor: "Social media reach එක වැඩි කරගෙන sales ඉහළ නැංවීමට",
      ctaText: "Get Standard Solution",
      whatsappMessage: "Hi ViralPro LK, I have a Medium Business and I need comprehensive social media and promotion.",
    },
    {
      id: "large",
      title: "Large Business",
      sinhalaTitle: "මහා පරිමාණ ව්‍යාපාර (Large Business)",
      description: "ශාඛා කිහිපයක් සහිත හෝ විශාල පාරිභෝගික පදනමක් ඇති සමාගම් සඳහා සම්පූර්ණ ඩිජිටල් කළමනාකරණය.",
      examples: ["Established Companies", "Multi-location Businesses", "Larger Campaigns", "Custom Digital Systems"],
      idealFor: "දීපව්‍යාප්ත ප්‍රචාරණය සහ Digital System අවශ්‍යතා",
      ctaText: "Get Premium Solution",
      whatsappMessage: "Hi ViralPro LK, I represent an established large business and need full digital marketing & systems.",
    },
    {
      id: "custom",
      title: "Custom Requirements",
      sinhalaTitle: "අභිරුචි අවශ්‍යතා (Custom Solutions)",
      description: "ඔබටම අනන්‍ය වූ විශේෂිත වෙබ් අඩවි, Business Systems, Mobile Apps හෝ විශේෂ Promotion අවශ්‍යතා සඳහා.",
      examples: ["Custom POS / Billing Systems", "Tailored Websites & Apps", "Special Event Coverage", "AI & Business Automation"],
      idealFor: "ඔබේ ව්‍යාපාරයේ ස්වභාවයටම ගැළපෙන ඩිජිටල් පද්ධති",
      ctaText: "Get a Custom Solution",
      whatsappMessage: "Hi ViralPro LK, I have unique requirements and would like to discuss a custom digital solution.",
    },
  ] as AudienceCard[],

  // Video Promotion Highlight
  videoPromotion: {
    headline: "ඔබේ Business එක Social Media වලට Professional විදිහට පෙන්වමු.",
    subHeadline: "Professional Business Promotional Videos & Reels for Modern Sri Lankan Businesses",
    simpleSinhala: "ඔබේ shop/business එක අපි professionally shoot කරලා, customerලාට business එක ගැන ඉක්මනින් තේරෙන short promotional video එකක් හදනවා.",
    gearStatement: "අපි සැබෑ නිෂ්පාදන උපකරණ භාවිත කරමු: iPhone 16 Pro Max, Professional Stabilizer/Gimbals, Wireless Audio Receivers, Soft Commercial Lighting. Optional Drone සහ Actors/Models.",
    formatNotice: "Facebook Reels, Instagram Reels, TikTok, සහ YouTube Shorts සඳහා 9:16 Vertical Video ආකෘතියෙන් සකස් කෙරේ.",
    productionSpecs: [
      { title: "Camera & Gear", detail: "iPhone 16 Pro Max 4K ProRes + Professional Stabilizers" },
      { title: "Audio & Lighting", detail: "Studio-grade Wireless Microphones + Portable Soft Lighting" },
      { title: "Delivery Formats", detail: "9:16 Vertical (Reels / TikTok / Shorts) + 16:9 Landscape if needed" },
      { title: "Optional Add-ons", detail: "Drone aerial coverage & Hand-picked Actors / Models" },
    ],
    workflow: [
      { step: "01", title: "Business එක තේරුම්ගැනීම", desc: "ඔබේ ව්‍යාපාරයේ සුවිශේෂීතා, පිරිනමන සේවාවන් සහ ඉලක්කගත පාරිභෝගිකයින් හඳුනාගැනීම." },
      { step: "02", title: "Concept", desc: "පාරිභෝගිකයාගේ අවධානය ක්ෂණිකව දිනාගන්නා නිර්මාණාත්මක අදහසක් සකස් කිරීම." },
      { step: "03", title: "Script & Structure", desc: "සරල, පැහැදිලි සහ ආකර්ෂණීය කථාන්දරයක් (Hook, Body, Call to Action) සැලසුම් කිරීම." },
      { step: "04", title: "Professional Shooting", desc: "ඔබේ ආයතනය වෙත පැමිණ iPhone 16 Pro Max සහ professional gear භාවිතයෙන් ගුණාත්මකව රූගත කිරීම." },
      { step: "05", title: "Dynamic Editing", desc: "Color grading, sound design, captivating pacing සහ trending soundscapes එක් කිරීම." },
      { step: "06", title: "Social Optimization", desc: "Reels, TikTok සහ Shorts සඳහා 9:16 ආකෘතියෙන් උපරිම reach එකක් ලැබෙන පරිදි සකස් කිරීම." },
      { step: "07", title: "Final Delivery", desc: "උසස් තත්ත්වයේ video file එක ඔබට ඍජුවම ලබා දීම." },
      { step: "08", title: "Publish & Reach", desc: "ඔබේ අනුමැතිය සහ එකඟතාව අනුව ViralPro LK සමාජ මාධ්‍ය පිටු හරහාද ප්‍රචාරණය කිරීම." },
    ],
  },

  // Service Categories
  services: [
    {
      id: "promotion",
      title: "Business Promotion",
      sinhalaTitle: "ව්‍යාපාර ප්‍රචාරණය",
      shortDesc: "පාරිභෝගික ආකර්ෂණය උපරිම කරන වීඩියෝ සහ ඡායාරූප නිෂ්පාදන.",
      iconName: "Video",
      badge: "Core Service",
      items: [
        { name: "Promotional Videos", sinhalaName: "ප්‍රචාරක වීඩියෝ නිර්මාණය", description: "ව්‍යාපාරය පිළිබඳ සම්පූර්ණ කෙටි ප්‍රචාරක වීඩියෝ", popular: true },
        { name: "Reels / Shorts Production", sinhalaName: "Reels සහ TikTok වීඩියෝ", description: "Viral විය හැකි 9:16 කෙටි වීඩියෝ", popular: true },
        { name: "Business Photography", sinhalaName: "ව්‍යාපාරික ඡායාරූපකරණය", description: "ආයතනය සහ සේවා පරිසරය පෙන්වන උසස් තත්ත්වයේ ඡායාරූප" },
        { name: "Product Photography", sinhalaName: "නිෂ්පාදන ඡායාරූපකරණය", description: "ඔබේ භාණ්ඩ ආකර්ෂණීයව පෙන්වන ඡායාරූප" },
        { name: "Social Media Content Creation", sinhalaName: "සමාජ මාධ්‍ය අන්තර්ගත", description: "Facebook, Instagram, TikTok සඳහා දෛනික හෝ සතිපතා content" },
        { name: "Drone Aerial Promotion", sinhalaName: "ඩ්‍රෝන් දර්ශන ප්‍රචාරණය", description: "අවශ්‍යතාව අනුව උසස් ගුවන් දර්ශන (Optional add-on)" },
        { name: "Actor / Model based Videos", sinhalaName: "නළු නිළියන් සහිත වීඩියෝ", description: "නළු නිළියන් 1, 2, හෝ 3 දෙනෙකු යොදාගනිමින් කරන නිර්මාණ (Optional)" },
        { name: "Cinematic Business Videos", sinhalaName: "සිනමාත්මක ව්‍යාපාර වීඩියෝ", description: "ආයතනික ගෞරවය විදහාපාන උසස් නිමාවක් සහිත වීඩියෝ" },
        { name: "Event & Launch Coverage", sinhalaName: "විශේෂ අවස්ථා ආවරණය", description: "ව්‍යාපාරික විවෘත කිරීම් සහ ප්‍රවර්ධන වැඩසටහන් ආවරණය" },
      ],
    },
    {
      id: "social",
      title: "Social Media Management",
      sinhalaTitle: "සමාජ මාධ්‍ය කළමනාකරණය",
      shortDesc: "ඔබේ Facebook, Instagram, TikTok සහ YouTube පිටු වර්ධනය කිරීම.",
      iconName: "Smartphone",
      items: [
        { name: "Facebook Management", sinhalaName: "ෆේස්බුක් පිටු කළමනාකරණය", description: "පෝස්ට් සැලසුම් කිරීම, ප්‍රචාරණය සහ පිටුව පවත්වාගෙන යාම", popular: true },
        { name: "Instagram Growth & Management", sinhalaName: "ඉන්ස්ටග්‍රෑම් කළමනාකරණය", description: "Aesthetic feed, stories සහ reels නිර්මාණය" },
        { name: "TikTok Account Content", sinhalaName: "ටික්ටොක් අන්තර්ගත නිර්මාණය", description: "තරුණ පරපුර ආකර්ෂණය කරගන්නා කෙටි වීඩියෝ" },
        { name: "YouTube Content Strategy", sinhalaName: "යූටියුබ් වීඩියෝ සැකසුම", description: "දිගු සහ කෙටි වීඩියෝ සැකසුම් සහ SEO" },
        { name: "Social Media Strategy", sinhalaName: "සමාජ මාධ්‍ය උපායමාර්ග", description: "ව්‍යාපාරයේ target audience එකට ගැළපෙන සැලැස්ම" },
        { name: "Monthly Content Planning", sinhalaName: "මාසික සැලසුම්", description: "දින දර්ශනයක් අනුව අන්තර්ගතයන් ක්‍රමවත්ව පළ කිරීම" },
        { name: "Creative Post Design", sinhalaName: "පෝස්ට් නිර්මාණය", description: "ආකර්ෂණීය ග්‍රැෆික් නිර්මාණ" },
        { name: "Page Optimization & Branding", sinhalaName: "පිටු ප්‍රශස්තකරණය", description: "Bio, Profile, Cover සහ Services ක්‍රමවත්ව සැකසීම" },
        { name: "Targeted Advertising (Boost/Ads)", sinhalaName: "ඉලක්කගත වෙළඳ දැන්වීම්", description: "නිවැරදිම පාරිභෝගිකයින් වෙත ළඟා වන Meta දැන්වීම්" },
      ],
    },
    {
      id: "graphic",
      title: "Graphic Design & Branding",
      sinhalaTitle: "ග්‍රැෆික් නිර්මාණ සහ සන්නාමකරණය",
      shortDesc: "ඔබේ ව්‍යාපාරයේ අනන්‍යතාව සහ ප්‍රචාරක ද්‍රව්‍ය උසස් ලෙස නිර්මාණය කිරීම.",
      iconName: "Sparkles",
      items: [
        { name: "Logo Design & Brand Identity", sinhalaName: "ලාංඡන (Logo) නිර්මාණය", description: "ව්‍යාපාරයට සුවිශේෂී නවීන ලාංඡනයක් සහ Brand Guidelines", popular: true },
        { name: "Social Media Post Graphics", sinhalaName: "සමාජ මාධ්‍ය පෝස්ට් නිර්මාණ", description: "Facebook, Instagram සඳහා දිනපතා / විශේෂ දින නිර්මාණ" },
        { name: "Banners & Billboards", sinhalaName: "බැනර් නිර්මාණ", description: "වීදි බැනර් සහ shop front බෝඩ් සඳහා නිවැරදි ප්‍රමාණවලින්" },
        { name: "Flyers & Leaflets", sinhalaName: "අත්පත්‍රිකා නිර්මාණය", description: "ප්‍රවර්ධන අත්පත්‍රිකා" },
        { name: "Brochures & Profiles", sinhalaName: "ආයතනික පැතිකඩ නිර්මාණ", description: "සමාගම් විස්තර පත්‍රිකා" },
        { name: "Business Cards", sinhalaName: "ව්‍යාපාරික කාඩ්පත් (Visiting Cards)", description: "වෘත්තීය මට්ටමේ කාඩ්පත් සැලසුම්" },
        { name: "Lanyard & ID Cards", sinhalaName: "හැඳුනුම්පත් සහ ලැන්යාඩ්", description: "කාර්යමණ්ඩල හැඳුනුම්පත්" },
        { name: "T-Shirt & Uniform Designs", sinhalaName: "ටී-ෂර්ට් නිර්මාණ", description: "කාර්යමණ්ඩල ඇඳුම් නිර්මාණ" },
        { name: "Restaurant & Cafe Menu Designs", sinhalaName: "මෙනු පත් නිර්මාණය", description: "ආපනශාලා සහ හෝටල් සඳහා ආකර්ෂණීය Menu Cards" },
        { name: "Packaging & Label Designs", sinhalaName: "ඇසුරුම් නිර්මාණ", description: "නිෂ්පාදන ලේබල් සහ බොක්ස් නිර්මාණ" },
      ],
    },
    {
      id: "web",
      title: "Web & Software Development",
      sinhalaTitle: "වෙබ් අඩවි සහ මෘදුකාංග සංවර්ධනය",
      shortDesc: "පාරිභෝගික විශ්වාසය සහ සෘජු අලෙවිය වැඩි කරන වේගවත් නවීන වෙබ් අඩවි.",
      iconName: "Globe",
      items: [
        { name: "Business Websites", sinhalaName: "ව්‍යාපාරික වෙබ් අඩවි", description: "ආයතනයේ සේවාවන් සහ තොරතුරු සහිත නවීන responsive වෙබ් අඩවි", popular: true },
        { name: "Landing Pages", sinhalaName: "ලෑන්ඩින් පේජස් (Landing Pages)", description: "එක් නිශ්චිත නිෂ්පාදනයක් හෝ සේවාවක් ප්‍රවර්ධනයට" },
        { name: "E-commerce Websites", sinhalaName: "ඔන්ලයින් සාප්පු (E-Commerce)", description: "Online payments සහ order tracking සහිත වෙළඳසැල්" },
        { name: "Web Applications", sinhalaName: "වෙබ් යෙදුම්", description: "ව්‍යාපාරික අවශ්‍යතා සඳහා විශේෂිත cloud මෘදුකාංග" },
        { name: "Mobile Applications", sinhalaName: "ජංගම යෙදුම් (Mobile Apps)", description: "Android & iOS සඳහා ගැලපෙන යෙදුම්" },
        { name: "Custom Software Solutions", sinhalaName: "අභිරුචි මෘදුකාංග", description: "ඔබේ ආයතනයට පමණක් ගැලපෙන සුවිශේෂී මෘදුකාංග" },
        { name: "Online Booking Systems", sinhalaName: "වෙන්කිරීමේ පද්ධති", description: "හෝටල්, සැලෝන්, සහ වෛද්‍ය සේවා සඳහා appointments" },
        { name: "Customer Management (CRM)", sinhalaName: "පාරිභෝගික කළමනාකරණ පද්ධති", description: "පාරිභෝගික තොරතුරු සහ පසු විපරම්" },
        { name: "Custom Analytics Dashboards", sinhalaName: "ව්‍යාපාර දත්ත පුවරු", description: "දෛනික අලෙවිය සහ ලාභය අධීක්ෂණයට" },
      ],
    },
    {
      id: "systems",
      title: "Business Systems & POS",
      sinhalaTitle: "ව්‍යාපාර පද්ධති සහ POS මෘදුකාංග",
      shortDesc: "ව්‍යාපාරයේ ගිණුම්, තොග සහ බිල්පත් පහසුවෙන් පාලනය කරන පද්ධති.",
      iconName: "Layers",
      items: [
        { name: "POS Systems (Point of Sale)", sinhalaName: "POS බිල්පත් පද්ධති", description: "වෙළඳසැල්, සුපිරි වෙළඳසැල් සහ අවන්හල් සඳහා ස්පර්ශක තිර බිල්පත්", popular: true },
        { name: "Inventory Management", sinhalaName: "තොග පාලන පද්ධති", description: "භාණ්ඩ තොග ඉවරවීම් සහ ඇණවුම් නිරීක්ෂණය" },
        { name: "Billing & Invoicing Systems", sinhalaName: "ඉන්වොයිස් පද්ධති", description: "වේගවත් බිල්පත් මුද්‍රණය සහ PDF යැවීම" },
        { name: "Customer Database Systems", sinhalaName: "පාරිභෝගික දත්ත පද්ධති", description: "Loyalty points සහ customer history" },
        { name: "Employee & Staff Management", sinhalaName: "සේවක කළමනාකරණය", description: "පැමිණීම්, වැඩමුර සහ වැටුප් කළමනාකරණය" },
        { name: "Business Financial Dashboards", sinhalaName: "මූල්‍ය වාර්තා පුවරු", description: "දෛනික, මාසික ලාභ පාඩු ගණනය කිරීම්" },
        { name: "Comprehensive Reporting", sinhalaName: "සවිස්තරාත්මක වාර්තා", description: "ව්‍යාපාරික තීරණ ගැනීමට අවශ්‍ය සවිස්තර වාර්තා" },
        { name: "Booking & Appointment Calendars", sinhalaName: "වේලාවන් වෙන්කිරීමේ පද්ධති", description: "සේවා සපයන්නන් සඳහා දින දර්ශන පද්ධති" },
      ],
    },
    {
      id: "automation",
      title: "Automation & AI Solutions",
      sinhalaTitle: "ස්වයංක්‍රීයකරණය සහ කෘතිම බුද්ධිය (AI)",
      shortDesc: "පැය 24 පුරා පාරිභෝගිකයින්ට පිළිතුරු සපයන ස්වයංක්‍රීය ක්‍රමවේද.",
      iconName: "Cpu",
      items: [
        { name: "Business Process Automation", sinhalaName: "ව්‍යාපාර ක්‍රියාවලි ස්වයංක්‍රීයකරණය", description: "පුනරාවර්තී වැඩකටයුතු ස්වයංක්‍රීයව සිදුවන ලෙස සැකසීම" },
        { name: "AI Customer Support Chatbots", sinhalaName: "AI චැට්බොට්ස් (Chatbots)", description: "Website හෝ Facebook පිටුවට පැමිණෙන අයට ක්ෂණික පිළිතුරු", popular: true },
        { name: "WhatsApp Business Automation", sinhalaName: "වට්ස්ඇප් ස්වයංක්‍රීයකරණය", description: "ස්වයංක්‍රීය පණිවිඩ, මෙනු සහ පිළිතුරු යැවීම", popular: true },
        { name: "Telegram Business Bots", sinhalaName: "ටෙලිග්‍රෑම් බොට්ස්", description: "තොරතුරු සහ notification යවන bots" },
        { name: "Customer Support Automation", sinhalaName: "පාරිභෝගික සේවා ස්වයංක්‍රීයකරණය", description: "පැය 24 පුරා සක්‍රීය පාරිභෝගික උපකාර" },
        { name: "AI Content Solutions", sinhalaName: "AI අන්තර්ගත විසඳුම්", description: "ව්‍යාපාරික පිටපත් සහ අදහස් ඉක්මනින් සම්පාදනය" },
        { name: "Workflow Integration", sinhalaName: "කාර්ය ප්‍රවාහ ඒකාබද්ධ කිරීම", description: "Google Sheets, CRM, සහ WhatsApp එකිනෙකට සම්බන්ධ කිරීම" },
      ],
    },
    {
      id: "lms",
      title: "Education & LMS Systems",
      sinhalaTitle: "අධ්‍යාපනික සහ LMS පද්ධති",
      shortDesc: "ගුරුවරුන්, පන්ති සහ ආයතන සඳහා ඔන්ලයින් අධ්‍යාපන වේදිකා.",
      iconName: "GraduationCap",
      items: [
        { name: "Learning Management Systems (LMS)", sinhalaName: "සම්පූර්ණ LMS පද්ධති", description: "පාඩම්, වීඩියෝ සහ සටහන් එක්කළ හැකි ශිෂ්‍ය වේදිකා", popular: true },
        { name: "Online Class Platforms", sinhalaName: "ඔන්ලයින් පන්ති පද්ධති", description: "Zoom / Video streaming සම්බන්ධ කළ හැකි පන්ති කාමර" },
        { name: "Recorded Course Platforms", sinhalaName: "වීඩියෝ පාඨමාලා වේදිකා", description: "ආරක්ෂිත වීඩියෝ නැරඹුම් (Video watermarking & protection)" },
        { name: "Online Quiz & Exam Systems", sinhalaName: "ප්‍රශ්න පත්‍ර සහ විභාග පද්ධති", description: "ස්වයංක්‍රීය ලකුණු දෙන විභාග" },
        { name: "Student Management Systems", sinhalaName: "ශිෂ්‍ය කළමනාකරණය", description: "ශිෂ්‍ය ලියාපදිංචිය, පැමිණීම සහ කාඩ්පත්" },
        { name: "Teacher / Lecturer Management", sinhalaName: "ගුරු කළමනාකරණය", description: "ගුරුවරුන් කිහිප දෙනෙකු සඳහා ආයතනික පද්ධති" },
        { name: "Online & Manual Fee Payment", sinhalaName: "පන්ති ගාස්තු ගෙවීම් පද්ධති", description: "Bank slip upload හෝ card payment මගින් පන්ති ගාස්තු අයකරගැනීම" },
      ],
    },
  ] as ServiceCategory[],

  // Video Promotion Packages
  packages: [
    {
      id: "starter",
      name: "Basic Package",
      sinhalaName: "මූලික පැකේජය (Basic)",
      badge: "Essential",
      priceDisplay: "From Rs. 45,000",
      sinhalaPriceNote: "ව්‍යාපාරයේ ස්වභාවය අනුව සාකච්ඡා කරගත හැක",
      description: "කුඩා ව්‍යාපාර, කඩසාප්පු සහ ආපනශාලා සඳහා සරල, ආකර්ෂණීය මූලික ප්‍රචාරක වීඩියෝවක්.",
      features: [
        "1 Focused Promotional Video (30–60s)",
        "Basic creative concept & clean structure",
        "On-site filming with iPhone 16 Pro Max",
        "Clean dynamic editing & sound selection",
        "Optimized for Facebook Reels, Instagram & TikTok (9:16)",
        "Fast delivery in full HD/4K quality",
        "Publication option on ViralPro LK social channels (with permission)",
      ],
      recommendedFor: "කුඩා වෙළඳසැල්, Cafes, Salons, Tuition පන්ති",
      whatsappMessage: "Hi ViralPro LK, I'm interested in the STARTER promotional video package for my business.",
      isPopular: false,
    },
    {
      id: "standard",
      name: "Standard Package",
      sinhalaName: "ස්ටෑන්ඩර්ඩ් පැකේජය",
      badge: "Most Popular",
      priceDisplay: "From Rs. 95,000",
      sinhalaPriceNote: "වැඩි ආවරණයක් සහිත වඩාත් ජනප්‍රිය තේරීම",
      description: "වර්ධනය වන ව්‍යාපාර සඳහා වැඩි විස්තර ආවරණය කෙරෙන, උසස් නිමාවකින් යුත් ප්‍රචාරක වීඩියෝ විසඳුම.",
      features: [
        "1 Comprehensive Main Video + Short Cutdowns",
        "In-depth concept, hooks & messaging plan",
        "Professional on-site filming with iPhone 16 Pro Max & pro accessories",
        "Advanced cinematic color grading & sound design",
        "Social-media optimization for maximum reach",
        "Optional Actor / Model addition available",
        "Optional Drone add-on available (subject to clearance)",
        "Publication & promotion via ViralPro LK pages",
      ],
      recommendedFor: "Hotels, Retail Stores, Restaurants, Growing Brands",
      whatsappMessage: "Hi ViralPro LK, I'm interested in the STANDARD promotional video package for my business.",
      isPopular: true,
    },
    {
      id: "premium",
      name: "Premium Package",
      sinhalaName: "ප්‍රිමියම් පැකේජය",
      badge: "High Impact",
      priceDisplay: "From Rs. 165,000",
      sinhalaPriceNote: "සම්පූර්ණ ප්‍රචාරණ නිෂ්පාදනයක් අවශ්‍ය ආයතන සඳහා",
      description: "සම්පූර්ණ ආයතනික පෙනුම විදහාපාන, බහුවිධ අන්තර්ගත සහිත ඉහළම මට්ටමේ වීඩියෝ නිෂ්පාදනය.",
      features: [
        "Full Promotional Video Production (Multiple angles & cuts)",
        "Multiple content elements (Reels + Main Showcase)",
        "Advanced cinematic editing, motion text & graphics",
        "Actor / Model coordination option (1–3 actors)",
        "Drone aerial footage integration (subject to location/weather)",
        "Comprehensive social media rollout plan",
        "Multiple deliverable formats (9:16 vertical + 16:9 widescreen)",
        "Priority turnaround & creative consultation",
      ],
      recommendedFor: "Established Brands, Large Showrooms, Luxury Resorts",
      whatsappMessage: "Hi ViralPro LK, I'm interested in the PREMIUM promotional video package for my business.",
      isPopular: false,
    },
    {
      id: "custom",
      name: "Custom Package",
      sinhalaName: "අභිරුචි පැකේජය",
      badge: "Tailored",
      priceDisplay: "Get a custom quotation",
      sinhalaPriceNote: "ඔබේ නිශ්චිත අවශ්‍යතා මත පමණක් මිල තීරණය වේ",
      description: "ශාඛා කිහිපයක රූගත කිරීම්, විශාල ප්‍රචාරණ ව්‍යාපාර, හෝ වෙබ් අඩවි සහ Business Systems සමඟ ඒකාබද්ධ විසඳුම්.",
      features: [
        "Completely customized production & deliverable scope",
        "Coverage across multiple branches or locations",
        "Custom video series / episodic commercial content",
        "Combined package: Video + Website + POS / Systems + Social Media",
        "Flexible actor, drone, and crew configuration",
        "Tailored timeline and ongoing campaign support",
        "Direct consultation with ViralPro LK team",
      ],
      recommendedFor: "Multi-branch businesses, unique large-scale projects",
      whatsappMessage: "Hi ViralPro LK, I would like to get a CUSTOM quotation for my business requirements.",
      isPopular: false,
    },
  ] as PackageItem[],

  // Pricing & Add-on Policies (Important Factual Clarifications)
  policies: {
    transport: {
      title: "Transport & Travel Arrangements",
      sinhalaTitle: "ප්‍රවාහන පහසුකම් පිළිබඳ පැහැදිලි කිරීම",
      notes: [
        "අනුරාධපුර නගරය සහ ඒ අවට ප්‍රදේශ සඳහා — අප අමතා වේලාවක් වෙන්කරවා ගන්න.",
        "සාමාන්‍ය සේවා කලාපයෙන් පිටත පිහිටි වෙනත් දිස්ත්‍රික්ක සහ දුර බැහැර ස්ථාන සඳහා වෙනම සාධාරණ ප්‍රවාහන ගාස්තුවක් (Transport fee) අදාළ විය හැක.",
        "පාරිභෝගික ආයතනය විසින් ප්‍රවාහන පහසුකම් සපයන්නේ නම්, ප්‍රවාහන ගාස්තු සාකච්ඡා කර එකඟතාවකට පැමිණිය හැක.",
      ],
    },
    actors: {
      title: "Actors / Models Arrangement",
      sinhalaTitle: "නළු නිළියන් / Models යොදාගැනීම",
      notes: [
        "ඔබේ ප්‍රචාරක වීඩියෝව සඳහා අවශ්‍යතාව අනුව නළු නිළියන් (1 actor, 2 actors, හෝ 3 actors) සම්බන්ධ කරගත හැක.",
        "නළු නිළියන් සඳහා වන අමතර වියදම තෝරාගන්නා නළු නිළියන් සංඛ්‍යාව සහ ව්‍යාපෘතියේ ස්වභාවය අනුව තීරණය වේ.",
        "ව්‍යාපාර හිමිකරුට හෝ ආයතනයේ කාර්යමණ්ඩලයටම වීඩියෝව ඉදිරිපත් කිරීමට කැමති නම් ඒ සඳහාද සම්පූර්ණ මගපෙන්වීම ලබාදේ.",
      ],
    },
    drone: {
      title: "Drone Footage Availability",
      sinhalaTitle: "ඩ්‍රෝන් (Drone) ගුවන් දර්ශන",
      notes: [
        "ඩ්‍රෝන් දර්ශන සෑම පැකේජයකටම අනිවාර්ය කර නොමැති අතර, එය Optional Add-on එකක් ලෙස ලබාගත හැක.",
        "රූගත කරන ස්ථානය, කාලගුණය, නීතිමය අවසරයන් සහ ලබාගත හැකි බව මත පදනම්ව ඩ්‍රෝන් පහසුකම් ලබාදේ.",
      ],
    },
    disclaimer: "Final price depends on business type, location, shooting requirements, actors, drone, number of videos, editing complexity and other specific client requirements.",
    sinhalaDisclaimer: "අවසාන මිල තීරණය වන්නේ ඔබේ ව්‍යාපාරයේ ස්වභාවය, ස්ථානය, රූගත කිරීම් ප්‍රමාණය, නළු නිළියන්, ඩ්‍රෝන් අවශ්‍යතා සහ වීඩියෝ සංඛ්‍යාව අනුවයි.",
  },

  // 8-Step Process
  process: [
    { number: "01", title: "Contact Us", sinhalaTitle: "අප අමතන්න", desc: "WhatsApp හෝ දුරකථන ඇමතුමක් හරහා ඔබේ අවශ්‍යතාව අපට කියන්න." },
    { number: "02", title: "Understand Business", sinhalaTitle: "ව්‍යාපාරය තේරුම්ගැනීම", desc: "ඔබේ භාණ්ඩ, සේවා, සහ ඉලක්කගත පාරිභෝගිකයින් පිළිබඳ සාකච්ඡා කිරීම." },
    { number: "03", title: "Plan Concept", sinhalaTitle: "සැලැස්ම සහ Concept", desc: "වීඩියෝවට හෝ ඩිජිටල් සේවාවට ගැළපෙන ආකර්ෂණීය සැලැස්මක් සකස් කිරීම." },
    { number: "04", title: "Shoot / Create", sinhalaTitle: "නිෂ්පාදනය / රූගත කිරීම", desc: "අනුරාධපුරයේ හෝ ඔබේ ආයතනය වෙත පැමිණ උසස් ලෙස වැඩ ආරම්භ කිරීම." },
    { number: "05", title: "Edit & Polish", sinhalaTitle: "සංස්කරණය", desc: "වෘත්තීය මට්ටමේ වර්ණ, ශබ්ද සහ ආකර්ෂණීය visuals එක් කිරීම." },
    { number: "06", title: "Review", sinhalaTitle: "පරීක්ෂා කිරීම", desc: "නිර්මාණය ඔබට පෙන්වා ඔබේ අදහස් හා අවශ්‍ය සංශෝධන එකතු කිරීම." },
    { number: "07", title: "Final Delivery", sinhalaTitle: "භාරදීම", desc: "උසස් තත්ත්වයේ ගොනු ඔබට ඍජුවම ලබා දීම." },
    { number: "08", title: "Promote & Grow", sinhalaTitle: "ප්‍රචාරණය", desc: "Social Media හරහා පාරිභෝගිකයින් වෙත ළඟාවීම සහ ව්‍යාපාරය වර්ධනය කිරීම." },
  ],

  // Portfolio Concept Showcase (Clearly Labeled as Sample Concepts)
  portfolio: [
    {
      id: "concept-1",
      title: "Artisanal Cafe & Bakery Showcase",
      sinhalaTitle: "කැෆේ සහ බේකරි ප්‍රවර්ධන වීඩියෝව",
      category: "videos",
      categoryLabel: "Promotional Video",
      tag: "Food & Beverage",
      image: "/images/portfolio-cafe.jpg",
      description: "Vertical 9:16 short promotional video concept showcasing freshly made local food items, cozy cafe atmosphere, and barista action shots designed for high TikTok & Instagram engagement.",
      deliverables: ["45s Vertical Reel (9:16)", "15s Story Teaser", "Sound-synced dynamic cuts"],
      isConcept: true,
    },
    {
      id: "concept-2",
      title: "Fashion & Apparel Boutique Spotlight",
      sinhalaTitle: "ඇඳුම් සාප්පු ප්‍රවර්ධන වීඩියෝ සංකල්පය",
      category: "videos",
      categoryLabel: "Promotional Video",
      tag: "Retail & Fashion",
      image: "/images/portfolio-boutique.jpg",
      description: "Fast-paced retail promotional reel highlighting new clothing arrivals, fabrics, styling, and customer shopping ambiance for a Sri Lankan retail fashion store.",
      deliverables: ["60s Fashion Showcase", "3x Micro-clips for Ads", "Trending Audio Mix"],
      isConcept: true,
    },
    {
      id: "concept-3",
      title: "Luxury Beauty & Hair Salon Experience",
      sinhalaTitle: "රූපලාවණ්‍යාගාර ප්‍රවර්ධන වීඩියෝ සංකල්පය",
      category: "videos",
      categoryLabel: "Promotional Video",
      tag: "Beauty & Wellness",
      image: "/images/portfolio-salon.jpg",
      description: "Cinematic commercial concept presenting salon services, interior cleanliness, client transformation visuals, and booking CTA.",
      deliverables: ["Visual Walkthrough", "Service highlights", "Instagram Reels format"],
      isConcept: true,
    },
    {
      id: "concept-4",
      title: "Local Retail E-commerce & Business Web Platform",
      sinhalaTitle: "වෙළඳසැල් වෙබ් අඩවි සංකල්පය",
      category: "web",
      categoryLabel: "Web & Software",
      tag: "Web Platform",
      image: "/images/portfolio-web.jpg",
      description: "High-speed modern business landing page and catalog setup for a local Sri Lankan retail business with direct WhatsApp ordering integration.",
      deliverables: ["Mobile-first Responsive Design", "Direct WhatsApp Checkout", "Fast Vercel Hosting"],
      isConcept: true,
    },
    {
      id: "concept-5",
      title: "Modern Retail POS & Inventory Dashboard",
      sinhalaTitle: "සිල්ලර වෙළඳ POS පද්ධති සංකල්පය",
      category: "systems",
      categoryLabel: "Business Systems",
      tag: "POS & Billing",
      image: "/images/portfolio-pos.jpg",
      description: "Intuitive touch POS system concept with thermal receipt printing, daily sales summary, barcode scanning, and multi-staff access.",
      deliverables: ["Quick Billing Screen", "Real-time Stock Alerts", "Daily Profit Reports"],
      isConcept: true,
    },
    {
      id: "concept-6",
      title: "Social Media Multi-Platform Growth Strategy",
      sinhalaTitle: "සමාජ මාධ්‍ය සන්නාම සැලැස්ම",
      category: "social",
      categoryLabel: "Social Media",
      tag: "Social Strategy",
      image: "/images/social-media-content.jpg",
      description: "Structured monthly content strategy including promotional graphics, product reels, story highlights, and community response templates.",
      deliverables: ["Monthly Content Calendar", "12 Feed Post Graphics", "4 Weekly Reels Scripts"],
      isConcept: true,
    },
  ] as PortfolioItem[],

  // Factual Differentiators
  whyUs: [
    {
      title: "One Place for Multiple Digital Needs",
      sinhalaTitle: "සියලු ඩිජිටල් අවශ්‍යතා එකම තැනකින්",
      desc: "වීඩියෝ, සමාජ මාධ්‍ය, ග්‍රැෆික්, වෙබ් අඩවි, සහ POS මෘදුකාංග වෙන වෙනම සොයමින් කාලය නාස්ති නොකර එකම විශ්වාසදායක කණ්ඩායමකින් ලබාගත හැක.",
      iconName: "CheckCircle",
    },
    {
      title: "Local Business Understanding",
      sinhalaTitle: "දේශීය ව්‍යාපාරික අවශ්‍යතා ගැඹුරින් අවබෝධ කරගැනීම",
      desc: "අනුරාධපුරයේ සහ ලංකාවේ පාරිභෝගිකයින් සිතන පතන ආකාරය සහ ඔවුන් ආකර්ෂණය වන අන්තර්ගතයන් පිළිබඳ සැබෑ අවබෝධය.",
      iconName: "Compass",
    },
    {
      title: "Custom Packages for Any Size",
      sinhalaTitle: "ඕනෑම ව්‍යාපාරයකට ගැළපෙන නම්‍යශීලී පැකේජ",
      desc: "කුඩා සාප්පුවේ සිට විශාල ආයතනය දක්වා ඔබේ අයවැයට සහ අවශ්‍යතාවයට පමණක් ගෙවීමේ නිදහස.",
      iconName: "Sliders",
    },
    {
      title: "Realistic Equipment & Honest Production",
      sinhalaTitle: "සැබෑ උපකරණ භාවිතයෙන් උසස් නිෂ්පාදනය",
      desc: "අතිශයෝක්ති නොමැතිව, iPhone 16 Pro Max සහ professional stabilizers මගින් සමාජ මාධ්‍ය සඳහාම ගැලපෙන ආකර්ෂණීය වීඩියෝ.",
      iconName: "Camera",
    },
    {
      title: "Social-Media Focused Formats",
      sinhalaTitle: "සමාජ මාධ්‍ය සඳහාම ප්‍රශස්ත කළ අන්තර්ගත",
      desc: "Facebook Reels, TikTok, සහ Instagram සඳහාම 9:16 ආකෘතියෙන් සකස් කර ක්ෂණික ප්‍රචාරණ වාසි ලබාදීම.",
      iconName: "Share2",
    },
    {
      title: "Web & Custom Business Systems",
      sinhalaTitle: "වෙබ් අඩවි සහ ව්‍යාපාරික මෘදුකාංග",
      desc: "ප්‍රචාරණයෙන් ඔබ්බට ගොස් ඔබේ ව්‍යාපාරයේ විකුණුම් හා කළමනාකරණය පහසු කරන POS සහ Billing පද්ධති.",
      iconName: "Code",
    },
    {
      title: "Optional Actors & Drone Coverage",
      sinhalaTitle: "අවශ්‍යතාව අනුව නළු නිළියන් සහ ඩ්‍රෝන් පහසුකම්",
      desc: "ඔබට අවශ්‍ය නම් පමණක් නළු නිළියන් සහ ඩ්‍රෝන් දර්ශන පහසුවෙන් සම්බන්ධ කරගැනීමේ හැකියාව.",
      iconName: "Users",
    },
    {
      title: "Serving Anuradhapura & Expanding Island-wide",
      sinhalaTitle: "අනුරාධපුරයෙන් ඇරඹී දිවයින පුරා සේවය",
      desc: "අනුරාධපුරයේ මූලස්ථානය පිහිටුවා ඇති අතර ලංකාවේ ඕනෑම ප්‍රදේශයක ව්‍යාපාර සඳහා සේවා සැපයීමේ හැකියාව.",
      iconName: "MapPin",
    },
  ],

  // Team Structure (Roles rather than fake individuals)
  teamRoles: [
    {
      role: "Manager / Creative Director",
      sinhalaRole: "කළමනාකරු / නිර්මාණ අධ්‍යක්ෂ",
      focus: "Client Strategy & Overall Delivery",
      description: "පාරිභෝගිකයාගේ ව්‍යාපාරික අරමුණු හඳුනාගැනීම, ව්‍යාපෘති කළමනාකරණය, සහ උපරිම ප්‍රතිඵල ලබාදෙන ප්‍රචාරණ සැලසුම් සැකසීම.",
      iconName: "Briefcase",
    },
    {
      role: "Lead Designer & Visual Artist",
      sinhalaRole: "ප්‍රධාන නිර්මාණ ශිල්පී (Designer)",
      focus: "Brand Identity & Graphic Design",
      description: "ලාංඡන, සමාජ මාධ්‍ය පෝස්ට්, බැනර්, මෙනු කාඩ්පත් සහ ආයතනික සන්නාමකරණය උසස් ලෙස නිමවීම.",
      iconName: "Palette",
    },
    {
      role: "Full-Stack Software Developer",
      sinhalaRole: "මෘදුකාංග ඉංජිනේරු (Developer)",
      focus: "Web, POS & Business Systems",
      description: "වේගවත් වෙබ් අඩවි, POS බිල්පත් පද්ධති, e-commerce සහ ව්‍යාපාර ස්වයංක්‍රීයකරණ මෘදුකාංග නිර්මාණය.",
      iconName: "Code2",
    },
    {
      role: "Cameraman & Video Editor",
      sinhalaRole: "වීඩියෝ ශිල්පී සහ සංස්කාරක (Videographer)",
      focus: "Shooting & Reels Editing",
      description: "iPhone 16 Pro Max සහ cinematic gear භාවිතයෙන් වීඩියෝ රූගත කිරීම, වර්ණ සංස්කරණය සහ trending reels සැකසීම.",
      iconName: "Video",
    },
    {
      role: "Drone Operator (Optional Add-on)",
      sinhalaRole: "ඩ්‍රෝන් ක්‍රියාකරු (Drone Operator)",
      focus: "Aerial Perspectives & Commercial Views",
      description: "විශාල පරිශ්‍ර, හෝටල් සහ ව්‍යාපාරික ගොඩනැගිලි ආවරණය කෙරෙන උසස් ගුවන් දර්ශන රූගත කිරීම.",
      iconName: "Navigation",
    },
    {
      role: "Actors / Models (On Demand)",
      sinhalaRole: "නළු නිළියන් (Actors / Models)",
      focus: "On-camera Presenters & Commercial Roles",
      description: "ප්‍රචාරක වීඩියෝ සඳහා අවශ්‍යතාව අනුව තෝරාගත් දක්ෂ ඉදිරිපත් කරන්නන් සහ නළු නිළියන් (1–3 actors).",
      iconName: "Smile",
    },
  ] as TeamRole[],

  // 15 Comprehensive FAQs
  faqs: [
    {
      question: "What types of businesses do you work with?",
      sinhalaQuestion: "ඔබ සේවය සපයන්නේ කුමන ආකාරයේ ව්‍යාපාර සඳහාද?",
      answer: "We work with small, medium, and established businesses across Sri Lanka — including retail shops, cafes, restaurants, salons, educational institutes, hotels, boutiques, home businesses, and corporate companies.",
      sinhalaAnswer: "අපි කුඩා, මධ්‍යම සහ විශාල ඕනෑම ව්‍යාපාරයකට සේවය සපයමු — සිල්ලර වෙළඳසැල්, ආපනශාලා, රූපලාවණ්‍යාගාර, හෝටල්, උපකාරක පන්ති, ඇඳුම් සාප්පු, සහ නිවසේ සිට කරන ව්‍යාපාර ඇතුළුව.",
      category: "general",
    },
    {
      question: "Do you only work in Anuradhapura?",
      sinhalaQuestion: "ඔබ වැඩ කරන්නේ අනුරාධපුරයේ පමණක්ද?",
      answer: "Our primary hub is in Anuradhapura, but we actively serve businesses across Sri Lanka. Digital services such as website development, software, graphic design, and social media management are delivered island-wide without geographical limits.",
      sinhalaAnswer: "අපගේ මූලික මෙහෙයුම් කේන්ද්‍රය අනුරාධපුරයේ පිහිටා තිබුණද, අපි දිවයින පුරා ව්‍යාපාර සඳහා සේවය සපයමු. වෙබ් අඩවි, මෘදුකාංග, ග්‍රැෆික් නිර්මාණ සහ සමාජ මාධ්‍ය කළමනාකරණය දිවයිනේ ඕනෑම තැනක සිට ලබාගත හැක.",
      category: "general",
    },
    {
      question: "Can you come to another city for a video shoot?",
      sinhalaQuestion: "වීඩියෝ රූගත කිරීමක් සඳහා වෙනත් නගරයකට පැමිණිය හැකිද?",
      answer: "Yes. For shooting locations outside our normal Anuradhapura service radius, we travel to your location. A fair transport/travel fee may apply, or suitable transport can be arranged directly by the customer.",
      sinhalaAnswer: "ඔව්. අනුරාධපුර සේවා කලාපයෙන් පිටත පිහිටි වෙනත් නගර සඳහා අප පැමිණ රූගත කිරීම් සිදුකරනු ලැබේ. ඒ සඳහා සාධාරණ ප්‍රවාහන ගාස්තුවක් අදාළ වන අතර, පාරිභෝගිකයාට ප්‍රවාහනය සලසා දිය හැකිනම් ඒ පිළිබඳ සාකච්ඡා කරගත හැක.",
      category: "video",
    },
    {
      question: "How is transport charged for outstation projects?",
      sinhalaQuestion: "ප්‍රවාහන ගාස්තු අයවන්නේ කෙසේද?",
      answer: "For Anuradhapura area shoots, transport is straightforward. For locations outside, transport is calculated based on actual distance and logistics. If your business provides transport, the fee is adjusted accordingly.",
      sinhalaAnswer: "අනුරාධපුර ප්‍රදේශය තුළ සාමාන්‍ය ගාස්තු වේ. ඉන් පිටත නම් දුර ප්‍රමාණය සහ අවශ්‍යතා මත පදනම්ව සාධාරණ මුදලක් තීරණය වේ. ඔබ විසින් ප්‍රවාහනය සපයන්නේ නම් ප්‍රවාහන ගාස්තුව අඩුකරගත හැක.",
      category: "pricing",
    },
    {
      question: "Do you provide actors or models for promotional videos?",
      sinhalaQuestion: "ප්‍රචාරක වීඩියෝ සඳහා නළු නිළියන් සපයනවාද?",
      answer: "Yes. We can arrange 1, 2, or 3 professional actors/models based on your script and package requirements. Alternatively, you or your team members can be the on-camera faces of your business.",
      sinhalaAnswer: "ඔව්. අවශ්‍යතාව අනුව නළු නිළියන් 1, 2, හෝ 3 දෙනෙකු සම්බන්ධ කරදිය හැක. එසේත් නැතිනම් ඔබේ ආයතනයේ හිමිකරු හෝ කාර්යමණ්ඩලයටම වීඩියෝවට පෙනී සිටිය හැක.",
      category: "video",
    },
    {
      question: "Is drone footage included in every package?",
      sinhalaQuestion: "සෑම පැකේජයකටම ඩ්‍රෝන් දර්ශන ඇතුළත්ද?",
      answer: "No, drone footage is an optional add-on. We only include it when your project requires aerial perspectives and subject to location safety, weather conditions, and aviation permissions.",
      sinhalaAnswer: "නැත, ඩ්‍රෝන් දර්ශන විකල්ප අතිරේකයක් (Optional Add-on) ලෙස ලබාගත හැක. ඔබේ ව්‍යාපාරයට ගුවන් දර්ශන අවශ්‍ය නම්, ස්ථානයේ නීතිමය අවසර සහ කාලගුණය සලකා බලා එය එකතු කළ හැක.",
      category: "video",
    },
    {
      question: "Can I get only a promotional video without other services?",
      sinhalaQuestion: "මට වෙනත් සේවා නැතිව වීඩියෝවක් පමණක් ලබාගත හැකිද?",
      answer: "Absolutely. You can order a single promotional video or reel without needing to sign up for monthly social media management or web development.",
      sinhalaAnswer: "අනිවාර්යයෙන්ම පුළුවන්. ඔබට අවශ්‍ය නම් එක promotional video එකක් හෝ reel එකක් පමණක් වුවද ඉතා පහසුවෙන් කරගත හැක.",
      category: "video",
    },
    {
      question: "Can you manage my entire social media presence?",
      sinhalaQuestion: "මගේ සමාජ මාධ්‍ය පිටු සම්පූර්ණයෙන්ම කළමනාකරණය කළ හැකිද?",
      answer: "Yes. We offer complete social media management including post design, content planning, reel creation, page optimization, and Meta advertising for Facebook, Instagram, and TikTok.",
      sinhalaAnswer: "ඔව්. Facebook, Instagram, සහ TikTok පිටු සඳහා පෝස්ට් නිර්මාණය, වීඩියෝ, සැලසුම්කරණය සහ දැන්වීම් ප්‍රචාරණය ඇතුළු සම්පූර්ණ කළමනාකරණය අප සිදුකරනු ලැබේ.",
      category: "services",
    },
    {
      question: "Can you build custom business websites and apps?",
      sinhalaQuestion: "ව්‍යාපාරික වෙබ් අඩවි සහ Apps නිර්මාණය කළ හැකිද?",
      answer: "Yes. We build responsive modern websites, landing pages, e-commerce stores, custom web applications, and mobile apps engineered with high speed and conversion in mind.",
      sinhalaAnswer: "ඔව්. ඕනෑම ව්‍යාපාරයකට ගැළපෙන නවීන වෙබ් අඩවි, online shopping websites, සහ ජංගම යෙදුම් (Mobile Apps) අප නිර්මාණය කරනු ලැබේ.",
      category: "services",
    },
    {
      question: "Do you develop POS and inventory billing systems?",
      sinhalaQuestion: "POS සහ බිල්පත් පද්ධති ලබාදෙනවාද?",
      answer: "Yes. We provide modern Point of Sale (POS) systems, stock/inventory control, billing, customer databases, and financial reporting systems for retail shops, supermarkets, and restaurants.",
      sinhalaAnswer: "ඔව්. වෙළඳසැල්, ආපනශාලා සහ සුපිරි වෙළඳසැල් සඳහා ස්පර්ශක තිර POS බිල්පත්, තොග පාලන සහ දෛනික ලාභ වාර්තා පද්ධති අප සපයමු.",
      category: "services",
    },
    {
      question: "Can you create a custom combined package for my business?",
      sinhalaQuestion: "මගේ ව්‍යාපාරයට ගැලපෙන විශේෂ පැකේජයක් සකස් කළ හැකිද?",
      answer: "Yes, customized bundles are our specialty! You can combine a promotional video with graphic design, a website, a POS system, and monthly social media management to match your exact goals and budget.",
      sinhalaAnswer: "ඔව්, ඔබට අවශ්‍ය පරිදි වීඩියෝ, වෙබ් අඩවි, POS පද්ධති සහ සමාජ මාධ්‍ය කළමනාකරණය එකට එකතු කර විශේෂ custom පැකේජයක් සාකච්ඡා කරගත හැක.",
      category: "pricing",
    },
    {
      question: "How long does a project take to complete?",
      sinhalaQuestion: "ව්‍යාපෘතියක් අවසන් කිරීමට කොපමණ කාලයක් ගතවේද?",
      answer: "Turnaround depends on project scope. A standard promotional video typically takes a few days from filming to final delivery. Websites and software systems depend on custom feature specifications, discussed upfront.",
      sinhalaAnswer: "කාලය තීරණය වන්නේ කාර්යයේ ප්‍රමාණය අනුවයි. සාමාන්‍ය ප්‍රචාරක වීඩියෝවක් රූගත කර දින කිහිපයක් තුළ ලබාදිය හැක. වෙබ් අඩවි සහ මෘදුකාංග පද්ධති සඳහා අවශ්‍යතා අනුව කාල රාමුවක් කල්තියා තීරණය කෙරේ.",
      category: "general",
    },
    {
      question: "How do I get a quotation?",
      sinhalaQuestion: "මිල ගණන් ලබාගන්නේ කෙසේද?",
      answer: "Simply message us on WhatsApp (074 167 1668) or fill out the contact form below. Tell us your business type, location, and the service you require, and we will provide a clear quotation.",
      sinhalaAnswer: "ඉතා පහසුයි. අපගේ WhatsApp අංකයට (074 167 1668) පණිවිඩයක් එවන්න හෝ පහත Contact Form එක පුරවන්න. ඔබේ අවශ්‍යතාව අනුව පැහැදිලි මිල ගණන් ලබාදෙන්නෙමු.",
      category: "pricing",
    },
    {
      question: "Can you publish our promotional video on ViralPro LK social channels?",
      sinhalaQuestion: "අපගේ වීඩියෝව ViralPro LK පිටුවල පළ කළ හැකිද?",
      answer: "Yes, subject to your mutual permission and agreement, we can feature and cross-promote your promotional video on our official ViralPro LK social media pages to give your business additional organic reach.",
      sinhalaAnswer: "ඔව්, ඔබේ කැමැත්ත සහ එකඟතාව මත අපගේ නිල ViralPro LK සමාජ මාධ්‍ය පිටු හරහාද ඔබේ වීඩියෝව ප්‍රචාරය කර අමතර පාරිභෝගික පිරිසක් වෙත ළඟා කරදිය හැක.",
      category: "video",
    },
    {
      question: "Can we provide our own transport or on-camera talent?",
      sinhalaQuestion: "අපටම ප්‍රවාහනය හෝ ඉදිරිපත් කරන්නන් සැපයිය හැකිද?",
      answer: "Yes, you are completely free to provide your own transport and feature your own team, staff, or models. We will collaborate seamlessly and adjust any related fee components accordingly.",
      sinhalaAnswer: "ඔව්, ඔබටම ප්‍රවාහන පහසුකම් සැලසිය හැකි අතර ඔබේම සේවකයින් හෝ ඉදිරිපත් කරන්නන් යොදාගත හැක. එවිට අදාළ අමතර වියදම් අවම කරගත හැක.",
      category: "general",
    },
  ] as FAQItem[],
};
