/**
 * The six Career Pathways, one per Career Field.
 * `school` is the foreign key into SCHOOLS in ./schools.js — see the naming note
 * at the top of that file before renaming anything.
 * All copy verbatim from the Schull Academy website copy document.
 */

export const PATHWAYS = [
  {
    slug: 'ai-and-automation',
    school: 'ai-and-automation',
    name: 'AI and Automation Career Pathway',
    short: 'AI and Automation',
    certificate: 'AI and Automation Professional Certificate',
    promise:
      'Go from understanding AI to building and shipping automation and AI systems that businesses will pay for.',
    forYou:
      'This is for you if you want a career building AI and automation rather than just a certificate, you are willing to learn technical material even from zero, you can commit consistent study time, and you want to finish with projects you can show.',
    notForYou:
      'It is probably not for you if you want a one-week crash course or a certificate without assessment.',
    outcomes: [
      'You will build AI-powered automation for real business processes.',
      'You will write prompts and design workflows that give consistent, useful output.',
      'You will connect AI into existing systems and tools.',
      'You will build applications on large language models and agentic systems.',
      'You will present your work to an employer or client with a portfolio behind it.',
    ],
    tracks: [
      {
        name: 'Foundation track',
        text: 'For you if you are new to AI, or have only used tools like chatbots casually. Covers AI fundamentals, prompt engineering, AI tools and ethical AI. You finish this track understanding how AI works and using current tools with judgement.',
      },
      {
        name: 'Professional track',
        text: 'For you if you already understand the basics of AI and want to build with it. Covers AI automation, workflow design, no-code AI, API integration, LLM engineering and agentic AI. You finish this track able to design and build working automation and AI solutions.',
      },
    ],
    courses: {
      foundation: [
        { name: 'AI Fundamentals', text: 'What AI is, how models learn, and where AI actually works in business.' },
        { name: 'Prompt Engineering', text: 'Writing prompts that produce reliable, useful output every time.' },
        { name: 'AI Tools', text: 'Using current AI tools for research, writing, analysis and everyday productivity.' },
        { name: 'Ethical AI', text: 'Bias, privacy, safety, and knowing when AI is the wrong answer.' },
      ],
      professional: [
        { name: 'AI Automation and Workflow Design', text: 'Mapping business processes and automating them end to end.' },
        { name: 'No-Code AI', text: 'Building AI solutions on no-code and low-code platforms.' },
        { name: 'API Integration', text: 'Connecting AI models into the systems and tools a business already uses.' },
        { name: 'LLM Engineering', text: 'Building applications on large language models.' },
        { name: 'Agentic AI', text: 'Designing AI agents that plan and carry out multi-step tasks.' },
      ],
    },
    completes: [
      {
        stage: 'Portfolio',
        text: 'Mini projects and real-world applications, built and documented, so you have evidence of what you can do.',
      },
      {
        stage: 'Career readiness',
        text: 'CV, LinkedIn, portfolio presentation, interview preparation, freelancing and career strategy.',
      },
      {
        stage: 'Capstone',
        text: 'Build an AI-powered workflow or intelligent system, end to end and on your own.',
      },
      {
        stage: 'Certification',
        text: 'Your AI and Automation Professional Certificate, issued with a verification link an employer can check.',
      },
    ],
    capstoneOutput: 'An AI-powered business automation workflow.',
  },
  {
    slug: 'cloud-and-devops',
    school: 'cloud-and-devops',
    name: 'Cloud and DevOps Career Pathway',
    short: 'Cloud and DevOps',
    certificate: 'Cloud and DevOps Professional Certificate',
    promise:
      'Learn to build, deploy and keep running the infrastructure every other product depends on.',
    forYou:
      'This is for you if you want to work on the systems behind the product rather than the screens in front of it, you do not mind a command line, and you want a skill set every organisation running software needs.',
    notForYou:
      'It is probably not for you if you want to avoid technical depth. This pathway goes deep on purpose.',
    outcomes: [
      'You will provision and configure cloud infrastructure on more than one platform.',
      'You will administer Linux servers and understand the networking underneath them.',
      'You will build pipelines that test and deploy code automatically.',
      'You will monitor a live environment and troubleshoot it when something breaks.',
      'You will deploy a working application into the cloud and explain every decision you made.',
    ],
    tracks: [
      {
        name: 'Foundation track',
        text: 'For you if you are new to infrastructure and have never really worked on a server. Covers cloud fundamentals, Linux and networking. You finish this track understanding how cloud environments are put together and comfortable working on a server.',
      },
      {
        name: 'Professional track',
        text: 'For you if you are already comfortable with Linux and networking basics, or you have supported systems before. Covers AWS, Huawei Cloud, DevOps practice, CI/CD and MLOps. You finish this track able to deploy, automate and operate real environments.',
      },
    ],
    courses: {
      foundation: [
        { name: 'Cloud Fundamentals', text: 'How cloud computing works, the main service models, and what it costs to run things in the cloud.' },
        { name: 'Linux Essentials', text: 'Working confidently on the command line and administering a Linux server.' },
        { name: 'Networking Fundamentals', text: 'How networks, IP addressing, DNS and traffic actually work.' },
      ],
      professional: [
        { name: 'AWS', text: 'Building and managing infrastructure on Amazon Web Services.' },
        { name: 'Huawei Cloud', text: 'Building and managing infrastructure on Huawei Cloud.' },
        { name: 'DevOps Practice', text: 'Version control, containers, infrastructure as code, and how DevOps teams work.' },
        { name: 'CI/CD Pipelines', text: 'Automating how code is tested, built and deployed.' },
        { name: 'MLOps', text: 'Deploying and running machine learning models in production.' },
      ],
    },
    completes: [
      {
        stage: 'Portfolio',
        text: 'Deployments, configurations and automation you have built and documented.',
      },
      {
        stage: 'Career readiness',
        text: 'CV, LinkedIn, portfolio presentation, interview preparation, freelancing and career strategy.',
      },
      {
        stage: 'Capstone',
        text: 'Deploy, configure and secure an application in a cloud environment, with an automated deployment pipeline behind it.',
      },
      {
        stage: 'Certification',
        text: 'Your Cloud and DevOps Professional Certificate, issued with a verification link an employer can check.',
      },
    ],
    capstoneOutput: 'A deployed and configured application or cloud environment.',
  },
  {
    slug: 'cybersecurity',
    school: 'cybersecurity',
    name: 'Cybersecurity Career Pathway',
    short: 'Cybersecurity',
    certificate: 'Cybersecurity Professional Certificate',
    promise:
      'Learn to find the weaknesses before an attacker does, and to defend the systems an organisation cannot afford to lose.',
    forYou:
      'This is for you if you are curious about how systems break, patient enough to investigate properly, and comfortable with responsibility. Security work is trusted work.',
    notForYou:
      'It is probably not for you if you are looking for a shortcut. This field rewards depth, and employers test for it.',
    outcomes: [
      'You will understand how systems, networks and attackers actually behave.',
      'You will run a vulnerability assessment and explain what the findings mean in business terms.',
      'You will carry out controlled penetration testing within proper scope and rules.',
      'You will monitor systems, spot suspicious activity and respond to incidents.',
      'You will document security findings the way a client or employer expects to receive them.',
    ],
    tracks: [
      {
        name: 'Foundation track',
        text: 'For you if you are new to security or to IT generally. Covers cybersecurity fundamentals, systems and networking basics, and the core security tools. You finish this track able to speak the language of security and use the tools.',
      },
      {
        name: 'Professional track',
        text: 'For you if you already know the fundamentals, or you come from IT support or networking. Covers vulnerability assessment, penetration testing, security operations and security monitoring. You finish this track able to do the work, not just describe it.',
      },
    ],
    courses: {
      foundation: [
        { name: 'Cybersecurity Fundamentals', text: 'Threats, attacks, risk, and the principles of defending systems.' },
        { name: 'Systems and Networking for Security', text: 'The operating systems and networks you will be protecting.' },
        { name: 'Security Tools', text: 'The core tools security professionals use every day.' },
      ],
      professional: [
        { name: 'Vulnerability Assessment', text: 'Finding, scoring and reporting weaknesses in systems.' },
        { name: 'Penetration Testing', text: 'Controlled, authorised testing of how systems can be broken into.' },
        { name: 'Security Operations', text: 'How a security team detects, investigates and responds to incidents.' },
        { name: 'Security Monitoring', text: 'Logs, alerts, and spotting suspicious activity before it becomes a breach.' },
      ],
    },
    completes: [
      {
        stage: 'Portfolio',
        text: 'Assessments, investigations and reports you have produced and documented.',
      },
      {
        stage: 'Career readiness',
        text: 'CV, LinkedIn, portfolio presentation, interview preparation, freelancing and career strategy.',
      },
      {
        stage: 'Capstone',
        text: 'Conduct a controlled vulnerability assessment on a test environment and deliver a full findings and remediation report.',
      },
      {
        stage: 'Certification',
        text: 'Your Cybersecurity Professional Certificate, issued with a verification link an employer can check.',
      },
    ],
    capstoneOutput: 'A controlled vulnerability assessment with documented findings.',
  },
  {
    slug: 'data',
    school: 'data',
    name: 'Data Career Pathway',
    short: 'Data',
    certificate: 'Data Professional Certificate',
    promise:
      'Learn to take raw, messy data and turn it into something a business can act on.',
    forYou:
      'This is for you if you like working with evidence, you are willing to be precise, and you want a role where your work directly shapes decisions.',
    notForYou:
      'It is probably not for you if you want to avoid detail. Data work is detail.',
    outcomes: [
      'You will pull, clean and shape data from different sources.',
      'You will write SQL well enough to answer real business questions.',
      'You will analyse a dataset and explain what it actually says, including what it does not say.',
      'You will build dashboards that people use rather than admire.',
      'You will present findings and a recommendation to people who are not technical.',
    ],
    tracks: [
      {
        name: 'Foundation track',
        text: 'For you if you are new to data work, or have only used spreadsheets casually. Covers data fundamentals, spreadsheets and SQL. You finish this track able to get to the data and ask it questions.',
      },
      {
        name: 'Professional track',
        text: 'For you if you are already comfortable with spreadsheets and basic SQL. Covers data analysis, ETL, data modelling, Power BI and business intelligence. You finish this track able to run the full process from raw data to reporting.',
      },
    ],
    courses: {
      foundation: [
        { name: 'Data Fundamentals', text: 'Types of data, where it comes from, and how organisations use it.' },
        { name: 'Spreadsheets for Data', text: 'Cleaning, organising and analysing data in Excel and Google Sheets.' },
        { name: 'SQL', text: 'Querying databases to answer real business questions.' },
      ],
      professional: [
        { name: 'Data Analysis', text: 'Finding patterns, testing assumptions and drawing honest conclusions.' },
        { name: 'ETL', text: 'Extracting, cleaning and loading data from different sources.' },
        { name: 'Data Modelling', text: 'Structuring data so it can be reported on reliably.' },
        { name: 'Power BI', text: 'Building interactive dashboards and reports.' },
        { name: 'Business Intelligence', text: 'Turning analysis into recommendations that decision makers act on.' },
      ],
    },
    completes: [
      {
        stage: 'Portfolio',
        text: 'Analyses, dashboards and reports you have built and documented.',
      },
      {
        stage: 'Career readiness',
        text: 'CV, LinkedIn, portfolio presentation, interview preparation, freelancing and career strategy.',
      },
      {
        stage: 'Capstone',
        text: 'Take a real dataset from raw to finished dashboard, with a written analysis and a clear recommendation.',
      },
      {
        stage: 'Certification',
        text: 'Your Data Professional Certificate, issued with a verification link an employer can check.',
      },
    ],
    capstoneOutput: 'A real dataset analysed into a dashboard and a clear recommendation.',
  },
  {
    slug: 'quality-assurance',
    school: 'quality-assurance',
    name: 'Quality Assurance Career Pathway',
    short: 'Quality Assurance',
    certificate: 'Quality Assurance Professional Certificate',
    promise:
      'Learn to test software properly, and become the person a development team cannot ship without.',
    forYou:
      'This is for you if you notice what other people miss, you can be organised about it, and you want one of the most accessible routes into a software team.',
    notForYou:
      'It is probably not for you if you expect testing to be clicking around until something breaks. Good QA is a discipline.',
    outcomes: [
      'You will write test cases and test plans that cover what actually matters.',
      'You will run manual, functional and regression testing across a real application.',
      'You will test APIs and integrations, not just interfaces.',
      'You will check how software holds up under load and where it is exposed.',
      'You will report defects clearly enough that developers can act on them without asking you twice.',
    ],
    tracks: [
      {
        name: 'Foundation track',
        text: 'For you if you are new to software testing. Covers software testing fundamentals, manual testing and functional testing. You finish this track able to plan and run structured tests.',
      },
      {
        name: 'Professional track',
        text: 'For you if you have tested software before, or you already know the fundamentals. Covers API testing, integration, regression, performance testing, security testing and test management tools. You finish this track able to own quality across a product.',
      },
    ],
    courses: {
      foundation: [
        { name: 'Software Testing Fundamentals', text: 'Why testing matters, the testing lifecycle, and where QA fits in a software team.' },
        { name: 'Manual Testing', text: 'Writing test cases and running structured tests by hand.' },
        { name: 'Functional Testing', text: 'Checking that software does exactly what it is supposed to do.' },
      ],
      professional: [
        { name: 'API Testing', text: 'Testing the systems behind the screen.' },
        { name: 'Integration and Regression Testing', text: 'Making sure parts work together and new changes do not break old features.' },
        { name: 'Performance Testing', text: 'How software holds up when real numbers of people use it.' },
        { name: 'Security Testing', text: 'Finding where an application is exposed.' },
        { name: 'Test Management Tools', text: 'Planning, tracking and reporting testing work in the tools teams use.' },
      ],
    },
    completes: [
      {
        stage: 'Portfolio',
        text: 'Test plans, executed test cycles and defect reports you have produced.',
      },
      {
        stage: 'Career readiness',
        text: 'CV, LinkedIn, portfolio presentation, interview preparation, freelancing and career strategy.',
      },
      {
        stage: 'Capstone',
        text: 'Build and execute a complete testing strategy for an application, and deliver the results the way a team would receive them.',
      },
      {
        stage: 'Certification',
        text: 'Your Quality Assurance Professional Certificate, issued with a verification link an employer can check.',
      },
    ],
    capstoneOutput: 'A complete software testing strategy, executed and reported.',
  },
  {
    slug: 'product-management',
    school: 'product-management',
    name: 'Product Management Career Pathway',
    short: 'Product Management',
    certificate: 'Product Management Professional Certificate',
    promise:
      'Learn to decide what gets built, why it gets built, and how it actually gets delivered.',
    forYou:
      'This is for you if you think in problems rather than features, you can hold a room of competing opinions together, and you want to sit between users, business and engineering.',
    notForYou:
      'It is probably not for you if you want to avoid accountability. Product people own the outcome.',
    outcomes: [
      'You will turn a vague business problem into a defined product opportunity.',
      'You will write a product requirements document a development team can build from.',
      'You will run a product through an agile delivery cycle using the tools teams really use.',
      'You will use product analytics to decide what to do next.',
      'You will manage stakeholders without losing the plot of what you are building.',
    ],
    tracks: [
      {
        name: 'Foundation track',
        text: 'For you if you are new to product work. Covers product management fundamentals, the product lifecycle, and agile and scrum. You finish this track understanding how products get made and who does what.',
      },
      {
        name: 'Professional track',
        text: 'For you if you have worked around product teams, or you already know agile. Covers product strategy, Jira and delivery tooling, product analytics, stakeholder management and resource management. You finish this track able to run a product, not just describe one.',
      },
    ],
    courses: {
      foundation: [
        { name: 'Product Management Fundamentals', text: 'What product managers do, and how they work with users, business and engineering.' },
        { name: 'Product Lifecycle', text: 'How a product moves from idea to launch, growth and retirement.' },
        { name: 'Agile and Scrum', text: 'How modern software teams plan and deliver work.' },
      ],
      professional: [
        { name: 'Product Strategy', text: 'Deciding what to build, for whom, and why.' },
        { name: 'Jira and Delivery Tools', text: 'Running backlogs, sprints and roadmaps in Jira and Atlassian tools.' },
        { name: 'Product Analytics', text: 'Using data to understand users and decide what to do next.' },
        { name: 'Stakeholder Management', text: 'Keeping leadership, teams and customers aligned.' },
        { name: 'Resource Management', text: 'Planning people, time and budget across product work.' },
      ],
    },
    completes: [
      {
        stage: 'Portfolio',
        text: 'Requirements documents, roadmaps and product decisions you have made and defended.',
      },
      {
        stage: 'Career readiness',
        text: 'CV, LinkedIn, portfolio presentation, interview preparation, freelancing and career strategy.',
      },
      {
        stage: 'Capstone',
        text: 'Produce a full product requirements document, product strategy and delivery roadmap for a real product problem.',
      },
      {
        stage: 'Certification',
        text: 'Your Product Management Professional Certificate, issued with a verification link an employer can check.',
      },
    ],
    capstoneOutput:
      'A full product requirements document, strategy and delivery roadmap.',
  },
];

export const getPathway = (slug) => PATHWAYS.find((p) => p.slug === slug);

/* ---- sections that repeat identically on every pathway page ---- */

/** Intro line for the "Learning tracks" section, before the two tracks. */
export const TRACKS_INTRO =
  'This pathway has two learning tracks. Your placement assessment decides which one you start on.';

/** Closing line for "Learning tracks", after both tracks are described. */
export const TRACKS_FOOTNOTE =
  'Start on Foundation and you move into Professional once you complete it. Start on Professional and you go straight in.';

/** Intro line for "What every learner completes", before the four stages. */
export const COMPLETES_INTRO = 'Whichever track you start on, the pathway finishes the same way.';

/** Expected duration, shown in the at-a-glance bar. Same for every pathway. */
export const PATHWAY_DURATION = '3-6 months';
/**
 * Dummy price shown until real pricing is confirmed — see README's
 * "Still needed before launch" list. Replace before this goes live.
 */
export const PLACEHOLDER_PRICE = '₦50,000';

export const HOW_YOU_LEARN = [
  'Self-paced lessons you can take whenever you study.',
  'Live sessions with instructors for teaching, walkthroughs and questions.',
  'Exercises and guided practice after each concept.',
  'Short knowledge checks that confirm you have it before you move on.',
  'Practical assignments that are submitted and marked.',
  'Projects where you build something real and get feedback.',
];

export const WHAT_YOU_NEED = [
  'No prior technology experience is required for Foundation entry.',
  'A laptop and a stable internet connection.',
  'Enough English to follow technical instruction.',
  'Consistent study time each week.',
];

export const HOW_ASSESSED = [
  'You are assessed on what you can do, not on how many videos you opened.',
  'Your score comes from knowledge checks, practical assignments, projects, a final assessment and your capstone.',
  'The capstone carries its own pass requirement. A strong quiz score cannot make up for a failed capstone.',
  'To be certified you complete the pathway courses, pass your assessments, submit the required assignments and projects, pass the final assessment, pass the capstone and meet the overall pass mark.',
  'If you do not pass the capstone, you get feedback and a chance to resubmit. You do not get certified by default.',
];

export const PATHWAY_FAQS = [
  {
    q: 'How long will this take me?',
    a: 'It depends on the hours you can give it each week. The expected duration is shown at the top of this page.',
  },
  {
    q: 'Do I have to attend the live sessions?',
    a: 'Recordings are available, but the live sessions are where you get taught directly and get your questions answered. Learners who show up finish faster.',
  },
  {
    q: 'Can I start at Professional level?',
    a: 'Yes, if your placement assessment puts you there.',
  },
  {
    q: 'What if I fail an assessment?',
    a: 'You get feedback and a defined route to retry. Nobody is dropped for one failed attempt.',
  },
  {
    q: 'Will I get a job at the end?',
    a: 'We do not sell job guarantees. We give you skill, a portfolio, a verified credential and a career readiness track, which is what actually moves an application.',
  },
];

export const PRICING_COVERS =
  'Your payment covers every course in the pathway, the live sessions, all assignments and projects, the capstone, assessment and grading, the career readiness track, and your Professional Certificate.';
