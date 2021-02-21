import { Wrapper } from '../../../comps';
import Image from 'next/image';
import { NextSeo } from 'next-seo';

export default function Esport() {
  return (
    <Wrapper>
      <NextSeo title="Kompetisi E-Sport" />
      <h1 className="text-3xl text-blue-900 font-bold">Kompetisi E-Sport</h1>
      <div className="bg-white shadow-xl rounded-xl w-full mt-8">
        <div
          className="relative w-full"
          style={{
            height: '480px',
          }}
        >
          <Image
            layout="fill"
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e"
            className="rounded-tl-xl rounded-tr-xl absolute"
            objectFit="cover"
          />
        </div>
        <div className="p-4 md:p-6">
          <h2 className="text-gray-900 font-bold text-2xl">Detail Event</h2>
          <div className="prose mt-4">
            <p>
              Olá Gamer&#39;s! SMANSAKA ada kabar gembira nih buat kalian yang
              hobi banget isi waktu luang dengan nge games,tapi cuma dianggep
              sebelah mata aja. Pas banget nih! Kali ini DIESNATALIS SMANSAKA
              mengadakan ajang E-Sport yang meliputi PUBG dan Mobile Legends
              loh! Yuk ikutan dan buktikan kalo ngegames juga bisa jadi landasan
              berprestasi dengan cara yang tidak biasa!{' '}
            </p>
            <p className="font-semibold">PERATURAN KHUSUS PESERTA</p>
            <ol>
              <li>Merupakan siswa dan siswi SMAN 1 Kauman;</li>
              <li>
                Peserta merupakan siswa dan siswi kelas X dan XI. (Kelas XII
                tidak diwajibkan ikut)
              </li>
              <li>
                Peserta wajib mengisi formulir pendaftaran melalui website yang
                telah disediakan oleh panitia;
              </li>
              <li>
                Peserta harus melengkapi syarat-syarat pendaftaran yang sudah
                ditentukan panitia. Jika terjadi penguduran diri, maka biaya
                pendaftaran tidak dapat dikembalikan;{' '}
              </li>
            </ol>
            <p className="font-semibold">FORCE MAJEUR</p>
            <p>
              Segala sesuatu yang terjadi di luar kehendak manusia, yaitu sakit,
              kecelakaan, meninggal, dan bencana alam. Panitia berhak menilai
              sepenuhnya pengguna alasan force majeur.{' '}
            </p>
            <p className="font-semibold">ATURAN TAMBAHAN</p>
            <ol>
              <li>
                Peraturan dapat berubah apabila terjadi force majeur dan atau
                kebutuhan panitia. Perubahan peraturan hanya boleh dilakukan
                oleh panitia dan akan disosialisasikan kepada peserta;
              </li>
              <li>
                Tiap-tiap pasal dalam peraturan diatas diartikan menurut
                persepsi panitia.
              </li>
            </ol>
            <p className="font-semibold text-red-600">
              Detail tentang peraturan teknis dan tata cara perlombaan E-Sport
              akan diumumkan pada saat Technical Meeting berlangsung!
            </p>
          </div>
        </div>
        <div className="flex items-center w-full p-4 md:p-6">
          <a
            href="https://forms.gle/vLPVkrQxB72pHEdF8"
            className="w-full p-4 bg-blue-900 rounded text-white hover:bg-blue-800 duration-300"
            target="_blank"
          >
            Daftar E-Sport PUBG
          </a>
          <a
            href="https://forms.gle/2nxKmcgemmJxbb8t7"
            className="w-full ml-2 p-4 bg-blue-900 rounded text-white hover:bg-blue-800 duration-300"
            target="_blank"
          >
            Daftar E-Sport Mobile Legends
          </a>
        </div>
      </div>
    </Wrapper>
  );
}
