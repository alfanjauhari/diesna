import { Wrapper } from '../comps';
import { NextSeo } from 'next-seo';
import Image from 'next/image';

export default function About() {
  return (
    <Wrapper>
      <NextSeo title="Tentang" />
      <h1 className="text-3xl text-blue-900 font-bold">Tentang Dies Natalis</h1>
      <div className="bg-white shadow-xl rounded-xl w-full mt-8">
        <div className="px-2 py-4 md:p-6">
          <div className="prose">
            <p>
              <Image
                src="/pamflet.png"
                width={3754}
                height={5487}
                quality={50}
                loading="eager"
              />
            </p>
            <p>
              🏫 SMANSAKA PROUDLY PRESENT 🏫 DIESNATALIS SMANSAKA ARE BACK✨
              Dengan mengusung tema FUN ART,tahun ini kita akan memeriahkan hari
              jadi SMAN 1 KAUMAN yang ke 31!{' '}
            </p>
            <p>
              🚫Dikarenakan adanya pandemi Covid-19 tahun ini,tidak mengurangi
              semangat kita untuk tetap berkarya dengan cara yang FUN!
              Diesnatalis SMANSAKA ini dimeriahkan dengan lomba berbasis online
              seperti :
            </p>
            <ul>
              <li>E-Sport PUBG</li>
              <li>E-Sport Mobile Legends</li>
              <li>Story Telling</li>
              <li>Photography </li>
              <li>Solo Vocal</li>
            </ul>
            <p>
              Yang wajib diikuti oleh siswa kelas X dan XI. (Untuk kelas XII
              tidak diwajibkan ikut){' '}
            </p>
            <p>🎡 SHOW YOUR AMAZING CREATIONS TO THE FUNTASTIC WORLD! 🎡 </p>
            <p>
              Jangan lupa catat tanggalnya : 🗓 27 Februari 2021 - 13 Maret 2021
              ⏰ 07.00-Selesai{' '}
            </p>
            <p>
              Info lebih lanjut : 🔸️{' '}
              <a href="http://diesna-smansaka.vercel.app">
                http://diesna-smansaka.vercel.app
              </a>{' '}
              🔸️{' '}
            </p>
            <p className="font-semibold">Contact Person :</p>
            <p>+62 813-2434-9473 (Dharmawan)</p>
            <p>+62 856-1735-128 (Najla)</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
