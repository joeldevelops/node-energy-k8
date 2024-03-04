# NestJS Comics API for Energy Measurement

This is a simple API for managing users, their comics, and their various collections. It is built using NestJS and Prisma for use in a kubernetes node run on a Raspberry PI.

## Installation

```bash
$ npm install
```

## Setup

```bash
$ cp .env.example .env
```

You will also need a PG instance to run this app. You can use the following docker command to start a PG instance:

```bash
$ docker run -d -p '5432:5432' -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres --name comic-pg postgres
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

The app is designed to be deployed in a kubernetes cluster. The IaC can be found in the `./deploy` folder as a set of kustomize files. You can use the following command to deploy the app:

```bash
$ kubectl apply -k deploy/overlays/node
```

For this to work, ensure you've pushed the latest version to your docker registry and updated the image in the `kustomization.yaml` and `deployment.yaml` files.

## License

Nest is [MIT licensed](LICENSE).
