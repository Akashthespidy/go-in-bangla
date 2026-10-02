import { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { lessons } from './lib/lessons';

export const metadata: Metadata = {
  title: 'Go বাংলা - Go Programming শিখুন বাংলায়',
  description:
    'Go programming language এবং backend development শেখার একটি বাংলা-first practical learning platform।',
};

const difficultyColors = {
  beginner: { color: '#166534', bg: '#f0fdf4', border: '#86efac' },
  intermediate: { color: '#1e3a8a', bg: '#eff6ff', border: '#93c5fd' },
  advanced: { color: '#92400e', bg: '#fffbeb', border: '#fbbf24' },
};

const roadmapPhases = [
  {
    title: 'Go Fundamentals',
    items: ['Go কী?', 'Variables & Types', 'Functions'],
    active: true,
  },
  { title: 'Core Go', items: ['Structs', 'Methods', 'Interfaces'], active: false },
  { title: 'Concurrency', items: ['Goroutines', 'Channels', 'Select'], active: false },
  { title: 'HTTP & REST API', items: ['net/http', 'Routing', 'Middleware'], active: false },
  { title: 'Database', items: ['PostgreSQL', 'GORM', 'Migrations'], active: false },
  {
    title: 'Production Backend',
    items: ['Auth', 'Testing', 'Deployment'],
    active: false,
  },
];

const availableLessons = lessons.filter((l) => l.available);

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main style={{ flex: 1 }}>
        {/* ─── HERO ─── */}
        <section
          style={{
            padding: 'clamp(4rem, 10vw, 7rem) 1.5rem clamp(3rem, 8vw, 5rem)',
            borderBottom: '1px solid var(--border-subtle)',
            background: 'var(--bg-primary)',
          }}
        >
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            {/* Label */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.3rem 0.75rem',
                background: 'var(--accent-muted)',
                border: '1px solid var(--accent)',
                borderRadius: '99px',
                fontSize: '0.75rem',
                fontWeight: '600',
                color: 'var(--accent-text)',
                marginBottom: '1.5rem',
                letterSpacing: '0.01em',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  background: 'var(--accent)',
                  borderRadius: '50%',
                }}
              />
              Personal Learning Journal · Bangla-first
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.25rem, 6vw, 3.25rem)',
                fontWeight: '700',
                letterSpacing: '-0.03em',
                lineHeight: '1.15',
                color: 'var(--text-primary)',
                marginBottom: '1.25rem',
              }}
            >
              Go শিখুন,{' '}
              <span style={{ color: 'var(--accent)' }}>Backend Engineering</span> বুঝুন।
            </h1>

            <p
              style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
                color: 'var(--text-secondary)',
                lineHeight: '1.75',
                maxWidth: '560px',
                marginBottom: '2.25rem',
              }}
            >
              Go programming language এবং backend development শেখার একটি বাংলা-first practical
              learning platform। আমি যা শিখছি, সেটাই বুঝে বাংলায় document করছি।
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Link
                href="/learn"
                className="btn-primary"
              >
                শেখা শুরু করুন →
              </Link>
              <Link
                href="/roadmap"
                className="btn-secondary"
              >
                Roadmap দেখুন
              </Link>
            </div>
          </div>
        </section>

        {/* ─── PROGRESS + ROADMAP ─── */}
        <section
          style={{
            padding: 'clamp(3rem, 7vw, 5rem) 1.5rem',
            borderBottom: '1px solid var(--border-subtle)',
            background: 'var(--bg-secondary)',
          }}
        >
          <div
            style={{
              maxWidth: '1100px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
              gap: '2.5rem',
            }}
          >
            {/* Progress Card */}
            <div>
              <h2
                style={{
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  marginBottom: '1.25rem',
                }}
              >
                Learning Progress
              </h2>

              <div
                style={{
                  padding: '1.5rem',
                  background: 'var(--bg-primary)',
                  border: '1px solid var(--border-primary)',
                  borderRadius: '12px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '1rem',
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: '1.75rem',
                        fontWeight: '700',
                        color: 'var(--text-primary)',
                        letterSpacing: '-0.02em',
                        fontFamily: 'var(--font-geist-mono)',
                      }}
                    >
                      30%
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      3 / 10 Lessons Completed
                    </div>
                  </div>
                  <div
                    style={{
                      padding: '0.25rem 0.6rem',
                      background: 'var(--callout-tip-bg)',
                      border: '1px solid var(--callout-tip-border)',
                      color: 'var(--callout-tip-text)',
                      fontSize: '0.7rem',
                      fontWeight: '600',
                      borderRadius: '4px',
                    }}
                  >
                    In Progress
                  </div>
                </div>

                {/* Progress bar */}
                <div
                  style={{
                    height: '6px',
                    background: 'var(--bg-tertiary)',
                    borderRadius: '99px',
                    overflow: 'hidden',
                    marginBottom: '1.5rem',
                  }}
                >
                  <div
                    style={{
                      width: '30%',
                      height: '100%',
                      background: 'var(--accent)',
                      borderRadius: '99px',
                      transition: 'width 0.8s ease',
                    }}
                  />
                </div>

                {/* Phase breakdown */}
                {[
                  { label: 'Go Fundamentals', done: 3, total: 3, complete: true },
                  { label: 'Core Go', done: 0, total: 4, complete: false },
                  { label: 'Concurrency', done: 0, total: 3, complete: false },
                ].map((phase) => (
                  <div
                    key={phase.label}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '0.4rem 0',
                      borderTop: '1px solid var(--border-subtle)',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '0.85rem',
                        color: phase.complete ? 'var(--text-primary)' : 'var(--text-muted)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                      }}
                    >
                      {phase.complete ? (
                        <span style={{ color: '#22c55e', fontSize: '0.75rem' }}>✓</span>
                      ) : (
                        <span
                          style={{
                            width: '10px',
                            height: '10px',
                            border: '1.5px solid var(--border-primary)',
                            borderRadius: '2px',
                            display: 'inline-block',
                          }}
                        />
                      )}
                      {phase.label}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-geist-mono)' }}>
                      {phase.done}/{phase.total}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Roadmap */}
            <div>
              <h2
                style={{
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  marginBottom: '1.25rem',
                }}
              >
                Learning Roadmap
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {roadmapPhases.map((phase, i) => (
                  <div key={phase.title} style={{ display: 'flex', gap: '0.75rem' }}>
                    {/* Timeline */}
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <div
                        style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '50%',
                          background: phase.active ? 'var(--accent)' : 'var(--bg-tertiary)',
                          border: phase.active
                            ? '2px solid var(--accent)'
                            : '2px solid var(--border-primary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          zIndex: 1,
                        }}
                      >
                        {phase.active ? (
                          <span style={{ color: 'white', fontSize: '12px', fontWeight: '700' }}>
                            {i + 1}
                          </span>
                        ) : (
                          <span
                            style={{
                              fontSize: '10px',
                              color: 'var(--text-muted)',
                              fontWeight: '600',
                            }}
                          >
                            {i + 1}
                          </span>
                        )}
                      </div>
                      {i < roadmapPhases.length - 1 && (
                        <div
                          style={{
                            width: '2px',
                            flex: 1,
                            background: i === 0 ? 'var(--accent)' : 'var(--border-subtle)',
                            minHeight: '2rem',
                            opacity: i === 0 ? 0.4 : 0.5,
                          }}
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div style={{ paddingBottom: i < roadmapPhases.length - 1 ? '1.25rem' : '0', paddingTop: '0.1rem' }}>
                      <div
                        style={{
                          fontSize: '0.9rem',
                          fontWeight: '600',
                          color: phase.active ? 'var(--text-primary)' : 'var(--text-muted)',
                          marginBottom: '0.2rem',
                        }}
                      >
                        {phase.title}
                        {!phase.active && (
                          <span
                            style={{
                              marginLeft: '0.5rem',
                              fontSize: '0.65rem',
                              background: 'var(--bg-tertiary)',
                              color: 'var(--text-muted)',
                              padding: '1px 5px',
                              borderRadius: '3px',
                              border: '1px solid var(--border-subtle)',
                              verticalAlign: 'middle',
                            }}
                          >
                            Soon
                          </span>
                        )}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        {phase.items.join(' · ')}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── FEATURED LESSONS ─── */}
        <section
          style={{
            padding: 'clamp(3rem, 7vw, 5rem) 1.5rem',
            borderBottom: '1px solid var(--border-subtle)',
          }}
        >
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                marginBottom: '2rem',
                flexWrap: 'wrap',
                gap: '0.75rem',
              }}
            >
              <h2
                style={{
                  fontSize: 'clamp(1.25rem, 3vw, 1.6rem)',
                  fontWeight: '700',
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.01em',
                  margin: 0,
                }}
              >
                উপলব্ধ পাঠসমূহ
              </h2>
              <Link
                href="/learn"
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--accent)',
                  textDecoration: 'none',
                  fontWeight: '500',
                }}
              >
                সব পাঠ দেখুন →
              </Link>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
                gap: '1rem',
              }}
            >
              {availableLessons.map((lesson) => {
                const dc = difficultyColors[lesson.difficulty];
                return (
                  <Link
                    key={lesson.slug}
                    href={`/learn/${lesson.slug}`}
                    className="card-hover"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '1.5rem',
                      border: '1px solid var(--border-primary)',
                      borderRadius: '12px',
                      textDecoration: 'none',
                      background: 'var(--bg-primary)',
                      gap: '0.75rem',
                    }}
                  >
                    {/* Header */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <span
                        style={{
                          fontSize: '0.7rem',
                          fontWeight: '700',
                          color: 'var(--accent)',
                          fontFamily: 'var(--font-geist-mono)',
                          background: 'var(--accent-muted)',
                          padding: '2px 7px',
                          borderRadius: '4px',
                          border: '1px solid var(--accent)',
                          opacity: 0.85,
                        }}
                      >
                        {String(lesson.number).padStart(2, '0')}
                      </span>
                      <span
                        style={{
                          fontSize: '0.7rem',
                          fontWeight: '500',
                          color: dc.color,
                          background: dc.bg,
                          border: `1px solid ${dc.border}`,
                          padding: '2px 7px',
                          borderRadius: '4px',
                        }}
                      >
                        {lesson.difficulty}
                      </span>
                    </div>

                    {/* Title */}
                    <div>
                      <h3
                        style={{
                          fontSize: '1rem',
                          fontWeight: '600',
                          color: 'var(--text-primary)',
                          marginBottom: '0.4rem',
                          lineHeight: '1.4',
                        }}
                      >
                        {lesson.title}
                      </h3>
                      <p
                        style={{
                          fontSize: '0.85rem',
                          color: 'var(--text-secondary)',
                          lineHeight: '1.5',
                        }}
                      >
                        {lesson.description}
                      </p>
                    </div>

                    {/* Footer */}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: 'auto',
                        paddingTop: '0.75rem',
                        borderTop: '1px solid var(--border-subtle)',
                      }}
                    >
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        {lesson.estimatedMinutes} মিনিট
                      </span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: '500' }}>
                        পড়ুন →
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── PHILOSOPHY ─── */}
        <section
          style={{
            padding: 'clamp(3rem, 7vw, 5rem) 1.5rem',
            background: 'var(--bg-secondary)',
          }}
        >
          <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
            <div
              style={{
                fontSize: '2rem',
                marginBottom: '1rem',
              }}
            >
              📖
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.25rem, 3vw, 1.6rem)',
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: '1rem',
                letterSpacing: '-0.01em',
              }}
            >
              এই platform সম্পর্কে
            </h2>
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.8',
                marginBottom: '1.25rem',
              }}
            >
              আমি Go শিখছি — seriously। শেখার সময় যা বুঝছি, সেটা বাংলায় document করে রাখছি।
              এটি কোনো AI-generated tutorial site নয়।
            </p>
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.8',
                marginBottom: '1.25rem',
              }}
            >
              প্রতিটি concept নিজে বুঝে, নিজের ভাষায় explain করার চেষ্টা করছি — যেভাবে একজন
              Bangladeshi developer অন্য developer-কে বোঝায়।
            </p>
            <div
              style={{
                display: 'inline-block',
                padding: '0.875rem 1.5rem',
                background: 'var(--bg-primary)',
                border: '1px solid var(--border-primary)',
                borderRadius: '10px',
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                fontStyle: 'italic',
              }}
            >
              &ldquo;শেখা হলো একটি journey, destination নয়। এই platform সেই journey-র record।&rdquo;
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
