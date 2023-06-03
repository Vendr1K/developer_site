
import styles from '../contactForm.module.scss'

interface IContactInput {
    type: string,
    text: string,
    placeholder: string,
    name: string,
    required?: boolean

}

export function ContactInput({type, text, placeholder, name, required}: IContactInput) {
    return (
        <label className={styles.contact__form__label}>
            <span className={styles.contact__form__label__text}>{text}</span>
                <input
                    required={required || false}
                    className={styles.contact__form__label__input}
                    type={type}
                    placeholder={placeholder}
                    name={name}
                />
            
        </label>
    )
}