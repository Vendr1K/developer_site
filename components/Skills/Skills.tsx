
import { BorderLinerGradient } from '../UI/BorderLinerGradient';
import { SectionTitle } from '../UI/SectionTitle';
import { FrontendIcon, SeoIcon, UiUxIcon, WebIcon } from '../UI/SkillsIcon';
import styles from './skills.module.scss';

export function Skills() {
    return (
        <section id="skills" className={` ${styles.skills}`}>
             <div className={`container ${styles.skills__title_container}`}>
                <SectionTitle textTitle='Мои навыки'/>
                <BorderLinerGradient/>
            </div>
            <div className="sub-container"> 
                <ul className={styles.skills__list}>
                    <li className={styles.skills__list__item}> 
                           <div className={styles.skills__list__item__title}>
                            <div className={styles.skills__list__item__title__wrapper}>
                                <span className={styles.skills__list__item__title__wrapper__icon}>
                                    {/* <WebIcon/> */}
                                </span>
                                <h3 className={styles.skills__list__item__title__wrapper__text}>Веб-Разработка</h3>
                            </div>
                                <BorderLinerGradient height='2'/>
                           </div>
                           <span className={styles.skills__list__item__content}>
                                 Javascript, Coffeescript, JAVA, Python, PHP, Go, Node.js, MongoDB, Redis, PostgreSQL, WebStorm.
                            </span> 
                    </li>

                    <li className={styles.skills__list__item}> 
                           <div className={styles.skills__list__item__title}>
                            <div className={styles.skills__list__item__title__wrapper}>
                                <span className={styles.skills__list__item__title__wrapper__icon}>
                                    {/* <UiUxIcon/> */}
                                </span>
                                <h3 className={styles.skills__list__item__title__wrapper__text}>UI/UX Дизайн</h3>
                            </div>
                                <BorderLinerGradient height='2'/>
                           </div>
                           <span className={styles.skills__list__item__content}>
                                Photoshop, Illustrator, Sketch, Axure, XMind, Прототипирование, Wireframing, Исследование Пользователей, Юзабилити-Тестирование
                            </span> 
                    </li>


                    <li className={styles.skills__list__item}> 
                           <div className={styles.skills__list__item__title}>
                            <div className={styles.skills__list__item__title__wrapper}>
                                <span className={styles.skills__list__item__title__wrapper__icon}>
                                    <FrontendIcon/>
                                </span>
                                <h3 className={styles.skills__list__item__title__wrapper__text}>Разработка Frontend</h3>
                            </div>
                                <BorderLinerGradient height='2'/>
                           </div>
                           <span className={styles.skills__list__item__content}>
                                HTML, CSS, LESS, SASS, Bootstrap, Wordpress, Drupal, Phonegap / Cordova, Ionic, Foundation, Angular.js.
                            </span> 
                    </li>


                    <li className={styles.skills__list__item}> 
                           <div className={styles.skills__list__item__title}>
                            <div className={styles.skills__list__item__title__wrapper}>
                                <span className={styles.skills__list__item__title__wrapper__icon}>
                                    <SeoIcon/>
                                </span>
                                <h3 className={styles.skills__list__item__title__wrapper__text}>Консалтинг и SEO-Аудит:</h3>
                            </div>
                                <BorderLinerGradient height='2'/>
                           </div>
                           <span className={styles.skills__list__item__content}>
                                Screaming Frog, Woorank, Raventools, Semrush, Moz, WebCEO, Google Analytics, ChartBeat, CrazyEgg.
                            </span> 
                    </li>
                </ul>
            </div>
        </section>
    )
}