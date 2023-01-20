# pnpm-workspace-example

## Overview

A working example of a monorepo with pnpm workspace.

## Features

1. Each sub-project was created with Vite.
1. Set up Prettier and TypeScript check globally for IDE by placing the settings in the root.
1. Set up ESLint "globally" by

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
```

## Resource

1. [ESLint in a monorepo](https://turbo.build/repo/docs/handbook/linting/eslint)
