import { Button } from '@/components/ui/button'

export const App = () => {
  return (
    <Button as={'a'} href={'/link'} variant={'primary'}>
      Hello
    </Button>
  )
}
