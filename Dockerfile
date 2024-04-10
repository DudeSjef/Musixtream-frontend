FROM node:21-alpine
WORKDIR /musixtream
ENV NODE_ENV development
ENV PORT 3000
EXPOSE 3000
COPY ./package*.json .
RUN npm install
COPY . .

CMD ["npm", "start"]