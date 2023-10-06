import { styled } from '../styles'

const Button = styled('button', { 
  backgroundColor: '$green300',
  borderRadius: 4,
  border: 0,
  padding: '4px 8px',
  width: 200,

  '&:hover': {
    backgroundColor: '$green500',
  },
})

export default function Home() {
  return (
    <>
      <h1>Ignite Shop</h1>
      <Button>Search</Button>
    </>
  )
}
