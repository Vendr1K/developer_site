import Link from "next/link";
import styles from "./logo.module.scss"


export function Logo() {
    return(
        <Link href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */ }
            <img src="/img/logo.svg" alt="logo"  className={styles.logo}/>
        </Link>
    )
}