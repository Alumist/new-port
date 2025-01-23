'use client';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Set a timer to change the background after a delay
    const timer = setTimeout(() => {
      console.log('Changing background');
      document.querySelector('#bg')?.classList.add('visible-bg');
    }, 400);
    const time = setTimeout(() => {
      console.log('Changing background');
      document.querySelector('#bg')?.classList.remove('hidden-bg');
    }, 1500);

    return () => clearTimeout(time);
  }, []);

  return (
    <section className='flex justify-center items-center text-center w-full h-screen bg-white first'>
      <div
        id='bg'
        className='w-full p-6 bg-black link relative group hidden-bg'
      >
        <h1 className='text-5xl text-white animate-pulse my-8 relative z-10 group-hover:text-black'>
          Nicholas Quiroz
        </h1>
        <p className='text-2xl text-white animate-pulse my-8 relative z-10 group-hover:text-black'>
          Full Stack Developer
        </p>
        <p className='text-2xl text-black animate-pulse my-8 relative z-10 hidden group-hover:text-black group-hover:flex justify-center group-hover:items-center'>
          Scroll Bellow
        </p>
        <p className='text-2xl text-white animate-pulse my-8 relative z-10 group-hover:hidden'>
          Hover Over Me
        </p>
      </div>
    </section>
  );
}
