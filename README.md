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
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Archive docs version

run commad to package version 0.x docs

```
yarn docusaurus docs:version 0.x
```

### generate i18n json config

```
yarn write-translations --locale zh
yarn write-translations --locale en
```

### update version json

add i18n version `version-vx.x.json` file in dir `i18n/en/docusaurus-plugin-content-docs` if not exists
add i18n version `version-vx.x.json` file in dir `i18n/zh/docusaurus-plugin-content-docs` if not exists

and then update them content `version.label.message` to correct version if it incorrect.

### build i18n dist 

```
yarn build --locale zh
```