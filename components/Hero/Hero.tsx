import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { Link } from 'react-scroll'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import styles from './hero.module.scss'

export function Hero () {
    const isMobile800 = useMediaQuery(800);
    const isMobile485 = useMediaQuery(485);
    const heroTitle = useRef<HTMLHeadingElement>(null)

    useEffect(() => { 
     
        const colors = gsap.to(heroTitle.current, {
            paused: true,
            duration: 20,
            repeat: -1,
            '--hue': 360,
          })
          
          const doRandom = () => {
            gsap.timeline()
              .to(heroTitle.current, {
                duration: 0.1,
                opacity: function(){ return gsap.utils.random(.90, .95) },
                delay: function(){ return gsap.utils.random(.1, 2) },
              }).to(heroTitle.current, {
                duration: 0.1,
                opacity: 1,
                onComplete: function(){
                  doRandom()
                }
              })
          }
          
          const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
          
          if (! mediaQuery || ! mediaQuery.matches) {
            colors.play();
            doRandom();
          }
          
    },[])

    return( 
        <section className={styles.hero} style={{backgroundImage: isMobile485 ? '' : `url('../../public/img/hero-bg${isMobile800 ? '-mobile' : ''}.png')` }}>
            <div className='sub-container'>
            <div className={styles.hero__inner}>
                <h1 className={styles.hero__title} ref={heroTitle}>Web development</h1>
               <div className={styles.hero__descr}  >
               <p >
                    Вы работаете над чем-то великим? 
                </p>
                <p >
                    Я с удовольствием помогу вам в этом! Напишите мне письмо и мы начнем проектпрямо сейчас!
                </p>
               </div>
                <Link
                    to='contact'
                    spy = {true}
                    smooth = {true}
                    offset = {30}
                    duration = {500}
                    className= {styles.hero__btn}
                >
                    Связаться с разработчиком
                </Link>
                {!isMobile800 &&  <Link
                    to='about'
                    spy = {true}
                    smooth = {true}
                    offset = {30}
                    duration = {500}
                    className= {styles.hero__arrow}
                >
                        <svg className= {styles.hero__arrow__svg} width="57" height="76" viewBox="0 0 57 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className={styles.hero__arrow__svg__hover_path} d="M30.8213 67.835C29.8551 69.48 27.4763 69.4793 26.5099 67.8338L11.9846 43.1018C11.0056 41.4349 12.2072 39.3358 14.14 39.3363L43.1865 39.3443C45.1193 39.3449 46.3212 41.4447 45.3425 43.111L30.8213 67.835Z" fill="#08A6CE" /> 
                            <path d="M30.8213 67.835C29.8551 69.48 27.4763 69.4793 26.5099 67.8338L11.9846 43.1018C11.0056 41.4349 12.2072 39.3358 14.14 39.3363L43.1865 39.3443C45.1193 39.3449 46.3212 41.4447 45.3425 43.111L30.8213 67.835Z" stroke="#08A6CE" strokeWidth="3"/>
                            <path className={styles.hero__arrow__svg__hover_path} d="M29.8808 48.0399C29.2906 49.0209 27.8634 49.0058 27.2941 48.0126L10.4209 18.5765C9.84421 17.5704 10.5785 16.3184 11.7381 16.3306L46.1021 16.6934C47.2617 16.7056 47.9694 17.9729 47.3716 18.9666L29.8808 48.0399Z" fill="#1222B0"/> 
                            <path d="M29.8808 48.0399C29.2906 49.0209 27.8634 49.0058 27.2941 48.0126L10.4209 18.5765C9.84421 17.5704 10.5785 16.3184 11.7381 16.3306L46.1021 16.6934C47.2617 16.7056 47.9694 17.9729 47.3716 18.9666L29.8808 48.0399Z" stroke="#1222B0" strokeWidth="5"/>
                        </svg>
                    </Link>}
            </div>
        </div>

        </section>
    )
}