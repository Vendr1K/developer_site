/* eslint-disable @next/next/no-img-element */
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import { useMediaQuery } from '../../../hooks/useMediaQuery'
import { PortfolioSlider } from './PortfolioSlider'
import styles from './tabs.module.scss'


const tabsContent1 = [
    {id: 1, title: 'Веб-сайты', img: './img/portfolio-img-1.png'},
    {id: 2, title: 'Веб-сайты', img: './img/portfolio-img-2.png'},
    {id: 3, title: 'Веб-сайты', img: './img/portfolio-img-3.png'},
    {id: 4, title: 'Веб-сайты', img: './img/portfolio-img-2.png'},
]

const tabsContent2 = [
    {id: 1, title: 'UI/UX дизайн', img: './img/portfolio-img-3.png'},
    {id: 2, title: 'UI/UX дизайн', img: './img/portfolio-img-2.png'},
    {id: 3, title: 'UI/UX дизайн', img: './img/portfolio-img-3.png'},
    {id: 4, title: 'UI/UX дизайн', img: './img/portfolio-img-1.png'},
]

const tabsContent3 = [
    {id: 1, title: 'Внешний интерфейс', img: './img/portfolio-img-3.png'},
    {id: 2, title: 'Внешний интерфейс', img: './img/portfolio-img-3.png'},
    {id: 3, title: 'Внешний интерфейс', img: './img/portfolio-img-1.png'},
    {id: 4, title: 'Внешний интерфейс', img: './img/portfolio-img-1.png'},
   
]
const tabsContent4 = [
    {id: 1, title: 'Все проекты', img: './img/portfolio-img-2.png'},
    {id: 2, title: 'Все проекты', img: './img/portfolio-img-2.png'},
    {id: 3, title: 'Все проекты', img: './img/portfolio-img-2.png'},
    
   
]



const tabs = [
    {aKey: 1, title: 'Веб-сайты', content: tabsContent1},
    {aKey: 2, title: 'UI/UX дизайн', content: tabsContent2},
    {aKey: 3, title: 'Внешний интерфейс', content: tabsContent3},
    {aKey: 4, title: 'Все проекты', content: tabsContent4},
]


interface ISimpleTab {
    children: React.ReactNode
}



function SimpleTab({activeKey, children}: any) {
    const[activeTab, setActiveTab] = useState(activeKey);

    const [viewMore, setViewMore] = useState(true);
    const viewMoreContent = () => setViewMore(!viewMore);

    //mediaquery
    const isMobile = useMediaQuery(1080)

    return (
        <div className={`${styles.tabs__wrapper} ${styles.tabs} ` }>
           <div className='sub-container'>
                <div className={styles.test__inner}>
                    <ul className={`${styles.tabs__title__wrapper}`}>
                            {children.map((item: any) => {
                                return (
                                    <li  key={item.props.aKey} 
                                    onClick={() => {  
                                        setActiveTab(item.props.aKey) 
                                        setViewMore(true)}} 
                                        className={activeTab === item.props.aKey ? `${styles.tabs__title__item_active} ${styles.tabs__title__item}` : styles.tabs__title__item}>
                                        {item.props.title}
                                        <span className={styles.tabs__title__item__border}/>
                                    </li>
                                )
                            })}
                    </ul>
                </div>
                {!isMobile && <div className={`${styles.tabs__content__wrapper} `}>
                    
                    {children.map((item: any) => {
                        return(
                                <div key={item.props.aKey} className={ activeTab === item.props.aKey  ? `${styles.tabs__content__visible} ${styles.active_active}`: styles.tabs__content__visible}>
                                    <AnimatePresence>
                                    <ul className={styles.tabs__content__list} >
                                     {(viewMore) ? 
                                        item.props.children.slice(0, 2).map((item: any) => {
                                            // console.log(item)
                                            return (
                                                <motion.li 
                                                initial={{opacity: 0}}
                                                animate={{opacity: 1}}
                                                exit={{opacity: 0}}
                                                key={item.id} className={styles.tabs__content__list__item} >
                                                    <a href="">
                                                        <img className={styles.tabs__content__list__item__img} src={item.img} alt={item.title} />
                                                        <h3 className={styles.tabs__content__list__item__title}>{item.title}</h3>
                                                    </a>
                                                </motion.li>  
                                                )
                                })
                                     :
                                     item.props.children.map((item: any) => {
                                        console.log(item)
                                        return (
                                            <motion.li 
                                                initial={{opacity: 0}}
                                                animate={{opacity: 1}}
                                                exit={{opacity: 0}}
                                            key={item.id} className={styles.tabs__content__list__item} >
                                                <a href="">
                                                    <img className={styles.tabs__content__list__item__img} src={item.img} alt={item.title} />
                                                    <h3 className={styles.tabs__content__list__item__title}>{item.title}</h3>
                                                </a>
                                            </motion.li>  
                                            )
                            })
                                     
                                     }
                                    </ul>
                                    </AnimatePresence>
                                     <div className={styles.tabs__content__btn__wrapper}>
                                        <button className={styles.tabs__content__btn__wrapper__more} onClick={viewMoreContent}>
                                    {/* {viewMore ? 'Показать еще' : 'Скрыть'} */}
                                    <span className={styles.tabs__content__btn__wrapper__more__text}>{viewMore ? 'Показать еще' : 'Скрыть'}</span>
                                    <span className={styles.tabs__content__btn__wrapper__more__border}/>
                                    </button> 
                                     </div>
                                    
                            </div>
                        )
                      
                    })}
                
                 </div>}

                
           </div>

           {isMobile && <div className={styles.tabs__list__mobile}>
                    <div className={styles.tabs__list__mobile__container}>
                        {children.map((item : any) => {
                           return (
                            <div key={item.props.aKey} className={ activeTab === item.props.aKey  ? `${styles.tabs__content__visible} ${styles.active_active}`: styles.tabs__content__visible}>
                                <PortfolioSlider tabItem={item.props}/>
                            </div>
                           )
                        })}
                    </div>
            </ div>}
        </div>
    )
} 

interface ITab {
    aKey: string,
    title: string,
    content: string,
}

type TTab = ITab[]

 
function Tab(props: any) {
    return (<></>)
}

export function Tabs() {
    return (
        <div>
            <SimpleTab activeKey={1}>
                {tabs.map(item => <Tab key={item.aKey} title={item.title} aKey={item.aKey}>{item.content}</Tab>)}
            </SimpleTab>
        </div>
    )
}