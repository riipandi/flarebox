import { Hono } from 'hono'
import { renderer } from './renderer'
import { Hero01 } from '@/views/hero-01'

const app = new Hono()

app.use(renderer)

app.get('/', (c) => {
  return c.render(<Hero01 image={{src: 'https://kiwaui.com/public/screenshots/dashboard-overview-inset.png', alt:'Hero'}} />)
})

export default app
