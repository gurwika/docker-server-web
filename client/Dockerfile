FROM node

# Install http-server
RUN npm install -g http-server

# Create app directory
WORKDIR /usr/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# RUN npm install sharp --save

# If you are building your code for production
#RUN npm ci --only=production

# Bundle app source
COPY . .

RUN npm run build

EXPOSE 8005
CMD http-server -p 8005 ./build