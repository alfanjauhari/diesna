import { Wrapper } from '../../../comps';
import Image from 'next/image';
import { NextSeo } from 'next-seo';

export default function Fotografi() {
  return (
    <Wrapper>
      <NextSeo title="Lomba Fotografi" />
      <h1 className="text-3xl text-blue-900 font-bold">Lomba Fotografi</h1>
      <div className="bg-white shadow-xl rounded-xl w-full mt-8">
        <div
          className="relative w-full"
          style={{
            height: '480px',
          }}
        >
          <Image
            layout="fill"
            src="https://images.unsplash.com/photo-1565584268553-8b0bb5838bee"
            className="rounded-tl-xl rounded-tr-xl absolute"
            objectFit="cover"
          />
        </div>
        <div className="p-4 md:p-6">
          <h2 className="text-gray-900 font-bold text-2xl mb-4">
            Detail Event
          </h2>
          <div className="prose mt-4">
            <p className="font-bold">Salut Photo Enthusiast!</p>
            <p>
              Ada kabar gembira nih dari SMAN 1 KAUMAN ✨Bagi kalian yang suka
              ikut lomba photograpy tetapi terhalang oleh pandemi covid-19,
              SMANSAKA mengadakan lomba photograpy pada DIESNATALIS KE-31,
            </p>
            <p>Syarat dan ketentuan</p>
            <p className="font-bold text-lg">A. PERATURAN UMUM</p>
            <ol>
              <li>Keputusan panitia dan juri tidak dapat diganggu gugat.</li>
              <li>
                Proses pelaksanaan dan pengambilan foto harus tetap mematuhi
                standart protokol COVID-19.
              </li>
              <li>
                Keterlambatan pengumpulan dapat berakibat pengurangan poin dan
                diskualifikasi.
              </li>
            </ol>
            <p className="font-bold text-lg">B. PERATURAN KHUSUS</p>
            <p className="font-semibold">I. PESERTA</p>
            <ol>
              <li>Merupakan siswa dan siswi SMAN 1 Kauman;</li>
              <li>
                Peserta merupakan siswa dan siswi kelas X dan XI. (Kelas XII
                tidak diwajibkan ikut)
              </li>
              <li>
                Peserta wajib mengisi formulir pendafataran melalui website yang
                telah disediakan oleh panitia dan melampirkan foto kartu
                pelajar;
              </li>
              <li>Peserta wajib follow akun instagram @bosss_smansaka</li>
              <li>
                Peserta bisa mengupload karya melalui instagram pribadi maupun
                kelas dengan caption menarik.
              </li>
              <li>Foto belum pernah dilombakan.</li>
              <li>Foto tidak boleh diedit.</li>
              <li>Jumlah like dipertimbangkan.</li>
              <li>
                Peserta harus melengkapi syarat-syarat pendaftaran yang sudah
                ditentukan panitia. Jika terjadi penguduran diri, maka biaya
                pendaftaran tidak dapat dikembalikan;
              </li>
              <li>
                Tidak diperkenankan menampilkan foto yang mengandung unsur
                pornoaksi, lirik kotor, dan SARA;
              </li>
              <li>
                Peserta yang terlambat mengumpulkan file foto akan mempengaruhi
                penilaian;
              </li>
            </ol>
            <b>II. PENGUMPULAN KARYA</b>
            <ol>
              <li>
                Pengumpulan foto akan dilaksanakan selama 5 hari pada tanggal 5
                Maret – 10 Maret 2021;
              </li>
              <li>
                <p className="font-semibold text-sm">Kriteria Penilaian</p>
                <ul>
                  <li>Kesesuain dengan tema (25 poin)</li>
                  <li>Nilai Esai (25 poin)</li>
                  <li>Komposisi foto (25 poin)</li>
                  <li>Keunikan karya (25 poin)</li>
                </ul>
              </li>
              <li>
                Peserta yang mendapatkan juara akan diumumkan pada Instagram
                Official @bosss.smansaka dan penyerahan penghargaan pada saat
                masuk sekolah.
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
            href="https://forms.gle/L34n22ufmR5HKSk39"
            className="w-full p-4 bg-blue-900 rounded text-white hover:bg-blue-800 duration-300"
            target="_blank"
          >
            Daftar Lomba Fotografi
          </a>
        </div>
      </div>
    </Wrapper>
  );
}
