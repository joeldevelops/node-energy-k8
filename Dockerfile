FROM public.ecr.aws/docker/library/node:20 as install

WORKDIR /app
COPY package*.json ./
RUN npm ci && npx prisma generate


FROM public.ecr.aws/docker/library/node:20 as build

WORKDIR /app
COPY --from=install /app .
COPY . .
RUN npm run build

FROM public.ecr.aws/docker/library/node:20 as run

WORKDIR /app
COPY --from=build /app/dist ./dist

CMD ["npm", "run", "start:prod"]