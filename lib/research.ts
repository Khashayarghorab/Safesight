export type Publication = {
  id: string;
  title: string;
  authors: string[];
  journal?: string;
  venue?: string;
  citation: string;
  year: number;
  topics: string[];
  publisherUrl?: string;
  scholarUrl?: string;
};

// Add a publication here to include it on /research/. Keep the desired display order.
// Citation details come from the supplied bibliography and publisher records.
export const publications: Publication[] = [
  {
    id: 'llm-multiagent-jsa',
    title: 'LLM-Based Multiagent System for Construction Job Safety Analysis',
    authors: ['K. Ghorab', 'P. Zangeneh'],
    journal: 'Journal of Management in Engineering',
    citation: '42 (5), 04026020',
    year: 2026,
    topics: ['AI & multiagent systems', 'Construction safety'],
    publisherUrl: 'https://ascelibrary.com/doi/abs/10.1061/JMENEA.MEENG-7335',
    scholarUrl: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=-rhiHcAAAAAJ&citation_for_view=-rhiHcAAAAAJ:W7OEmFMy1HYC',
  },
  {
    id: 'llm-sft-grpo-conference',
    title: 'Enhancing Risk Reasoning in LLMs for Construction Safety Management through SFT\u2013GRPO Fine-Tuning',
    authors: ['Khashayar Ghorab', 'Pouya Zangeneh'],
    venue: 'Accepted conference paper',
    citation: 'Quebec City, QC; June 3\u20135, 2026',
    year: 2026,
    topics: ['LLM fine-tuning', 'Construction safety'],
  },
  {
    id: 'bim-ar-risk',
    title: 'BIM-augmented reality integrated approach to risk management',
    authors: ['S. Alirezaei', 'H. Taghaddos', 'K. Ghorab', 'A. Nekouvaght Tak', 'S. Alirezaei'],
    journal: 'Automation in Construction',
    citation: '141, 104458',
    year: 2022,
    topics: ['BIM & augmented reality', 'Risk management'],
    publisherUrl: 'https://www.sciencedirect.com/science/article/pii/S0926580522003314',
    scholarUrl: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=-rhiHcAAAAAJ&citation_for_view=-rhiHcAAAAAJ:9yKSN-GCB0IC',
  },
  {
    id: 'pipeline-bim-gis-ar',
    title: 'An integrated framework for operation and maintenance of gas utility pipeline using BIM, GIS, and AR',
    authors: ['A. Shekargoftar', 'H. Taghaddos', 'A. Azodi', 'A. Nekouvaght Tak', 'K. Ghorab'],
    journal: 'Journal of Performance of Constructed Facilities',
    citation: '36 (3), 04022023',
    year: 2022,
    topics: ['BIM, GIS & AR', 'Infrastructure'],
    publisherUrl: 'https://ascelibrary.org/doi/10.1061/%28ASCE%29CF.1943-5509.0001722',
    scholarUrl: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=-rhiHcAAAAAJ&citation_for_view=-rhiHcAAAAAJ:u-x6o8ySG0sC',
  },
  {
    id: 'overlapping-activities',
    title: 'Managing safety risks from overlapping construction activities: A BIM approach',
    authors: ['A. Rashidi Nasab', 'H. Malekitabar', 'H. Elzarka', 'A. Nekouvaght Tak', 'K. Ghorab'],
    journal: 'Buildings',
    citation: '13 (10), 2647',
    year: 2023,
    topics: ['Construction safety', 'BIM'],
    publisherUrl: 'https://www.mdpi.com/2075-5309/13/10/2647',
    scholarUrl: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=-rhiHcAAAAAJ&citation_for_view=-rhiHcAAAAAJ:2osOgNQ5qMEC',
  },
  {
    id: 'megaproject-ontology',
    title: 'Ontology-based knowledge representation for industrial megaprojects analytics using linked data and the semantic web',
    authors: ['P. Zangeneh', 'B. McCabe'],
    journal: 'Advanced Engineering Informatics',
    citation: '46, 101164',
    year: 2020,
    topics: ['Knowledge representation', 'Project analytics'],
    publisherUrl: 'https://www.sciencedirect.com/science/article/abs/pii/S147403462030135X',
    scholarUrl: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=jZhFoH8AAAAJ&citation_for_view=jZhFoH8AAAAJ:ufrVoPGSRksC',
  },
];


export type OngoingStudy = {
  id: string;
  title: string;
  focus: string;
  status: 'Manuscript in progress' | 'Planned' | 'Abstract prepared';
  progress?: string;
};

// Work in progress: no target journals, conference names, or acceptance claims.
export const ongoingStudies: OngoingStudy[] = [
  {
    id: 'vlm-sft-rl',
    title: 'Recognizing hazards in site photos',
    focus: 'How can we help AI recognize and describe potential hazards in photos from construction sites?',
    status: 'Manuscript in progress',
    progress: 'Experiments completed',
  },
  {
    id: 'single-multi-agent-vlm',
    title: 'Comparing AI approaches to risk assessment',
    focus: 'How well do different AI tools explain why a site condition could be risky, and how much time and computing power do they need?',
    status: 'Planned',
  },
  {
    id: 'smart-glasses-development',
    title: 'Smart glasses for site inspections',
    focus: 'How can smart glasses capture what an inspector sees and make it available for review?',
    status: 'Abstract prepared',
  },
  {
    id: 'human-ai-decision-support',
    title: 'How inspectors use AI suggestions',
    focus: 'When smart glasses offer a suggestion, how does it affect what inspectors notice, what they trust, and what they decide to do?',
    status: 'Planned',
  },
];

export type ResearchPost = {
  image?: string;
  id: string;
  title: string;
  description: string;
  authors: string;
  date: string;
  dateLabel: string;
  href: string;
};

// Curated fallback when the build-time RSS feed is unavailable.
export const researchPosts: ResearchPost[] = [
  {
    id: 'genai-dragon',
    image: 'https://substackcdn.com/image/fetch/%24s_%21mPa2%21%2Cw_1456%2Cc_limit%2Cf_auto%2Cq_auto%3Agood%2Cfl_progressive%3Asteep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8aefd1d4-9e76-4720-95ff-314ff19751e9_1287x1614.png',
    title: 'How to Train Your GenAI Dragon',
    description: 'Adapting generative AI to construction and project management through prompting, retrieval, fine-tuning, and coordinated agents.',
    authors: 'Pouya Zangeneh and Khashayar Ghorab',
    date: '2024-06-24',
    dateLabel: 'June 24, 2024',
    href: 'https://epmresearch.com/p/how-to-train-your-genai-dragon',
  },
  {
    id: 'ai-risk-management',
    title: 'Industry Should Brace for the First Wave of AI-Driven Risk Management Failures',
    description: 'A perspective on communication, clarity, and human scrutiny when using AI in risk-management work.',
    authors: 'Pouya Zangeneh',
    date: '2025-11-27',
    dateLabel: 'November 27, 2025',
    href: 'https://epmresearch.com/p/brace-for-ai-risk-management-failures',
  },
  {
    id: 'ai-takes-shape',
    title: 'AI Takes Shape: What Recent AI Advances Mean for Architecture, Engineering, and Construction',
    description: 'Exploring the relationship between emerging AI capabilities, digital models, and engineering practice.',
    authors: 'Pouya Zangeneh',
    date: '2026-09-11',
    dateLabel: 'September 11, 2026',
    href: 'https://epmresearch.com/p/ai-takes-shape',
  },
];
