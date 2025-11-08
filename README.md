# NestJS Feature Structure

This repository shows a simple NestJS project that follows a feature-first layout. Every feature has its own folder with the code it needs. The example feature is **offers**, and it is split into several layers.

## Requirements

- Node.js 18 or newer
- npm 9 or newer

## Getting started

```bash
npm install
npm run start:dev
```

## npm scripts

| Script | Description |
| ------ | ----------- |
| `npm run start` | Start the app in production mode. |
| `npm run start:dev` | Start the app in watch mode for development. |
| `npm run test` | Run unit tests. |
| `npm run test:watch` | Run unit tests in watch mode. |
| `npm run test:e2e` | Run end-to-end tests. |
| `npm run lint` | Check the code with ESLint. |

## Project structure

```
src/
├── app.module.ts        # Root module of the NestJS app
├── features/            # All feature modules live here
│   └── offers/          # Offer feature folder
│       ├── offers.module.ts      # Entry point that connects the offer layers
│       ├── application/          # Use cases and services that coordinate the feature
│       │   └── application.module.ts
│       ├── domain/               # Domain objects and business rules for offers
│       ├── infrastructure/       # Adapters for database and other external systems
│       │   └── infrastructure.module.ts
│       ├── presenters/           # Controllers or resolvers that expose the feature
│       │   └── presenters.module.ts
│       └── tests/                # Unit and integration tests for the feature
└── main.ts               # App bootstrap file
```

The **offers** feature is the main example in this project. Each layer has a single job:

- **Application** layer calls the domain logic and prepares data for the outside world.
- **Domain** layer keeps the core rules for offers.
- **Infrastructure** layer talks to databases or APIs and returns data in a format the domain can use.
- **Presenters** layer delivers the feature through HTTP or another interface.
- **Tests** layer stores scenarios that cover each part of the feature.

This layout keeps the code easy to read and safe to change. You can add new features by copying the same folder structure inside `src/features`.

## Testing

```bash
npm run test
```

## License

MIT
