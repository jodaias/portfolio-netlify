import Footer from '@components/Footer'
import Head from 'next/head'
import TopBar from './topbar'
import HeaderTile from '@components/header-title'

export default function Contact() {
  return (
    <div className="container">
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/jods.dev.svg" />
      </Head>
      <main>
        <TopBar />
        <HeaderTile title="Contato" />

        <p>Entre em contato:</p>
        <ul>
          <li>Email: jodaias.developer@gmail.com</li>
          <li>Telefone: (19) 98324-8016</li>
          <li>Localização: Jardim Amanda I, Hortolândia / SP</li>
        </ul>
        <p>
          Como desenvolvedor Full Stack, estou sempre buscando novos desafios e projetos interessantes. Se você tiver alguma oportunidade de trabalho ou projeto em que eu possa ser útil, não hesite em entrar em contato. Estou disponível para conversar por telefone (ligação e/ou whatsapp) ou e-mail. Estou ansioso para ouvir de você!
        </p>
      </main>
      <Footer />
    </div>
  )
}
