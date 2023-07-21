'use client'  

import SpanAleatColor from './components/client/baselineColorAleat'
import { motion, AnimatePresence, useInView} from "framer-motion"
import main from './style/main.scss'
import Navbar from './components/client/navbar'

export default function Landing() {

  return (
    <>
    <section className='section-scroll'>
      <Navbar home="isActive"/>
      <motion.main className='landing-page' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 2, delay: .2 }}>
        <div>
          <h1>DROP DESIGN</h1>

          <motion.div className='landing-page' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ y: 10, opacity: 0 }} transition={{ duration: 2, delay: 1 }}>
            <SpanAleatColor />
          </motion.div>
          
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ y: 10, opacity: 0 }} transition={{ duration: .5, delay: 2.5 }}>
            <div className="arrow bounce"><img src='/img/arrow_down.svg' alt='Flèche indiquant le bas'></img></div>
          </motion.div>

        </div>
      </motion.main>
    </section>
    
    <motion.section className='section-scroll'>
      <motion.h2 initial={{ y:50, opacity:0 }} whileInView={{ y:0, opacity:1 }} viewport={{ once:true }} transition={{ duration:.5, delay:.5 }}>Suivez Drop Design</motion.h2>
      <div className='use-section'>
        <div className='use-left'>
          <motion.div className='use-part' initial={{ x:-200, opacity:0 }} whileInView={{ x:0, opacity:1 }} viewport={{ once:true }} transition={{ duration:.5, delay:1 }}>
            <motion.img src='/img/circle-veille.webp' alt='Cercle entouré de cercles de couleurs rouge-rose' animate={{ opacity:[.5, 1, .5], scale:[.9, 1, .9] }} transition={{ easeInOut:"linear", duration: 3, repeat: Infinity}}></motion.img>
            <div className='use-content'>
              <h3>Veille</h3>
              <p>Mettez vous à jour sur l’actualités du webdesign, découvrez les dernières tendances du web.</p>
            </div>
          </motion.div>

          <motion.div className='use-part' initial={{ x:-200, opacity:0 }} whileInView={{ x:0, opacity:1 }} viewport={{ once:true }} transition={{ duration:.5, delay:1 }}>
            <motion.img src='/img/circle-discover.webp' alt='Cercle entouré de cercles de couleurs vert' animate={{ opacity:[.5, 1, .5], scale:[.9, 1, .9] }} transition={{ easeInOut:"linear", duration: 3, repeat: Infinity}}></motion.img>
            <div className='use-content'>
              <h3>Découverte</h3>
              <p>Découvrez des astuces et des méthodes pour parfaire votre talents de webdesigner.</p>
            </div>
          </motion.div>
        </div>

        <div className='use-right'>
          <motion.div className='use-part' initial={{ x:200, opacity:0 }} whileInView={{ x:0, opacity:1 }} viewport={{ once:true }} transition={{ duration:.5, delay:1 }}>
            <motion.img src='/img/circle-inspi.webp' alt='Cercle entouré de cercles de couleurs bleu' animate={{ opacity:[.5, 1, .5], scale:[.9, 1, .9] }} transition={{ easeInOut:"linear", duration: 3, repeat: Infinity}}></motion.img>
            <div className='use-content'>
              <h3>Inspiration</h3>
              <p>Inspirez vous des meilleurs design web et ajoutez-y votre style pour un rendu d’exception.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
    </>
  )
}