import { Hono } from 'hono'
import HomePage from '@/pages/home'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

app.get('/', (c) => {
  return c.render(<HomePage />)
})

export default app
