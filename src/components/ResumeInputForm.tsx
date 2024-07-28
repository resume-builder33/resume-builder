import { useState, ChangeEvent } from "react";
import { ResumeInput } from "../types";
import postResume from "../utils/postResume.ts";



export const ResumeInputForm: React.FC = () => {
  const [formData, setFormData] = useState<ResumeInput>({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    university: "",
    edu_dates: "",
    degree: "",
    gpa: "",
    education_item1: "",
    education_item2: "",
    education_item3: "",
    role1_title: "",
    role1_dates: "",
    role1_company: "",
    role1_location: "",
    role1_description1: "",
    role1_description2: "",
    role1_description3: "",
    project1_title: "",
    project1_technologies: "",
    project1_dates: "",
    project1_description1: "",
    project1_description2: "",
    project2_title: "",
    project2_technologies: "",
    project2_dates: "",
    project2_description1: "",
    project2_description2: "",
    technical_skills: "",
  });

  const fields = [
    'name',
    'email',
    'phone',
    'linkedin',
    'github',
    'university',
    'edu_dates',
    'degree',
    'gpa',
    'education_item1',
    'education_item2',
    'education_item3',
    'role1_title',
    'role1_dates',
    'role1_company',
    'role1_location',
    'role1_description1',
    'role1_description2',
    'role1_description3',
    'project1_title',
    'project1_technologies',
    'project1_dates',
    'project1_description1',
    'project1_description2',
    'project2_title',
    'project2_technologies',
    'project2_dates',
    'project2_description1',
    'project2_description2',
    'technical_skills'
  ] as const;

  const placeholders: Record<keyof ResumeInput, string> = {
    name: "Full Name",
    email: "Email Address",
    phone: "Phone Number",
    linkedin: "LinkedIn Profile URL",
    github: "GitHub Profile URL",
    university: "University Name",
    edu_dates: "Education Dates",
    degree: "Degree",
    gpa: "GPA",
    education_item1: "Education Item 1",
    education_item2: "Education Item 2",
    education_item3: "Education Item 3",
    role1_title: "Job Title",
    role1_dates: "Employment Dates",
    role1_company: "Company Name",
    role1_location: "Job Location",
    role1_description1: "Job Description 1",
    role1_description2: "Job Description 2",
    role1_description3: "Job Description 3",
    project1_title: "Project 1 Title",
    project1_technologies: "Project 1 Technologies",
    project1_dates: "Project 1 Dates",
    project1_description1: "Project 1 Description 1",
    project1_description2: "Project 1 Description 2",
    project2_title: "Project 2 Title",
    project2_technologies: "Project 2 Technologies",
    project2_dates: "Project 2 Dates",
    project2_description1: "Project 2 Description 1",
    project2_description2: "Project 2 Description 2",
    technical_skills: "Technical Skills",
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    postResume(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <label key={field}>
          {field.replace(/_/g, ' ').charAt(0).toUpperCase() + field.replace(/_/g, ' ').slice(1)}:
          <input
            type="text"
            name={field}
            value={formData[field as keyof ResumeInput]}
            onChange={handleInputChange}
            placeholder={placeholders[field as keyof ResumeInput]}
          />
        </label>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};
