FROM node:18-alpine as build

WORKDIR /usr/src/app

ENV NODE_ENV=production

COPY package.json .
RUN npm i

COPY . .

RUN npm run build


FROM busybox:1.35

RUN adduser -D app
USER app

WORKDIR /home/app

COPY --from=build /usr/src/app/dist /home/app

CMD ["busybox", "httpd", "-f", "-v", "-p", "5000"]
