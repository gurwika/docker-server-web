FROM node

# Install typescript
RUN npm install -g typescript

# Create app directory
RUN mkdir -p /usr/app
WORKDIR /usr/app

# Install app dependencies
COPY package.json /usr/app/

RUN npm install

# RUN npm install sharp --save

# If you are building your code for production
#RUN npm ci --only=production

# Bundle app source
COPY . /usr/app

RUN npm run build
COPY .env.prod ./dist/
COPY .env.example ./dist/
WORKDIR /dist

EXPOSE 3005
CMD NODE_ENV=prod node src/index.js