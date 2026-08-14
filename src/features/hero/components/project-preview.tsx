import {getTranslations} from 'next-intl/server';
import {Mail, Check, ArrowUpLeft} from 'lucide-react';

const techStack = ['TypeScript', 'React', 'Next.js', 'Node.js'];

export async function ProjectPreview() {
  const t = await getTranslations('Hero.project');

  return (
    <div
      aria-label={t('label')}
      className='hero-visual'
      id='selected-work'
      role='group'>
      <div aria-hidden='true' className='orbit orbit-one' />
      <div aria-hidden='true' className='orbit orbit-two' />

      <article className='project-card'>
        <div className='window-bar'>
          <div aria-hidden='true' className='window-dots'>
            <span />
            <span />
            <span />
          </div>
          <span className='file-name' dir='ltr'>
            currently-building.tsx
          </span>
          <span aria-hidden='true' className='window-spacer' />
        </div>

        <div aria-label={t('codeLabel')} className='code-block' dir='ltr' role='img'>
          <div>
            <span className='code-line'>01</span>
            <code>
              <span className='code-purple'>const</span>{' '}
              <span className='code-blue'>developer</span> = {'{'}
            </code>
          </div>
          <div>
            <span className='code-line'>02</span>
            <code>
              &nbsp;&nbsp;focus:{' '}
              <span className='code-green'>&quot;useful products&quot;</span>,
            </code>
          </div>
          <div>
            <span className='code-line'>03</span>
            <code>
              &nbsp;&nbsp;craft:{' '}
              <span className='code-green'>&quot;pixel-perfect&quot;</span>,
            </code>
          </div>
          <div>
            <span className='code-line'>04</span>
            <code>
              &nbsp;&nbsp;curious: <span className='code-orange'>true</span>,
            </code>
          </div>
          <div>
            <span className='code-line'>05</span>
            <code>{'}'}</code>
          </div>
          <div>
            <span className='code-line'>06</span>
            <code>&nbsp;</code>
          </div>
          <div>
            <span className='code-line'>07</span>
            <code>
              <span className='code-purple'>export default</span>{' '}
              <span className='code-blue'>developer</span>
            </code>
          </div>
        </div>

        <div className='project-meta'>
          <div>
            <span className='meta-label'>{t('status')}</span>
            <strong>
              <span aria-hidden='true' className='status-icon'>
                <Check />
              </span>
              {t('shipping')}
            </strong>
          </div>
          <a
            aria-label={t('projectsLinkLabel')}
            className='project-link'
            href='https://github.com/'
            rel='noreferrer'
            target='_blank'>
            {t('projects')}
            <ArrowUpLeft aria-hidden='true' />
          </a>
        </div>
      </article>

      <div className='stack-card'>
        <span>{t('stack')}</span>
        <div aria-label={t('stack')} className='stack-list' role='list'>
          {techStack.map(tech => (
            <span key={tech} role='listitem'>
              {tech}
            </span>
          ))}
        </div>
      </div>

      <a
        aria-label={t('emailLabel')}
        className='email-card'
        href='mailto:hello@alexmorgan.dev'>
        <span aria-hidden='true' className='email-icon'>
          <Mail />
        </span>
        <span>
          <small>{t('conversation')}</small>
          hello@alexmorgan.dev
        </span>
        <ArrowUpLeft aria-hidden='true' />
      </a>
    </div>
  );
}
