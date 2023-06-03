/* eslint-disable @next/next/no-img-element */

import { BorderLinerGradient } from '../UI/BorderLinerGradient'
import { SectionTitle } from '../UI/SectionTitle'
import { Arrow } from '../UI/Arrow';
import { SocialList } from '../SocialList/SocialList';
import Image from 'next/image';
import styles from './about.module.scss'
import { useMediaQuery } from '../../hooks/useMediaQuery';


export function About() {

    const isMobile = useMediaQuery(1080);

    return (
        <section id='about' className={styles.about}> 
            <div className={`container ${styles.about__title_container}`}>
                <SectionTitle textTitle='ОБО МНЕ'/>
                <BorderLinerGradient/>
            </div>
            
            <div className={`sub-container ${styles.about__sub_container}`}>   
                <div className={styles.about__sub_container__avatar}>
                    <img className={styles.about__img} src="./img/about.png" alt="avatar" />
                </div>
                <div className={styles.about__inner}>
                    <div className={styles.about__inner__title}>
                        <h3 className={styles.about__inner__title_title}>Павел Ко</h3>
                        <BorderLinerGradient height='2'>
                            <span className={styles.about__inner__title_border_arrow }>
                                <Arrow/>
                            </span>
                        </BorderLinerGradient>
                    </div>
                    <p className={styles.about__inner__text}> 
                        В настоящее время я работаю электромехаником связи на РЖД, по образованию. 
                        В данный момент ищу команду, которая готова принять меня на позицию junior frontend веб-разработчика.
                    </p>
                    {!isMobile && <SocialList/>}
                </div>
                
            </div>
            {isMobile &&
                <div className='sub-container'>
                    <SocialList/>
                </div>
                }
        </section>
    )
}