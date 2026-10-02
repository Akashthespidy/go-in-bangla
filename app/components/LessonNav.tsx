import Link from 'next/link';

interface LessonNavProps {
  prev?: { slug: string; title: string };
  next?: { slug: string; title: string };
}

export function LessonNav({ prev, next }: LessonNavProps) {
  return (
    <nav
      aria-label="Lesson navigation"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '1rem',
        marginTop: '3rem',
        paddingTop: '1.5rem',
        borderTop: '1px solid var(--border-subtle)',
        flexWrap: 'wrap',
      }}
    >
      <div style={{ flex: 1 }}>
        {prev && (
          <Link
            href={`/learn/${prev.slug}`}
            className="lesson-nav-link"
          >
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              ← আগের পাঠ
            </span>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: '500', lineHeight: '1.4' }}>
              {prev.title}
            </span>
          </Link>
        )}
      </div>

      <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
        {next ? (
          <Link
            href={`/learn/${next.slug}`}
            className="lesson-nav-link"
            style={{ alignItems: 'flex-end' }}
          >
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              পরের পাঠ →
            </span>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: '500', lineHeight: '1.4', textAlign: 'right' }}>
              {next.title}
            </span>
          </Link>
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: '0.25rem',
              padding: '0.875rem 1rem',
              border: '1px dashed var(--border-subtle)',
              borderRadius: '8px',
              maxWidth: '280px',
            }}
          >
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>পরের পাঠ</span>
            <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)', textAlign: 'right' }}>
              আরও পাঠ আসছে শীঘ্রই...
            </span>
          </div>
        )}
      </div>
    </nav>
  );
}
