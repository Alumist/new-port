import Image from 'next/image';
import Link from 'next/link';

export default function Content() {
  return (
    <section className='grid grid-cols-2 gap-8 justify-center items-center text-center w-full h-screen first'>
      <Link
        href='/'
        className='flex flex-col justify-center items-center transition-all duration-300  hover:scale-125 ease-in-out'
      >
        <Image
          src='/images/engagement.png'
          alt='1'
          width={500}
          height={500}
          className='rounded'
        />
        <h1 className='text-4xl my-4 font-bold'>Engagement</h1>
      </Link>
      <Link
        href='/'
        className='flex flex-col justify-center items-center transition-all duration-300  hover:scale-125 ease-in-out '
      >
        <Image
          src='/images/smilemore.png'
          alt='1'
          width={500}
          height={500}
          className='rounded'
        />
        <h1 className='text-4xl font-bold my-4 '>SmileMore</h1>
      </Link>
      <Link
        href='/'
        className='flex flex-col justify-center items-center transition-all duration-300  hover:scale-125 ease-in-out'
      >
        <Image
          src='/images/HolyGrounds.png'
          alt='1'
          width={500}
          height={500}
          className='rounded'
        />
        <h1 className='text-4xl font-bold my-4 '>HolyGrounds</h1>
      </Link>
      <Link
        href='/'
        className='flex flex-col justify-center items-center transition-all duration-300  hover:scale-125 ease-in-out'
      >
        <Image
          src='/images/loopstudios.jpg'
          alt='1'
          width={500}
          height={500}
          className='rounded'
        />
        <h1 className='text-4xl font-bold my-4 '>LoopStudios</h1>
      </Link>
    </section>
  );
}
