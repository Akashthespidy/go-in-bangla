import { Lesson, difficultyLabel } from '../lib/lessons';
import Link from 'next/link';

interface LessonHeaderProps {
  lesson: Lesson;
}

const difficultyColors = {
  beginner: { bg: 'var(--callout-tip-bg)', color: 'var(--callout-tip-text)', border: 'var(--callout-tip-border)' },
  intermediate: { bg: 'var(--callout-note-bg)', color: 'var(--callout-note-text)', border: 'var(--callout-note-border)' },
  advanced: { bg: 'var(--callout-warning-bg)', color: 'var(--callout-warning-text)', border: 'var(--callout-warning-border)' },
};

export function LessonHeader({ lesson }: LessonHeaderProps) {
  const dc = difficultyColors[lesson.difficulty];

  return (
    <div style={{ marginBottom: '2.5rem' }}>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" style={{ marginBottom: '1rem' }}>
        <ol
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.25rem',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
          }}
        >
          <li><Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link></li>
          <li style={{ color: 'var(--border-primary)' }}>/</li>
          <li><Link href="/learn" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Learn</Link></li>
          <li style={{ color: 'var(--border-primary)' }}>/</li>
          <li style={{ color: 'var(--text-secondary)' }}>{lesson.title}</li>
        </ol>
      </nav>

      {/* Lesson number + section */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginBottom: '0.75rem',
          flexWrap: 'wrap',
        }}
      >
        <span
          style={{
            fontSize: '0.75rem',
            fontWeight: '600',
            color: 'var(--accent)',
            fontFamily: 'var(--font-geist-mono)',
            background: 'var(--accent-muted)',
            padding: '2px 8px',
            borderRadius: '4px',
            border: '1px solid var(--accent)',
            opacity: 0.8,
          }}
        >
          LESSON {String(lesson.number).padStart(2, '0')}
        </span>
        <span
          style={{
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            background: 'var(--bg-tertiary)',
            padding: '2px 8px',
            borderRadius: '4px',
          }}
        >
          {lesson.section}
        </span>
      </div>

      {/* Title */}
      <h1
        style={{
          fontSize: 'clamp(1.6rem, 4vw, 2rem)',
          fontWeight: '700',
          color: 'var(--text-primary)',
          lineHeight: '1.25',
          margin: '0 0 0.75rem',
          letterSpacing: '-0.02em',
        }}
      >
        {lesson.title}
      </h1>

      {/* Description */}
      <p
        style={{
          fontSize: '1rem',
          color: 'var(--text-secondary)',
          lineHeight: '1.7',
          margin: '0 0 1rem',
        }}
      >
        {lesson.description}
      </p>

      {/* Meta */}
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <span
          style={{
            fontSize: '0.75rem',
            fontWeight: '500',
            color: dc.color,
            background: dc.bg,
            border: `1px solid ${dc.border}`,
            padding: '2px 8px',
            borderRadius: '4px',
          }}
        >
          {difficultyLabel[lesson.difficulty]}
        </span>
        <span
          style={{
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
          }}
        >
          <ClockIcon />
          {lesson.estimatedMinutes} মিনিট
        </span>
      </div>

      {/* Divider */}
      <div
        style={{
          marginTop: '1.5rem',
          height: '1px',
          background: 'var(--border-subtle)',
        }}
      />
    </div>
  );
}

function ClockIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
