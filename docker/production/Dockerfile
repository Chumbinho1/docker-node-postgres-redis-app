# Build stage
ARG NODE_VERSION=22
FROM node:${NODE_VERSION}-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Run the application
CMD ["npm", "start"]