import Head from 'next/head'
import Footer from '@components/Footer'
import HeaderTile from '@components/header-title'
import TopBar from '../components/topbar'

export default function Projects() {
  return (
    <>
      <div className="container content">
        <Head>
          <title>Projects</title>
          <link rel="icon" href="/jods.dev.svg" />
        </Head>

        <main>
          <TopBar />

          <HeaderTile title="Projetos" />

          <ul className="list">
            <li>Projeto 01</li>
            <li>Projeto 02</li>
            <li>Projeto n</li>
            <li>Tela Em Desenvolvimento...</li>
          </ul>
        </main>
      </div>
      <Footer />
    </>
  )
}
