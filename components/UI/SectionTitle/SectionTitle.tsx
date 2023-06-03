import styles from './sectionTitle.module.scss'

interface IsectionTitletProps {
    // height?: string,
    // width?: string
    // marginBottom?: string,
    // marginTop?: string,
    // background?: string,
    textTitle: string,
   
}

export function SectionTitle(props: IsectionTitletProps) {
    // const {height, width, marginBottom, marginTop, background, textTitle} = props
    const {textTitle} = props
    return (
        <h2 className={styles.title}>
            {textTitle.toUpperCase()}
        {/* <span className={styles.title__border}/> */}
        </h2>
    )
}