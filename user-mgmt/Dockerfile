FROM node:20.12.2

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /usr/src/app
COPY package*.json ./
RUN pnpm i

COPY ./src ./src
COPY ./env ./env
COPY ./tsconfig.json ./tsconfig.json

CMD pnpm dev