(NOT READY)

This is a simple PERN-stack template. It includes Postgres, Express, Node (TypeScript) and React (TypeScript) + Docker configuration.

REQUIREMENTS:
- Docker installed in your system

INSTALLATION:
- Add .env file to project root or edit .env-example and add required environment values
- Add a second .env file to the root of frontend folder and add following parameter
  
  CHOKIDAR_USEPOLLING=true

  This enables hot reloading when React is running in Docker container

- Run docker-compose up --build on your command line at the project root and you should be ready to go!