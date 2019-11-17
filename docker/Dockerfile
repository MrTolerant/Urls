#           STAGE 1
FROM node:alpine as build
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
RUN yarn cache clean && \
    yarn install --no-progress --ignore-optional && \
    npm config set scripts-prepend-node-path true
COPY . .
RUN yarn run build
CMD [ "yarn", "run", "start" ]

# build app
#RUN yarn run build
# Production Environment


#           STAGE 2
#FROM nginx
# Copy builded app to Nginx
#COPY --from=build /app/dist/assets /usr/share/nginx/html
#COPY --from=build /app/nginx.conf /etc/nginx/nginx.conf
# Map port 80 on host to contaiter
#EXPOSE 80
# Run Nginx
#CMD ["nginx", "-g", "daemon off;"]