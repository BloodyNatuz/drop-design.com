import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence, Variant } from "framer-motion"

export default function Navbar(nav) {

    // Navbar mobile/desktop
    function menuOpen(){
        //recuperer mobile-menu
        let menu = document.querySelector('.mobile-menu')

        //appliquer display flex a mobile-menu
        menu.style.display = 'flex'
    }

    function menuClose(){
        //recuperer mobile-menu
        let menu = document.querySelector('.mobile-menu')

        //appliquer display flex a mobile-menu
        menu.style.display = 'none'
    }

    return (
        <>
        <motion.div className='mobile-menu'>
            <Link href="/" className={nav.home}>Home</Link>
            <Link href="/pages/news" className={nav.news}>News</Link>
            <Link href="/pages/contact" className={nav.contact}>Contact</Link>

            <motion.img onClick={menuClose} whileTap={{ scale:1.1 }} src='/img/close.svg' alt='Icon hamburger'></motion.img>
        </motion.div>
        
        <AnimatePresence mode='wait'>
            <motion.nav initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 10, opacity: 0 }} transition={{ duration: 1, delay: .2 }}>
                <div className="nav-part-ext">
                    <img src="/img/logo_500_blanc.svg" alt="Logo de Drop Design"></img>
                </div>

                <div className="nav-part-int">
                    <div className='desktop'>
                        <Link href="/" className={nav.home}>Home</Link>
                        <Link href="/pages/news" className={nav.news}>News</Link>
                        <Link href="/pages/contact" className={nav.contact}>Contact</Link>
                    </div>

                    <div className='mobile'>
                        <motion.img onClick={menuOpen} whileTap={{ scale:1.1 }} src='/img/menu.svg' alt='Icon hamburger'></motion.img>
                    </div>
                </div>

                <div className='nav-part-ext'>
                    <input type="text" placeholder="Recevoir la newsletter"></input>
                </div>
            </motion.nav>
        </AnimatePresence>
        </>
    )
}