# ikaros

This ikaros docs is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
yarn
```

### Local Development

```
yarn start
yarn start --locale en
yarn start --locale jp
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### publish docs version

run commad to package version 0.6 docs

```
yarn docusaurus docs:version 0.6
```

add i18n version `version-vx.x.json` file in dir `i18n/en/docusaurus-plugin-content-docs`

add version num in x.x `versions.json`

### generate i18n json config

```
yarn write-translations --locale zh
```

### build i18n dist 

```
yarn build --locale zh
```