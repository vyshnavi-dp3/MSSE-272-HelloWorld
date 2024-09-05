
## Project Overview:
The goal of this project is to build a simple "Hello World" microservices application using Node.js with Express.js, containerized with Docker, and deployed on Kubernetes. This project will help you understand the basic concepts of microservices architecture, containerization, and Kubernetes deployment.

## Application Architecture:
The project consists of three microservices:

Hello Service: Returns the string "Hello".

World Service: Returns the string "World".

HelloWorld Service: Combines the responses from the Hello and World services to return "Hello World".

These microservices will be individually containerized using Docker, and the application will be deployed on a Kubernetes cluster for orchestration using minikube.

## Project Steps:
### 1. Development Environment Setup
Before starting the project, ensure you have the following tools installed:

**Node.js** (version 16 or higher)
**Docker** (for containerization)
**Kubernetes** with Minikube (for local Kubernetes clusters)
**Git** (for version control)
### 2. Microservices Implementation
**Hello Service:**

_Endpoint_: /hello

_Response_: Returns the string "Hello".

_Port_: 8000

**World Service:**

_Endpoint_: /world

_Response_: Returns the string "World".

_Port_: 8001

**HelloWorld Service:**

_Endpoint_: /helloworld

_Response_: Combines the responses from the Hello and World services to return "Hello World".

_Port_: 8002

### 3. Dockerization

Each microservice will be containerized using Docker. A Dockerfile will be created for each microservice, and Docker images will be built and run locally to ensure that they function independently.

### 4. Kubernetes Deployment

Using Minikube, you will deploy the microservices to a Kubernetes cluster. Kubernetes manifests will be created for each microservice, defining their deployment and services to ensure proper communication between them.

### 5. Integration and Testing

The HelloWorld Service will fetch responses from the Hello and World microservices.
Each service will be exposed through Kubernetes, and the combined message "Hello World" should be accessible via the HelloWorld Service.
Setup Instructions

**A. Prerequisites**
Install Node.js from Node.js official website.

Install Docker from Docker official website.

Install Minikube from Minikube Installation Guide.

Set up Git for version control.

**B. Cloning the Repository**

Clone or initialize a Git repository for your project:

```
git clone <your-repository-url>

```
**C. Running the Microservices Locally**

Navigate to each microservice folder (HelloService, WorldService, HelloWorldService).
_Install dependencies: HelloService, WorldService_
```
npm init
npm install express

```
_For HelloWorldService Install: HelloWorldService_

```
npm init
npm install express
npm install axios

```
_Run each microservice:_

```
node index.js

```
**D. Building Docker Images**
For each microservice, build Docker images and push images to docker hub for minikube to recognise:
```
docker build -t <your-dockerId>/<service-name> .
docker push <your-dockerId>/<service-name>

```

**E. Docker Hub container for three Microservices :**

HelloService : https://hub.docker.com/repository/docker/vyshnavidp/hello-service/general

WorldService : https://hub.docker.com/repository/docker/vyshnavidp/world-service/general

HelloWorldService : https://hub.docker.com/repository/docker/vyshnavidp/hello-world-service/general

**F. Deploying to Kubernetes**

Start Minikube:
```
minikube start

```

_Apply the Kubernetes manifests:deployment,service files_

```
kubectl apply -f <manifest-file>.yaml

```
_Access the services via the Minikube service command:_

```
minikube service <service-name>

```

## Testing and Validation
Ensure that the Hello service returns "Hello".
Ensure that the World service returns "World".
Access the HelloWorld service and confirm that it returns the combined message "Hello World".

## Conclusion:
This project demonstrates the use of microservices architecture using Node.js, Docker, and Kubernetes. You will learn to containerize services, deploy them on a Kubernetes cluster, and test their integration, laying the foundation for working with modern cloud-native applications.
