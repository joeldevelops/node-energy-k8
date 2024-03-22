FROM ghcr.io/openfaas/classic-watchdog:0.2.3 as watchdog

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
ENV write_debug="false"
ENV cgi_headers="true"
ENV mode="http"
ENV upstream_url="http://127.0.0.1:4016"

ENV exec_timeout="10s"
ENV write_timeout="15s"
ENV read_timeout="15s"

EXPOSE 8080

HEALTHCHECK --interval=3s CMD [ -e /tmp/.lock ] || exit 1

CMD ["fwatchdog"]
