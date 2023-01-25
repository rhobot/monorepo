# rhobot/monorepo

## Overview

A working example of a monorepo with pnpm workspace and a few projects.

## Features

1. Each sub-project was created with Vite.
1. tsconfig.json, ESLint config, and Prettier config were made as reusable packages and use them in all other packages.

## Folder structure

```
/pnpm-workspace-example
  .prettierrc.json
  tsconfig.json
  /packages
    /apps
      /app1
      /app2
    /shared
      /components
        Component1.tsx
        Component2.tsx
      /utils
        validator.ts
    /dev
      /eslint-config-custom
      /tsconfig
      /prettier-config
```

## Resource

1. [ESLint in a monorepo](https://turbo.build/repo/docs/handbook/linting/eslint)
