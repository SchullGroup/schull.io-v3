/**
 * The six Career Fields.
 *
 * Naming, deliberately inconsistent — do not "fix" this with a find-and-replace:
 * "Career Field" is the user-facing category word, but each entity keeps its own
 * "School of ..." name. The internal identifiers here (SCHOOLS, getSchool, and
 * SCHOOL_IMG / pathways[].school elsewhere) stay as "school" because they match
 * those names, not the category word.
 *
 * All copy verbatim from the Schull Academy website copy document.
 */

export const SCHOOLS = [
  {
    slug: 'ai-and-automation',
    name: 'School of AI and Automation',
    short: 'AI and Automation',
    block: 'sky',
    homeLine:
      'Build and automate intelligent systems using AI tools, prompt engineering, LLMs and agents.',
    forWho:
      'For people who want to build with AI rather than just use it, and who want to automate the work businesses still do by hand.',
    learn:
      'AI fundamentals, prompt engineering, AI tools, ethical AI, AI automation, workflow design, API integration, LLM engineering, agentic AI and AI application development.',
    learnList: [
      'AI fundamentals',
      'Prompt engineering',
      'AI tools',
      'Ethical AI',
      'AI automation',
      'Workflow design',
      'API integration',
      'LLM engineering',
      'Agentic AI',
      'AI application development',
    ],
    leads: [
      'AI Automation Specialist',
      'Prompt Engineer',
      'AI Application Developer',
      'AI Solutions Associate',
    ],
  },
  {
    slug: 'cloud-and-devops',
    name: 'School of Cloud and DevOps',
    short: 'Cloud and DevOps',
    block: 'mint',
    homeLine:
      'Deploy and run reliable infrastructure with AWS, Huawei Cloud, Linux, networking and CI/CD.',
    forWho:
      'For people who want to build, deploy and keep systems running, and who enjoy infrastructure more than interfaces.',
    learn:
      'Cloud fundamentals, AWS, Huawei Cloud, Linux, networking, DevOps practice, CI/CD and MLOps.',
    learnList: [
      'Cloud fundamentals',
      'AWS',
      'Huawei Cloud',
      'Linux',
      'Networking',
      'DevOps practice',
      'CI/CD',
      'MLOps',
    ],
    leads: [
      'Cloud Engineer',
      'DevOps Engineer',
      'Systems Administrator',
      'Cloud Support Engineer',
    ],
  },
  {
    slug: 'cybersecurity',
    name: 'School of Cybersecurity',
    short: 'Cybersecurity',
    block: 'blush',
    homeLine:
      'Defend systems, test for weaknesses and run the security operations organisations depend on.',
    forWho:
      'For people who want to protect systems, find weaknesses before attackers do, and work where the stakes are high.',
    learn:
      'Cybersecurity fundamentals, security tools, vulnerability assessment, penetration testing, security operations and security monitoring.',
    learnList: [
      'Cybersecurity fundamentals',
      'Security tools',
      'Vulnerability assessment',
      'Penetration testing',
      'Security operations',
      'Security monitoring',
    ],
    leads: [
      'Security Analyst',
      'SOC Analyst',
      'Vulnerability Analyst',
      'Junior Penetration Tester',
    ],
  },
  {
    slug: 'data',
    name: 'School of Data',
    short: 'Data',
    block: 'sun',
    homeLine:
      'Turn raw data into decisions with SQL, analysis, modelling and business intelligence.',
    forWho:
      'For people who want to work with evidence, and turn messy information into decisions.',
    learn:
      'Data fundamentals, spreadsheets, SQL, data analysis, ETL, data modelling, Power BI and business intelligence.',
    learnList: [
      'Data fundamentals',
      'Spreadsheets',
      'SQL',
      'Data analysis',
      'ETL',
      'Data modelling',
      'Power BI',
      'Business intelligence',
    ],
    leads: [
      'Data Analyst',
      'Business Intelligence Analyst',
      'Reporting Analyst',
      'Data Associate',
    ],
  },
  {
    slug: 'quality-assurance',
    name: 'School of Quality Assurance',
    short: 'Quality Assurance',
    block: 'sand',
    homeLine:
      'Test software properly across manual, functional, API, performance and security testing.',
    forWho:
      'For people with an eye for detail who want a fast, in-demand route into software teams.',
    learn:
      'Software testing fundamentals, manual testing, functional testing, API testing, integration, regression, performance and security testing.',
    learnList: [
      'Software testing fundamentals',
      'Manual testing',
      'Functional testing',
      'API testing',
      'Integration testing',
      'Regression testing',
      'Performance testing',
      'Security testing',
    ],
    leads: [
      'QA Engineer',
      'Manual Tester',
      'API and Automation Tester',
      'QA Analyst',
    ],
  },
  {
    slug: 'product-management',
    name: 'School of Product Management',
    short: 'Product Management',
    block: 'sky',
    homeLine:
      'Take products from idea to delivery with strategy, agile practice and product analytics.',
    forWho:
      'For people who want to decide what gets built and why, and who work well between users, business and engineering.',
    learn:
      'Product management fundamentals, product strategy, product lifecycle, agile and scrum, Jira, product analytics, stakeholder management and resource management.',
    learnList: [
      'Product management fundamentals',
      'Product strategy',
      'Product lifecycle',
      'Agile and scrum',
      'Jira',
      'Product analytics',
      'Stakeholder management',
      'Resource management',
    ],
    leads: ['Product Analyst', 'Associate Product Manager', 'Product Owner'],
  },
];

export const getSchool = (slug) => SCHOOLS.find((s) => s.slug === slug);
