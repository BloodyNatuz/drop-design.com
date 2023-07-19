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
      <div className={roboto.className}>
        <h1 className={montserrat.className}>DROP DESIGN</h1>
        <SpanAleatColor />
        
        <a href="#">
          <div class="body-display">
              <div class="box-display">
                  <div class="circle anim-pulse">
                    <div class="circle2">
                      <div class="circle3 anim-pulse">
                      </div>                 
                    </div>
                  </div>
              </div>
          </div>
        </a>
      </div>
    </main>
  )
}