import React, { useEffect } from 'react';
import { Wrapper, HeroIllustration } from '../comps';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Wrapper className="overflow-hidden">
        <section className="flex justify-between items-center">
          <div className="block w-full md:w-5/12">
            <h1 className="text-5xl font-bold text-blue-900 leading-snug">
              Dies Natalis SMANSAKA 2021
            </h1>
            <p className="text-gray-500 text-lg mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem,
              odit voluptatem ex iusto debitis officia reiciendis blanditiis nam
              dolorem deserunt alias, quidem cupiditate temporibus saepe ratione
              velit perspiciatis facilis? Dolorem!
            </p>
            <button className="mt-6 px-8 py-3 bg-blue-900 rounded text-white hover:bg-blue-800 duration-300">
              Pelajari Selengkapnya!
            </button>
          </div>
          <HeroIllustration className="hidden md:block" />
        </section>
        <section className="mt-16">
          <h1 className="text-blue-900 text-3xl font-bold text-center mb-8">
            Daftar Event
          </h1>
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
            <div className="w-full lg:w-5/12 mt-6 lg:mt-0">
              <h1
                className="text-blue-900 text-2xl font-bold mb-4"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                Kompetisi E-Sport
              </h1>
              <p
                className="text-gray-500 leading-relaxed w-full lg:w-11/12"
                data-aos="fade-right"
                data-aos-delay="150"
              >
                E-Sport merupakan sebuah kompetisi di bidang olahraga namun
                berbasis online. Umumnya E-Sport dimainkan dengan tim dan
                menggunakan media game multiplayer yang biasanya bergenre FPS,
                Battle Royale, MOBA, dan sebagainya.
                <br />
                <br />
                Pada{' '}
                <span className="text-blue-900">Dies Natalis SMANSAKA</span> ke
                31 ini kamu memiliki kesempatan untuk mengasah kemampuan kamu di
                kompetisi E-Sport Mobile Legend dan Player Unknown Battle Ground
                (PUBG).
              </p>
              <div className="mt-6" data-aos="fade-right" data-aos-delay="200">
                <Link href="/event/esport">
                  <a
                    href="/event/esport"
                    className="px-8 py-3 bg-blue-900 rounded text-white hover:bg-blue-800 duration-300"
                  >
                    Pelajari Selengkapnya!
                  </a>
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-7/12 lg:ml-8" data-aos="fade-left">
              <Image
                width={1100}
                height={800}
                loading="eager"
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e"
                className="rounded-xl lg:rounded-tl-3xl lg:rounded-br-3xl lg:rounded-bl-none lg:rounded-tr-none object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-between mt-16">
            <div className="w-full lg:w-5/12 mt-6 lg:mt-0">
              <h1
                className="text-blue-900 text-2xl font-bold mb-4"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                Lomba Fotografi
              </h1>
              <p
                className="text-gray-500 leading-relaxed w-full lg:w-11/12"
                data-aos="fade-left"
                data-aos-delay="150"
              >
                Lomba fotografi adalah lomba yang akan menantang kamu
                menampilkan hasil pemotretan terbaik kamu. Kamu bisa menggunakan
                kamera digital, kamera analog, bahkan kamera handphone sekaligus
                untuk mengikuti perlombaan ini.
                <br />
                <br />
                Tema dari perlombaan fotografi ini harus berhubungan dengan tema{' '}
                <span className="text-blue-900">Dies Natalis SMANSAKA</span> ke
                31 dan kamu hanya diperbolehkan untuk mengirim satu hasil foto
                terbaikmu.
              </p>
              <div className="mt-6" data-aos="fade-left" data-aos-delay="200">
                <a
                  href="#"
                  className="px-8 py-3 bg-blue-900 rounded text-white hover:bg-blue-800 duration-300"
                >
                  Pelajari Selengkapnya!
                </a>
              </div>
            </div>
            <div
              className="w-full lg:w-7/12 lg:mr-8"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <Image
                width={1100}
                height={800}
                loading="eager"
                src="https://images.unsplash.com/photo-1565584268553-8b0bb5838bee"
                className="rounded-xl lg:rounded-tr-3xl lg:rounded-bl-3xl lg:rounded-br-none lg:rounded-tl-none object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between mt-16">
            <div className="w-full lg:w-5/12 mt-6 lg:mt-0">
              <h1
                className="text-blue-900 text-2xl font-bold mb-4"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                Lomba Solo Vokal
              </h1>
              <p
                className="text-gray-500 leading-relaxed w-full lg:w-11/12"
                data-aos="fade-right"
                data-aos-delay="150"
              >
                Lomba ini cocok untuk kamu yang memiliki bakat bernyanyi atau
                suka untuk bernyanyi dimanapun dan kapanpun namun tidak memiliki
                tempat atau wadah yang cocok untuk menampung bakat kamu. Di sini
                kamu akan bernyanyi satu lagu wajib dan satu lagu pilihan kamu.
                <br />
                <br />
                Di perlombaan ini kriteria penilaian bukan hanya dari bagus atau
                tidak-nya suara, namun juga meliputi ekspresi wajah, penampilan,
                dan lainnya.
              </p>
              <div className="mt-6" data-aos="fade-right" data-aos-delay="200">
                <a
                  href="#"
                  className="px-8 py-3 bg-blue-900 rounded text-white hover:bg-blue-800 duration-300"
                >
                  Pelajari Selengkapnya!
                </a>
              </div>
            </div>
            <div className="w-full lg:w-7/12 lg:ml-8" data-aos="fade-left">
              <Image
                width={1100}
                height={800}
                loading="eager"
                src="https://images.unsplash.com/flagged/photo-1564434369423-3d02c9905bf3"
                className="rounded-xl lg:rounded-tl-3xl lg:rounded-br-3xl lg:rounded-bl-none lg:rounded-tr-none object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-between mt-16">
            <div className="w-full lg:w-5/12 mt-6 lg:mt-0">
              <h1
                className="text-blue-900 text-2xl font-bold mb-4"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                Lomba Story Telling
              </h1>
              <p
                className="text-gray-500 leading-relaxed w-full lg:w-11/12"
                data-aos="fade-left"
                data-aos-delay="150"
              >
                Pada perlombaan ini kamu dituntut untuk bercerita di depan
                publik dengan menggunakan Bahasa Inggris yang baik dan benar.
                Kamu bebas untuk memilih tema cerita yang akan kamu bawakan
                sehingga kamu bisa lebih percaya diri untuk menceritakan cerita
                tersebut di depan publik.
                <br />
                <br />
                Selain mengasah <i>public speaking</i>, kamu juga dapat berlatih
                cara berbicaramu dengan menggunakan Bahasa Inggris yang baik dan
                benar di perlombaan ini.
              </p>
              <div className="my-6" data-aos="fade-left" data-aos-delay="100">
                <a
                  href="#"
                  className="px-8 py-3 bg-blue-900 rounded text-white hover:bg-blue-800 duration-300"
                >
                  Pelajari Selengkapnya!
                </a>
              </div>
            </div>
            <div className="w-full lg:w-7/12 lg:mr-8" data-aos="fade-right">
              <Image
                width={1100}
                height={800}
                loading="eager"
                src="https://images.unsplash.com/photo-1549055244-3ba3f5a6e252"
                className="rounded-xl lg:rounded-tr-3xl lg:rounded-bl-3xl lg:rounded-br-none lg:rounded-tl-none object-cover"
              />
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  );
}
