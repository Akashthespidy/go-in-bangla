import { Metadata } from 'next';
import Link from 'next/link';
import { lessons } from '../lib/lessons';

export const metadata: Metadata = {
  title: 'শেখা শুরু করুন',
  description: 'Go programming language শেখার পাঠ্যক্রম — বাংলায় প্র্যাকটিক্যাল গাইড।',
};

const difficultyColors: Record<string, { color: string; bg: string; border: string }> = {
  beginner: { color: '#166534', bg: '#f0fdf4', border: '#86efac' },
  intermediate: { color: '#1e3a8a', bg: '#eff6ff', border: '#93c5fd' },
  advanced: { color: '#92400e', bg: '#fffbeb', border: '#fbbf24' },
};

export default function LearnPage() {
  const availableLessons = lessons.filter((l) => l.available);

  return (
    <div
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '3rem 1.5rem 4rem',
      }}
    >
      <div style={{ marginBottom: '2.5rem' }}>
        <h1
          style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
            fontWeight: '700',
            color: 'var(--text-primary)',
            marginBottom: '0.75rem',
            letterSpacing: '-0.02em',
          }}
        >
          পাঠ্যক্রম
        </h1>
        <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
          Go programming language শেখার ক্রমান্বয়িক পাঠ্যক্রম। প্রতিটি পাঠ আগেরটির উপর ভিত্তি করে তৈরি।
        </p>
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h2
          style={{
            fontSize: '0.75rem',
            fontWeight: '700',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            marginBottom: '1rem',
          }}
        >
          উপলব্ধ পাঠসমূহ ({availableLessons.length}টি)
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {availableLessons.map((lesson) => {
            const dc = difficultyColors[lesson.difficulty];
            return (
              <Link
                key={lesson.slug}
                href={`/learn/${lesson.slug}`}
                className="lesson-list-item"
                style={{
                  display: 'flex',
                  gap: '1rem',
                  padding: '1.25rem',
                  border: '1px solid var(--border-primary)',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  background: 'var(--bg-primary)',
                  alignItems: 'flex-start',
                }}
              >
                {/* Number badge */}
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'var(--accent-muted)',
                    border: '1px solid var(--accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent)',
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    fontFamily: 'var(--font-geist-mono)',
                    flexShrink: 0,
                  }}
                >
                  {String(lesson.number).padStart(2, '0')}
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.3rem', fontSize: '0.95rem' }}>
                    {lesson.title}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '0.6rem' }}>
                    {lesson.description}
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: '500',
                        color: dc.color,
                        background: dc.bg,
                        border: `1px solid ${dc.border}`,
                        padding: '1px 6px',
                        borderRadius: '3px',
                      }}
                    >
                      {lesson.difficulty}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      · {lesson.estimatedMinutes} মিনিট
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      · {lesson.section}
                    </span>
                  </div>
                </div>

                <div style={{ color: 'var(--text-muted)', flexShrink: 0, paddingTop: '0.1rem' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div
        style={{
          padding: '1.5rem',
          border: '1px dashed var(--border-primary)',
          borderRadius: '10px',
          background: 'var(--bg-secondary)',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '0.95rem', fontWeight: '500', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
          আরও পাঠ আসছে...
        </p>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          Structs, Interfaces, Concurrency, HTTP API, Database — পর্যায়ক্রমে যোগ করা হবে।
        </p>
      </div>
    </div>
  );
}
