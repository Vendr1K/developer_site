import { useState } from "react";
import { Link } from "react-scroll";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import { Logo } from "../../Logo";
import styles from './header.module.scss'
import stylesMenu from './mobileMenu.module.scss'

 function Header () {
    const isMobile = useMediaQuery(640);
    const [menuOpen, setMenuOpen] = useState(false);
    const currentMenuItemClass = isMobile ? stylesMenu.menu__item : styles.header__nav__list__item
    
    
    // 
    const handleToggleMenu = () => {
        (document.querySelector('body') as HTMLBodyElement).classList.toggle('overflow-hidden')
        setMenuOpen(!menuOpen)
    
    }

    const closeMenu = () => {
        (document.querySelector('body') as HTMLBodyElement).classList.remove('overflow-hidden')
        setMenuOpen(false)
    }
    


    const spy = true;
    const smooth = true;
    const offset = 140;
    const duration = 500;

    return (
        <header className={styles.header}>
            <div className={`container ${styles.header__container} ` }>
            <Logo/>
            {/* burger */}
            {isMobile && 
                <button onClick={() => handleToggleMenu()} className={`${styles.burger_menu} ${menuOpen ? styles.open : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>}

           <nav className={`${isMobile ? stylesMenu.menu : styles.header__nav} ${menuOpen ? stylesMenu.open : ''}`}>
                <ul className={`${ isMobile ? styles.list_reset : styles.header__nav__list}`}>
                    <li className={currentMenuItemClass}>
                        <Link 
                            onClick={() => closeMenu()}
                            href="/"
                            spy ={spy}
                            smooth ={smooth}
                            offset ={offset}
                            duration ={duration}
                            to="about"
                            className={styles.header__nav__list__item__link}>
                                Обо мне
                        </Link>
                    </li>
                    <li className={currentMenuItemClass}>
                        <Link 
                            onClick={() => closeMenu()}
                            href="/"
                            spy ={spy}
                            smooth ={smooth}
                            offset ={offset}
                            duration ={duration}
                            to="skills"
                            className={styles.header__nav__list__item__link}>
                                Навыки
                        </Link>
                    </li>
                    <li className={currentMenuItemClass}>
                        <Link 
                            onClick={() => closeMenu()}
                            href="/"
                            spy ={spy}
                            smooth ={smooth}
                            offset ={offset}
                            duration ={duration}
                            to="portfolio"
                            className={styles.header__nav__list__item__link}>
                                Портфолио
                        </Link>
                    </li>
                    <li className={currentMenuItemClass}>
                        <Link 
                            onClick={() => closeMenu()}
                            href="/"
                            spy ={spy}
                            smooth ={smooth}
                            offset ={offset}
                            duration ={duration}
                            to="contact" 
                            className={styles.header__nav__list__item__link}>
                              Связаться со мной
                        </Link>
                    </li>
                </ul>
           </nav>
            </div>
        </header>
    )
}

export default Header