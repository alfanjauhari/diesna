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
          <p className="text-gray-500 mt-4">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequatur ducimus iste ex deleniti voluptas ad iusto ab
              temporibus? Obcaecati porro eos ipsam impedit libero. Dolores
              ducimus illo nostrum voluptate id. Non tenetur libero accusamus
              maxime labore ut facere, error aliquid molestias modi rerum
              tempore sed, adipisci doloremque, aperiam eveniet? Distinctio
              maiores rem repellendus aliquid ratione vel sit quod porro
              veritatis.
            </p>{' '}
            <p className="mt-4">
              A, est facilis alias sequi, cum doloribus consectetur debitis
              saepe perspiciatis soluta quia veniam? Ipsum, aliquid tempore
              voluptatum omnis, deleniti nostrum soluta iste veniam quasi magni
              quam reprehenderit? Debitis, eveniet! Quos obcaecati officiis,
              repudiandae ipsam dolorum delectus voluptatem pariatur adipisci
              quis incidunt quas et aliquid architecto iste. Earum harum amet
              blanditiis quidem repellendus, libero aut et labore deserunt,
              quibusdam obcaecati? Nihil repudiandae et iure eum beatae, nisi
              quo, placeat rem voluptatum obcaecati non commodi magnam est in
              porro ipsum, nemo reprehenderit quia architecto aliquam nesciunt
              blanditiis ipsam fuga eos.
            </p>
            <p className="mt-4">
              Nesciunt! Nostrum suscipit assumenda quod exercitationem minima
              voluptatum nobis rerum ipsam qui debitis eius vitae harum
              accusamus eveniet eos dolore tenetur, dolor vero velit culpa
              explicabo hic praesentium maiores? Qui, reiciendis? At expedita
              ad, assumenda, autem voluptatibus tenetur reiciendis alias
              perspiciatis quisquam, vero placeat ut minus neque. Sequi,
              aspernatur dolor sunt consequuntur delectus, porro facilis facere
              modi labore nihil nam perspiciatis. Praesentium aperiam eligendi
              beatae cumque ut consequatur repudiandae totam corrupti? Obcaecati
              voluptatem alias velit id porro explicabo accusamus assumenda
              animi quos nihil atque sequi, beatae incidunt quae? Laboriosam,
              provident quidem.
            </p>
          </p>
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
