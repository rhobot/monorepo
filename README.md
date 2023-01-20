# pnpm-workspace-example

## Overview

A working example of a monorepo with pnpm workspace.

## Features

1. Each sub-project was created with Vite.
1. Set up TypeScrip, ESLint, Prettier "globally" by creating their own packages and getting them imported in other packages.

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
```

## Resource

1. [ESLint in a monorepo](https://turbo.build/repo/docs/handbook/linting/eslint)
