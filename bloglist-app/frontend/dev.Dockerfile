FROM node:18

WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies including dev dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port Vite dev server runs on
EXPOSE 5173

# Start Vite dev server
CMD ["npm", "run", "dev", "--", "--host"]