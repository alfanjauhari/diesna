import { Wrapper } from '../../../comps';
import Image from 'next/image';
import { NextSeo } from 'next-seo';

export default function SoloVokal() {
  return (
    <Wrapper>
      <NextSeo title="Lomba Solo Vokal" />
      <h1 className="text-3xl text-blue-900 font-bold">Lomba Solo Vokal</h1>
      <div className="bg-white shadow-xl rounded-xl w-full mt-8">
        <div
          className="relative w-full"
          style={{
            height: '480px',
          }}
        >
          <Image
            layout="fill"
            src="https://images.unsplash.com/flagged/photo-1564434369423-3d02c9905bf3"
            className="rounded-tl-xl rounded-tr-xl absolute"
            objectFit="cover"
          />
        </div>
        <div className="p-4 md:p-6">
          <h2 className="text-gray-900 font-bold text-2xl mb-4">
            Detail Event
          </h2>
          <div className="prose mt-4">
            <p className="font-bold">Hello Singers!</p>
            <p>
              Untuk kalian siswa dan siswi SMANSAKA yang punya bakat atau hobi
              menyanyi, di Diesnatalis ke-31 SMANSAKA kali ini akan menyediakan
              wadah untuk kalian yang ingin menyalurkan bakat kalian di bidang
              tarik suara nih!
            </p>
            <p className="mt-4">
              Buat kalian yang tertarik mengikuti lomba ini,baca regulasi
              dibawah ini dulu yaa!
            </p>
            <p className="mt-4 font-bold text-lg">A. PERATURAN UMUM</p>
            <ol className="mt-4">
              <li>Keputusan panitia dan juri tidak dapat diganggu gugat;</li>
              <li>
                Proses pelaksanaan dan pengambilan video lomba harus tetap
                mematuhi standart protokol kesehatan yang telah ditetapkan untuk
                menghindari penularan COVID-19;
              </li>
              <li>
                Keterlambatan pengumpulan dapat berakibat pengurangan poin dan
                diskualifikasi;
              </li>
              <li>
                Peserta audisi Solo Vocal wajib mengumpulkan video berupa MP4
                dan diunggah ke laman instagram pribadi atau instagram kelas;
              </li>
              <li>
                Peserta diberi durasi maksimal 5 menit untuk menampilkan 1 lagu.
              </li>
              <li>
                Peserta wajib mengikuti Instagram Official @bosss.smansaka.
              </li>
            </ol>
            <p className="mt-4 font-bold text-lg">B. PERATURAN KHUSUS</p>
            <p className="font-semibold">I. PESERTA</p>
            <ol className="mt-4">
              <li>Merupakan siswa dan siswi SMAN 1 Kauman;</li>
              <li>
                Peserta merupakan siswa dan siswi kelas X dan XI. (Kelas XII
                tidak diwajibkan ikut);
              </li>
              <li>
                Peserta wajib mengisi formulir pendafataran melalui website yang
                telah disediakan oleh panitia;
              </li>
              <li>
                Peserta harus melengkapi syarat-syarat pendaftaran yang sudah
                ditentukan panitia. Jika terjadi penguduran diri, maka biaya
                pendaftaran tidak dapat dikembalikan;
              </li>
              <li>
                Tidak diperkenankan menampilkan lagu yang mengandung unsur
                pornoaksi, lirik kotor, dan SARA;
              </li>
              <li>Pemilihan genre lagu Bebas;</li>
              <li>Peserta diperbolehkan menggunakan alat music tambahan;</li>
              <li>
                Peserta yang terlambat mengumpulkan file video akan mempengaruhi
                penilaian;{' '}
              </li>
            </ol>
            <p className="mt-4 font-semibold">II. PENGUMPULAN KARYA</p>
            <ol className="mt-4">
              <li>
                Pengumpulan video akan dilaksanakan selama 5 hari pada tanggal 5
                Maret – 10 Maret 2021;
              </li>
              <li>
                Kriteria penilaian antara lain: 🔸️Performance 🔸️Improvisasi
                🔸️Penjiwaan lagu 🔸️Gestur
              </li>
              <li>
                Peserta wajib menggunakan kostum panggung dengan ketentuan:
                📜Bebas, rapi, dan sopan (tidak boleh memakai sergam sekolah),
                📜Tidak ada unsur sponsor.
              </li>
              <li>
                Peserta yang akan diumumkan pada Instagram Official
                @bosss.smansaka dan penyerahan penghargaan pada saat masuk
                sekolah.{' '}
              </li>
            </ol>
            <p className="mt-4 font-semibold">III. SANKSI DAN PELANGGARAN</p>
            <p className="mt-4">
              Seluruh pelanggaran yang menyebabkan diskualifikasi akan dikenakan
              sanksi berupa denda sebesar Rp200.000,00 (dua ratus ribu rupiah).
              Jika tidak menjalankan prosedur yang telah ditentukan, peserta
              akan dikenai sanksi tambahan dari panitia.{' '}
            </p>
            <p className="mt-4 font-semibold">IV. FORCE MAJEUR</p>
            <p className="mt-4">
              Segala sesuatu yang terjadi di luar kehendak manusia, yaitu sakit,
              kecelakaan, meninggal, dan bencana alam. Panitia berhak menilai
              sepenuhnya pengguna alasan force majeur.
            </p>
            <p className="mt-4 font-semibold">V. ATURAN TAMBAHAN</p>
            <ol className="mt-4">
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
          </div>
        </div>
        <div className="flex w-full p-4 md:p-6">
          <a
            href="https://forms.gle/fn9iykQNeSkyaSzm6"
            className="w-full p-4 bg-blue-900 rounded text-white hover:bg-blue-800 duration-300"
            target="_blank"
          >
            Daftar Lomba Solo Vokal
          </a>
        </div>
      </div>
    </Wrapper>
  );
}
