import { Wrapper, Icon } from '../../comps';
import Image from 'next/image';

export default function Event() {
  return (
    <Wrapper>
      <h1 className="text-3xl text-blue-900 font-bold">Kompetisi E-Sport</h1>
      <div className="flex flex-col-reverse md:flex-row items-start relative">
        <div className="bg-white shadow-xl rounded-xl p-6 md:p-8 w-full md:w-3/5 mt-8 md:mt-0">
          <div className="w-full">
            <Image
              width={1100}
              height={800}
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e"
              className="object-cover rounded-xl"
            />
          </div>
          <h2 className="text-gray-900 font-bold text-2xl mt-8 mb-4">
            Detail Event
          </h2>
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
        <div className="md:sticky md:top-0 bg-white shadow-xl rounded-xl p-6 md:p-8 w-full md:w-2/5 md:ml-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 font-bold text-2xl mb-4">Informasi</h2>
          <div className="flex items-center">
            <Icon name="place" className="text-gray-500" />
            <p className="text-gray-500 ml-2">Online</p>
          </div>
          <div className="flex items-center mt-4">
            <Icon name="time" className="text-gray-500" />
            <p className="text-gray-500 ml-2">14 Januari 2021</p>
          </div>
          <div className="flex items-center mt-4">
            <Icon className="text-gray-500" />
            <p className="text-gray-500 ml-2">Rp. 50.000,00</p>
          </div>
          <button className="mt-8 w-full text-center py-3 bg-blue-900 rounded text-white hover:bg-blue-800 duration-300">
            Daftar Sekarang
          </button>
        </div>
      </div>
    </Wrapper>
  );
}
