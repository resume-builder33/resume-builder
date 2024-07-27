import { useState } from "react";
import { ResumeInput } from "../types";
import postResume from "../utils/postResume.ts";

// const whatTheInputIsSupposedToBe = {
//   header: {
//     name: '',
//     phoneNumber: '',
//     email: '',
//     personalWebsite: '',
//     linkedIn: '',
//     github: '',
//   },
//   education: [],
//   experience: [],
//   communityAndLeadership: [],
//   projects: [],
//   skills: [],
// }

const demoInput: ResumeInput = {
  header: {
    name: '',
    phoneNumber: '',
    email: '',
    personalWebsite: '',
    linkedIn: '',
    github: '',
  },
  education: [
    {
      institution: '',
      program: '',
      location: '',
      graduationDate: '',
      descriptions: ['', '', ''],
    },
  ],
  experience: [
    {
      position: '',
      date: '',
      organization: '',
      location: '',
      descriptions: ['', '', ''],
    },
    {
      position: '',
      date: '',
      organization: '',
      location: '',
      descriptions: ['', '', ''],
    },
    {
      position: '',
      date: '',
      organization: '',
      location: '',
      descriptions: ['', '', ''],
    },
  ],
  communityAndLeadership: [
    {
      position: '',
      date: '',
      organization: '',
      location: '',
      descriptions: ['', '', ''],
    },
  ],
  projects: [
    {
      title: '',
      utilities: '',
      date: '',
      descriptions: ['', '', ''],
    },
    {
      title: '',
      utilities: '',
      date: '',
      descriptions: ['', '', ''],
    },
    {
      title: '',
      utilities: '',
      date: '',
      descriptions: ['', '', ''],
    },
  ],
  skills: [
    ['', ''],
    ['', ''],
    ['', ''],
  ],
};


export const ResumeInputForm: React.FC = () => {
  const [formData, setFormData] = useState<ResumeInput>(demoInput);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    // Split the name into parts
    const nameParts = name.split('.');

    // Helper function to update nested state
    const updateNestedState = (parts: string[], state: any, value: any) => {
      const key = parts[0];
      if (parts.length === 1) {
        return {
          ...state,
          [key]: value,
        };
      } else {
        return {
          ...state,
          [key]: updateNestedState(parts.slice(1), state[key], value),
        };
      }
    };

    setFormData(prevData => updateNestedState(nameParts, prevData, value));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    postResume(formData);
  };

  const headers = () => {
    return (
      <div>
        <h2>Header</h2>
        <input
          type="text"
          name="header.name"
          value={formData.header.name}
          onChange={handleInputChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="header.phoneNumber"
          value={formData.header.phoneNumber}
          onChange={handleInputChange}
          placeholder="Phone Number"
        />
        <input
          type="text"
          name="header.email"
          value={formData.header.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        <input
          type="text"
          name="header.personalWebsite"
          value={formData.header.personalWebsite}
          onChange={handleInputChange}
          placeholder="www.website.com"
        />
        <input
          type="text"
          name="header.linkedIn"
          value={formData.header.linkedIn}
          onChange={handleInputChange}
          placeholder="LinkedIn"
        />
        <input
          type="text"
          name="header.github"
          value={formData.header.github}
          onChange={handleInputChange}
          placeholder="www.github.com/example"
        />
      </div>
    )
  };

  const education = () => {
    return (
      <div>
        <h2>Education</h2>
        <input
          type="text"
          name="education.0.institution"
          value={formData.education[0].institution}
          onChange={handleInputChange}
          placeholder="Harvard Engineering"
        />
        <input
          type="text"
          name="education.0.program"
          value={formData.education[0].program}
          onChange={handleInputChange}
          placeholder="Computer Science"
        />
        <input
          type="text"
          name="education.0.location"
          value={formData.education[0].location}
          onChange={handleInputChange}
          placeholder="Boston, MA"
        />
        <input
          type="text"
          name="education.0.graduationDate"
          value={formData.education[0].graduationDate}
          onChange={handleInputChange}
          placeholder="June 1999"
        />
        <input
          type="text"
          name="education.0.descriptions.0"
          value={formData.education[0].descriptions[0]}
          onChange={handleInputChange}
          placeholder="something"
        />
        <input
          type="text"
          name="education.0.descriptions.1"
          value={formData.education[0].descriptions[1]}
          onChange={handleInputChange}
          placeholder="something"
        />
        <input
          type="text"
          name="education.0.descriptions.2"
          value={formData.education[0].descriptions[2]}
          onChange={handleInputChange}
          placeholder="something"
        />
      </div>
    )
  };

  const experience = () => {
    return (
      <div>
        <h2>Experience</h2>
        <input
          type="text"
          name="experience.0.position"
          value={formData.experience[0].position}
          onChange={handleInputChange}
          placeholder="Fullstack Engineer"
        />
        <input
          type="text"
          name="experience.0.date"
          value={formData.experience[0].date}
          onChange={handleInputChange}
          placeholder="2020"
        />
        <input
          type="text"
          name="experience.0.organization"
          value={formData.experience[0].organization}
          onChange={handleInputChange}
          placeholder="Microsoft"
        />
        <input
          type="text"
          name="experience.0.location"
          value={formData.experience[0].location}
          onChange={handleInputChange}
          placeholder="New York, New York"
        />
        <input
          type="text"
          name="experience.0.descriptions.0"
          value={formData.experience[0].descriptions[0]}
          onChange={handleInputChange}
          placeholder="something"
        />
        <input
          type="text"
          name="experience.0.descriptions.1"
          value={formData.experience[0].descriptions[1]}
          onChange={handleInputChange}
          placeholder="something"
        />
        <input
          type="text"
          name="experience.0.descriptions.2"
          value={formData.experience[0].descriptions[2]}
          onChange={handleInputChange}
          placeholder="something"
        />
        <input
          type="text"
          name="experience.1.position"
          value={formData.experience[1].position}
          onChange={handleInputChange}
          placeholder="Fullstack Engineer"
        />
        <input
          type="text"
          name="experience.1.date"
          value={formData.experience[1].date}
          onChange={handleInputChange}
          placeholder="2020-2021"
        />
        <input
          type="text"
          name="experience.1.organization"
          value={formData.experience[1].organization}
          onChange={handleInputChange}
          placeholder="Microsoft"
        />
        <input
          type="text"
          name="experience.1.location"
          value={formData.experience[1].location}
          onChange={handleInputChange}
          placeholder="New York, New York"
        />
        <input
          type="text"
          name="experience.1.descriptions.0"
          value={formData.experience[1].descriptions[0]}
          onChange={handleInputChange}
          placeholder="something"
        />
        <input
          type="text"
          name="experience.1.descriptions.1"
          value={formData.experience[1].descriptions[1]}
          onChange={handleInputChange}
          placeholder="something"
        />
        <input
          type="text"
          name="experience.1.descriptions.2"
          value={formData.experience[1].descriptions[2]}
          onChange={handleInputChange}
          placeholder="something"
        />
        <input
          type="text"
          name="experience.2.position"
          value={formData.experience[2].position}
          onChange={handleInputChange}
          placeholder="Fullstack Engineer"
        />
        <input
          type="text"
          name="experience.2.date"
          value={formData.experience[2].date}
          onChange={handleInputChange}
          placeholder="2020"
        />
        <input
          type="text"
          name="experience.2.organization"
          value={formData.experience[2].organization}
          onChange={handleInputChange}
          placeholder="Microsoft"
        />
        <input
          type="text"
          name="experience.2.location"
          value={formData.experience[2].location}
          onChange={handleInputChange}
          placeholder="New York, New York"
        />
        <input
          type="text"
          name="experience.2.descriptions.0"
          value={formData.experience[2].descriptions[0]}
          onChange={handleInputChange}
          placeholder="something"
        />
        <input
          type="text"
          name="experience.2.descriptions.1"
          value={formData.experience[2].descriptions[1]}
          onChange={handleInputChange}
          placeholder="something"
        />
        <input
          type="text"
          name="experience.2.descriptions.2"
          value={formData.experience[2].descriptions[2]}
          onChange={handleInputChange}
          placeholder="something"
        />
      </div>
    )
  };

  const communityAndLeadership = () => {
    return (
      <div>
        <h2>Community and Leadership</h2>
        <input
          type="text"
          name="communityAndLeadership.0.position"
          value={formData.communityAndLeadership[0].position}
          onChange={handleInputChange}
          placeholder="Position"
        />
        <input
          type="text"
          name="communityAndLeadership.0.date"
          value={formData.communityAndLeadership[0].date}
          onChange={handleInputChange}
          placeholder="Date"
        />
        <input
          type="text"
          name="communityAndLeadership.0.organization"
          value={formData.communityAndLeadership[0].organization}
          onChange={handleInputChange}
          placeholder="Organization"
        />
        <input
          type="text"
          name="communityAndLeadership.0.location"
          value={formData.communityAndLeadership[0].location}
          onChange={handleInputChange}
          placeholder="Location"
        />
        <input
          type="text"
          name="communityAndLeadership.0.descriptions.0"
          value={formData.communityAndLeadership[0].descriptions[0]}
          onChange={handleInputChange}
          placeholder="something"
        />
        <input
          type="text"
          name="communityAndLeadership.0.descriptions.1"
          value={formData.communityAndLeadership[0].descriptions[1]}
          onChange={handleInputChange}
          placeholder="something"
        />
        <input
          type="text"
          name="communityAndLeadership.0.descriptions.2"
          value={formData.communityAndLeadership[0].descriptions[2]}
          onChange={handleInputChange}
          placeholder="something"
        />
      </div>
    )
  };

  const projects = () => {
    return (
      <div>
        <h2>Projects</h2>
        <input
          type="text"
          name="projects.0.title"
          value={formData.projects[0].title}
          onChange={handleInputChange}
          placeholder="Project Name"
        />
        <input
          type="text"
          name="projects.0.utilities"
          value={formData.projects[0].utilities}
          onChange={handleInputChange}
          placeholder="Utilities"
        />
        <input
          type="text"
          name="projects.0.date"
          value={formData.projects[0].date}
          onChange={handleInputChange}
          placeholder="Date"
        />
        <input
          type="text"
          name="projects.0.descriptions.0"
          value={formData.projects[0].descriptions[0]}
          onChange={handleInputChange}
          placeholder="something"
        />
        <input
          type="text"
          name="projects.0.descriptions.1"
          value={formData.projects[0].descriptions[1]}
          onChange={handleInputChange}
          placeholder="something"
        />
        <input
          type="text"
          name="projects.0.descriptions.2"
          value={formData.projects[0].descriptions[2]}
          onChange={handleInputChange}
          placeholder="something"
        />
        <input
          type="text"
          name="projects.1.title"
          value={formData.projects[1].title}
          onChange={handleInputChange}
          placeholder="Project Name"
        />
        <input
          type="text"
          name="projects.1.utilities"
          value={formData.projects[1].utilities}
          onChange={handleInputChange}
          placeholder="Utilities"
        />
        <input
          type="text"
          name="projects.1.date"
          value={formData.projects[1].date}
          onChange={handleInputChange}
          placeholder="Date"
        />
        <input
          type="text"
          name="projects.1.descriptions.0"
          value={formData.projects[1].descriptions[0]}
          onChange={handleInputChange}
          placeholder="something"
        />
        <input
          type="text"
          name="projects.1.descriptions.1"
          value={formData.projects[1].descriptions[1]}
          onChange={handleInputChange}
          placeholder="something"
        />
        <input
          type="text"
          name="projects.1.descriptions.2"
          value={formData.projects[1].descriptions[2]}
          onChange={handleInputChange}
          placeholder="something"
        />
        <input
          type="text"
          name="projects.2.title"
          value={formData.projects[2].title}
          onChange={handleInputChange}
          placeholder="Project Name"
        />
        <input
          type="text"
          name="projects.2.utilities"
          value={formData.projects[2].utilities}
          onChange={handleInputChange}
          placeholder="Utilities"
        />
        <input
          type="text"
          name="projects.2.date"
          value={formData.projects[2].date}
          onChange={handleInputChange}
          placeholder="Date"
        />
        <input
          type="text"
          name="projects.2.descriptions.0"
          value={formData.projects[2].descriptions[0]}
          onChange={handleInputChange}
          placeholder="something"
        />
        <input
          type="text"
          name="projects.2.descriptions.1"
          value={formData.projects[2].descriptions[1]}
          onChange={handleInputChange}
          placeholder="something"
        />
        <input
          type="text"
          name="projects.2.descriptions.2"
          value={formData.projects[2].descriptions[2]}
          onChange={handleInputChange}
          placeholder="something"
        />
      </div>
    )
  };

  const skills = () => {
    return (
      <div>
        <h2>Skills</h2>
        <input
          type="text"
          name="skills.0.0"
          value={formData.skills[0][0]}
          onChange={handleInputChange}
          placeholder="Programming Languages"
        />
        <input
          type="text"
          name="skills.0.1"
          value={formData.skills[0][1]}
          onChange={handleInputChange}
          placeholder="Python, Javascript, Java"
        />
        <input
          type="text"
          name="skills.1.0"
          value={formData.skills[1][0]}
          onChange={handleInputChange}
          placeholder="Frameworks"
        />
        <input
          type="text"
          name="skills.1.1"
          value={formData.skills[1][1]}
          onChange={handleInputChange}
          placeholder="Node.js, React.js"
        />
        <input
          type="text"
          name="skills.2.0"
          value={formData.skills[2][0]}
          onChange={handleInputChange}
          placeholder="Cloud"
        />
        <input
          type="text"
          name="skills.2.1"
          value={formData.skills[2][1]}
          onChange={handleInputChange}
          placeholder="AWS, Azure"
        />
      </div>
    )
  };

  return (
    <form onSubmit={handleSubmit}>
      {headers()}
      {education()}
      {experience()}
      {communityAndLeadership()}
      {projects()}
      {skills()}
      <button type="submit">Submit</button>
    </form>
  );
};
