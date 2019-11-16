#           STAGE 1
# base image
FROM node:12.10.0-alpine as build
# set working directory
RUN mkdir /app
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
# install and cache app dependencies
RUN yarn && yarn add react-scripts
COPY . /app/
# build app
RUN yarn run build
# Production Environment

#           STAGE 2
FROM nginx:1.16.1-alpine
# Copy builded app to Nginx
COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/nginx.conf
# Map port 80 on host to contaiter
EXPOSE 80
# Run Nginx
CMD ["nginx", "-g", "daemon off;"]