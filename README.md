# Docker Node.js, PostgreSQL, and Redis App

This project was created as a learning exercise to study and improve my Docker skills. It demonstrates how to containerize a Node.js application with a PostgreSQL database and Redis cache using Docker.

## Features

- Node.js backend
- PostgreSQL database
- Redis cache
- Dockerized environment with `docker-compose`

## Prerequisites

- Docker
- Docker Compose

## Getting Started

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/docker-node-postgres-redis-app.git

    # Enter in the app folder
    cd docker-node-postgres-redis-app
    ```

2. Start the containers:
    ```bash
    docker-compose up
    ```

3. Install Node.js dependencies:
    ```bash
    docker-compose exec app npm install
    ```

4. Run database migrations:
    ```bash
    docker-compose exec app npm run migrate
    ```

5. Start the application:
    ```bash
    docker-compose exec app npm start
    ```

6. Access the application:
    - The Node.js app will be running at `http://localhost:3000`
    - PostgreSQL will be accessible on port `5432`
    - Redis will be accessible on port `6379`

## Purpose

This project was built to practice:

- Setting up multi-container Docker environments.
- Managing containerized applications with Docker Compose.
- Integrating Node.js with PostgreSQL and Redis in a Dockerized setup.  