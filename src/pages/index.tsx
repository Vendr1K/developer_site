import Head from 'next/head'
import { About } from '../../components/About'
import { Contact } from '../../components/Contact'
// import { Footer } from '../../components/Layout/Footer'
// import { Header } from '../../components/Layout/Header'
import { Hero } from '../../components/Hero'
import { Portfolio } from '../../components/Portfolio'
import { Skills } from '../../components/Skills'
import styles from '../styles/Home.module.css'
import Layout from '../../components/Layout/Layout'

export default function Home() {
  return (
  <>
    <Head>
      <title>Site portfolio</title>
      <meta  charSet='UTF-8'/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
      <link rel="icon" type='./image/svg' sizes='32*32' href="/" />
    </Head>
   
      {/* <Header/> */}
      <Layout>
        <main>
          <Hero />
          <About />
          <Skills />
          <Portfolio />
          <Contact />
        </main>
      </Layout>
      {/* <Footer/> */}
      <div className='background-animation'>
        <div id='ball-one'/>
        <div id='ball-two'/>
        <div id='ball-three'/>
      </div>
  
  </>
  )
}
