/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as UserManagementImport } from './routes/user-management'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const UserManagementRoute = UserManagementImport.update({
  path: '/user-management',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/user-management': {
      id: '/user-management'
      path: '/user-management'
      fullPath: '/user-management'
      preLoaderRoute: typeof UserManagementImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  UserManagementRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/user-management"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/user-management": {
      "filePath": "user-management.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
