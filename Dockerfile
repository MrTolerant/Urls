#           STAGE 1
# base image
FROM node:12.10.0-alpine as build
# set working directory
#RUN mkdir /app
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
# install and cache app dependencies
RUN node -v && yarn install --no-progress --ignore-optional
COPY . .
EXPOSE 80
CMD [ "yarn", "start" ]

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