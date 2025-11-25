export interface TeamMember {
  role: string;
  count: number;
  description: string;
  department: 'Admin' | 'Production' | 'Marketing';
}

export interface SwotItem {
  category: 'Strengths' | 'Weaknesses' | 'Opportunities' | 'Threats';
  items: string[];
}

export interface PipelineStage {
  stage: string;
  items: string[];
  tools: string[];
}