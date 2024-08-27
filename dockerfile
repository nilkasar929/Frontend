# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /EMPLOYEE_MANAGEMENT

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Install a simple HTTP server to serve the static files
RUN npm install -g serve

# Set the command to serve the built app using the HTTP server
CMD ["serve", "-s", "build"]

# Expose the port that the app will run on
EXPOSE 3000
