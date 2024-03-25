FROM ghcr.io/openfaas/of-watchdog:0.9.15 as watchdog

FROM public.ecr.aws/docker/library/node:20-alpine as install

WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM public.ecr.aws/docker/library/node:20-alpine as ship

RUN mkdir -p /app

COPY --from=watchdog /fwatchdog /usr/bin/fwatchdog
RUN chmod +x /usr/bin/fwatchdog

WORKDIR /app

COPY --from=install /app .
COPY . .
RUN npx prisma generate && npm run build

# Populate example here - i.e. "cat", "sha512sum" or "node index.js"
ENV fprocess="npm run start:prod"
# Set to true to see request in function logs


ENV mode="http"
ENV upstream_url="http://127.0.0.1:4015"


HEALTHCHECK --interval=3s CMD [ -e /tmp/.lock ] || exit 1

CMD ["fwatchdog"]
