# micro-frontend-template

A Simple Micro Front-end template example using Module Federation.

## What are micro frontends?

- A monolithic app divided into multiple, smaller apps
- Each app being responsible for a distinct feature of the product

It's a good idea to use micro frontends if there are multiple engineering teams. This allows each team to work in isolation. It's also easier to understand and make changes to smaller apps.

## Coordinating micro frontends

In order to coordinate each app, a third micro-frontend _Container_ works as the _host_. The _host_ (Container) is responsible for deciding when and where to show each micro frontend, the two _remotes_ _Products_ and _Cart_.

## Integration

This uses a run-time integration using _Webpack Module Federation_ as it seems to be the most flexible, performant solution currently.

## A note on Module Federation injecting code

If sub-projects are sharing any modules, it's important to add `shared: ["faker"],` in `webpack.config.js` within the _Module Federation_ plugin. This avoids multiple copies of the module being complied.

The _Host_ (Container) doesn't need the `shared` option because it's going to automatically see this when loading the `remoteEntry.js` files from the _Remote_ projects.

## Running the project

Within each sub-project's root, run:

- `npm install`
- `npm run start`.

- _container_ will run on port `http://localhost:8080/`
- _products_ will run on port `http://localhost:8081/`
- _cart_ will run on port `http://localhost:8082/`

Each sub-project can be developed in isolation.
