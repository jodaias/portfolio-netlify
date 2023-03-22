import Footer from '@components/Footer';
import HeaderTile from '@components/header-title';
import React from 'react';
import courses from '../components/courses';
import EducationItem from '../components/education-item';
import ListCourses from '../components/list-courses';
import TopBar from './topbar';

function About() {
  return (
    <div className="about">
      <TopBar />
      <HeaderTile title="Sobre Mim" />
      <p>Desenvolvedor apaixonado por tecnologia e sempre em busca de novos desafios.</p>

      <h3>Formação Acadêmica</h3>
      <EducationItem
        institution="Pontífica Universidade Católica de Minas Gerais"
        degree="Pós-graduação"
        field="Arquitetura em Software Distribuído"
        startDate="Março 2022"
        incomplete
      />
      <EducationItem
        institution="Descomplica"
        degree="Pós-graduação"
        field="Segurança da Informação / Tecnologia da Informação"
        startDate="Novembro 2020"
        endDate="Novembro 2021"
      />
      <EducationItem
        institution="Faculdade Adventista da Bahia"
        degree="Superior"
        field="Gestão da Tecnologia da Informação"
        startDate="Fevereiro 2018"
        endDate="Junho 2020"
      />

      <div className="skills">
        <h2>Habilidades</h2>
        <ul>
          <li>Desenvolvimento web com HTML, CSS e JavaScript</li>
          <li>Frameworks de front-end, como flutter para mobile e Angular para web</li>
          <li>Desenvolvimento de back-end com C#</li>
          <li>Banco de dados SQL (ex. SQLServer, MySQL) e NoSQL (ex. MongoDB, FireBase).</li>
          <li>Testes automatizados como XUnit em .Net</li>
          <li>Experiência em metodologias ágeis como Scrum e Kanban</li>
        </ul>
      </div>
      <ListCourses courses={courses} />
      <Footer />
    </div>
  )
}

export default About;
