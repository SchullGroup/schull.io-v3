/**
 * The seven Career Pathways.
 * All copy verbatim from Schull_Academy_Website_Copy.pdf (pathway pages).
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
    route: [
      {
        stage: 'Foundation',
        text: 'AI fundamentals, prompt engineering, AI tools and ethical AI. You finish this stage understanding how AI works and using current tools with judgement.',
      },
      {
        stage: 'Professional',
        text: 'AI automation, workflow design, no-code AI, API integration, LLM engineering and agentic AI. You finish this stage able to design and build working solutions.',
      },
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
    route: [
      {
        stage: 'Foundation',
        text: 'Cloud fundamentals, Linux and networking. You finish this stage understanding how cloud environments are put together and comfortable working on a server.',
      },
      {
        stage: 'Professional',
        text: 'AWS, Huawei Cloud, DevOps practice, CI/CD and MLOps. You finish this stage able to deploy, automate and operate real environments.',
      },
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
    route: [
      {
        stage: 'Foundation',
        text: 'Cybersecurity fundamentals, systems and networking basics, and the core security tools. You finish this stage able to speak the language and use the tools.',
      },
      {
        stage: 'Professional',
        text: 'Vulnerability assessment, penetration testing, security operations and security monitoring. You finish this stage able to do the work, not just describe it.',
      },
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
    route: [
      {
        stage: 'Foundation',
        text: 'Data fundamentals, spreadsheets and SQL. You finish this stage able to get to the data and ask it questions.',
      },
      {
        stage: 'Professional',
        text: 'Data analysis, ETL, data modelling, Power BI and business intelligence. You finish this stage able to run the full process from raw data to reporting.',
      },
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
    route: [
      {
        stage: 'Foundation',
        text: 'Software testing fundamentals, manual testing and functional testing. You finish this stage able to plan and run structured tests.',
      },
      {
        stage: 'Professional',
        text: 'API testing, integration, regression, performance testing, security testing and test management tools. You finish this stage able to own quality across a product.',
      },
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
    route: [
      {
        stage: 'Foundation',
        text: 'Product management fundamentals, the product lifecycle, and agile and scrum. You finish this stage understanding how products get made and who does what.',
      },
      {
        stage: 'Professional',
        text: 'Product strategy, Jira and delivery tooling, product analytics, stakeholder management and resource management. You finish this stage able to run a product, not just describe one.',
      },
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
  {
    slug: 'career-and-workplace-readiness',
    school: 'career-and-workplace-readiness',
    name: 'Career and Workplace Readiness Pathway',
    short: 'Career and Workplace Readiness',
    certificate: 'Career and Workplace Readiness Certificate',
    promise:
      'Skill gets you shortlisted. This is what gets you hired, and what keeps you there.',
    openingNote:
      'This track is built into every Career Pathway. Take it on its own if you already have the technical skill and it is the job search that is failing you.',
    forYou:
      'This is for you if you can do the work but cannot get the interview, or you get the interview and it goes nowhere, or you are about to graduate and have no idea how to present yourself.',
    notForYou:
      'It is probably not for you if you are looking for technical training. This one is about everything around the technical work.',
    outcomes: [
      'You will have a CV that survives the first thirty seconds.',
      'You will have a LinkedIn profile and a portfolio that work for you while you sleep.',
      'You will handle an interview without falling apart on the questions everybody gets asked.',
      'You will know how to find, price and manage freelance work.',
      'You will communicate and conduct yourself the way professionals who get kept do.',
    ],
    route: [
      {
        stage: 'Foundation',
        text: 'Communication, emotional intelligence and professional conduct. You finish this stage able to carry yourself well with colleagues, managers and clients.',
      },
      {
        stage: 'Professional',
        text: 'CV, LinkedIn, portfolio building, interview preparation, freelancing and career strategy. You finish this stage with your professional presence built, not planned.',
      },
      {
        stage: 'Portfolio',
        text: 'A complete professional profile: CV, LinkedIn, portfolio and application materials.',
      },
      {
        stage: 'Capstone',
        text: 'Your full professional profile plus a live interview simulation, assessed against the standard an employer would apply.',
      },
      {
        stage: 'Certification',
        text: 'Your Career and Workplace Readiness Certificate, issued with a verification link an employer can check.',
      },
    ],
    // per-pathway footnote override
    routeFootnote:
      'Learners on any other pathway complete this track inside their pathway. It is only taken on its own if you are not enrolled in another one.',
  },
];

export const DEFAULT_ROUTE_FOOTNOTE =
  'Your placement assessment decides whether you begin at Foundation or Professional. Everyone completes the portfolio, career readiness, capstone and certification stages.';

export const getPathway = (slug) => PATHWAYS.find((p) => p.slug === slug);

/* ---- sections that repeat identically on every pathway page ---- */

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
