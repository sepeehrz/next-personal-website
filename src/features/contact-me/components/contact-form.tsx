'use client';

import {z} from 'zod';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {useTranslations} from 'next-intl';
import {zodResolver} from '@hookform/resolvers/zod';
import {Send, CheckCircle2, LoaderCircle} from 'lucide-react';

const controlClass =
  'mt-2 w-full rounded-xl border bg-white px-4 py-3 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/12 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white/5 dark:text-slate-50 dark:placeholder:text-slate-500';

export function ContactForm() {
  const t = useTranslations('ContactMe.form');
  const [wasSubmitted, setWasSubmitted] = useState(false);
  const formSchema = z.object({
    email: z.string().trim().email(t('validation.email')),
    message: z.string().trim().min(10, t('validation.message')),
    name: z.string().trim().min(2, t('validation.name'))
  });
  const {
    formState: {errors, isSubmitting},
    handleSubmit,
    register
  } = useForm({
    mode: 'onBlur',
    resolver: zodResolver(formSchema)
  });

  const onSubmit = handleSubmit(data => {
    const emailUrl = new URL('mailto:sepeehrz@gmail.com');
    emailUrl.searchParams.set('subject', `${t('subject')} — ${data.name}`);
    emailUrl.searchParams.set(
      'body',
      `${t('emailBody.name')}: ${data.name}\n${t('emailBody.email')}: ${data.email}\n\n${data.message}`
    );

    setWasSubmitted(true);
    window.location.assign(emailUrl.toString());
  });

  return (
    <form className='grid gap-5' noValidate onSubmit={onSubmit}>
      <div className='grid gap-5 sm:grid-cols-2'>
        <div>
          <label
            className='text-sm font-bold text-slate-800 dark:text-slate-100'
            htmlFor='contact-name'>
            {t('fields.name.label')}
          </label>
          <input
            {...register('name')}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
            aria-invalid={Boolean(errors.name)}
            autoComplete='name'
            className={`${controlClass} ${
              errors.name
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500/12'
                : 'border-slate-900/13 dark:border-white/10'
            }`}
            id='contact-name'
            placeholder={t('fields.name.placeholder')}
            type='text'
          />
          {errors.name && (
            <p
              className='mt-2 text-sm text-red-600 dark:text-red-400'
              id='contact-name-error'
              role='alert'>
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label
            className='text-sm font-bold text-slate-800 dark:text-slate-100'
            htmlFor='contact-email'>
            {t('fields.email.label')}
          </label>
          <input
            {...register('email')}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
            aria-invalid={Boolean(errors.email)}
            autoComplete='email'
            className={`${controlClass} ${
              errors.email
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500/12'
                : 'border-slate-900/13 dark:border-white/10'
            }`}
            id='contact-email'
            placeholder={t('fields.email.placeholder')}
            type='email'
          />
          {errors.email && (
            <p
              className='mt-2 text-sm text-red-600 dark:text-red-400'
              id='contact-email-error'
              role='alert'>
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          className='text-sm font-bold text-slate-800 dark:text-slate-100'
          htmlFor='contact-message'>
          {t('fields.message.label')}
        </label>
        <textarea
          {...register('message')}
          aria-describedby={
            errors.message ? 'contact-message-error' : undefined
          }
          aria-invalid={Boolean(errors.message)}
          className={`${controlClass} min-h-40 resize-y ${
            errors.message
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500/12'
              : 'border-slate-900/13 dark:border-white/10'
          }`}
          id='contact-message'
          placeholder={t('fields.message.placeholder')}
          rows={6}
        />
        {errors.message && (
          <p
            className='mt-2 text-sm text-red-600 dark:text-red-400'
            id='contact-message-error'
            role='alert'>
            {errors.message.message}
          </p>
        )}
      </div>

      <div className='flex flex-col gap-4 border-t border-slate-900/10 pt-5 sm:flex-row sm:items-center sm:justify-between dark:border-white/10'>
        <p className='text-sm leading-6 text-slate-500 dark:text-slate-400'>
          {t('helper')}
        </p>
        <button
          className='inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 text-sm font-bold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-500 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-emerald-400 disabled:cursor-wait disabled:opacity-60'
          disabled={isSubmitting}
          type='submit'>
          {isSubmitting ? (
            <LoaderCircle
              aria-hidden='true'
              className='size-5 animate-spin stroke-[2]'
            />
          ) : (
            <Send aria-hidden='true' className='size-5 stroke-[2]' />
          )}
          {isSubmitting ? t('submitting') : t('submit')}
        </button>
      </div>

      {wasSubmitted && (
        <p
          className='flex items-center gap-2 rounded-xl border border-emerald-500/25 bg-emerald-500/8 px-4 py-3 text-sm font-medium text-emerald-800 dark:text-emerald-300'
          role='status'>
          <CheckCircle2
            aria-hidden='true'
            className='size-5 shrink-0 stroke-[2]'
          />
          {t('success')}
        </p>
      )}
    </form>
  );
}
