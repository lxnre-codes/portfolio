export interface IPersonalInfo {
  name: string;
  title: string;
  phone: string;
  emails: string[];
  website: string;
  github: string;
  twitter: string;
  summary: string;
}

export interface IExperience {
  company: string;
  position: string;
  period: string;
  details: string[];
}

export interface IEducation {
  school: string;
  degree: string;
  period: string;
}

export interface IPortfolioData {
  personalInfo: IPersonalInfo;
  skills: string[];
  learning: string[];
  experience: IExperience[];
  education: IEducation[];
}
