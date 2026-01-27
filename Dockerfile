FROM node:22.12.0-alpine AS base

ENV NEXT_TELEMETRY_DISABLED=1 NODE_ENV=production YARN_VERSION=4.9.1

ARG OASIS_API_KEY
ARG GIFTS_RU_LOGIN
ARG GIFTS_RU_PASSWORD
ARG ADMIN_DATABASE_URI
ARG CLIENT_DATABASE_URI
ARG PAYLOAD_SECRET

ENV OASIS_API_KEY=${OASIS_API_KEY}
ENV GIFTS_RU_LOGIN=${GIFTS_RU_LOGIN}
ENV GIFTS_RU_PASSWORD=${GIFTS_RU_PASSWORD}
ENV ADMIN_DATABASE_URI=${ADMIN_DATABASE_URI}
ENV CLIENT_DATABASE_URI=${CLIENT_DATABASE_URI}
ENV PAYLOAD_SECRET=${PAYLOAD_SECRET}

RUN apk update && apk upgrade && apk add --no-cache libc6-compat dumb-init openssl

RUN corepack enable && corepack prepare yarn@${YARN_VERSION}

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

FROM base AS builder
WORKDIR /app

COPY . .
COPY package.json yarn.lock .yarnrc.yml ./
RUN yarn install
RUN yarn build

FROM base AS runner
WORKDIR /app

COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]
