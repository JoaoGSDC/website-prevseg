/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Image from 'next/image';
import styles from '../styles.module.scss';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Subtitle from '@/components/Subtitle';
import CoursesLeftBar from '@/components/CoursesLeftBar';

const IMAGES = [
  '/images/clinicas-1.jpeg',
  '/images/clinicas-2.jpeg',
  '/images/clinicas-3.jpeg',
  '/images/clinicas-4.jpeg',
  '/images/clinicas-5.jpeg',
];

export default function ClinicasPage() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.headerText}>
            <h1>Clínicas e hospitais</h1>
            <h3>Cuidado com segurança</h3>
          </div>

          <video width="320" height="240" controls={false} autoPlay muted loop>
            <source src="/videos/video-1.mp4" type="video/mp4" />
          </video>
        </div>

        <div className={styles.container}>
          <CoursesLeftBar />

          <div className={styles.content}>
            <Subtitle text="Sobre o serviço" />
            <p>
              Controle de fluxo e vigilância especializada para ambientes de saúde com foco em proteção e bem-estar.
            </p>
            <p>
              A PrevSeg oferece vigilância especializada para clínicas e hospitais, garantindo proteção de pacientes,
              profissionais e patrimônio. Com atuação preventiva, controle de acesso e equipe treinada, o serviço
              assegura um ambiente seguro, discreto e em conformidade com as normas da saúde.
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
