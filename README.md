# 57blocks React Starter Kit

57blocks React Starter Kit is a boilerplate project that provides a solid foundation for building web applications using React.js. The main purpose of this starter kit is to streamline development, improve performance, and ensure maintainable code in the long run. It is designed to be flexible, scalable, and extensible, making it an ideal starting point for your React.js projects.


## Features

### Core Libraries and Tools

- **React.js**: A popular JavaScript library for building user interfaces. React.js provides a component-based architecture and a virtual DOM for efficient rendering.
- **xstate**: A powerful state management library for creating and managing complex, state-driven application logic. xstate helps in modeling and visualizing application states, transitions, and side effects.
- **Webpack**: Webpack is used as a module bundler to bundle and optimize the project's JavaScript and other assets. It enables efficient code organization and builds for production.
- **TypeScript**: TypeScript is a statically typed superset of JavaScript that enhances code quality, improves developer productivity, and enables reliable refactoring.


### Code Quality and Linting

- **SonarQube**: SonarQube is integrated into the project for code quality analysis. It provides insights and suggestions to improve code quality, maintainability, and adherence to best practices.
- **ESLint**: ESLint is a popular JavaScript linter that enforces coding style and detects potential errors and inconsistencies in the codebase. It helps maintain code consistency across the project.
- **Stylelint**: Stylelint is a CSS linter that ensures consistent styles, detects CSS errors, and enforces best practices for writing maintainable CSS code.
- **Commitlint**: Commitlint enforces conventional commit messages, ensuring a consistent commit history and making it easier to track changes and collaborate with other developers.


### Testing and Test Frameworks

- **Jest**: Jest is a JavaScript testing framework that provides a simple and intuitive way to write and run unit tests for React components. It offers powerful assertion utilities and mocking capabilities.
- **Testing Library**: Testing Library is a testing utility that focuses on testing React components from the user's perspective. It encourages writing tests that simulate user interactions and assert the expected behavior of the components.
- **Playwright**: Playwright is a powerful end-to-end testing tool that allows you to automate interactions with your web application in a real browser environment. It provides cross-browser support and enables comprehensive testing of your application's functionality.


### Continuous Integration and Deployment

- **GitHub Actions**: GitHub Actions is used for continuous integration and continuous deployment (CI/CD). An example workflow is provided that automates various checks and processes, such as verifying PR descriptions, setting up the development environment, running unit tests and linters, performing end-to-end tests, running code analysis, running Lighthouse tests for performance and accessibility, and deploying the code to a CDN.


## Getting Started

# Follow these steps to get started with the React Starter Kit:

### Prerequisites

Make sure you have the following software installed on your machine:- Node.js: The project requires Node.js to be installed. You can download it from the official website: [Node.js](https://nodejs.org/)
- nvm: Node Version Manager (nvm) allows you to manage multiple Node.js versions. You can install it by following the instructions in the [nvm GitHub repository](https://github.com/nvm-sh/nvm).

### Clone the Repository

Start by cloning the repository to your local machine using the following 

```
git clone https://github.com/57blocks/react-starter-kit.git 
```

### Switch to the Correct Node.js Version

Navigate to the project directory and switch to the correct Node.js version using nvm

```   
cd react-starter-kit 
nvm use 
```

This command will automatically switch to the Node.js version specified in the `.nvmrc` file located in the project directory.

### Install Dependencies

Install the necessary dependencies by running the following command:

```
yarn install 
```

### Start the Development Server

To launch the development server and run the React Starter Kit locally, use the following command:

```
yarn start 
```

This command will start the development server and automatically open the application in your default browser. Any changes you make to the source code will trigger an automatic reload.

### Build the Project

To build the React Starter Kit for production deployment, use the following command:

```
yarn build 
```

This command will create an optimized production build of the project in the `dist` directory.

### Run Tests

To execute the included unit tests, use the following command:   

```
npm test 
```

This will run the test suite using Jest and Testing Library and provide feedback on the test results.

### Code Linting

To lint the CSS and JavaScript code, use the following command:

```
yarn lint
```
This will run the Stylelint and ESLint linters to check for CSS and JavaScript code style and potential issues.

### Automated Testing with Playwright

To run automated end-to-end tests using Playwright, use the following command:

```
yarn e2e 
```
This command will execute the Playwright tests and provide test results.



