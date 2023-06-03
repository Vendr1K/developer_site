import Link from 'next/link';
import React, { MutableRefObject, useRef, useState } from 'react';
import { ContactInput } from './ContactInput';
import { PropagateLoader } from 'react-spinners';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

import styles from './contactForm.module.scss';


export function ContactForm() {

    const [acceptRules, setAcceptRules] = useState(false);
    const toogleAcceptRules = () =>  setAcceptRules(!acceptRules);

    const [spinner, setSpinner] = useState(false)

    const formRef = useRef() as MutableRefObject<HTMLFormElement>;
    const sendEmail = ( e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setSpinner(true)
        emailjs.sendForm('service_xmmw1ye', 'template_m3w72pj', formRef.current, 'H2so6fGNTkHU-3wul')
        .then(result => {
            toast(`Данные успешно отправлены ${result.text}`);
            setSpinner(false);
        }, error => {
            toast.error(`Данные отправлены ${error.text}`);
            setSpinner(false);
        })

        setAcceptRules(false);
        formRef.current.reset();

    }
    
    return (
        <form onSubmit={sendEmail} className={styles.contact__form} ref={formRef}>
            <ContactInput required={true} text='Ф.И.О*' type='text' placeholder='Укажите ваши Ф.И.О.' name='fullName'/>
            <ContactInput text='Должность/компания' type='text' placeholder='Укажите вашу должность/компанию' name='company'/>
            <ContactInput required={true} text='E-mail*' type='email' placeholder='Укажите ваш E-mail' name='emal'/>
            <ContactInput required={true} text='Телефон*' type='tell' placeholder='Укажите ваш телефон' name='phone'/>

            <button 
                disabled={!acceptRules}
                
                className={styles.contact__form__btn}
                > {spinner ? <PropagateLoader color='#fff'/> : 'Отправить заявку'} </button>
                    
            <label className={styles.contact__form__checkbox}>
                <input type="checkbox"
                onClick={() => setAcceptRules(!acceptRules)}
                // onChange={() => setAcceptRules(!acceptRules)} 
                className={styles.contact__form__checkbox__input} />
                <span className={styles.contact__form__checkbox__span} />
                <span className={styles.contact__form__checkbox__text}>
                    Нажимая на кнопку «Отправить заявку», я соглашаюсь <Link 
                        href='/cookie-policy' 
                        className={styles.contact__form__checkbox__link}>
                        Политикой конфиденциальности
                    </Link> и даю <Link 
                        href='/personal-data-of-clients' 
                        className={styles.contact__form__checkbox__link}>
                        Cогласие на обработку персональных данных.
                    </Link> 
                </span>
            </label>
        </form>
    )
}