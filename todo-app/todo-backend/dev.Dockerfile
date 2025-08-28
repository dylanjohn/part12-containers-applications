# Use official Node.js runtime as base image
FROM node:16

# Set working directory in container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install all dependencies (including devDependencies for development)
RUN npm install

# Copy rest of application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Use the dev script which runs nodemon
CMD ["npm", "run", "dev"]