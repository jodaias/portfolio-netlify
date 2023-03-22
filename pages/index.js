import Head from 'next/head'
import HeaderTile from '@components/header-title';
import Footer from '@components/Footer';
import TopBar from '../components/topbar';

export default function Home() {
  return (
    <div className="container content">
      <Head>
        <title>Meu Portifólio</title>
        <link rel="icon" href="/jods.dev.svg" />
      </Head>

      <main className="main">
        <TopBar />

        <HeaderTile title="Bem-vindo ao meu Portfólio" />

        <p className="description">
          Meu nome é Jodaías Barreto e sou desenvolvedor de software. Neste espaço,
          compartilho com você algumas informações sobre mim, meu trabalho e
          projetos.
        </p>

        <div className="grid">
          <a href="/about" className="card">
            <h2>Sobre mim &rarr;</h2>
            <p>Conheça mais sobre minha trajetória e experiência profissional.</p>
          </a>

          <a href="/projects" className="card">
            <h2>Projetos &rarr;</h2>
            <p>Veja alguns dos projetos em que tenho trabalhado.</p>
          </a>

          <a href="/contact" className="card">
            <h2>Contato &rarr;</h2>
            <p>Fale comigo para dúvidas, sugestões ou propostas de trabalho.</p>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
