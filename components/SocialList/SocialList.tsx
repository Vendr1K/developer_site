import Image from 'next/image';
import styles from './socialList.module.scss'

export function SocialList() {
    return (
        <ul className={styles.social__list}>
            <li className={styles.social__list__item}>
                <a href="#" className={styles.social__list__item__link}>
                    <span className={styles.social__list__item__link__text}>Facebook</span>
                    <span className={`${styles.social__list__item__link__icon} ${styles.social__list__item__link__icon__fb}`}>
                        <Image 
                            src="/img/facebook.svg"
                            width={15}
                            height={30}
                            alt="facebook"
                            className={styles.social__list__item__link__img}
                        />
                    </span>
                </a>
            </li>
            <li className={styles.social__list__item}>
                <a href="#" className={styles.social__list__item__link}>
                    <span className={styles.social__list__item__link__text}>VKontakte</span>
                    <span className={`${styles.social__list__item__link__icon} ${styles.social__list__item__link__icon__vk}`}>
                        <Image 
                            src="/img/vk.svg"
                            width={23}
                            height={14}
                            alt="vkontakte"
                            className={styles.social__list__item__link__img}
                        />
                    </span>
                </a>
            </li>
            <li className={styles.social__list__item}>
                <a href="#" className={styles.social__list__item__link}>
                    <span className={styles.social__list__item__link__text}>YouTube</span>
                    <span className={`${styles.social__list__item__link__icon} ${styles.social__list__item__link__icon__yt}`}>
                        <Image 
                            src="/img/youtube.svg"
                            width={22}
                            height={16}
                            alt="youtube"
                            className={styles.social__list__item__link__img}
                        />
                    </span>
                </a>
            </li>
        </ul>
    )
}