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
    <div className="min-h-screen min-w-11 bg-gray-100 py-6 flex flex-col justify-center sm:py-12 ">
      <div className="relative py-3 sm:max-w-9xl sm:mx-auto w-full px-4">
        <div className="relative bg-white shadow-lg sm:rounded-3xl sm:p-10">
          <h1 className="text-3xl font-semibold mb-6 text-center">Resume Builder</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 gap-6">
              {fields.map((field) => (
                <div key={field} className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700 mb-1">
                    {field.replace(/_/g, ' ').charAt(0).toUpperCase() + field.replace(/_/g, ' ').slice(1)}:
                  </label>
                  <input
                    type="text"
                    name={field}
                    value={formData[field as keyof ResumeInput]}
                    onChange={handleInputChange}
                    placeholder={placeholders[field as keyof ResumeInput]}
                    className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-full"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <button type="submit" className="py-2 px-6 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Generate Resume
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
