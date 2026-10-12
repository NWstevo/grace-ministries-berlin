// Single source for church details, navigation and shared content.
// Values in [square brackets] are placeholders the church still needs to provide.

export const site = {
  fullName: "Grace Foundational Scriptural Ministries International",
  branch: "Tabernacle of Glory Berlin",
  shortName: "Tabernacle of Glory Berlin",
  tagline: "Grace, Truth & Power",
  email: "gfsm.berlin@gmail.com",
  phone: { display: "+49 175 530 2999", href: "tel:+491755302999" },
  address: {
    street: "Angerburger Allee 56",
    city: "14055 Berlin",
    country: "Germany",
  },
  // Opens Google Maps for the address (plain link, no embedded map or cookies).
  directionsUrl:
    "https://www.google.com/maps/search/?api=1&query=Angerburger+Allee+56%2C+14055+Berlin",
  serviceTimes: [{ day: "Sunday Worship", time: "10:00 – 12:30" }],
  // Regular gatherings (from the church profile, 8 Oct 2026).
  gatherings: [
    { name: "Sunday Worship", when: "Every Sunday · 10:00 – 12:30" },
    { name: "Prayer Group", when: "Mondays & Thursdays · 18:00 – 19:00" },
    { name: "Gethsemane Fasting & Prayer", when: "First weekend of the month" },
    { name: "Prophetic Charge", when: "Third Sunday of the month" },
    { name: "Voices of the Remnant", when: "Every two months" },
    { name: "The Hungry Seekers", when: "Weekly Bible study · Cohort 2 from October 2026" },
  ],
  verse: {
    text: "But we all, with open face beholding as in a glass the glory of the Lord, are changed into the same image from glory to glory…",
    ref: "2 Corinthians 3:18 (KJV)",
  },
  // Leave empty until the church shares its real profile links; empty links are not shown.
  social: {
    facebook: "",
    instagram: "",
    youtube: "", // e.g. "https://www.youtube.com/@channel"
  },
  // "Watch Live Service": the channel's /live page always opens the current or next live broadcast.
  // Placeholder until the channel address is known.
  get youtubeLiveUrl() {
    return this.social.youtube ? `${this.social.youtube}/live` : "https://www.youtube.com/";
  },
} as const;

// Online giving links. Leave empty until each is set up; an empty link shows as "Coming soon" on the Give page.
export const giving = {
  paypal: "", // e.g. a PayPal donate link: https://www.paypal.com/donate/?hosted_button_id=...
  googlePay: "", // e.g. a Google Pay / payment-link URL
  applePay: "", // e.g. an Apple Pay / payment-link URL
  stripe: "", // e.g. a Stripe Payment Link: https://donate.stripe.com/...
};

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const ministries = [
  {
    slug: "warriors-of-light",
    // Page colours from the ministry design suggestions: two accents, a tint and a readable text colour.
    theme: { accent: "#F2B33D", accent2: "#4DA8DA", tint: "#FFF8E6", ink: "#1F6488" },
    name: "Warriors of Light",
    kind: "Children’s Ministry · ages 4–12",
    text: "Raising a generation that knows, loves and serves Jesus.",
    image: "/images/ministries/warriors-of-light.jpg",
    tone: "gold",
  },
  {
    slug: "rooted-and-rising",
    theme: { accent: "#0B3F80", accent2: "#1C9C9C", tint: "#E8F5F5", ink: "#0E6464" },
    name: "Rooted & Rising",
    kind: "Teen Ministry",
    text: "Firmly rooted in Christ. Rising to make a difference.",
    image: "/images/ministries/rooted-and-rising.jpg",
    tone: "royal",
  },
  {
    slug: "hungry-seekers",
    theme: { accent: "#04203B", accent2: "#E5B76D", tint: "#FBF1DE", ink: "#7A5518" },
    name: "The Hungry Seekers",
    kind: "Discipleship & Spiritual Formation",
    text: "Growing in Christ. Becoming like Him. Revealing His glory.",
    image: "/images/ministries/hungry-seekers.jpg",
    tone: "gold",
  },
  {
    slug: "voices-of-transformation",
    theme: { accent: "#0B3F80", accent2: "#E5B76D", tint: "#E8EEF8", ink: "#0B3F80" },
    name: "Voices of Transformation",
    kind: "Worship & Creative Expression",
    text: "Using our gifts to glorify God and inspire lives.",
    image: "/images/ministries/voices-of-transformation.jpg",
    tone: "royal",
  },
  {
    slug: "grace-academy",
    theme: { accent: "#04203B", accent2: "#6B8F71", tint: "#F4F6EE", ink: "#3F5E45" },
    name: "Grace Academy",
    kind: "Learning & Leadership Development",
    text: "Equipping believers for ministry and everyday life.",
    image: "/images/ministries/grace-academy.jpg",
    tone: "forest",
  },
  {
    slug: "other-ministries",
    theme: { accent: "#B8862F", accent2: "#E5B76D", tint: "#FBF4E6", ink: "#7A5518" },
    name: "Other Ministries",
    kind: "Serving the whole church family",
    text: "Pastoral care, prayer, women’s ministry, evangelism, hospitality, community support and more.",
    image: "/images/ministries/other-ministries.jpg",
    tone: "cream",
  },
] as const;

export type Ministry = (typeof ministries)[number];

export const otherMinistries = [
  "Pastoral Care & Counselling",
  "Prayer Ministry",
  "Women’s Ministry",
  "Evangelism & Outreach",
  "Hospitality",
  "Community Support",
];

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Our Ministries",
    href: "/ministries",
    children: [
      { label: "All ministries", href: "/ministries" },
      ...ministries.map((m) => ({ label: m.name, href: `/ministries/${m.slug}` })),
    ],
  },
  {
    label: "Discipleship",
    href: "/discipleship",
    children: [
      { label: "Discipleship pathway", href: "/discipleship#pathway" },
      { label: "The Hungry Seekers", href: "/discipleship#hungry-seekers" },
      { label: "Grace Academy", href: "/discipleship#grace-academy" },
      { label: "Prayer", href: "/discipleship#prayer" },
    ],
  },
  { label: "Events", href: "/events" },
  {
    label: "Media",
    href: "/media",
    children: [
      { label: "Live stream", href: "/media#live" },
      { label: "Sermons", href: "/media#sermons" },
      { label: "Our story", href: "/media#story" },
      { label: "Gallery", href: "/media#gallery" },
    ],
  },
  { label: "Give", href: "/give" },
  { label: "Contact", href: "/contact" },
];

export const featuredEvent = {
  id: "convention",
  label: "Upcoming Event",
  title: "Convention & Anniversary",
  subtitle: "The Grand Finale",
  strap: "A Celebration of His Faithfulness!",
  date: "Sunday, 8 November 2026",
  dateTime: "2026-11-08T10:00",
  time: "10:00",
  place: "Angerburger Allee 56, 14055 Berlin",
  image: "/images/convention.jpg",
};

export const pillars = [
  { title: "Biblical Foundation", sub: "Rooted in the Word", icon: "book" },
  { title: "Vibrant Worship", sub: "Encounter His Presence", icon: "worship" },
  { title: "Transformed Lives", sub: "Discipleship for All", icon: "people" },
  { title: "Global Impact", sub: "Revealing His Glory", icon: "globe" },
] as const;

export const vision = {
  title: "The Glory Finds Expression",
  text: "To raise a people who know Christ, become like Him and reveal His life in every sphere of society.",
};

export const mission = {
  title: "To Nurture, Equip and Release",
  text: "Spiritual believers through the Word, prayer, worship, discipleship and practical Christian living, to impact Berlin, Germany and the nations.",
};

// Discipleship pathway of The Hungry Seekers.
export const pathway = [
  { step: "See Him", text: "Encounter and behold Christ through Scripture, prayer and personal relationship with Him." },
  { step: "Become Like Him", text: "Grow in character, holiness, love and obedience through the transforming work of the Spirit." },
  { step: "Show Him", text: "Express Christ in relationships, service, witness and everyday decisions." },
];

// Content for each ministry's own page (/ministries/[slug]). Wording follows the church profile and the
// ministry design suggestions; anything not yet known is a [placeholder] for the church to fill in.
export type MinistryDetail = {
  tagline: string;
  intro: string[];
  highlights: { icon: "book" | "music" | "users" | "sparkles" | "heart" | "message" | "graduation" | "calendar" | "hands" | "megaphone" | "home" | "mic"; title: string; text: string }[];
  forWho: string;
  when: string; // text in [brackets] renders as a placeholder
  verse: { text: string; ref: string };
  extra?: { title: string; items: { title: string; text: string }[] };
};

export const ministryDetails: Record<Ministry["slug"], MinistryDetail> = {
  "warriors-of-light": {
    tagline: "Raising a generation that knows, loves and serves Jesus.",
    intro: [
      "Warriors of Light is our children’s ministry for ages 4–12. Through Bible stories, worship, games and creative activities, children discover how much Jesus loves them and learn to shine His light wherever they go.",
      "We want every child to feel safe, known and excited about God’s Word, and to grow in faith alongside friends.",
    ],
    highlights: [
      { icon: "book", title: "Bible stories", text: "Engaging, age-appropriate teaching that brings the stories of Scripture to life." },
      { icon: "sparkles", title: "Activities & crafts", text: "Games, crafts and hands-on activities that help children remember what they learn." },
      { icon: "music", title: "Worship for kids", text: "Songs and prayer that help children praise God with joy." },
    ],
    forWho: "Children aged 4 to 12.",
    when: "[During Sunday Worship – please confirm]",
    verse: { text: "Ye are the light of the world. A city that is set on an hill cannot be hid.", ref: "Matthew 5:14 (KJV)" },
    extra: {
      title: "For parents",
      items: [
        { title: "Safe and cared for", text: "Children are looked after by trusted volunteers. [Safeguarding and check-in details]" },
        { title: "Stay in the loop", text: "Ask our team about what your child is learning, so you can continue the conversation at home." },
      ],
    },
  },
  "rooted-and-rising": {
    tagline: "Firmly rooted in Christ. Rising to make a difference.",
    intro: [
      "Rooted & Rising is our teen ministry: a place for young people to ask real questions, grow deep roots in Christ and discover the difference they can make.",
      "Through mentorship, events and honest faith conversations, teenagers are encouraged to live out their faith at school, at home and in their city.",
    ],
    highlights: [
      { icon: "users", title: "Mentorship", text: "Older believers who walk alongside teenagers, listen and point them to Jesus." },
      { icon: "message", title: "Faith conversations", text: "Open discussions about the questions teenagers are really asking." },
      { icon: "calendar", title: "Events", text: "Gatherings, outings and special events to build friendships and faith." },
    ],
    forWho: "Teenagers. [Age range – please confirm]",
    when: "[Meeting day and time]",
    verse: { text: "Rooted and built up in him, and stablished in the faith, as ye have been taught.", ref: "Colossians 2:7 (KJV)" },
  },
  "hungry-seekers": {
    tagline: "Growing in Christ. Becoming like Him. Revealing His glory.",
    intro: [
      "The Hungry Seekers is our discipleship and spiritual formation ministry, dedicated to raising believers who are rooted in God’s Word, established in relationship with Christ and equipped to live out their faith.",
      "Our goal is not merely informed believers, but transformed lives; not merely church attendees, but committed disciples; not merely people who speak about Christ, but people through whom Christ is revealed.",
    ],
    highlights: [
      { icon: "book", title: "See Him", text: "Encounter and behold Christ through Scripture, prayer and personal relationship with Him." },
      { icon: "heart", title: "Become Like Him", text: "Grow in character, holiness, love and obedience through the transforming work of the Spirit." },
      { icon: "hands", title: "Show Him", text: "Express Christ in relationships, service, witness and everyday decisions." },
    ],
    forWho: "Every believer who is hungry to know Christ more deeply.",
    when: "Weekly Bible study · Cohort 2 from October 2026 [day and time]",
    verse: { text: "But we all, with open face beholding as in a glass the glory of the Lord, are changed into the same image from glory to glory.", ref: "2 Corinthians 3:18 (KJV)" },
    extra: {
      title: "Formation journey",
      items: [
        { title: "Cohort 1 · June – September 2026", text: "Weekly Friday study through the book of Romans, chapters 1–16." },
        { title: "Cohort 2 · from October 2026", text: "Ephesians, Colossians, Acts, Hebrews and John 14–17." },
      ],
    },
  },
  "voices-of-transformation": {
    tagline: "Using our gifts to glorify God and inspire lives.",
    intro: [
      "Voices of Transformation is our worship and creative expression ministry. Singers, musicians and creatives serve together to lead the church into God’s presence.",
      "Beyond Sunday mornings, we celebrate what God is doing through worship moments, testimonies and special events.",
    ],
    highlights: [
      { icon: "music", title: "Worship & music", text: "Leading the congregation in heartfelt praise and worship." },
      { icon: "mic", title: "Testimonies", text: "Sharing stories of what God has done, to encourage and build faith." },
      { icon: "sparkles", title: "Creative expression", text: "Using every gift, from song to media and the arts, to glorify God." },
    ],
    forWho: "Singers, musicians and creatives who want to serve in worship.",
    when: "[Rehearsal day and time]",
    verse: { text: "O sing unto the LORD a new song: sing unto the LORD, all the earth.", ref: "Psalm 96:1 (KJV)" },
  },
  "grace-academy": {
    tagline: "Equipping believers for ministry and everyday life.",
    intro: [
      "Grace Academy is our learning and leadership development ministry. It equips believers with sound biblical teaching and practical skills to serve in the church and live out their faith every day.",
    ],
    highlights: [
      { icon: "graduation", title: "Courses", text: "Structured teaching on Scripture, doctrine and Christian living. [Course list]" },
      { icon: "users", title: "Workshops", text: "Practical sessions that build skills for ministry and leadership." },
      { icon: "book", title: "Resources", text: "Study materials to keep growing between sessions. [Resource links]" },
    ],
    forWho: "Believers who want to grow in knowledge and be equipped to serve and lead.",
    when: "[Course dates and how to register]",
    verse: { text: "Study to shew thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth.", ref: "2 Timothy 2:15 (KJV)" },
  },
  "other-ministries": {
    tagline: "Serving the whole church family.",
    intro: [
      "Alongside our main ministries, many teams serve quietly to care for people, pray, reach our city and make everyone feel at home.",
    ],
    highlights: [
      { icon: "heart", title: "Pastoral care & counselling", text: "Our pastors are here to walk with you through every season of life." },
      { icon: "hands", title: "Prayer ministry", text: "Prayer Group meets Mondays and Thursdays, 18:00 – 19:00. Gethsemane fasting and prayer takes place on the first weekend of every month." },
      { icon: "users", title: "Women’s ministry", text: "Fellowship, teaching and encouragement for the women of our church." },
      { icon: "megaphone", title: "Evangelism & outreach", text: "Sharing the good news of Jesus in Berlin and beyond." },
      { icon: "home", title: "Hospitality", text: "Welcoming every guest and making our church a home." },
      { icon: "sparkles", title: "Community support", text: "Practical help and care for people in need." },
    ],
    forWho: "Everyone. There is a place for you to belong and to serve.",
    when: "Prayer Group: Mondays & Thursdays · 18:00 – 19:00. Other teams: [times]",
    verse: { text: "Bear ye one another’s burdens, and so fulfil the law of Christ.", ref: "Galatians 6:2 (KJV)" },
  },
};
