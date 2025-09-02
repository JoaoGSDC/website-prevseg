/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Image from 'next/image';
import styles from '../styles.module.scss';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Subtitle from '@/components/Subtitle';
import CoursesLeftBar from '@/components/CoursesLeftBar';

const IMAGES = [
  '/images/shoppings-1.jpeg',
  '/images/shoppings-2.jpeg',
  '/images/shoppings-3.jpeg',
  '/images/shoppings-4.jpeg',
  '/images/shoppings-5.jpeg',
];

export default function ShoppingsPage() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.headerText}>
            <h1>Shoppings</h1>
            <h3>Segurança e conforto para clientes</h3>
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
              Vigilância estratégica, controle de acessos e suporte para uma experiência segura em centros comerciais.
            </p>
            <p>
              A PrevSeg oferece soluções completas em segurança para shoppings. Com vigilância estratégica, controle de
              acesso, monitoramento e equipes treinadas, garante proteção de lojistas, clientes e patrimônio, mantendo
              um ambiente seguro e organizado todos os dias.
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
