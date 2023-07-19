'use client'  

import SpanAleatColor from './components/client/baselineColorAleat'
import { motion } from "framer-motion"
import main from './style/main.scss'

export default function Landing() {
  return (
    <motion.main className='landing-page' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: .2 }}>
      <div>
        <h1>DROP DESIGN</h1>

        <motion.div className='landing-page' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 1 }}>
          <SpanAleatColor />
        </motion.div>
        
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5, delay: 2.5 }}>
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
        </motion.div>

      </div>
    </motion.main>
  )
}