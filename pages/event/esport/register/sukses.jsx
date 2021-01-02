import { SuccessIllustration } from '../../../../comps';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

export default function Success({ name }) {
  return (
    <>
      <NextSeo title="Pendaftaran Sukses" />
      <div className="flex-grow flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 my-8 md:my-12 lg:my-12">
        <SuccessIllustration className="w-4/5 md:w-3/5 h-auto" />
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-900 text-4xl mt-6 font-bold text-center leading-snug">
          Selamat {name}, <br /> Pendaftaran Kamu Telah Berhasil!
        </h1>
        <p className="mt-4 text-gray-500 w-full md:w-6/5 lg:w-3/5 leading-relaxed text-center text-lg">
          Untuk menyelesaikan pendaftaran tim kamu. Kamu harus segera melakukan
          transfer biaya pendaftaran ke panitia Kompetisi E-Sport{' '}
          <span className="text-blue-900">Dies Natalis ke 31</span> SMANSAKA.
          Informasi lebih lanjut mengenai pembayaran dan konfirmasi pembayaran,
          kamu bisa menuju ke halaman{' '}
          <Link href="/event/esport">
            <a href="/event/esport" className="text-blue-600">
              detail Kompetisi E-Sport Dies Natalis ke 31 SMANSAKA
            </a>
          </Link>
          .
        </p>
      </div>
    </>
  );
}

export async function getServerSideProps({ query }) {
  const { name } = query;

  return {
    props: {
      name,
    },
  };
}
