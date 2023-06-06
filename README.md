
<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>
lan-reverse-proxy
</h1>
<h3 align="center">📍 Connect with ease, reverse with grace: lan-reverse-proxy to the rescue!</h3>
<h3 align="center">⚙️ Developed with the software and tools below:</h3>

<p align="center">
<img src="https://img.shields.io/badge/GNU%20Bash-4EAA25.svg?style=for-the-badge&logo=GNU-Bash&logoColor=white" alt="GNU%20Bash" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white" alt="HTML5" />
<img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
<img src="https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black" alt="React" />
<img src="https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white"alt="Nginx"/>
<img src="https://img.shields.io/badge/Docker-2496ED.svg?style=for-the-badge&logo=Docker&logoColor=white" alt="Docker" />
<img src="https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white" alt="npm" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style=for-the-badge&logo=JSON&logoColor=white" alt="JSON" />
<img src="https://img.shields.io/badge/Markdown-000000.svg?style=for-the-badge&logo=Markdown&logoColor=white" alt="Markdown" />
</p>
</div>

---

## 📚 Table of Contents
- [📚 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [💫 Features](#-features)
- [📂 Project Structure](#project-structure)
- [🧩 Modules](#modules)
- [🚀 Getting Started](#-getting-started)
- [🗺 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👏 Acknowledgments](#-acknowledgments)

---


## 📍 Overview

The lan-reverse-proxy project is a Node.js-based web application that serves as a reverse proxy server for local area network (LAN) applications. It allows users to access different LAN apps such as clipboards, tech-sheets, and go-auth through a single domain. The project includes an Nginx server, a ReactJS app, and APIs for data fetching and editing. The project's value proposition is to simplify and streamline the access to multiple LAN applications for users, especially those who work with a range of apps for their day-to-day work.

---

## 💫 Features

Feature | Description |
|---|---|
| **🏗 Structure and Organization** | The codebase follows a clear separation of concerns, with the React app in the "homepage" directory and Nginx configuration in "nginx.conf". |
| **📝 Code Documentation** | The code has minimal documentation. |
| **🧩 Dependency Management** | The dependencies are managed using Docker and specified in the Dockerfile. |
| **♻️ Modularity and Reusability** | The app is designed with modularity in mind, with smaller components such as Header, Carousel, AppFrame, and Footer. |
| **✔️ Testing and Quality Assurance** | There are no test cases included in the codebase for the moment. |
| **⚡️ Performance and Optimization** | The codebase includes the use of state management for the React app, which can boost performance by minimizing unnecessary re-renders. |
| **🔒 Security Measures** | The codebase includes SSL certificate and private key for secure communication with the Nginx server. |
| **🔄 Version Control and Collaboration** | The codebase is hosted on GitHub. Major changes as integrated through Pull Requests. |
| **🔌 External Integrations** | The codebase makes use of APIs to interact with backend servers for authentication and to fetch app data. |
| **📈 Scalability and Extensibility** | The code structure with small components allows for easy expansion and scalability in handling additional apps and features. |

---


<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-github-open.svg" width="80" />

## 📂 Project Structure


```bash
repo
├── Dockerfile
├── LICENSE
├── README.md
├── docker_deploy.sh
├── homepage
│   ├── package.json
│   ├── public
│   │   ├── css
│   │   │   └── main.css
│   │   ├── favicon.ico
│   │   └── index.html
│   └── src
│       ├── App.js
│       ├── assets
│       │   └── media
│       │       ├── appframe
│       │       │   ├── flask_logo.png
│       │       │   ├── project_architecture.png
│       │       │   ├── psql_logo.png
│       │       │   └── python_logo.png
│       │       ├── carousel
│       │       │   ├── clipboards-app.png
│       │       │   ├── go-auth.png
│       │       │   └── my-app-3.png
│       │       ├── footer
│       │       │   ├── github_logo.png
│       │       │   ├── nginx_logo.png
│       │       │   └── reacjs_logo.png
│       │       └── header
│       │           └── header_logo.png
│       ├── components
│       │   ├── AppFrame.css
│       │   ├── AppFrame.js
│       │   ├── Carousel.css
│       │   ├── Carousel.js
│       │   ├── Footer.css
│       │   ├── Footer.js
│       │   ├── Header.css
│       │   └── Header.js
│       ├── index.js
│       └── pages
│           └── Home.js
├── nginx.conf
└── prepare_env.sh

12 directories, 32 files
```

---

<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-src-open.svg" width="80" />

## 🧩 Modules

<details closed><summary>Components</summary>

| File         | Summary                                                                                                                                                                                                                                                                                                                                                              | Module                               |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------|
| AppFrame.js  | This code provides the functionality for displaying and editing the technical details of a selected app. It communicates with an API to fetch and save the app details, and allows the user to edit the details and save them. Additionally, it dynamically displays the logos of the technologies used in the app's frontend, backend, and database.                | homepage/src/components/AppFrame.js  |
| Header.js    | This code snippet represents a React component for a header, with functionalities to handle login, sign up, edit profile, logout, and check login status. It makes API requests to a backend server using the Fetch API and uses the Cookies library to store user authentication details. The component also renders different forms based on user actions.         | homepage/src/components/Header.js    |
| Carousel.css | The provided code snippet defines the CSS styles for a carousel. It sets the display to flex, and the background color to grey. It also specifies the styles for the carousel buttons, images and legends. Additionally, it includes the CSS styles for individual app thumbnails that are used in the carousel.                                                     | homepage/src/components/Carousel.css |
| Carousel.js  | This code snippet defines a React component called "Carousel" that displays a set of app images inside a carousel. When an app image is clicked, it triggers a function that selects the corresponding app ID. It also adds a link and legend to each app image. The component imports React libraries, as well as custom CSS and context from the parent component. | homepage/src/components/Carousel.js  |
| AppFrame.css | The provided code snippet contains CSS styles for a web page that displays project details. It includes styling for buttons, a project architecture image, a table, and logos for various technologies used in the project. The CSS also includes media queries for responsiveness on smaller screens.                                                               | homepage/src/components/AppFrame.css |
| Header.css   | The code snippet defines the styling for a webpage header that includes a logo, links, buttons, and forms. The header is designed to be sticky and centered on the page, with a background color of #130b32 and border radius of 20px. The code also includes specific styling for the various elements within the header, such as font size, alignment, and color.  | homepage/src/components/Header.css   |
| Footer.css   | The provided code snippet defines the styling for a footer section of a web page. It utilizes flexbox to center and align content, sets background color and border radius, and contains logos for Github, React, and Nginx. The code sets maximum and minimum widths for the logos and sets the font size and color for the text.                                   | homepage/src/components/Footer.css   |
| Footer.js    | The code provides a React functional component for a footer, which consists of links to a GitHub repository with associated icons. The component also displays the React.js and Nginx logos. The footer includes a copyright notice.                                                                                                                                 | homepage/src/components/Footer.js    |

</details>

<details closed><summary>Css</summary>

| File     | Summary                                                                                                                                                                                                                                                                                                   | Module                       |
|:---------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------|
| main.css | The code sets the styling for the APP container element, including font, layout, and dimensions. It also defines a background color for the body and layout for the home element. The code concludes by defining a text decoration for links and adding a comment indicating that the code is responsive. | homepage/public/css/main.css |

</details>

<details closed><summary>Pages</summary>

| File    | Summary                                                                                                                                                                                                                                                                                                  | Module                     |
|:--------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------|
| Home.js | The code imports components such as Header, Carousel, AppFrame and Footer in a React application. The Home function takes an "apps" parameter and returns these components wrapped in a div with the id "home". This function is then exported as the default for use in other parts of the application. | homepage/src/pages/Home.js |

</details>

<details closed><summary>Public</summary>

| File       | Summary                                                                                                                                                                                                                                          | Module                     |
|:-----------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------|
| index.html | The code snippet is a basic HTML document that includes a title, a favicon, and a link to an external CSS stylesheet. The body contains a div with an ID of "app" and a message that appears if JavaScript is not enabled on the user's browser. | homepage/public/index.html |

</details>

<details closed><summary>Root</summary>

| File             | Summary                                                                                                                                                                                                                                                                                                                                                      | Module           |
|:-----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------|
| Dockerfile       | The code snippet is a Dockerfile that helps build a ReactJS app and set up an Nginx server to serve the app. In stage 1, the app is built and packaged. In stage 2, Nginx is installed and configured to serve the app on ports 80 and 443. The SSL certificate and private key are also copied to their respective directories.                             | Dockerfile       |
| docker_deploy.sh | This bash script prepares environment variables, removes any existing Docker containers and images, configures an Nginx proxy to be in the same network as the host, builds the proxy, and runs it with specified ports and environment variables. The script is intended to automate the setup of a local LAN proxy server.                                 | docker_deploy.sh |
| prepare_env.sh   | This Bash script exports the hostname of the current machine as well as an authentication server URL that includes the hostname. The script then writes this URL to the React app's configuration file in the'homepage' directory.                                                                                                                           | prepare_env.sh   |
| nginx.conf       | This code snippet defines an NGINX server configuration that listens on ports 80 and 443. It also contains location directives that define how incoming requests should be handled for various endpoints such as a homepage, a clipboards app, a tech-sheets app, and a go-auth server. The server also includes SSL configuration for secure communication. | nginx.conf       |

</details>

<details closed><summary>Src</summary>

| File     | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Module                |
|:---------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------|
| index.js | The given code imports React, creates a root element using React-DOM and renders the React component'App.js' to the HTML element with ID'app' in the DOM. This allows the application to be displayed in the browser.                                                                                                                                                                                                                                                     | homepage/src/index.js |
| App.js   | The code snippet creates an AppContext using React's createContext and useState hooks to store an array of objects representing different apps, with their ids and names. It also stores a state selected_app_id using useState, which is initially null, but can be set to the id of the selected app. The AppContext.Provider wraps the Router component and provides the context to its child components. The Home component is rendered for the root path of the app. | homepage/src/App.js   |

</details>

---

## 🚀 Getting Started

<!-- ### ✅ Prerequisites

Before you begin, ensure that you have the following prerequisites installed:
> - [📌  PREREQUISITE-1]
> - [📌  PREREQUISITE-2]
> - ... -->

### 🖥 Installation

1. Clone the lan-reverse-proxy repository:
```sh
git clone ../lan-reverse-proxy
```

2. Change to the project directory:
```sh
cd lan-reverse-proxy
```

3. Install the dependencies:
```sh
npm install
```

### 🤖 Using lan-reverse-proxy

```sh
node app.js
```

<!-- ### 🧪 Running Tests
```sh
npm test
``` -->

---


## 🗺 Roadmap

> - [ ] [📌  Task 1: Implement Unit Tests]


---

## 🤝 Contributing

Contributions are always welcome! Please follow these steps:
1. Fork the project repository. This creates a copy of the project on your account that you can modify without affecting the original project.
2. Clone the forked repository to your local machine using a Git client like Git or GitHub Desktop.
3. Create a new branch with a descriptive name (e.g., `new-feature-branch` or `bugfix-issue-123`).
```sh
git checkout -b new-feature-branch
```
4. Make changes to the project's codebase.
5. Commit your changes to your local branch with a clear commit message that explains the changes you've made.
```sh
git commit -m 'Implemented new feature.'
```
6. Push your changes to your forked repository on GitHub using the following command
```sh
git push origin new-feature-branch
```
7. Create a pull request to the original repository.
Open a new pull request to the original project repository. In the pull request, describe the changes you've made and why they're necessary.
The project maintainers will review your changes and provide feedback or merge them into the main branch.

---

## 📄 License

This project is licensed under the `Apache-2.0` License. See the [LICENSE](LICENSE) file for additional info.

---

## 👏 Acknowledgments

> - Personal Project

---


## Credits

This awesome documentation was automatically generated using the [README-AI Project](https://github.com/eli64s/README-AI)

---