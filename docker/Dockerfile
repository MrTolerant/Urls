#--------------------------------------STAGE 1-----------------------------
FROM node:alpine AS node
CMD [ "yarn","start" ]
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn build --scripts-prepend-node-path --silent --only=production --ignore-optional
#--------------------------------------STAGE 2-----------------------------
FROM nginx:alpine
WORKDIR /app/
COPY --from=node /app/dist/ /app/public/
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
