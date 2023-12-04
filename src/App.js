
import './App.css';
import AboutUs from './components/AboutUs';
import CreatingHome from './components/CreatingHome';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Interior from './components/Interior';
import Newsletter from './components/Newsletter';
import SatisfiedClients from './components/SatisfiedClients';
import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BackToTop from "./assets/images/png/BackToTop.png";
import Loder from './components/Loder';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';

function App() {
  // -----------------------Aos-------------------------
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 1200,
      }
    );
    Aos.refresh()
  });
  // ----------------backToTop----------------
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  // -------------------preloader------------------------
  document.getElementById('root')
  const [screenLoading, setScreenLoading] = useState(false);
  useEffect(() => {
    document.body.classList.add("body-bg")
    setScreenLoading(true);
    setTimeout(() => {
      document.body.classList.remove("body-bg")
      setScreenLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      {screenLoading ? (
        <Loder />
      ) : (
        <BrowserRouter>
          <>
            <div className=' overflow-hidden'>
              <Header />
              <AboutUs />
              <Interior />
              <Gallery />
              <SatisfiedClients />
              <CreatingHome />
              <Newsletter />
              <Footer />
            </div>
            <div>
              <img onClick={() => top()} src={BackToTop} alt='BackToTop' className={backToTop ? "back_to_top" : "d-none"} />
            </div>
          </>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
