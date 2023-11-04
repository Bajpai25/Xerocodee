Internship Assignment - Creation of Landing Page 

Welcome to the internship assignment where you will recreate a design into a functional landing page. In this document, you'll find information on the task overview, technical requirements, and steps to get started.

Task Overview
You will be recreating a design into a functional landing page. The design for this project is available via the following 
Figma link:  https://www.figma.com/file/6BVZ2gaWWRcOwe18Twcsum/XeroCodee---Full-Stack-Developer-Intern-Task?type=design&node-id=0%3A1&mode=design&t=UWyKN1I8qKEiCiez-1

Technical Requirements
To successfully complete this assignment, make sure to adhere to the following technical requirements:

Language: TypeScript
Framework/Library: Vite.js
Styling: TailwindCSS
Architecture: Implement the MVVC (Model-View-ViewModel-Controller) architecture for your project.
Testing: Use Jest for testing to ensure the functionality and reliability of your code.


1. Setting up vite.js
   Prerequisites:

Make sure you have Node.js and npm (Node Package Manager) installed on your system. You can download and install them from the official website: node.js.
Create a New Vite Project:

Open your terminal or command prompt and navigate to the directory where you want to create your Vite.js project.

Run the following command to create a new Vite project:

npm init @vitejs/app my-vite-project
Replace my-vite-project with your desired project name.

Project Configuration:

The command will prompt you to select a project template. You can choose from options like Vue, React, or Vanilla JavaScript. Select the one that suits your needs.
I choose React and language as Typescript

Once the project is created, navigate to the project folder:

eg- cd my-vite-project
Install Dependencies:

Install project dependencies by running:

npm install
Development Server:

To start the development server and run your Vite.js project, use the following command:

npm run dev
This will start a development server, and you can access your project in your browser at eg: http://localhost:3000.

2. Setting up Tailwind CSS

3. Setting up the MVVC Architecture
   Dividing the landing page into various components(8)

4. Setting up jest for testing the website

   To set up Jest for testing in a Vite.js project, follow these steps:

Install Jest and Testing Dependencies:

In your Vite.js project directory, open a terminal and run the following command to install Jest and related testing dependencies:

npm install --save-dev jest @types/jest ts-jest
Additionally, you might want to install vue-jest if you are testing Vue components:

npm install --save-dev vue-jest @vue/test-utils
Configure Jest:

Create a jest.config.ts file in the root of your project to configure Jest. Here's a basic configuration:

// jest.config.js
export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        "^.+\\.tsx?$": "ts-jest" 
    // process `*.tsx` files with `ts-jest`
    },
    moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__ mocks __/fileMock.js',
    },
}
This configuration tells Jest to use TypeScript and Vue support for testing.


This will allow you to run tests using npm run test.

Create a Test File:

Create a test file for your components or functions. For example, if you have a component in src/components/MyComponent.vue, you can create a test file in    
eg : src/components/__tests__/MyComponent.spec.ts:


eg : // src/components/__tests__/MyComponent.spec.ts
import { mount } from '@vue/test-utils';
import MyComponent from '../MyComponent.vue';

test('MyComponent renders correctly', () => {
  const wrapper = mount(MyComponent);
  expect(wrapper.exists()).toBe(true);
});
This is a simple example of a Vue component test.

Run Tests:

You can run your tests using the following command:

npm run test
This will execute Jest and run your tests. You can also use npm run test:watch for continuous testing during development.

 
6.  Design decisions

When creating  functional landing page, I have consider the following design decisions:

User-Centered Design: Prioritize user needs and preferences. Create personas and conduct usability testing.

Visual Hierarchy: Use typography, color, and layout to guide user attention. Highlight critical information.

Consistent Branding: Maintain brand identity with the logo, color scheme, and typography.

Mobile Responsiveness: Ensure a seamless experience on various devices.

Navigation and CTAs: Make navigation intuitive and provide clear Calls to Action (CTAs).

Page Load Speed: Optimize images for fast page loading.

Content Strategy: Craft engaging headlines and persuasive copy. Use multimedia effectively.

Accessibility: Ensure accessibility for all users. Use semantic HTML, provide alternative text for images.

Security and Privacy: Prioritize user data security and privacy. Use HTTPS and inform users about your privacy policy.

Feedback Mechanisms: Include contact forms or chat support for user interaction.

A/B Testing: Test different design elements for data-driven improvements.

Performance Optimization: Minify assets and optimize for performance.

Loading State and Error Handling: Design loading states and clear error messages.

Scalability and Maintainability: Use modular, organized code and documentation.

Legal Compliance: Ensure compliance with relevant laws and regulations.


7. Problems Faced :

   Major problem faced during this assignment is as follows :
   
1. Maintain Responsiveness as I had to check each and every time by dev tools that the components are responsive which require a lot of time and patience.
2. Setting up Jest as this was my first time making test cases so I had to read a couple documentations watch some youtube videos to setup Jest and make test cases.
3.  Styling : As this Landing page had some complex designs which needed to be coded and presented same as it is in Figma so in that case ,it was a bit tricky but worth trying.
4.  Code scalability and writing clean code : As in Tailwind CSS both the JS and CSS are present on same file , also the code was a bit long too, so my major goal was to       
   maintain a clean code and maintain code readability and scalability.




   

