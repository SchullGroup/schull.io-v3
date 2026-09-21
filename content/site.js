/**
 * Shared site copy — all verbatim from the Schull Academy website copy document.
 * Square brackets mark content that has not been decided yet.
 *
 * "Career Field" is the user-facing category word. The six entities themselves
 * keep their "School of ..." names — see the note in ./schools.js.
 */

/**
 * Primary nav. The Placement Assessment entry was removed (meeting 2026-09-18):
 * it went to the same place as the orange "Take the assessment" button in the
 * header, so the two were redundant. Success Stories takes its slot, sitting
 * immediately after About Us.
 */
export const NAV = [
  // `match` lists extra address prefixes that should also light this item up.
  // Career Fields needs it because the detail pages live under /pathways.
  { href: '/career-fields', label: 'Career Fields', match: ['/career-fields', '/pathways'] },
  { href: '/about', label: 'About Us' },
  { href: '/success-stories', label: 'Success Stories' },
  { href: '/faqs', label: 'FAQs' },
];

/* ---------------- HOME ---------------- */

export const HOME = {
  eyebrow: 'Six Career Fields. One clear route into tech.',
  h1a: 'Choose your career. Build your',
  h1accent: 'future',
  lede: 'Structured technology career pathways with live sessions, real projects and a certificate that proves you can do the work.',

  marquee: [
    'Live instructor sessions',
    'Marked assignments',
    'Real projects',
    'An independent capstone',
    'A verified certificate',
    'Career readiness',
    'Foundation to Professional',
  ],

  differentiators: [
    {
      title: 'Career first',
      text: 'You choose a career outcome, not a random course.',
      icon: 'compass',
    },
    {
      title: 'Placed properly',
      text: 'A short assessment decides the level you start from.',
      icon: 'target',
    },
    {
      title: 'Live and self paced',
      text: 'Study on your own schedule, with instructors you can actually reach.',
      icon: 'play',
    },
    {
      title: 'Proof of skill',
      text: 'Projects, a capstone and a certificate anyone can verify.',
      icon: 'badge',
    },
  ],

  problem: {
    h2a: 'Stop collecting courses. Start building a',
    h2accent: 'career',
    paras: [
      'Most people learning tech online hit the same wall. They finish a course, start another, collect a few certificates, and still cannot answer the one question that matters in an interview: what can you actually do?',
      'Schull Academy is built the other way round. You start with the career you want. We show you the route, place you at the right level, and take you through it with structure, live teaching, marked assignments and real projects until your skill is something you can demonstrate.',
    ],
  },

  fieldsHeading: { h2a: 'Six Career', h2accent: 'Fields' },
  fieldsIntro:
    'A Career Field is a career direction. Inside each one are the pathways, courses and projects that take you there.',

  steps: [
    {
      n: '01',
      title: 'Choose your career direction',
      text: 'Pick the Career Field that matches the kind of work you want to do.',
    },
    {
      n: '02',
      title: 'Take the placement assessment',
      text: 'A short assessment before you pay. It confirms the pathway that fits you and the level you should enter at.',
    },
    {
      n: '03',
      title: 'Start where you belong',
      text: 'You enter at Foundation or Professional. You do not pay to sit through material you have already outgrown.',
    },
    {
      n: '04',
      title: 'Learn with structure and support',
      text: 'Self-paced lessons plus live instructor-led sessions, practical assignments and knowledge checks.',
    },
    {
      n: '05',
      title: 'Build work you can show',
      text: 'Practical projects through the pathway, then an independent capstone.',
    },
    {
      n: '06',
      title: 'Get certified and go to market',
      text: 'Earn your Professional Certificate, then use the career readiness track to apply, pitch and progress.',
    },
  ],

  pathwayParts: [
    { title: 'Foundation', text: 'The concepts, tools and fundamentals the role is built on.' },
    { title: 'Professional', text: 'Applied, job-relevant skill on the tools and workflows used at work.' },
    { title: 'Portfolio', text: 'Practical projects that become your evidence.' },
    { title: 'Career readiness', text: 'CV, LinkedIn, portfolio, interview preparation and career strategy.' },
    { title: 'Capstone', text: 'One independent, industry-style project that proves you can work without being carried.' },
    { title: 'Credential', text: 'A Schull Academy Professional Certificate anyone can verify.' },
  ],

  faqs: [
    {
      q: 'Do I need a tech background to start?',
      a: 'No. The Foundation level assumes nothing, and the placement assessment tells you where to begin.',
    },
    {
      q: 'Is this self paced or live?',
      a: 'Both. You study on your own schedule and join scheduled live sessions with instructors.',
    },
    {
      q: 'Do I pay for a course or a pathway?',
      a: 'You pay once for the full Career Pathway and get everything inside it. Individual courses are also available.',
    },
    {
      q: 'How long does a pathway take?',
      a: 'It depends on the pathway and your pace. Each pathway page shows the expected duration.',
    },
  ],

  closingLede: 'Pick a Career Field, choose your pathway and start building.',
};

/* ---------------- CAREER FIELDS ---------------- */

/** Everything on the /career-fields index. */
export const FIELDS_PAGE = {
  metaTitle: 'Career Fields',
  metaDescription:
    'Six Career Fields. A Career Field is one area of work. Inside it are the pathways that take you from where you are now to doing that work for a living.',
  pill: 'Six fields. One route each.',
  h1a: 'Six Career Fields. Pick your',
  h1accent: 'direction',
  lede: 'A Career Field is one area of work. Inside it are the pathways that take you from where you are now to doing that work for a living.',
  assessmentCta: 'Not sure which one? Take the placement assessment',

  /** Rendered as `${itemEyebrow} 01`, `${itemEyebrow} 02`, … */
  itemEyebrow: 'Field',
  learnHead: 'You will learn',
  leadsHead: 'Where it leads',

  /** The `id` is a redirect target — /pathways/career-and-workplace-readiness
   *  and the old school URL both land on this anchor. Do not rename it without
   *  updating next.config.mjs. */
  readiness: {
    id: 'career-readiness',
    h2a: 'Career readiness runs through',
    h2accent: 'all of them',
    paras: [
      'Whichever field you choose, you also complete the same career readiness track before you finish: communication, professional conduct, CV, LinkedIn, portfolio building, interview preparation, freelancing and career strategy.',
      'It is not a separate field you have to choose. It is part of every pathway, and it is a requirement for certification, because skill you cannot present is skill nobody buys.',
    ],
  },

  closing: {
    h2a: 'Still',
    h2accent: 'deciding?',
    lede: 'The placement assessment takes a few minutes. It will tell you which field fits you and what level to start at.',
  },
};

/**
 * Copy for /pathways/[slug] — the single page per subject. It absorbed the old
 * /career-fields/[slug] page, so the skill tags and job titles live here now.
 */
export const PATHWAY_DETAIL = {
  learnHead: 'What you will learn',
  leadsH2a: 'Where it',
  leadsH2accent: 'leads',
  leadsLede: 'The roles this pathway is built to take you into.',
};

/** CTA labels that appear in more than one file. */
export const CTA = {
  exploreFields: 'Explore our Career Fields',
  exploreFieldsShort: 'Explore Career Fields',
  viewAllFields: 'View all Career Fields',
  exploreThisField: 'Explore this field',
};

/* ---------------- PLACEMENT ASSESSMENT ---------------- */

export const ASSESSMENT = {
  lede: 'A short assessment, before you pay anything. It tells you which Career Pathway fits you and what level you should enter at.',
  free: 'Free. No account needed to begin.',
  why: [
    'Two people can want the same career and be in completely different places. One has never opened a terminal. The other has been building things for two years and just never got the structure or the credential.',
    "Putting both of them in the same starting position wastes somebody's time and somebody's money. So we check first.",
  ],
  covers: [
    {
      title: 'What you already know',
      text: 'A few questions on the fundamentals behind the career you are interested in.',
    },
    {
      title: 'What you want',
      text: 'The kind of work you are drawn to and the outcome you are after.',
    },
    {
      title: 'Where you are now',
      text: 'Your background, and whether you are starting out, switching or already working in tech.',
    },
    {
      title: 'What you can give it',
      text: 'The time you realistically have each week.',
    },
  ],
  getAtEnd: [
    'The Career Pathway that fits what you want to do.',
    'Your entry level: Foundation or Professional.',
    'A realistic idea of how long the pathway will take you at your pace.',
    'A second option, if more than one pathway suits you.',
  ],
  notExam: [
    'You cannot fail it. There is nothing to revise for, and a low score does not lock you out of anything. It only decides where you begin.',
    'If you already have experience, it is how you avoid paying to sit through material you have outgrown. If you are starting from zero, it is how you avoid being dropped into work you are not ready for.',
  ],
  next: [
    'You get your result on screen straight away.',
    'Your recommended pathway page opens with your entry level already applied.',
    'If you want to talk it through before paying, an advisor can go through the result with you.',
    'When you are ready, you register and pay on Schull.io and your pathway unlocks.',
  ],
  faqs: [
    { q: 'How long does it take?', a: 'About ten minutes.' },
    { q: 'Do I have to pay to take it?', a: 'No. The assessment is free and comes before payment.' },
    {
      q: 'Can I retake it?',
      a: 'Yes. If your situation changes or you want to try a different career direction, take it again.',
    },
    {
      q: 'Do I have to follow the recommendation?',
      a: 'No. It is guidance, not a gate. You can enrol in any pathway you want.',
    },
    {
      q: 'What if two careers interest me?',
      a: 'Take it once for each. Nothing stops you comparing the two results.',
    },
  ],
};

/* ---------------- ABOUT ---------------- */

export const ABOUT = {
  lede: 'Schull Academy is the career learning arm of Schull Technologies, delivered on the Schull.io platform.',
  why: [
    'There is no shortage of technology courses. There is a shortage of people who finish one and can do the job.',
    'That gap is not about talent. It is about structure. Most online learning hands you content and leaves you to work out the sequence, the standard and the proof on your own.',
    'We built Schull Academy to close that gap. Every learner chooses a career direction, gets placed at the right level, follows a defined route with live teaching and marked work, and finishes with projects, a capstone and a credential that can be verified.',
  ],
  believe: [
    { title: 'Career first', text: 'Learners should be choosing where they want to go, not just which course to watch.' },
    { title: 'Structure matters', text: 'Self-paced should never mean unstructured. Every pathway has a defined progression.' },
    { title: 'Practice over theory', text: 'Knowledge that never becomes application is not a skill.' },
    { title: 'Competence, not attendance', text: 'A credential should mean the holder can do the work.' },
    { title: 'Outcomes are the scoreboard', text: 'We measure ourselves on skills, portfolios, credentials and career progression.' },
  ],
  different: [
    ['Most platforms sell courses.', 'We sell career pathways.'],
    ['Most platforms let you pick a level.', 'We assess you and place you.'],
    ['Most platforms are either live or self paced.', 'We are both.'],
    ['Most platforms certify completion.', 'We certify demonstrated competence.'],
    ['Most platforms end at the certificate.', 'We take you through career readiness and into the alumni network.'],
  ],
  notAlone: {
    paras: [
      'Self-paced learning fails when it turns into learning alone. Here you control your schedule, but the structure holds. There is a defined roadmap, live sessions with instructors, assignments that get marked, and a standard you have to meet before you are certified.',
    ],
    items: [
      { title: 'Self-paced lessons', text: 'Videos, readings and demonstrations you can take whenever you want.' },
      { title: 'Live instructor sessions', text: 'Scheduled teaching, walkthroughs, reviews and question time.' },
      { title: 'Practice and assessment', text: 'Exercises, knowledge checks and graded practical assignments.' },
      { title: 'Support', text: 'Academic and technical help when you get stuck, not a ticket into a void.' },
    ],
  },
  startingFrom: [
    { title: 'Career starters', text: 'Start with a career pathway, not random courses.' },
    { title: 'Career switchers', text: 'Your current career does not have to be your final career.' },
    { title: 'Tech professionals', text: 'Deepen what you do and widen what you can take on.' },
    { title: 'Students and graduates', text: 'Graduate with skills you can actually demonstrate.' },
    { title: 'Organisations', text: 'Build technology capability across your workforce.' },
  ],
  standards:
    'Every course across every field is built to the same standard of content, teaching and assessment. Projects and capstones are graded against published criteria. Academic integrity is a condition of certification, not a footnote.',
  workWith: [
    'Employers who need skilled people and sponsor learners into pathways.',
    'Universities and polytechnics preparing students for the market.',
    'Youth and graduate programmes building early-career talent.',
    'Technology companies keeping our programmes aligned to real tooling.',
    'Communities that bring learners guidance they would not otherwise get.',
  ],
};

/* ---------------- FAQS ---------------- */

export const FAQ_GROUPS = [
  {
    id: 'getting-started',
    title: 'Getting started',
    items: [
      {
        q: 'Do I need a technology background?',
        a: 'No. Foundation level assumes no prior experience, and the placement assessment will tell you where to start.',
      },
      {
        q: 'What is a Career Field?',
        a: 'One area of work. Each field holds the pathways, courses and projects that lead into it.',
      },
      {
        q: 'What is a Career Pathway?',
        a: 'A complete route to a professional outcome. It includes the courses, live sessions, practical assignments, projects, a capstone, career readiness and a credential.',
      },
      {
        q: 'What is the placement assessment?',
        a: 'A short assessment you take before paying. It confirms the pathway that suits you and sets your entry level.',
      },
      {
        q: 'How do I choose between two pathways?',
        a: 'Compare the career outcomes on each pathway page, or talk to an advisor. We would rather you started on the right one.',
      },
    ],
  },
  {
    id: 'learning',
    title: 'Learning',
    items: [
      {
        q: 'Is learning self paced or live?',
        a: 'Both. You work through lessons on your own schedule and join scheduled live sessions with instructors.',
      },
      {
        q: 'Do I have to attend the live sessions?',
        a: 'They are strongly recommended. Recordings are available, but the live sessions are where you get taught directly and get your questions answered.',
      },
      {
        q: 'Can I study from my phone?',
        a: 'You can follow lessons on a phone, but you will need a laptop for practical work, assignments and projects.',
      },
      {
        q: 'What if I fall behind?',
        a: 'Contact support. There is a defined route back, and getting in touch early is always easier than catching up silently.',
      },
    ],
  },
  {
    id: 'payment',
    title: 'Payment and enrolment',
    items: [
      {
        q: 'What does the price cover?',
        a: 'Everything in the pathway: all courses, live sessions, assignments, projects, capstone, assessment, career readiness and your certificate.',
      },
      {
        q: 'Can I buy a single course instead?',
        a: 'Yes. Individual courses are available. Only a full pathway leads to a Professional Certificate.',
      },
      {
        q: 'Where do I pay?',
        a: 'On Schull.io. You create your account there, pay for your pathway, and your access opens automatically once payment is confirmed.',
      },
      {
        q: 'I paid but nothing unlocked. What now?',
        a: 'Contact learner support with your payment reference. We will verify it and correct your enrolment.',
      },
    ],
  },
  {
    id: 'assessment',
    title: 'Assessment and certification',
    items: [
      {
        q: 'How am I assessed?',
        a: 'Through knowledge checks, practical assignments, projects, a final assessment and a capstone.',
      },
      {
        q: 'What do I need to be certified?',
        a: 'You need to meet the overall pass mark and pass the capstone separately.',
      },
      {
        q: 'What if I fail the capstone?',
        a: 'You get feedback and a chance to resubmit. A failed capstone does not become a certificate.',
      },
      {
        q: 'Is the certificate recognised?',
        a: 'It is a Schull Academy Professional Certificate, issued on assessed competence and independently verifiable. What makes it carry weight in an interview is the portfolio and capstone behind it.',
      },
      {
        q: 'How does an employer verify my certificate?',
        a: 'Every certificate carries a unique ID and a QR code that links to our verification page.',
      },
      {
        q: 'What happens if I am caught cheating?',
        a: 'Academic integrity is a condition of certification. Our policy sets out the process and the consequences.',
      },
    ],
  },
  {
    id: 'after',
    title: 'After the pathway',
    items: [
      {
        q: 'Will you find me a job?',
        a: 'We do not promise jobs. We give you assessed skill, a portfolio, a verified credential and a career readiness track covering CV, LinkedIn, interviews and career strategy.',
      },
      {
        q: 'What can I do after certification?',
        a: 'Move into an advanced pathway, enter another Career Field, join the alumni community and employer opportunities, or come back as a mentor.',
      },
    ],
  },
];

/* ---------------- CONTACT ---------------- */

export const CONTACT_ROUTES = [
  {
    title: 'I am choosing a pathway',
    text: 'Talk to an advisor and get pointed to the right field and level.',
    subject: 'choosing a pathway',
  },
  {
    title: 'I am already a learner',
    text: 'Account, payment, access, assessment and certificate issues.',
    subject: 'learning or assessment',
  },
  {
    title: 'I represent an organisation',
    text: 'Cohort training, sponsorship, partnerships and proposals.',
    subject: 'organisations and partnerships',
  },
];

export const CONTACT_SUBJECTS = [
  'choosing a pathway',
  'payment or enrolment',
  'learning or assessment',
  'certificates',
  'organisations and partnerships',
  'something else',
];
