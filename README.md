# DevSecOps CI/CD Pipeline with Docker

End-to-end DevSecOps laboratory project implementing a complete CI/CD pipeline
with automated security controls integrated into each stage of the software lifecycle.

## 🔐 Project Overview

This project demonstrates how to integrate security practices into a DevOps
workflow using the DevSecOps methodology. The pipeline automates testing,
building, security scanning and deployment of a vulnerable Node.js application.

The environment was deployed using Docker and Docker Compose and executed
originally on a cloud-based virtual machine (Azure).

## 🛠️ Tools & Technologies

* Docker & Docker Compose
* GitLab CE & GitLab Runner
* SonarQube (SAST)
* Trivy (SCA)
* OWASP ZAP (DAST)
* Node.js

## 🔄 CI/CD Pipeline Stages

* **Test** – Dependency installation and basic application tests
* **Build** – Docker image creation
* **SAST** – Static code analysis using SonarQube
* **SCA** – Dependency and filesystem vulnerability scanning with Trivy
* **DAST** – Dynamic security testing using OWASP ZAP
* **Deploy** – Containerized application deployment for testing

## 📁 Repository Structure

```
devsecops-pipeline/
├── docker-compose.yml
├── ci-image/
│   └── Dockerfile
├── proyecto/
│   └── final/
│       ├── Dockerfile
│       ├── package.json
│       ├── prueba.js
│       └── sonar-project.properties
└── docs/
    └── Proyecto_DevSecOps.pdf
```

## 📄 Documentation

A detailed academic report explaining the architecture, DevSecOps methodology,
implementation details, and security results of this project is available in the
docs directory.

## 🎓 Context

This project was developed as part of an academic course focused on DevSecOps
and secure CI/CD pipelines, with emphasis on practical, industry-aligned security
tooling and real-world CI/CD environments.
