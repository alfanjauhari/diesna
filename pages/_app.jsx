import { DefaultSeo } from 'next-seo';
import '../assets/app.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        title="Home"
        titleTemplate="%s - Dies Natalis ke 31 SMANSAKA"
        description="Official website Dies Natalis ke 31 SMA Negeri 1 Kauman Tulungagung"
      />
      <Component {...pageProps} />
    </>
  );
}
