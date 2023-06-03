import { BorderLinerGradient } from "../UI/BorderLinerGradient";
import { SectionTitle } from "../UI/SectionTitle";
import styles from './portfolio.module.scss'
import { Tabs } from "./Tabs";


export function Portfolio() {
    return (
        <section id="portfolio" className={styles.portfolio}>
            <div className={`container ${styles.portfolio__title}`}>
                <SectionTitle textTitle="Портфолио"/>
                <BorderLinerGradient/>
            </div>
            {/* <div className="sub-container"> */}
                 <div className={styles.portfolio__inner}>
                    <Tabs/>
                 </div>
            {/* </div> */}
        </section>
    )
}