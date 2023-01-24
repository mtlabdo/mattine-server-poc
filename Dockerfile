FROM node:17

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm cache verify
RUN npm cache clean --force
RUN npm install --verbose
#RUN npm install --production
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY dist dist/

COPY .env .

EXPOSE 3004:3004

CMD ["npm","run","start"]
