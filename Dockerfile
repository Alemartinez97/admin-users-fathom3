# FROM node:alpine

# RUN mkdir -p /usr/src/node-app && chown -R node:node /usr/src/node-app

# WORKDIR /usr/src/node-app

# USER node

# COPY --chown=node:node . .

# RUN npm install

# EXPOSE 3002

FROM node:16-alpine
ENV NODE_ENV development
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install --legacy-peer-deps
# Copy app files
COPY . .
# Expose port
EXPOSE 3000
# Start the app
CMD [ "npm", "start" ]