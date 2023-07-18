// Components
import SpanAleatColor from './components/client/baselineColorAleat'

// Custom Style
import main from './style/main.scss'

// Custom Font
import { Roboto } from 'next/font/google'
import { Montserrat } from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const montserrat = Montserrat({
  weight: '900',
  subsets: ['latin'],
  display: 'swap',
})

export default function Landing() {
  return (
    <main className='landing-page'>
      <h1 className={montserrat.className}>DROP DESIGN</h1>
      <SpanAleatColor className={roboto.className}/>
    </main>
  )
}