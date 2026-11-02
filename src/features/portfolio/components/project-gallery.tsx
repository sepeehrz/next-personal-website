'use client';

import {useState} from 'react';
import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {ArrowLeft, ArrowRight} from 'lucide-react';

export default function ProjectGallery({
  images,
  title
}: {
  images: readonly string[];
  title: string;
}) {
  const t = useTranslations('Portfolio.details');
  const [activeIndex, setActiveIndex] = useState(0);
  const move = (direction: -1 | 1) =>
    setActiveIndex(
      index => (index + direction + images.length) % images.length
    );

  if (!images.length)
    return (
      <div className='grid aspect-16/10 place-items-center rounded-3xl bg-linear-to-br from-indigo-900 to-emerald-800 text-2xl font-bold text-white'>
        {title}
      </div>
    );

  return (
    <div className='space-y-4'>
      <div className='relative aspect-16/10 overflow-hidden rounded-3xl border border-slate-900/13 bg-slate-100 dark:border-white/10 dark:bg-slate-900'>
        <Image
          alt={`${title} ${activeIndex + 1}`}
          className='object-contain'
          fill
          sizes='(min-width: 1024px) 55vw, 100vw'
          src={`/images/${images[activeIndex]}`}
        />
        {images.length > 1 && (
          <div className='absolute inset-x-4 bottom-4 flex items-center justify-between'>
            <span className='rounded-full bg-slate-950/70 px-3 py-1.5 text-xs text-white'>
              {activeIndex + 1} / {images.length}
            </span>
            <div className='flex gap-2'>
              <button
                aria-label={t('previousImage')}
                className='grid size-11 place-items-center rounded-xl bg-slate-950/70 text-white'
                onClick={() => move(-1)}
                type='button'>
                <ArrowLeft aria-hidden='true' />
              </button>
              <button
                aria-label={t('nextImage')}
                className='grid size-11 place-items-center rounded-xl bg-slate-950/70 text-white'
                onClick={() => move(1)}
                type='button'>
                <ArrowRight aria-hidden='true' />
              </button>
            </div>
          </div>
        )}
      </div>
      {images.length > 1 && (
        <div className='grid grid-cols-3 gap-3'>
          {images.map((image, index) => (
            <button
              aria-label={`${title} ${index + 1}`}
              aria-pressed={activeIndex === index}
              className={`relative aspect-16/10 overflow-hidden rounded-2xl border ${activeIndex === index ? 'border-indigo-500 ring-2 ring-indigo-500/30' : 'border-slate-900/13 opacity-65 hover:opacity-100'}`}
              key={image}
              onClick={() => setActiveIndex(index)}
              type='button'>
              <Image
                alt=''
                className='object-cover object-top'
                fill
                sizes='20vw'
                src={`/images/${image}`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
