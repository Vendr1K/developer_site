import { SocialList } from "../SocialList/SocialList";
import { Arrow } from "../UI/Arrow";
import { BorderLinerGradient } from "../UI/BorderLinerGradient";
import { SectionTitle } from "../UI/SectionTitle";

import styles from './contact.module.scss'
import { ContactForm } from "./ContactForm";

export function Contact() {
    return(
        <section id="contact" className={styles.contact}>
             <div className={`container ${styles.contact__title_container}`}>
                <SectionTitle textTitle='Напишите мне'/>
                <BorderLinerGradient />
            </div>
            <div className={`sub-container ${styles.contact__sub_container}`}> 
                <div className={styles.contact__inner}>
                    <div className={styles.contact__left}>
                        <div className={styles.contact__text}>
                            <p className={styles.contact__text_text}>
                                Вы работаете над чем-то великим? 
                                Я с удовольствием помогу вам в этом! 
                                Напишите мне письмо и мы начнем проект прямо сейчас!
                            </p>
                            <p className={styles.contact__text_text}>
                                Просто сделай это!
                            </p>
                        </div>
                        <div className={styles.contact__inner__title}>
                            <h3 className={styles.contact__inner__title_title}>Я в соцсетях:</h3>
                                <BorderLinerGradient height='2'>
                                    <span className={styles.contact__inner__title_border_arrow }>
                                        <Arrow/>
                                    </span>
                                </BorderLinerGradient>
                        </div>
                        <SocialList/>

                    </div>
                    <div className={styles.contact__right}>
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </section>
    )
}