<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/CodecoolGlobal/el-proyecte-grande-sprint-1-java-Pisti332">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Photobox</h3>

  <p align="center">
    Our biggest, and final project, made in the closing section of Codecool. It is a full stack
picture sharing App, with login and comment sections, Spring Security and JPA with
PostgreSQL DB connection.
    <br />
    <a href="https://github.com/CodecoolGlobal/el-proyecte-grande-sprint-1-java-Pisti332"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/CodecoolGlobal/el-proyecte-grande-sprint-1-java-Pisti332">View Demo</a>
    ·
    <a href="https://github.com/CodecoolGlobal/el-proyecte-grande-sprint-1-java-Pisti332/issues">Report Bug</a>
    ·
    <a href="https://github.com/CodecoolGlobal/el-proyecte-grande-sprint-1-java-Pisti332/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

![Product Name Screen Shot][product-screenshot]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

-   [![React][React.js]][React-url]
-   [![Spring-Security][Spring-Security]][Spring-Security-url]
-   [![Javascript][Javascript]][Javascript-url]
-   [![Java][Java]][Java-url]
-   [![Spring][Spring]][Spring-url]
-   [![PostgreSQL][PostgreSQL]][PostgreSQL-url]
-   [![MUI][MUI]][MUI-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

The easiest way to run and try the application, is via using Docker Desktop.
To get a local copy up and running follow these simple example steps.

### Prerequisites

- Maven to compile and create a .jar file.
- Docker Desktop, or equivalent (Docker compose is needed), to run the containers.

### Installation

1. Clone the repo
    ```sh
    git clone https://github.com/CodecoolGlobal/el-proyecte-grande-sprint-1-java-Pisti332.git
    ```
2. Complie a .jar file with maven, by running the following command in the photobox_backend folder
```sh
    ./photobox_backend/mvn package
```
3. [OPTIONAL] Modify the usernames and passwords in the docker-compose.yml file if you want something different  than the default settings.

4. Run Docker-compose in the backend folder
    ```sh
    ./photobox_backend/docker compose up
    ```
5. Open the local port 8080 with your browser, when the compose is ready: http://localhost:8080/

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

This application can be used for basic social-media sharing of photos, and commenting on them. Users can register and only comment with their own username. Photos are all stored on the docker volume of the application. The frontend is designed to work on mobile phones and smaller screens as well, you can try that out either in the browser, or exposing the 8080 port on your local network, and then by opening the page on any device on your local network.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

-   [ ] Basic Frontend design, and starter API endpoints in Spring.
-   [ ] Create and connect to the DB using JPA.
-   [ ] Add a Spring Security layer to the app, with stateless server and JWT token handling.
-   [ ] Dockerize the application, to make it easily runnable on any machine, that has docker.

See the [open issues](https://github.com/CodecoolGlobal/el-proyecte-grande-sprint-1-java-Pisti332/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Gábor Tamaskó - tamaskogabo@gmail.com

Project Link: [https://github.com/CodecoolGlobal/el-proyecte-grande-sprint-1-java-Pisti332](https://github.com/CodecoolGlobal/el-proyecte-grande-sprint-1-java-Pisti332)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## The team, and acknowledgements

-   István Varga - https://www.linkedin.com/in/varga-istvan-p1/
-   Csaba Katona
-   Gábor Tamaskó - https://linkedin.com/in/tamaskogabo

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/CodecoolGlobal/el-proyecte-grande-sprint-1-java-Pisti332.svg?style=for-the-badge
[contributors-url]: https://github.com/CodecoolGlobal/el-proyecte-grande-sprint-1-java-Pisti332/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/CodecoolGlobal/el-proyecte-grande-sprint-1-java-Pisti332.svg?style=for-the-badge
[forks-url]: https://github.com/CodecoolGlobal/el-proyecte-grande-sprint-1-java-Pisti332/network/members
[stars-shield]: https://img.shields.io/github/stars/CodecoolGlobal/el-proyecte-grande-sprint-1-java-Pisti332.svg?style=for-the-badge
[stars-url]: https://github.com/CodecoolGlobal/el-proyecte-grande-sprint-1-java-Pisti332/stargazers
[issues-shield]: https://img.shields.io/github/issues/CodecoolGlobal/el-proyecte-grande-sprint-1-java-Pisti332.svg?style=for-the-badge
[issues-url]: https://github.com/CodecoolGlobal/el-proyecte-grande-sprint-1-java-Pisti332/issues
[license-shield]: https://img.shields.io/github/license/CodecoolGlobal/el-proyecte-grande-sprint-1-java-Pisti332.svg?style=for-the-badge
[license-url]: https://github.com/CodecoolGlobal/el-proyecte-grande-sprint-1-java-Pisti332/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/tamaskogabo
[product-screenshot]: images/Photoboxshot.jpg
[Javascript]: https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white
[Javascript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[Spring]: https://img.shields.io/badge/spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white
[Spring-url]: https://spring.io/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Spring-Security]: https://img.shields.io/badge/springsecurity-000000?style=for-the-badge&logo=springsecurity&logoColor=4FC08D
[Spring-Security-url]: https://spring.io/projects/spring-security
[PostgreSQL]: https://img.shields.io/badge/postgresql-4169E1?style=for-the-badge&logo=postgresql&logoColor=white
[PostgreSQL-url]: https://www.postgresql.org/
[MUI]: https://img.shields.io/badge/mui-007FFF?style=for-the-badge&logo=mui&logoColor=white
[MUI-url]: https://mui.com/
[Java]: https://img.shields.io/badge/java-F80000?style=for-the-badge&logo=oracle&logoColor=white
[Java-url]: https://www.oracle.com/java/
