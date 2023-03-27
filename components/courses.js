const courses = [
  {
    id: 1,
    platform: 'DesenvolvedorIO',
    name: 'Formação Full Stack Developer',
    hours: '97 Horas',
    completionDate: '06/2022',
    courseLink: 'https://desenvolvedor.io/certificado/6370c6f5-48d4-453e-9e34-5d1d9ef0ca04'
  },
  {
    id: 2,
    platform: 'DesenvolvedorIO',
    name: 'Formação Asp.net Core Expert',
    hours: '70 Horas',
    completionDate: '05/2022',
    courseLink: 'https://desenvolvedor.io/certificado/9a02e7fe-f3ad-4ed1-9684-05904728dbcb'
  },
  {
    id: 3,
    platform: 'DesenvolvedorIO',
    name: 'Formação Arquiteto de Software',
    hours: '54 Horas',
    completionDate: '07/2022',
    courseLink: 'https://desenvolvedor.io/certificado/d809c0cb-6b15-4bc8-9d00-6332c3689ea6'
  },
  {
    id: 4,
    platform: 'DesenvolvedorIO',
    name: 'Formação Front-end Angular Expert',
    hours: '27 Horas',
    completionDate: '06/2022',
    courseLink: 'https://desenvolvedor.io/certificado/4148208f-2fec-4367-9c98-d5ef568f0805'
  },
  {
    id: 5,
    platform: 'DesenvolvedorIO',
    name: 'Formação Asp.net Mvc 5 Expert',
    hours: '17 Horas',
    completionDate: '07/2022',
    courseLink: 'https://desenvolvedor.io/certificado/786d8d21-0775-4241-887b-331cc6b28b33'
  },
  {
    id: 6,
    platform: 'DesenvolvedorIO',
    name: 'Introdução Ao Devops',
    hours: '04 Horas',
    completionDate: '02/2023',
    courseLink: 'https://desenvolvedor.io/certificado/42c48aaa-ef11-45f4-a8ac-b2a042fd6b25'
  },
  {
    id: 7,
    platform: 'DesenvolvedorIO',
    name: 'Dominando O Entity Framework Core',
    hours: '18 Horas',
    completionDate: '10/2022',
    courseLink: 'https://desenvolvedor.io/certificado/1e5ca95e-e44b-4cca-aab7-5989cfbcba5a'
  },
  {
    id: 8,
    platform: 'DesenvolvedorIO',
    name: 'Introdução Ao Entity Framework Core',
    hours: '03 Horas',
    completionDate: '07/2022',
    courseLink: 'https://desenvolvedor.io/certificado/d8465531-06a2-4768-81b0-df9207ee33ef'
  },
  {
    id: 9,
    platform: 'DesenvolvedorIO',
    name: 'Dominando o ASP.NET MVC 5',
    hours: '10 Horas',
    completionDate: '07/2022',
    courseLink: 'https://desenvolvedor.io/certificado/3a4b5246-faf0-4960-b8ee-ff306c0fc88d'
  },
  {
    id: 10,
    platform: 'DesenvolvedorIO',
    name: 'Iniciando com Asp.net Mvc 5',
    hours: '07 Horas',
    completionDate: '07/2022',
    courseLink: 'https://desenvolvedor.io/certificado/5097b349-c3bc-41d6-ad2d-50c7fe5a839d'
  },
  {
    id: 11,
    platform: 'DesenvolvedorIO',
    name: 'Dominando Os Testes de Software',
    hours: '21 Horas',
    completionDate: '07/2022',
    courseLink: 'https://desenvolvedor.io/certificado/40f68de2-d101-40b6-93b4-9fe4f15ae2c1'
  },
  {
    id: 12,
    platform: 'DesenvolvedorIO',
    name: 'Sql para Desenvolvedores',
    hours: '06 Horas',
    completionDate: '07/2022',
    courseLink: 'https://desenvolvedor.io/certificado/3a03b412-6640-452a-bb8c-a9517d5ae0db'
  },
  {
    id: 13,
    platform: 'DesenvolvedorIO',
    name: 'Desenvolvimento Avançado em Angular',
    hours: '21 Horas',
    completionDate: '06/2022',
    courseLink: 'https://desenvolvedor.io/certificado/0486ea60-2b42-44e0-8e15-47ed632fd713'
  },
  {
    id: 14,
    platform: 'DesenvolvedorIO',
    name: 'Desenvolvimento Spa com Angular',
    hours: '06 Horas',
    completionDate: '05/2022',
    courseLink: 'https://desenvolvedor.io/certificado/57c37440-0dbb-45ff-b2fc-f5b6a4ea55b8'
  },
  {
    id: 15,
    platform: 'DesenvolvedorIO',
    name: 'Asp.net Core Enterprise Applications',
    hours: '32 Horas',
    completionDate: '05/2022',
    courseLink: 'https://desenvolvedor.io/certificado/56b48c07-a659-4d96-9714-3bf2b220b597'
  },
  {
    id: 16,
    platform: 'DesenvolvedorIO',
    name: 'Modelagem de Domínios Ricos',
    hours: '20 Horas',
    completionDate: '04/2022',
    courseLink: 'https://desenvolvedor.io/certificado/597ecec3-e026-46bc-9de8-d78288139a59'
  },
  {
    id: 17,
    platform: 'DesenvolvedorIO',
    name: 'Fundamentos de Arquitetura de Software',
    hours: '13 Horas',
    completionDate: '03/2022',
    courseLink: 'https://desenvolvedor.io/certificado/2461e604-8313-4694-8d51-4d7f33e5f666'
  },
  {
    id: 18,
    platform: 'DesenvolvedorIO',
    name: 'Rest com Asp.net Core Webapi',
    hours: '13 Horas',
    completionDate: '03/2022',
    courseLink: 'https://desenvolvedor.io/certificado/5c583d3d-64f0-4c27-9b81-585d48fdc94e'
  },
  {
    id: 19,
    platform: 'DesenvolvedorIO',
    name: 'Dominando O Asp.net Mvc Core',
    hours: '21 Horas',
    completionDate: '02/2022',
    courseLink: 'https://desenvolvedor.io/certificado/7ee503e1-dff3-417c-89f2-0209bac3f84d'
  },
  {
    id: 20,
    platform: 'DesenvolvedorIO',
    name: 'Iniciando com Asp.net Core',
    hours: '02 Horas',
    completionDate: '02/2022',
    courseLink: 'https://desenvolvedor.io/certificado/8eaebd6b-5d2a-4579-903c-e9537ad5686f'
  },
  {
    id: 21,
    platform: 'COD3R',
    name: 'Fundamentos de Javascript Funcional',
    hours: '9 Horas',
    completionDate: '09/2021',
    courseLink: 'https://www.cod3r.com.br/certificates/eg9azwkmmt'
  },
  {
    id: 22,
    platform: 'COD3R',
    name: 'Angular 9 - Essencial',
    hours: '13 Horas',
    completionDate: '12/2020',
    courseLink: 'https://www.cod3r.com.br/certificates/awjax7slg9'
  }
];

export default courses;
