import styles from './styles.module.scss';
import { GiFactory, GiHealthNormal, GiHomeGarage, GiPartyPopper, GiShoppingBag, GiTeacher } from 'react-icons/gi';
import Subtitle from '@/components/Subtitle';
import CardFlip from '@/components/CardFlip';

const segments = [
  {
    icon: <GiHomeGarage />,
    title: 'Condomínios residenciais e empresariais',
    subtitle: 'Proteção 24 horas por dia',
    description: 'Segurança preventiva e controle de acesso para proteger moradores, visitantes e patrimônios.',
    backDescription:
      'A PrevSeg oferece soluções completas em segurança para condomínios residenciais e empresariais. Com vigilantes treinados, monitoramento eficiente e atuação preventiva, garante proteção patrimonial e tranquilidade para moradores e empresas. Regularizada pela Polícia Federal e SESVESP, a PrevSeg entrega confiança e profissionalismo em cada serviço.',
  },
  {
    icon: <GiHealthNormal />,
    title: 'Clínicas e hospitais',
    subtitle: 'Cuidado com segurança',
    description:
      'Controle de fluxo e vigilância especializada para ambientes de saúde com foco em proteção e bem-estar.',
    backDescription:
      'A PrevSeg oferece vigilância especializada para clínicas e hospitais, garantindo proteção de pacientes, profissionais e patrimônio. Com atuação preventiva, controle de acesso e equipe treinada, o serviço assegura um ambiente seguro, discreto e em conformidade com as normas da saúde.',
  },
  {
    icon: <GiPartyPopper />,
    title: 'Eventos em geral',
    subtitle: 'Segurança para grandes públicos',
    description:
      'Planejamento estratégico e equipes treinadas para garantir a segurança de eventos de todos os portes.',
    backDescription:
      'A PrevSeg oferece segurança profissional para eventos, com controle de acesso, prevenção de incidentes e equipes treinadas para atendimento rápido e discreto. Ideal para shows, feiras, festas e eventos corporativos, garantindo tranquilidade e organização do início ao fim.',
  },
  {
    icon: <GiFactory />,
    title: 'Empresas e indústrias',
    subtitle: 'Proteção do patrimônio empresarial',
    description:
      'Soluções de vigilância para áreas industriais e corporativas, com foco na prevenção de riscos e perdas.',
    backDescription:
      'A PrevSeg atua com vigilância especializada para empresas e indústrias, oferecendo controle de acesso, rondas, proteção patrimonial e gestão de riscos. Equipes treinadas e soluções sob medida garantem segurança eficiente e conforme as exigências legais.',
  },
  {
    icon: <GiTeacher />,
    title: 'Instituições de ensino',
    subtitle: 'Ambiente seguro para aprender',
    description: 'Presença vigilante e protocolos de segurança adaptados para escolas, faculdades e universidades.',
    backDescription:
      'A PrevSeg oferece segurança especializada para escolas, faculdades e centros educacionais. Com foco na prevenção e bem-estar, o serviço inclui controle de acesso, vigilância ativa e atuação discreta, garantindo um ambiente seguro para alunos, professores e colaboradores.',
  },
  {
    icon: <GiShoppingBag />,
    title: 'Shoppings',
    subtitle: 'Segurança e conforto para clientes',
    description:
      'Vigilância estratégica, controle de acessos e suporte para uma experiência segura em centros comerciais.',
    backDescription:
      'A PrevSeg oferece soluções completas em segurança para shoppings. Com vigilância estratégica, controle de acesso, monitoramento e equipes treinadas, garante proteção de lojistas, clientes e patrimônio, mantendo um ambiente seguro e organizado todos os dias.',
  },
];

export default function OurCourses() {
  return (
    <section id="cursos" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <Subtitle text="Onde atuamos" />

          <div className={styles.title}>
            <h1>Áreas de atuação</h1>

            <p>
              Atuamos com excelência em segurança patrimonial, pessoal e eletrônica, oferecendo soluções completas e
              personalizadas para cada cliente. Nossa missão é proteger com eficiência e responsabilidade, garantindo
              tranquilidade e confiança por meio de equipes treinadas, tecnologia de ponta e rigoroso cumprimento das
              normas de segurança.
            </p>
          </div>
        </div>

        <div className={styles.courses}>
          {segments.map((segment, idx) => (
            <CardFlip
              key={idx}
              icon={segment.icon}
              title={segment.title}
              subtitle={segment.subtitle}
              description={segment.description}
              backDescription={segment.backDescription}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
