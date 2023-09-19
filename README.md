# ikaros

This ikaros docs is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
yarn
```

### Local Development

```
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### publish docs version

```
yarn docusaurus docs:version 2.0
```

### generate i18n json config

```
yarn write-translations --locale zh
```

### build i18n dist 

```
yarn build --locale zh
```