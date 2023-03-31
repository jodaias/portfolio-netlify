import Footer from '@components/Footer'
import Head from 'next/head'
import TopBar from '../components/topbar'
import HeaderTile from '@components/header-title'

export default function Contact() {
  return (
    <>
      <div className="container content">
        <Head>
          <title>Contact</title>
          <link rel="icon" href="/jods.dev.svg" />
        </Head>
        <main>
          <TopBar />
          <HeaderTile title="Contato" />

          <p>Entre em contato:</p>
          <div className='contact'>
            <ul>
              <li><a href="mailto:jodaias.developer@gmail.com" target="_blank"><img width="70" height="50" src="/images/email.png" alt="Email" /></a></li>
              <li><a href="https://www.linkedin.com/in/jodaias-barreto" target="_blank"><img width="70" height="50" src="/images/linkedin.png" alt="LinkedIn" /></a></li>
              <li><a href="https://github.com/jodaias" target="_blank"><img width="70" height="50" src="/images/github.png" alt="GitHub" /></a></li>
              <li><a href="https://wa.me/5519983248016" target="_blank"><img width="50" height="50" src="/images/whatsapp.png" alt="Whatsapp" /></a></li>
              <li><a href="https://www.google.com/maps/place/Jardim+Amanda+I,+Hortol%C3%A2ndia+-+SP,+13185-554/@-22.8514288,-47.2268986,15z/data=!4m5!3m4!1s0x94ce6e0260df28a1:0xf7156e43bbbe53a7!8m2!3d-22.849522!4d-47.220917" target="_blank"><img width="70" height="50" src="/images/localization.png" alt="Localização" /></a></li>
            </ul>
          </div>
          <p className='summary'>
            Como desenvolvedor Full Stack, estou sempre buscando novos desafios e projetos interessantes.<br></br>
            Se você tiver alguma oportunidade de trabalho ou projeto em que eu possa ser útil,<br></br>
            não hesite em entrar em contato. Estou disponível para conversar por telefone <br></br>
            (ligação e/ou whatsapp), LinkedIN ou e-mail. Estou ansioso para ouvir de você!
          </p>
        </main>
      </div>
      <Footer />
    </>
  )
}
