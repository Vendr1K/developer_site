/* eslint-disable @next/next/no-img-element */
import styles from './portfolioSlider.module.scss'

export function PortfolioSliderItem({props}: any) {
    console.log(props)
    return (
        <div className={styles.portfolio__slide}>
            <a href="" className={styles.portfolio__slide__link}>
                <span className={styles.portfolio__slide__inner}>
                <span className={styles.portfolio__slide__text}>{props.title}</span>
                </span>

                <img  className={styles.portfolio__slide__img} src={props.img} alt="" />
                
            </a>
        </div>
    )
}