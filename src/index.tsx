import { Hono } from 'hono'
import { Button } from '@/components/button'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

app.get('/', (c) => {
  return c.render(<div class='p-8'><Button>Click me</Button></div>)
})

export default app
