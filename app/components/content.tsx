import Image from 'next/image';

export default function Content() {
  return (
    <section className='grid grid-cols-2 gap-8 justify-center items-center text-center w-full h-screen first'>
      <div className='flex flex-col justify-center items-center'>
        <Image
          src='/images/engagement.png'
          alt='1'
          width={500}
          height={500}
          className='rounded'
        />
        <h1 className='text-4xl font-bold'>Engagement</h1>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <Image
          src='/images/engagement.png'
          alt='1'
          width={500}
          height={500}
          className='rounded'
        />
        <h1 className='text-4xl font-bold'>Engagement</h1>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <Image
          src='/images/engagement.png'
          alt='1'
          width={500}
          height={500}
          className='rounded'
        />
        <h1 className='text-4xl font-bold'>Engagement</h1>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <Image
          src='/images/engagement.png'
          alt='1'
          width={500}
          height={500}
          className='rounded'
        />
        <h1 className='text-4xl font-bold'>Engagement</h1>
      </div>
    </section>
  );
}
