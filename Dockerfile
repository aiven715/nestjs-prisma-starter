FROM node:16-slim
WORKDIR /var/www

RUN apt-get update
# Required for Prisma
RUN apt-get install libssl-dev -y

COPY package.json yarn.lock ./
RUN yarn install

COPY . .
