/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from 'next/image';
import styles from './styles.module.scss';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { GiHomeGarage, GiHealthNormal, GiPartyPopper, GiFactory, GiTeacher, GiShoppingBag } from 'react-icons/gi';

const IMAGES = [
  '/images/places/frente.jpg',
  '/images/places/entrada-1.jpg',
  '/images/places/entrada-2.jpg',
  '/images/places/entrada-3.jpg',
  '/images/places/stand-de-tiro-7.jpg',
  '/images/places/stand-de-tiro-8.jpg',
  '/images/places/stand-de-tiro-1.jpg',
  '/images/places/stand-de-tiro-2.jpg',
  '/images/places/stand-de-tiro-3.jpg',
  '/images/places/stand-de-tiro-4.jpg',
  '/images/places/stand-de-tiro-5.jpg',
  '/images/places/stand-de-tiro-6.jpg',
  '/images/places/recepcao-1.jpg',
  '/images/places/recepcao-2.jpg',
  '/images/places/sala-de-aula-1.jpg',
  '/images/places/sala-de-aula-2.jpg',
  '/images/places/sala-de-aula-3.jpg',
  '/images/places/tiro-virtual-1.jpg',
  '/images/places/tiro-virtual-2.jpg',
  '/images/places/tiro-virtual-3.jpg',
  '/images/places/academia-1.jpg',
  '/images/places/academia-2.jpg',
  '/images/places/academia-3.jpg',
  '/images/places/academia-4.jpg',
  '/images/places/academia-5.jpg',
  '/images/places/academia-6.jpg',
  '/images/places/refeitorio-1.jpg',
  '/images/places/refeitorio-2.jpg',
];

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

export default function QuemSomosPage() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1>Quem Somos</h1>
          <h2>Especialistas em segurança privada e vigilância patrimonial</h2>
        </div>
        <div className={styles.headerImage}>
          <Image src="/images/background-1.jpg" alt="Equipe Prevseg" fill style={{ objectFit: 'cover' }} priority />
        </div>
      </header>

      <div className={styles.container}>
        <section className={styles.aboutSection}>
          <div className={styles.aboutText}>
            <h3>Sobre a Prevseg</h3>
            <p>
              A PREVSEG é uma empresa especializada em segurança privada, devidamente autorizada pelo Departamento de
              Polícia Federal (DPF) a exercer as atividades de vigilância patrimonial. Possui o Certificado de
              Regularidade de Situação de Funcionamento de Segurança Especializada junto ao D.E.C.A.D.E./D.P.C.R.D. da
              Secretaria de Segurança Pública do Estado de São Paulo.
            </p>
            <p>
              A empresa conta ainda com o Certificado de Regularidade de Segurança CRS-SESVESP, garantindo conformidade
              e excelência nos serviços prestados. Atuamos com ética, responsabilidade e inovação, oferecendo soluções
              completas para proteção patrimonial e formação de profissionais de segurança.
            </p>
            <p>
              Nossa equipe é formada por profissionais experientes e credenciados, preparados para atender às demandas
              do mercado e proporcionar tranquilidade aos nossos clientes. Investimos em infraestrutura moderna,
              tecnologia e métodos atualizados para garantir a máxima eficiência em todas as operações.
            </p>
          </div>

          <div className={styles.aboutImage}>
            <video width={400} height={300} controls={false} autoPlay muted loop>
              <source src="/videos/video-1.mp4" type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>
        </section>

        <section className={styles.valuesSection}>
          <h3>Nossos diferenciais</h3>
          <ul>
            <li>Autorização e certificação pelos órgãos competentes</li>
            <li>Formação especializada em vigilância patrimonial</li>
            <li>Equipe qualificada e infraestrutura moderna</li>
            <li>Monitoramento eletrônico e soluções integradas</li>
            <li>Compromisso com ética, responsabilidade e inovação</li>
          </ul>
        </section>

        {/* <div className={styles.carouselContainer}>
          <div className={styles.carousel}>
            <Carousel className="w-full">
              <CarouselContent>
                {IMAGES.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative w-full aspect-video">
                      <figure className="w-full h-full">
                        <Image
                          src={image}
                          alt={`Imagem ${index + 1}`}
                          fill
                          className="object-cover rounded-lg"
                          sizes="100vw"
                        />
                      </figure>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div> */}
      </div>
    </main>
  );
}
