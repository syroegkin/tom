FROM node:8.11.3-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app
# npm or yarn, it has both. yarn is faster
COPY yarn.lock /usr/src/app
RUN yarn

# Get all source
COPY . /usr/src/app

# Build this
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
