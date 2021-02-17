import { Wrapper } from '../comps';
import { NextSeo } from 'next-seo';

export default function About() {
  return (
    <Wrapper>
      <NextSeo title="Tentang" />
      <h1 className="text-3xl text-blue-900 font-bold">Tentang Dies Natalis</h1>
      <div className="bg-white shadow-xl rounded-xl w-full mt-8">
        <div className="p-4 md:p-6">
          <div className="prose">
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
              <a href="http://diesna.vercel.app">http://diesna.vercel.app</a>{' '}
              🔸️{' '}
            </p>
            <p>LINK FORMULIR PENDAFTARAN LOMBA : </p>
            <p>
              PUBG :{' '}
              <a href="https://forms.gle/vLPVkrQxB72pHEdF8">
                https://forms.gle/vLPVkrQxB72pHEdF8
              </a>{' '}
            </p>
            <p>
              Mobile Legends :{' '}
              <a href="https://forms.gle/2nxKmcgemmJxbb8t7">
                https://forms.gle/2nxKmcgemmJxbb8t7
              </a>{' '}
            </p>
            <p>
              Fotografi :{' '}
              <a href="https://forms.gle/L34n22ufmR5HKSk39">
                https://forms.gle/L34n22ufmR5HKSk39
              </a>{' '}
            </p>
            <p>
              Solo Vocal :{' '}
              <a href="https://forms.gle/fn9iykQNeSkyaSzm6">
                https://forms.gle/fn9iykQNeSkyaSzm6
              </a>{' '}
            </p>
            <p>
              Story Telling :{' '}
              <a href="https://forms.gle/azbBoxMCFhpzHDUV8">
                https://forms.gle/azbBoxMCFhpzHDUV8
              </a>{' '}
            </p>
            <p>Cp : +62 813-2434-9473 (Dharmawan) +62 856-1735-128 (Najla)</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
