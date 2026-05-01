import { Child } from 'hono/jsx'
import { Navigation } from '@/pages/-navigation'
import Footer from '@/pages/-footer'

interface BaseLayoutProps {
  children: Child
  title: string
}

export function BaseLayout({children}: BaseLayoutProps) {
  return (
    <div>
      <Navigation />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}
