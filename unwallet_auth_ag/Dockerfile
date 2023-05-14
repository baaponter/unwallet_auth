FROM node:carbon-slim

# Create app directory
WORKDIR /unwallet_auth

# Install app dependencies
COPY package.json /unwallet_auth/
RUN npm install

# Bundle app source
COPY . /unwallet_auth/
RUN npm run prepublish

CMD [ "npm", "run", "runServer" ]
