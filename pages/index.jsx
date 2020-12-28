import { Navbar, Wrapper, HeroIllustration } from '../comps';

export default function Home() {
  return (
    <>
      <Navbar />
      <Wrapper>
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
      </Wrapper>
    </>
  );
}
