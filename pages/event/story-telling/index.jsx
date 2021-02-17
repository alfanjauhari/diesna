import { Wrapper } from '../../../comps';
import Image from 'next/image';
import { NextSeo } from 'next-seo';

export default function StoryTelling() {
  return (
    <Wrapper>
      <NextSeo title="Lomba Story Telling" />
      <h1 className="text-3xl text-blue-900 font-bold">Lomba Story Telling</h1>
      <div className="bg-white shadow-xl rounded-xl w-full mt-8">
        <div
          className="relative w-full"
          style={{
            height: '480px',
          }}
        >
          <Image
            layout="fill"
            src="https://images.unsplash.com/photo-1549055244-3ba3f5a6e252"
            className="rounded-tl-xl rounded-tr-xl absolute"
            objectFit="cover"
          />
        </div>
        <div className="p-4 md:p-6">
          <h2 className="text-gray-900 font-bold text-2xl mb-4">
            Detail Event
          </h2>
          <div className="prose mt-4">
            <b>Hai Story Teller</b>
            <p>
              SMANSAKA ada kabar gembira nih buat kalian yang hobi bercerita
              tetapi terhalang oleh pandemi covid-19. Kali ini SMANSAKA
              mengadakan DIESNATALIS ke-31 yang ada berbagai lomba di dalam nya,
              salah satunya yaitu Story Telling. YUK IKUTAN!!!{' '}
            </p>
            <b>A. PERATURAN UMUM</b>
            <ol>
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
                Peserta Lomba Story Telling wajib mengumpulkan 1 video berupa
                MP4 dan diunggah ke laman instagram pribadi atau instagram
                kelas;
              </li>
              <li>Peserta diberi durasi maksimal 5 menit.</li>
              <li>
                Peserta wajib mengikuti Instagram official @bosss.smansaka{' '}
              </li>
            </ol>
            <b>B. PERATURAN KHUSUS I. PESERTA</b>
            <ol>
              <li>
                Lomba Story Telling hanya di ikuti oleh Siswa dan Siswi SMAN 1
                Kauman;
              </li>
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
              <li>Video tidak boleh mengandung SARA;</li>
              <li>Peserta wajib menggunkan kata kata sopan;</li>
              <li>
                Peserta wajib memakai pakaian menarik tetapi tetap dalam keadaan
                yang sopan;{' '}
              </li>
            </ol>
            <b>II. PENGUMPULAN KARYA</b>
            <ol>
              <li>
                Pengumpulan video akan dilaksanakan selama 5 hari pada tanggal 5
                Maret – 10 Maret 2021;
              </li>
              <li>
                Kriteria penilaian antara lain: 🔸️Performance 🔸️Improvisasi
                🔸️Penjiwaan 🔸️Gestur
              </li>
              <li>
                Peserta wajib menggunakan kostum panggung dengan ketentuan:
                📜Bebas, rapi, dan sopan (tidak boleh memakai sergam sekolah),
                📜Tidak ada unsur sponsor.
              </li>
              <li>
                Peserta yang menang akan diumumkan pada Instagram Official
                @bosss.smansaka dan penyerahan penghargaan pada saat masuk
                sekolah.
              </li>
            </ol>
            <b>III. SANKSI DAN PELANGGARAN</b>
            <p>
              Seluruh pelanggaran yang menyebabkan diskualifikasi akan dikenakan
              sanksi berupa denda sebesar Rp200.000,00 (dua ratus ribu rupiah).
              Jika tidak menjalankan prosedur yang telah ditentukan, peserta
              akan dikenai sanksi tambahan dari panitia.{' '}
            </p>
            <b>IV. FORCE MAJEUR</b>
            <p>
              Segala sesuatu yang terjadi di luar kehendak manusia, yaitu sakit,
              kecelakaan, meninggal, dan bencana alam. Panitia berhak menilai
              sepenuhnya pengguna alasan force majeur.{' '}
            </p>
            <b>V. ATURAN TAMBAHAN</b>
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
          </div>
        </div>
        <div className="flex w-full p-4 md:p-6">
          <a
            href="https://forms.gle/azbBoxMCFhpzHDUV8"
            className="w-full p-4 bg-blue-900 rounded text-white hover:bg-blue-800 duration-300"
            target="_blank"
          >
            Daftar Lomba Story Telling
          </a>
        </div>
      </div>
    </Wrapper>
  );
}
