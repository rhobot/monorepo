# pnpm-workspace-example

## Overview

A working example of a monorepo with pnpm workspace.

## Features

1. Each sub-project was created with Vite.
1. Globally set up Prettier, ESLint, and TypeScript check by placing their settings to the root.

## Folder structer

```
/pnpm-workspace-example
  .prettierrc.json
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
```
