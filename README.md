# REST API Project with Weather Data and Kubernetes Deployment
## Project Overview
This project demonstrates the development, deployment, and management of a REST API application. The API provides basic system information and weather data for Dhaka, retrieved from a third-party weather API. The application is containerized using Docker, and a CI/CD pipeline is configured to automate the deployment process. The infrastructure is managed using Terraform to create a Kubernetes cluster for deployment.

## Features
REST API Endpoints:
- `/api/hello:` Returns the hostname, current datetime, API version, and weather data for Dhaka.
- `/api/health:` Provides health check information for the application.

Docker Containerization:
- The application is containerized using Docker with an optimized and secure Dockerfile.

CI/CD Pipeline:
- Configured to trigger on new releases.
- Builds and pushes Docker images to a public Docker Hub registry.
- Uses release versions to tag Docker images.

Kubernetes Deployment:
- Infrastructure managed with Terraform to create a Kubernetes cluster.
- Kubernetes manifests for deploying the application.
- Secure handling of third-party API credentials using Kubernetes secrets or config maps.

## Conclusion
This project provides a comprehensive example of developing a REST API, containerizing the application, and deploying it to a Kubernetes cluster using Terraform. The inclusion of a CI/CD pipeline ensures that the deployment process is automated and consistent. By following the provided steps, you can extend and adapt this project to suit your specific needs and deployment environments.


