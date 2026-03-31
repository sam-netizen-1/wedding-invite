export type CoupleSide = {
  role: string;
  name: string;
  credential: string;
  primaryLine: string;
  secondaryLine: string;
};

export type Ceremony = {
  title: string;
  subtitle: string;
  date: string;
  time: string;
  location: string;
  description: string;
  icon: string;
  tone: "gold" | "terracotta" | "olive" | "wine" | "champagne";
};

export type Invitee = {
  name: string;
  city: string;
};

export const siteMetadata = {
  title: "Yogesh & Rajee | Wedding Invitation",
  description:
    "A wedding invitation for Yogesh and Rajee, celebrating their union on Tuesday, 5 May 2026 at Rajwada Palace, Mahal, Nagpur.",
};

export const blessings = {
  overline: "Wedding Invitation",
  invocation:
    "With the blessings of Shri Mahaviray Namah and Shri Ganeshaya Namah",
  familyNote:
    "With the love of our elders and the blessings of revered Guru Bhagwants, we warmly invite you to celebrate this joyful union with us.",
};

export const couple: CoupleSide[] = [
  {
    role: "Groom",
    name: "Yogesh",
    credential: "M.Tech",
    primaryLine: "Beloved son of Snehal Bothara and Late Shri Deepakkumarji Bothara",
    secondaryLine:
      "Grandson of Late Liladevi and Late Shri Bhawarilalji Pukhrajji Bothara",
  },
  {
    role: "Bride",
    name: "Rajee",
    credential: "BDS",
    primaryLine: "Beloved daughter of Smt. Manishaji and Late Shri Deepakkumarji Kochar",
    secondaryLine:
      "Granddaughter of Late Dhanalakshmidevi and Late Shri Leherchandji Kochar, Nagpur",
  },
];

export const weddingDetails = {
  date: "Tuesday, 5 May 2026",
  dayDetail: "Varmala and blessings at 11:00 AM",
  muhurta: "Paanigrahan at 3:30 PM",
  targetDate: "2026-05-05T15:30:00+05:30",
  venueTitle: "Rajwada Palace",
  venueCity: "Mahal, Nagpur",
  venueAddress:
    "Please use the map link below for exact directions to the venue.",
  venueMapUrl: "https://maps.app.goo.gl/mef3eGE8uM8fRFQa8",
  preface: "On the auspicious day of",
  closing:
    "You and your family are warmly invited to bless the couple and share in every cherished celebration of this wedding.",
};

export const ceremonies: Ceremony[] = [
  {
    title: "Kumkum",
    subtitle: "Shagun ceremony",
    date: "Sunday, 3 May 2026",
    time: "10:30 AM",
    location: "Our residence, Ralegaon",
    description: "An intimate family ceremony marking the beginning of the wedding festivities.",
    icon: "✦",
    tone: "gold",
  },
  {
    title: "Mayra",
    subtitle: "Maternal family celebration",
    date: "Sunday, 3 May 2026",
    time: "3:30 PM",
    location: "Our residence, Ralegaon",
    description: "A warm gathering hosted with the love and presence of the maternal side of the family.",
    icon: "❁",
    tone: "terracotta",
  },
  {
    title: "Baraat Departure",
    subtitle: "Journey to Nagpur",
    date: "Monday, 4 May 2026",
    time: "7:00 PM",
    location: "Departs from our residence for Nagpur",
    description: "The wedding procession leaves in the evening for the celebration in Nagpur.",
    icon: "➳",
    tone: "olive",
  },
  {
    title: "Nikasi",
    subtitle: "Groom's procession",
    date: "Tuesday, 5 May 2026",
    time: "9:00 AM",
    location: "Ceremonial departure for the wedding's venue",
    description:
      "The groom sets out for the wedding venue as friends and family dance, celebrate and accompany the procession.",
    icon: "✺",
    tone: "wine",
  },
  {
    title: "Varmala & Blessings",
    subtitle: "Ceremonial welcome",
    date: "Tuesday, 5 May 2026",
    time: "11:00 AM",
    location: "Rajwada Palace, Mahal, Nagpur",
    description: "The couple exchanges garlands and receives the blessings of family and friends.",
    icon: "✦",
    tone: "champagne",
  },
  {
    title: "Paanigrahan",
    subtitle: "Sacred wedding ritual",
    date: "Tuesday, 5 May 2026",
    time: "3:30 PM",
    location: "Rajwada Palace, Mahal, Nagpur",
    description: "The auspicious marriage ceremony and the heart of the celebration.",
    icon: "✧",
    tone: "gold",
  },
];

export const specialInvitees: Invitee[] = [
  { name: "Sau. Seema Nitinrajji Kothari", city: "Darwha" },
  { name: "Sau. Nidhi Sachinji Kothari", city: "Yavatmal" },
  { name: "Sau. Palak Adityaji Oswal", city: "Hinganghat" },
  { name: "Sau. Saiyami Pavankumarji Zamad", city: "Wani" },
];

export const familySignoff = {
  title: "With love from the Bothara family",
  subtitle: "Ralegaon, Yavatmal and Nashik",
  note: "Maternal side: Sandeepkumarji Tarachandji Kothari, Wani.",
};
