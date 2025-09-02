/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Image from 'next/image';
import styles from '../styles.module.scss';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Subtitle from '@/components/Subtitle';
import CoursesLeftBar from '@/components/CoursesLeftBar';

const IMAGES = [
  '/images/empresas-1.jpeg',
  '/images/empresas-2.jpeg',
  '/images/empresas-3.jpeg',
  '/images/empresas-4.jpeg',
  '/images/empresas-5.jpeg',
];

export default function EmpresasPage() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.headerText}>
            <h1>Proteção do patrimônio empresarial</h1>
            <h3>Empresas e indústrias</h3>
          </div>

          <video width="320" height="240" controls={false} autoPlay muted loop>
            <source src="/videos/video-empresas.mp4" type="video/mp4" />
          </video>
        </div>

        <div className={styles.container}>
          <CoursesLeftBar />

          <div className={styles.content}>
            <Subtitle text="Sobre o serviço" />
            <p>
              Soluções de vigilância para áreas industriais e corporativas, com foco na prevenção de riscos e perdas.
            </p>
            <p>
              A PrevSeg atua com vigilância especializada para empresas e indústrias, oferecendo controle de acesso,
              rondas, proteção patrimonial e gestão de riscos. Equipes treinadas e soluções sob medida garantem
              segurança eficiente e conforme as exigências legais.
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
