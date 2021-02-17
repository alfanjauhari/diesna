import Navbar from './Navbar';
import classnames from 'classnames';

export default function Wrapper({ className, children }) {
  const classNames = classnames(
    'flex-grow px-6 md:px-12 lg:px-24 my-8 md:my-16',
    className
  );

  return (
    <>
      <Navbar />
      <main className={classNames}>{children}</main>
      <footer className="border-t p-6 flex flex-col md:flex-row justify-center text-center">
        <p>
          By{' '}
          <a href="https://alfan.my.id" className="text-blue-600">
            Alfan Jauhari
          </a>
        </p>
        <p className="md:mx-2">&bull;</p>
        <p>
          &copy; Copyright 2020 &mdash; OSIS{' '}
          <a href="http://smansaka.sch.id" className="text-blue-600">
            SMA Negeri 1 Kauman
          </a>
        </p>
      </footer>
    </>
  );
}
