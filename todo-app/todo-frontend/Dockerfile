FROM node:20 AS dependencies
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci

FROM dependencies AS test-stage
COPY . .
# Run tests
RUN npm run test
# Create a marker file to prove tests passed
RUN echo "tests-passed-$(date)" > test-results.txt

FROM test-stage AS build-stage

# Set the backend URL environment variable before building
ENV VITE_BACKEND_URL=http://localhost/api
RUN npm run build

FROM nginx:1.25-alpine
COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html
# Optional: Copy test results for verification
COPY --from=test-stage /usr/src/app/test-results.txt /tmp/