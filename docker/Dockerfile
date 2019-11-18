#--------------------------------------STAGE 1-----------------------------

FROM node:alpine AS nodeServer
CMD [ "yarn","start" ]
WORKDIR /app
COPY . .
RUN yarn install --scripts-prepend-node-path --force && yarn build --silen --only=production --ignore-optional

#--------------------------------------STAGE 2-----------------------------

FROM nginx:alpine AS webServer
WORKDIR /app/
COPY --from=nodeServer /app/dist/ /app/public/
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
