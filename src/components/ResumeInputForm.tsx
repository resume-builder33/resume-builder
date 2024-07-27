import { useState } from "react";
import { ResumeInput } from "../types";
import postResume from "../utils/postResume.ts";

export const ResumeInputForm: React.FC = () => {
  const [formData, setFormData] = useState<ResumeInput>({
    header: {
      name: '',
      phoneNumber: '',
      email: '',
      personalWebsite: '',
      linkedIn: '',
      github: '',
    },
    education: [],
    experience: [],
    communityAndLeadership: [],
    projects: [],
    skills: [],
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      header: {
        ...prevData.header,
        [name]: value
      }
    }));
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
          type="string"
          name="header.phoneNumber"
          value={formData.header.phoneNumber}
          onChange={handleInputChange}
          placeholder="Phone Number"
        />
        <input
          type="string"
          name="header.email"
          value={formData.header.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        <input
          type="string"
          name="header.personalWebsite"
          value={formData.header.personalWebsite}
          onChange={handleInputChange}
          placeholder="www.website.com"
        />
        <input
          type="string"
          name="header.linkedIn"
          value={formData.header.linkedIn}
          onChange={handleInputChange}
          placeholder="LinkedIn"
        />
        <input
          type="string"
          name="header.github"
          value={formData.header.github}
          onChange={handleInputChange}
          placeholder="www.github.com/example"
        />
      </div>
    )
  };

  const education = () => {
    // TODO:
    // This is set to a single school for the demo
    // In the future this should be customizable

    return (
      <div>
        <h2>Education</h2>
        <input
          type="string"
          name="education.0.institution"
          value={formData.education[0].institution}
          onChange={handleInputChange}
          placeholder="Harvard Engineering"
        />
        <input
          type="string"
          name="education.0.program"
          value={formData.education[0].program}
          onChange={handleInputChange}
          placeholder="Computer Science"
        />
        <input
          type="string"
          name="education.0.location"
          value={formData.education[0].location}
          onChange={handleInputChange}
          placeholder="Boston, MA"
        />
        <input
          type="string"
          name="education.0.graduationDate"
          value={formData.education[0].graduationDate}
          onChange={handleInputChange}
          placeholder="June 1999"
        />
        <input
          type="string"
          name="education.0.description.0"
          value={formData.education[0].descriptions[0]}
          onChange={handleInputChange}
          placeholder="something"
        />
        <input
          type="string"
          name="education.0.description.1"
          value={formData.education[0].descriptions[1]}
          onChange={handleInputChange}
          placeholder="something"
        />
        <input
          type="string"
          name="education.0.description.2"
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
          type="string"
          name="experience.0.position"
          value={formData.experience[0].position}
          onChange={handleInputChange}
          placeholder="Fullstack Engineer"
        />
        <input
          type="string"
          name="experience.0.date"
          value={formData.experience[0].date}
          onChange={handleInputChange}
          placeholder="2020"
        />
        <input
          type="string"
          name="experience.0.organization"
          value={formData.experience[0].organization}
          onChange={handleInputChange}
          placeholder="Microsoft"
        />
        <input
          type="string"
          name="experience.0.location"
          value={formData.experience[0].location}
          onChange={handleInputChange}
          placeholder="New York, New York"
        />
        <input
          type="string"
          name="experience.0.description.0"
          value={formData.experience[0].descriptions[0]}
          onChange={handleInputChange}
          placeholder="something"
        />
        <input
          type="string"
          name="experience.0.description.1"
          value={formData.experience[0].descriptions[1]}
          onChange={handleInputChange}
          placeholder="something"
        />
        <input
          type="string"
          name="experience.0.description.2"
          value={formData.experience[0].descriptions[2]}
          onChange={handleInputChange}
          placeholder="something"
        />
        <input
          type="string"
          name="experience.1.position"
          value={formData.experience[1].position}
          onChange={handleInputChange}
          placeholder="Fullstack Engineer"
        />
        <input
          type="string"
          name="experience.1.date"
          value={formData.experience[1].date}
          onChange={handleInputChange}
          placeholder="2020-2021"
        />
        <input
          type="string"
          name="experience.1.organization"
          value={formData.experience[1].organization}
          onChange={handleInputChange}
          placeholder="Microsoft"
        />
        <input
          type="string"
          name="experience.1.location"
          value={formData.experience[1].location}
          onChange={handleInputChange}
          placeholder="New York, New York"
        />
        <input
          type="string"
          name="experience.1.description.0"
          value={formData.experience[1].descriptions[0]}
          onChange={handleInputChange}
          placeholder="something"
        />
        <input
          type="string"
          name="experience.1.description.1"
          value={formData.experience[1].descriptions[1]}
          onChange={handleInputChange}
          placeholder="something"
        />
        <input
          type="string"
          name="experience.1.description.2"
          value={formData.experience[1].descriptions[2]}
          onChange={handleInputChange}
          placeholder="something"
        />
        <input
          type="string"
          name="experience.2.position"
          value={formData.experience[2].position}
          onChange={handleInputChange}
          placeholder="Fullstack Engineer"
        />
        <input
          type="string"
          name="experience.2.date"
          value={formData.experience[2].date}
          onChange={handleInputChange}
          placeholder="June 2020 - present"
        />

        <input
          type="string"
          name="experience.2.organization"
          value={formData.experience[2].organization}
          onChange={handleInputChange}
          placeholder="Microsoft"
        />
        <input
          type="string"
          name="experience.2.location"
          value={formData.experience[2].location}
          onChange={handleInputChange}
          placeholder="New York, New York"
        />
        <input
          type="string"
          name="experience.2.description.0"
          value={formData.experience[2].descriptions[0]}
          onChange={handleInputChange}
          placeholder="something"
        />
        <input
          type="string"
          name="experience.2.description.1"
          value={formData.experience[1].descriptions[1]}
          onChange={handleInputChange}
          placeholder="something"
        />
        <input
          type="string"
          name="experience.2.description.2"
          value={formData.experience[1].descriptions[2]}
          onChange={handleInputChange}
          placeholder="something"
        />
      </div>
    )
  };

  const communityAndLeadership = () => {
    return (
      <div>
        <h2>Community And Leadership</h2>
        <input
          type="string"
          name="communityAndLeadership.0.position"
          value={formData.experience[0].position}
          onChange={handleInputChange}
          placeholder="Tutor"
        />
        <input
          type="string"
          name="communityAndLeadership.0.date"
          value={formData.communityAndLeadership[0].date}
          onChange={handleInputChange}
          placeholder="June 2020"
        />
        <input
          type="string"
          name="communityAndLeadership.0.organization"
          value={formData.communityAndLeadership[0].organization}
          onChange={handleInputChange}
          placeholder="khan academy"
        />
        <input
          type="string"
          name="communityAndLeadership.0.location"
          value={formData.communityAndLeadership[0].location}
          onChange={handleInputChange}
          placeholder="New York, New York"
        />
        <input
          type="string"
          name="communityAndLeadership.0.description.0"
          value={formData.communityAndLeadership[0].descriptions[0]}
          onChange={handleInputChange}
          placeholder="something"
        />
        <input
          type="string"
          name="communityAndLeadership.0.description.1"
          value={formData.communityAndLeadership[0].descriptions[1]}
          onChange={handleInputChange}
          placeholder="something"
        />
        <input
          type="string"
          name="communityAndLeadership.0.description.2"
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
          type="string"
          name="projects.0.title.0"
          value={formData.projects[0].title[0]}
          onChange={handleInputChange}
          placeholder="portfolio website"
        />
        <input
          type="string"
          name="projects.0.utilities"
          value={formData.projects[0].utilities}
          onChange={handleInputChange}
          placeholder="vite, react, java"
        />
        <input
          type="string"
          name="projects.0.date"
          value={formData.projects[0].date}
          onChange={handleInputChange}
          placeholder="jan 2024"
        />
        <input
          type="string"
          name="projects.0.description.0"
          value={formData.projects[0].descriptions[0]}
          onChange={handleInputChange}
          placeholder="something"
        />
        <input
          type="string"
          name="projects.0.description.1"
          value={formData.projects[0].descriptions[1]}
          onChange={handleInputChange}
          placeholder="something"
        />
        <input
          type="string"
          name="projects.0.description.2"
          value={formData.projects[0].descriptions[2]}
          onChange={handleInputChange}
          placeholder="something"
        />
        <input
          type="string"
          name="projects.1.title.0"
          value={formData.projects[1].title[0]}
          onChange={handleInputChange}
          placeholder="e-commerce platform"
        />
        <input
          type="string"
          name="projects.1.utilities"
          value={formData.projects[1].utilities}
          onChange={handleInputChange}
          placeholder="node.js, express, mongodb"
        />
        <input
          type="string"
          name="projects.1.date"
          value={formData.projects[1].date}
          onChange={handleInputChange}
          placeholder="feb 2023"
        />
        <input
          type="string"
          name="projects.1.description.0"
          value={formData.projects[1].descriptions[0]}
          onChange={handleInputChange}
          placeholder="Developed a scalable e-commerce platform"
        />
        <input
          type="string"
          name="projects.1.description.1"
          value={formData.projects[1].descriptions[1]}
          onChange={handleInputChange}
          placeholder="Implemented secure user authentication"
        />
        <input
          type="string"
          name="projects.1.description.2"
          value={formData.projects[1].descriptions[2]}
          onChange={handleInputChange}
          placeholder="Integrated payment gateway for seamless transactions"
        />
        <input
          type="string"
          name="projects.2.title.0"
          value={formData.projects[2].title[0]}
          onChange={handleInputChange}
          placeholder="mobile app"
        />
        <input
          type="string"
          name="projects.2.utilities"
          value={formData.projects[2].utilities}
          onChange={handleInputChange}
          placeholder="flutter, dart"
        />
        <input
          type="string"
          name="projects.2.date"
          value={formData.projects[2].date}
          onChange={handleInputChange}
          placeholder="jun 2022"
        />
        <input
          type="string"
          name="projects.2.description.0"
          value={formData.projects[2].descriptions[0]}
          onChange={handleInputChange}
          placeholder="Built a cross-platform mobile application"
        />
        <input
          type="string"
          name="projects.2.description.1"
          value={formData.projects[2].descriptions[1]}
          onChange={handleInputChange}
          placeholder="Implemented real-time chat functionality"
        />
        <input
          type="string"
          name="projects.2.description.2"
          value={formData.projects[2].descriptions[2]}
          onChange={handleInputChange}
          placeholder="Optimized app performance for both iOS and Android"
        />
      </div>
    )
  };

  const skills = () => {
    return (
      <div>
        <h2>Skills</h2>
        <input
          type="string"
          name="skills.0.0"
          value={formData.skills[0][0]}
          onChange={handleInputChange}
          placeholder="Languages"
        />
        <input
          type="string"
          name="skills.0.1"
          value={formData.skills[0][1]}
          onChange={handleInputChange}
          placeholder="java, javascript, typescript, etc"
        />
        <input
          type="string"
          name="skills.1.0"
          value={formData.skills[1][0]}
          onChange={handleInputChange}
          placeholder="tools"
        />
        <input
          type="string"
          name="skills.1.1"
          value={formData.skills[1][1]}
          onChange={handleInputChange}
          placeholder="loader.io, neovim"
        />
        <input
          type="string"
          name="skills.2.0"
          value={formData.skills[2][0]}
          onChange={handleInputChange}
          placeholder="Libraries"
        />
        <input
          type="string"
          name="skills.2.1"
          value={formData.skills[2][1]}
          onChange={handleInputChange}
          placeholder="springboot springweb django"
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
      <button type="submit">Submit Resume</button>
    </form>
  )
}
