#--------------------------------------STAGE 1-----------------------------
FROM node:latest AS nodeServer
CMD [ "yarn","start" ]
WORKDIR /app
COPY . .
RUN npm config set scripts-prepend-node-path true && \
    yarn install --no-optional && \
    yarn client:install && \
    yarn client:build
#--------------------------------------STAGE 2-----------------------------
FROM nginx:latest AS webServer
WORKDIR /app
COPY --from=nodeServer /app/build/ /app/public/
COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf
