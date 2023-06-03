import Link from 'next/link';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { Logo } from '../../Logo';
import { BorderLinerGradient } from '../../UI/BorderLinerGradient';
import styles from './footer.module.scss'
import { FooterSocialList } from './FooterSocialList/FooterSocialList';

 function Footer() {

    const isMobile725 = useMediaQuery(725);

    return(
        <footer className={styles.footer}>
            <BorderLinerGradient marginBottom='32'/>
        <div className={`container ${styles.footer__container}`}>
            
            <div className={styles.footer__inner}>
                <div className={styles.footer__left}>
                    {isMobile725 && <FooterSocialList marginBottom={25} />}
                    <Logo />
                    <p className={styles.footer__copyright__wrapper}>
                        <span className={styles.footer__copyright__wrapper__text}>
                         © 2010-2021
                        </span>
                        <span className={styles.footer__copyright__wrapper__text}>
                            «Павел»
                        </span>
                    </p>
                </div>
                <div className={styles.footer__right}>
                    <div className={styles.footer__right__top}>
                        <p className={styles.footer__right__top__text}>Поделитесь сайтом с друзьями:</p>
                        {!isMobile725 && <FooterSocialList />}
                    </div>
                    <div className={styles.footer__right__bottom}>
                        <ul className={styles.footer__list}>
                            <li className={styles.footer__list__item}>
                                <Link href="/cookie-policy" legacyBehavior>
                                    <a className={styles.footer__list__item__link}>
                                        Политика использования файлов cookie
                                    </a>
                                </Link>
                            </li>
                            <li className={styles.footer__list__item}>
                                <Link href="/personal-data-policy" legacyBehavior>
                                    <a className={styles.footer__list__item__link}>
                                        Политика конфиденциальности
                                    </a>
                                </Link>
                            </li>
                            <li className={styles.footer__list__item}>
                                <Link href="/personal-data-policy" legacyBehavior>
                                    <a className={styles.footer__list__item__link}>
                                        Политика обработки персональных данных
                                    </a>
                                </Link>
                            </li>
                            <li className={styles.footer__list__item}>
                                <Link href="/personal-data-of-clients" legacyBehavior>
                                    <a className={styles.footer__list__item__link}>
                                        Согласие на обработку персональных данных клиентов - физических лиц
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </footer>
    )
}

export default Footer