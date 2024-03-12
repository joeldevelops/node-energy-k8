FROM public.ecr.aws/docker/library/node:20 as install

WORKDIR /app
COPY package*.json ./
RUN npm ci


FROM public.ecr.aws/docker/library/node:20 as build

WORKDIR /app
COPY --from=install /app .
COPY . .
RUN npx prisma generate && npm run build

FROM public.ecr.aws/docker/library/node:20 as run

WORKDIR /app
COPY --from=build /app .

CMD ["npm", "run", "start:prod"]