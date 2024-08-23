import { Button } from '@/components/ui/button'

export function App() {
  return (
    <div>
      <Button variant="primary" as="a" href={'/link'}>
        Hello
      </Button>
      <Button variant="primary" href={'/link'}>
        Hello
      </Button>
    </div>
  )
}
