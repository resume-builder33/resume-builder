export type ResumeInput = {
  header: Header;
  education: Education[];
  experience: Role[];
  communityAndLeadership: Role[];
  projects: Project[];
  skills: Skills;
};

type Header = {
  name: string;
  phoneNumber: string;
  email: string;
  personalWebsite: string;
  linkedIn: string;
  github?: string;
};

type Education = {
  institution: string;
  program: string;
  location: string;
  graduationDate: string;
  descriptions: Description[];
};

type Role = {
  position: string;
  date: string;
  organization: string;
  location: string;
  descriptions: Description[];
};

type Project = {
  title: string;
  utilities: string;
  date: string;
  descriptions: Description[];
};

type Skills = Array<[string, string[]]>;

type Description = string;

