import React, { useEffect, useRef } from 'react';
import img1 from '../assets/home-img-1.png';
import img2 from '../assets/home-img-2.png';
import img3 from '../assets/home-img-3.png';

const Home: React.FC = () => {
  const img1Ref = useRef<HTMLImageElement>(null);
  const img2Ref = useRef<HTMLImageElement>(null);
  const img3Ref = useRef<HTMLImageElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;

      if (img1Ref.current) {
        img1Ref.current.style.transform = `translateY(${value * 0.5}px)`;
      }
      if (img2Ref.current) {
        img2Ref.current.style.transform = `translateX(${value * 0.3}px)`;
      }
      if (img3Ref.current) {
        img3Ref.current.style.transform = `translateY(${value * 0.7}px)`;
      }
      if (h2Ref.current) {
        h2Ref.current.style.transform = `translateY(${value * 0.4}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative flex justify-center items-center h-screen overflow-hidden">
      <img
        ref={img1Ref}
        className="absolute top-0 left-0 w-full pointer-events-none"
        src={img1}
        alt="Layer 1"
      />
      <img
        ref={img3Ref}
        className="absolute top-0 left-0 w-full pointer-events-none"
        src={img3}
        alt="Layer 2"
        data-aos="fade-up"
      />
      <img
        ref={img2Ref}
        className="absolute top-0 left-0 w-full pointer-events-none"
        src={img2}
        alt="Layer 3"
        data-aos="fade-left"
      />
      <div className="w-full h-full blur-sm absolute plane-bg"></div>

      <div className="absolute flex flex-col justify-center w-full h-full items-start px-30" ref={h2Ref} data-aos="fade-right">
        <h2
          className="font-body text-[80px] font-[800] transition-transform duration-300"
        >
          It’s A Big World <br /> Out There, Go <br /> Explore.
        </h2>
        <p className="font-body text-[20px] font-normal mt-3">
          discover new attractions and experiences to match your <br /> interests and travel style.
        </p>
        <button
          className="mt-8 bg-white/75 px-10 py-2 rounded-2xl font-body font-[600] text-[18px]"
          style={{ color: 'black' }}
        >
          Read Now
        </button>
      </div>
    </section>
  );
};

export default Home;
