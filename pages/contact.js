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
          <ul>
            <li>Email: <a href="mailto:jodaias.developer@gmail.com">jodaias.developer@gmail.com</a></li>
            <li>LinkedIN: <a href="https://www.linkedin.com/in/jodaias-barreto">https://www.linkedin.com/in/jodaias-barreto</a></li>
            <li>GitHub: <a href="https://github.com/jodaias">https://github.com/jodaias</a></li>
            <li>Telefone: <a href="tel:+5519983248016">(19) 98324-8016</a></li>
            <li>Localização: Jardim Amanda I, Hortolândia / SP</li>
          </ul>
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
