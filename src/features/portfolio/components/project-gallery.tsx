'use client';

import {useState} from 'react';
import {ArrowLeft, ArrowRight} from 'lucide-react';

type GalleryItem = {
  image: string;
  label: string;
};

export default function ProjectGallery({
  images,
  labels
}: {
  images: readonly GalleryItem[];
  labels: readonly string[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex];

  const move = (direction: -1 | 1) => {
    setActiveIndex(index => (index + direction + images.length) % images.length);
  };

  return (
    <div className='space-y-4'>
      <div
        aria-label={labels[activeIndex]}
        className='relative aspect-[16/10] overflow-hidden rounded-3xl border border-slate-900/13 bg-cover bg-center shadow-[0_1.5rem_4rem_rgb(15_23_42_/_12%)] dark:border-white/10 dark:shadow-black/20'
        role='img'
        style={{backgroundImage: activeImage.image}}>
        <div className='absolute inset-0 bg-linear-to-t from-slate-950/45 via-transparent to-white/8' />
        <div className='absolute inset-x-4 bottom-4 flex items-center justify-between gap-4 sm:inset-x-6 sm:bottom-6'>
          <span className='rounded-full border border-white/20 bg-slate-950/55 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm'>
            {activeIndex + 1} / {images.length}
          </span>
          <div className='flex gap-2'>
            <button
              aria-label='Previous image'
              className='grid size-11 place-items-center rounded-xl border border-white/20 bg-slate-950/55 text-white backdrop-blur-sm transition hover:bg-slate-950/80 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-indigo-300'
              onClick={() => move(-1)}
              type='button'>
              <ArrowLeft aria-hidden='true' className='size-5' />
            </button>
            <button
              aria-label='Next image'
              className='grid size-11 place-items-center rounded-xl border border-white/20 bg-slate-950/55 text-white backdrop-blur-sm transition hover:bg-slate-950/80 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-indigo-300'
              onClick={() => move(1)}
              type='button'>
              <ArrowRight aria-hidden='true' className='size-5' />
            </button>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-3'>
        {images.map((image, index) => (
          <button
            aria-label={labels[index]}
            aria-pressed={activeIndex === index}
            className={`aspect-[16/10] rounded-2xl border bg-cover bg-center transition focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-indigo-300 ${
              activeIndex === index
                ? 'border-indigo-500 ring-2 ring-indigo-500/30'
                : 'border-slate-900/13 opacity-65 hover:opacity-100 dark:border-white/10'
            }`}
            key={image.label}
            onClick={() => setActiveIndex(index)}
            style={{backgroundImage: image.image}}
            type='button'
          />
        ))}
      </div>
    </div>
  );
}
