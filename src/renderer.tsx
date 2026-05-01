import { jsxRenderer } from 'hono/jsx-renderer'
import { Link, ViteClient } from 'vite-ssr-components/hono'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html>
      <head>
        <ViteClient />
        <Link href="/src/styles/globals.css" rel="stylesheet" />
        <title>Your Inbox on the Edge - Flarebox</title>
      </head>
      <body>{children}</body>
    </html>
  )
})
