# ---- Базовый Node ----
FROM node:carbon AS base
# Создать директорию app
WORKDIR /app

# ---- Зависимости ----
FROM base AS dependencies
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install

# ---- Скопировать файлы/билд ----
FROM dependencies AS build
WORKDIR /app
COPY . .
RUN npm rebuild node-sass && yarn run build

# --- Выпуск, используя Alpine ----
FROM node:alpine AS release
WORKDIR /app
COPY --from=dependencies /app/package.json ./
#USER node
RUN yarn install --only=production --ignore-optional
COPY --from=build /app ./
#COPY --chown=node:node . .

CMD [ "yarn", "run", "start" ]
