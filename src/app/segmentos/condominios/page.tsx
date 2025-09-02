/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Image from 'next/image';
import styles from '../styles.module.scss';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Subtitle from '@/components/Subtitle';
import CoursesLeftBar from '@/components/CoursesLeftBar';

const IMAGES = [
  '/images/condominios-1.jpeg',
  '/images/condominios-2.jpeg',
  '/images/condominios-3.jpeg',
  '/images/condominios-4.jpeg',
  '/images/condominios-5.jpeg',
];

export default function CondominiosPage() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.headerText}>
            <h1>Condomínios</h1>
            <h3>Proteção 24 horas por dia</h3>
          </div>

          <video width="320" height="240" controls={false} autoPlay muted loop>
            <source src="/videos/video-1.mp4" type="video/mp4" />
          </video>
        </div>

        <div className={styles.container}>
          <CoursesLeftBar />

          <div className={styles.content}>
            <Subtitle text="Sobre o serviço" />
            <p>Condomínios residenciais e empresariais.</p>
            <p>Segurança preventiva e controle de acesso para proteger moradores, visitantes e patrimônios.</p>
            <p>
              A PrevSeg oferece soluções completas em segurança para condomínios residenciais e empresariais. Com
              vigilantes treinados, monitoramento eficiente e atuação preventiva, garante proteção patrimonial e
              tranquilidade para moradores e empresas. Regularizada pela Polícia Federal e SESVESP, a PrevSeg entrega
              confiança e profissionalismo em cada serviço.
            </p>

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
        </div>
      </main>
    </>
  );
}
