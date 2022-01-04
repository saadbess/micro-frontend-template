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
