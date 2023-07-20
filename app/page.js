'use client'  

import SpanAleatColor from './components/client/baselineColorAleat'
import { motion, AnimatePresence } from "framer-motion"
import main from './style/main.scss'
import Navbar from './components/client/navbar'

export default function Landing() {
  return (
    <AnimatePresence mode='wait'>
      <Navbar home="isActive"/>
      <motion.main className='landing-page' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 2, delay: .2 }}>
        <div>
          <h1>DROP DESIGN</h1>

          <motion.div className='landing-page' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ y: 10, opacity: 0 }} transition={{ duration: 2, delay: 1 }}>
            <SpanAleatColor />
          </motion.div>
          
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ y: 10, opacity: 0 }} transition={{ duration: .5, delay: 2.5 }}>
            <a href="/pages/home">
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
    </AnimatePresence>

  )
}