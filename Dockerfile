# Usa la imagen oficial de Node.js
FROM node:8-alpine

RUN npm install -g typescript

# Set the working directory to /app
WORKDIR /app


# Make port 80 available to the world outside this container
EXPOSE 80
EXPOSE 9005

# Node http server
RUN npm install -g http-server


# Start the server
CMD http-server -p 80 .

