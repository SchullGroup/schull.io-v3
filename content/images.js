/**
 * Central image manifest.
 * Every image is an African learner, instructor or professional in an African
 * setting — verified, not assumed.
 *
 * Images are self-hosted in /public/img. Swap the files (keeping the names) when
 * the commissioned shoot lands and the whole site updates.
 */

const img = (name) => `/img/${name}.jpg`;

export const IMG = {
  // ---- hero scatter ----
  heroA: img('hero-a'), // learner at a laptop
  heroB: img('hero-b'), // learner working through a lesson
  heroC: img('hero-c'), // instructor at a desk

  // ---- rooms and sessions ----
  classroom: img('classroom'), // full cohort round a table
  teamMeeting: img('team-meeting'), // co-working floor
  studyPair: img('study-pair'), // two learners, home setup
  officeAfrica: img('office-africa'), // learners outside, laptops
  learnerDesk: img('learner-desk'), // learner at a desk
  mentor: img('mentor'), // instructor with a learner
  advisor: img('mentor'),
  graduate: img('graduate'),

  // ---- pathway / school imagery ----
  aiWork: img('ai-work'), // working across screens
  serverRoom: img('server-room'), // infrastructure, low light
  security: img('security'), // monitoring, low light
  dataDash: img('data-dash'), // laptop, phone, notes
  testing: img('testing'), // paired review
  productTeam: img('product-team'), // team working together
  codeScreen: img('code-screen'), // hands on keyboard
  laptopWork: img('laptop-work'),

  // ---- avatars ----
  av1: img('hero-b'),
  av2: img('laptop-work'),
  av3: img('hero-c'),
};

/** Career Field / pathway slug → image. Keyed by slug; also used for pathways
 *  via SCHOOL_IMG[p.school]. */
export const SCHOOL_IMG = {
  'ai-and-automation': IMG.aiWork,
  'cloud-and-devops': IMG.serverRoom,
  cybersecurity: IMG.security,
  data: IMG.dataDash,
  'quality-assurance': IMG.testing,
  'product-management': IMG.productTeam,
};
