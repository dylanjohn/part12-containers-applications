# Build stage
FROM node:18 AS build

WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install all dependencies (needed for build)
RUN npm ci

# Copy source code
COPY . .

# Set production backend URL
ENV VITE_BACKEND_URL=http://localhost/api

# Build the app
RUN npm run build

# Production stage
FROM nginx:1.25-alpine

# Copy built files to nginx
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Nginx runs on port 80 by default
EXPOSE 80