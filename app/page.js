'use client'  

import SpanAleatColor from './components/client/baselineColorAleat'
import { motion, AnimatePresence, useInView} from "framer-motion"
import main from './style/main.scss'
import Navbar from './components/client/navbar'

export default function Landing() {

  function smoothScroll() {
    var MIN_PIXELS_PER_STEP = 16;
    var MAX_SCROLL_STEPS = 30;
    var target = document.getElementById("second-div");
    var scrollContainer = target;
    do {
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do {
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    var pixelsPerStep = Math.max(MIN_PIXELS_PER_STEP,
                                 (targetY - scrollContainer.scrollTop) / MAX_SCROLL_STEPS);

    var stepFunc = function() {
        scrollContainer.scrollTop =
            Math.min(targetY, pixelsPerStep + scrollContainer.scrollTop);

        if (scrollContainer.scrollTop >= targetY) {
            return;
        }

        window.requestAnimationFrame(stepFunc);
    };

    window.requestAnimationFrame(stepFunc);
  }

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
            <div onClick={smoothScroll} className="arrow bounce"><img src='/img/arrow_down.svg' alt='Flèche indiquant le bas'></img></div>
          </motion.div>

        </div>
      </motion.main>
    </section>
    
    <motion.section className='section-scroll' id='second-div'>
      <div className='use-section'>
        <div className='use-left'>
          <motion.div className='use-part' initial={{ x:-200, opacity:0 }} whileInView={{ x:0, opacity:1 }} viewport={{ once:true }} transition={{ duration:.5, delay:.25 }}>
            <motion.img src='/img/circle-veille.webp' alt='Cercle entouré de cercles de couleurs rouge-rose' animate={{ opacity:[.5, 1, .5], scale:[.9, 1, .9] }} transition={{ easeInOut:"linear", duration: 3, repeat: Infinity}}></motion.img>
            <div className='use-content'>
              <h2>Veille</h2>
              <p>Mettez vous à jour sur l’actualités du webdesign, découvrez les dernières tendances du web.</p>
            </div>
          </motion.div>

          <motion.div className='use-part' initial={{ x:-200, opacity:0 }} whileInView={{ x:0, opacity:1 }} viewport={{ once:true }} transition={{ duration:1, delay:.75 }}>
            <motion.img src='/img/circle-discover.webp' alt='Cercle entouré de cercles de couleurs vert' animate={{ opacity:[.5, 1, .5], scale:[.9, 1, .9] }} transition={{ easeInOut:"linear", duration: 3, repeat: Infinity}}></motion.img>
            <div className='use-content'>
              <h2>Découverte</h2>
              <p>Découvrez des astuces et des méthodes pour parfaire votre talents de webdesigner.</p>
            </div>
          </motion.div>
        </div>

        <div className='use-right'>
          <motion.div className='use-part' initial={{ x:-200, opacity:0 }} whileInView={{ x:0, opacity:1 }} viewport={{ once:true }} transition={{ duration:.75, delay:.5 }}>
            <motion.img src='/img/circle-inspi.webp' alt='Cercle entouré de cercles de couleurs bleu' animate={{ opacity:[.5, 1, .5], scale:[.9, 1, .9] }} transition={{ easeInOut:"linear", duration: 3, repeat: Infinity}}></motion.img>
            <div className='use-content'>
              <h2>Inspiration</h2>
              <p>Inspirez vous des meilleurs design web et ajoutez-y votre style pour un rendu d’exception.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
    </>
  )
}