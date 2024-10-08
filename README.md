﻿# Interview Assessment Project
This project demonstrates handling CSV file data with Django, visualizing it with a frontend framework, and Dockerizing the application. It provides a complete solution for importing, and visualizing data from CSV files.

## Features
- **CSV File Import**: Import data from multiple CSV files into Django models.
- **Data Visualization**: Visualize the imported data using a React frontend.
- **Dockerization**: Package the application with Docker for easy deployment.

## Prerequisites
Before you begin, ensure you have the following installed:

- [Python 3.12](https://www.python.org/downloads/)
- [Node.js and npm](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Getting Started

1. **Clone the Repository**:
   ```bash
   https://github.com/kavindu-vk/interview-assessment----django.git
   cd interview-assessment----django
   ```
   ### Backend Setup
   
1. Backend Setup

    ```bash
    python -m venv eenv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```
2. Install Backend Dependencies

    ```bash
    pip install -r backend/requirements.txt
    ```
3. Apply Migrations

    ```bash
    python backend/manage.py makemigrations
    python backend/manage.py migrate
    ```
4. Run the Development Server

    ```bash
    python backend/manage.py runservers
    ```

    ### Frontend Setup

1. Navigate to the Frontend Directory

    ```bash
    cd my-frontend
    ```
2. Install Frontend Dependencies

    ```bash
    npm install
    ```
3. Run the Frontend Development Server

    ```bash
    npm start
    ```

     ### Dockerization
   
1. Build Docker Images

    ```bash
    docker-compose build
    ```
2. Run Docker Containers

    ```bash
    docker-compose up
    ```
## Contributing
Feel free to contribute by forking the repository and submitting pull requests. For issues or feature requests, please open an issue in the repository.
    
