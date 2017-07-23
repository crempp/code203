FROM node:8.2.1

COPY . /app

WORKDIR /app

RUN npm install

EXPOSE 8080

# Launch application
CMD ["npm","start"]
