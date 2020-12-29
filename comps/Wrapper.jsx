import Navbar from './Navbar';

export default function Wrapper({ children }) {
  return (
    <>
      <Navbar />
      <main className="flex-grow px-6 md:px-12 lg:px-24 my-8 md:my-16">
        {children}
      </main>
      <footer className="border-t py-6 flex justify-center">
        <p>
          Created with &#x2764; by{' '}
          <a href="https://alfan.my.id" className="text-blue-600">
            Alfan Jauhari
          </a>{' '}
          &bull; Copyright 2020 &mdash; OSIS{' '}
          <a href="http://smansaka.sch.id" className="text-blue-600">
            SMA Negeri 1 Kauman
          </a>
        </p>
      </footer>
    </>
  );
}
