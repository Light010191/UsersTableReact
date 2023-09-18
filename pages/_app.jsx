import { Footer } from '../components/Footer';
import Header from '../components/Header';
import '../styles/global.css';
export default function App({ Component, pageProps }) {
    return <>
        <Header/>
        <main>
            <Component {...pageProps} />
        </main>
        <Footer/>
    </>;
  }