import unittest
from app import app

class ResumeBuilderTestCase(unittest.TestCase):

    def setUp(self):
        # Set up the test client
        self.app = app.test_client()
        self.app.testing = True

    def test_generate_resume(self):
        # Example data for testing
        example_data = {
            'name': 'John Doe',
            'email': 'johndoe@example.com',
            'phone': '123-456-7890',
            'linkedin': 'https://linkedin.com/in/johndoe',
            'github': 'https://github.com/johndoe',
            'university': 'University of Example',
            'edu_dates': 'Aug 2015 - May 2019',
            'degree': 'Bachelor of Science in Computer Science',
            'gpa': '3.8/4.0',
            'education_item1': 'Relevant coursework: Algorithms, Data Structures',
            'education_item2': 'Dean\'s List: Fall 2015, Spring 2017',
            'education_item3': 'Graduated with Honors',
            'role1_title': 'Software Engineer',
            'role1_dates': 'Jun 2019 - Present',
            'role1_company': 'Example Corp',
            'role1_location': 'Example City, EX',
            'role1_description1': 'Developed and maintained web applications.',
            'role1_description2': 'Collaborated with cross-functional teams.',
            'role1_description3': 'Implemented RESTful APIs.',
            'project1_title': 'Project Alpha',
            'project1_technologies': 'Python, Flask, PostgreSQL',
            'project1_dates': 'Jan 2020 - Dec 2020',
            'project1_description1': 'Led the development of a web application.',
            'project1_description2': 'Integrated third-party services.',
            'project2_title': 'Project Beta',
            'project2_technologies': 'Java, Spring Boot, MySQL',
            'project2_dates': 'Jan 2021 - Present',
            'project2_description1': 'Designed and implemented microservices.',
            'project2_description2': 'Optimized database performance.',
            'technical_skills': 'Python, Java, SQL, Git, Docker'
        }

        # Make a POST request to the /generate endpoint with the example data
        response = self.app.post('/generate', data=example_data)

        # Check if the status code is 200 (OK)
        self.assertEqual(response.status_code, 200)

        # Check if the response content type is application/pdf
        self.assertEqual(response.content_type, 'application/pdf')

if __name__ == '__main__':
    unittest.main()