import { Metadata } from 'next';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const metadata: Metadata = {
  title: 'Roadmap',
  description: 'Go programming এবং backend engineering শেখার পর্যায়ক্রমিক roadmap।',
};

const phases = [
  {
    phase: 1,
    title: 'Go Fundamentals',
    status: 'active' as const,
    description: 'Go-এর মূল ধারণাগুলো — syntax, types, control flow।',
    topics: [
      { title: 'Go কী এবং কেন?', done: true, slug: 'go-introduction' },
      { title: 'Variables & Data Types', done: true, slug: 'variables-data-types' },
      { title: 'Functions', done: true, slug: 'functions' },
      { title: 'Control Flow (if, for, switch)', done: false, slug: null },
      { title: 'Arrays, Slices & Maps', done: false, slug: null },
      { title: 'Pointers', done: false, slug: null },
    ],
  },
  {
    phase: 2,
    title: 'Core Go',
    status: 'upcoming' as const,
    description: 'Go-এর powerful features — structs, methods, interfaces।',
    topics: [
      { title: 'Structs', done: false, slug: null },
      { title: 'Methods', done: false, slug: null },
      { title: 'Interfaces', done: false, slug: null },
      { title: 'Error Handling', done: false, slug: null },
    ],
  },
  {
    phase: 3,
    title: 'Concurrency',
    status: 'upcoming' as const,
    description: 'Go-এর সবচেয়ে শক্তিশালী feature — goroutines ও channels।',
    topics: [
      { title: 'Goroutines', done: false, slug: null },
      { title: 'Channels', done: false, slug: null },
      { title: 'Select statement', done: false, slug: null },
      { title: 'sync package', done: false, slug: null },
    ],
  },
  {
    phase: 4,
    title: 'HTTP & REST API',
    status: 'upcoming' as const,
    description: 'Go দিয়ে production-ready REST API তৈরি।',
    topics: [
      { title: 'net/http package', done: false, slug: null },
      { title: 'Routing with chi/mux', done: false, slug: null },
      { title: 'Middleware', done: false, slug: null },
      { title: 'JSON handling', done: false, slug: null },
      { title: 'Authentication (JWT)', done: false, slug: null },
    ],
  },
  {
    phase: 5,
    title: 'Database',
    status: 'upcoming' as const,
    description: 'PostgreSQL এবং Go দিয়ে data persistence।',
    topics: [
      { title: 'PostgreSQL basics', done: false, slug: null },
      { title: 'database/sql package', done: false, slug: null },
      { title: 'GORM ORM', done: false, slug: null },
      { title: 'Migrations', done: false, slug: null },
    ],
  },
  {
    phase: 6,
    title: 'Production Backend',
    status: 'upcoming' as const,
    description: 'Real-world backend engineering practices।',
    topics: [
      { title: 'Testing in Go', done: false, slug: null },
      { title: 'Logging & Monitoring', done: false, slug: null },
      { title: 'Docker & Deployment', done: false, slug: null },
      { title: 'CI/CD basics', done: false, slug: null },
    ],
  },
];

export default function RoadmapPage() {
  return (
    <>
      <Navbar />
      <main style={{ flex: 1, padding: 'clamp(2.5rem, 6vw, 4rem) 1.5rem', minHeight: '80vh' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {/* Header */}
          <div style={{ marginBottom: '3rem' }}>
            <h1
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
                fontWeight: '700',
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
                marginBottom: '0.75rem',
              }}
            >
              Learning Roadmap
            </h1>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              Go programming এবং backend engineering শেখার পর্যায়ক্রমিক পরিকল্পনা।
              Phase 1 সম্পন্ন হয়েছে, বাকিগুলো আসছে।
            </p>
          </div>

          {/* Phases */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {phases.map((phase) => {
              const doneCount = phase.topics.filter((t) => t.done).length;
              const totalCount = phase.topics.length;
              const isActive = phase.status === 'active';

              return (
                <div
                  key={phase.phase}
                  style={{
                    border: `1px solid ${isActive ? 'var(--accent)' : 'var(--border-primary)'}`,
                    borderRadius: '12px',
                    overflow: 'hidden',
                    background: 'var(--bg-primary)',
                    opacity: isActive ? 1 : 0.7,
                  }}
                >
                  {/* Phase header */}
                  <div
                    style={{
                      padding: '1.25rem 1.5rem',
                      background: isActive ? 'var(--accent-muted)' : 'var(--bg-secondary)',
                      borderBottom: '1px solid var(--border-primary)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '1rem',
                      flexWrap: 'wrap',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '8px',
                          background: isActive ? 'var(--accent)' : 'var(--bg-tertiary)',
                          border: `1px solid ${isActive ? 'var(--accent)' : 'var(--border-primary)'}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: isActive ? 'white' : 'var(--text-muted)',
                          fontSize: '0.8rem',
                          fontWeight: '700',
                          fontFamily: 'var(--font-geist-mono)',
                          flexShrink: 0,
                        }}
                      >
                        {phase.phase}
                      </div>
                      <div>
                        <div style={{ fontWeight: '600', color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                          {phase.title}
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                          {phase.description}
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontFamily: 'var(--font-geist-mono)',
                          color: 'var(--text-muted)',
                        }}
                      >
                        {doneCount}/{totalCount}
                      </span>
                      {isActive ? (
                        <span
                          style={{
                            fontSize: '0.7rem',
                            fontWeight: '600',
                            color: 'var(--callout-tip-text)',
                            background: 'var(--callout-tip-bg)',
                            border: '1px solid var(--callout-tip-border)',
                            padding: '2px 7px',
                            borderRadius: '4px',
                          }}
                        >
                          In Progress
                        </span>
                      ) : (
                        <span
                          style={{
                            fontSize: '0.7rem',
                            color: 'var(--text-muted)',
                            background: 'var(--bg-tertiary)',
                            border: '1px solid var(--border-subtle)',
                            padding: '2px 7px',
                            borderRadius: '4px',
                          }}
                        >
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Topics */}
                  <ul style={{ listStyle: 'none', margin: 0, padding: '0.75rem 1.5rem' }}>
                    {phase.topics.map((topic) => (
                      <li
                        key={topic.title}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.6rem',
                          padding: '0.4rem 0',
                          borderBottom: '1px solid var(--border-subtle)',
                        }}
                      >
                        <span
                          style={{
                            width: '16px',
                            height: '16px',
                            borderRadius: '50%',
                            background: topic.done ? 'var(--accent)' : 'transparent',
                            border: `1.5px solid ${topic.done ? 'var(--accent)' : 'var(--border-primary)'}`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            fontSize: '9px',
                            color: 'white',
                          }}
                        >
                          {topic.done && '✓'}
                        </span>
                        {topic.slug && topic.done ? (
                          <a
                            href={`/learn/${topic.slug}`}
                            style={{
                              fontSize: '0.875rem',
                              color: 'var(--text-primary)',
                              textDecoration: 'none',
                              fontWeight: '500',
                            }}
                          >
                            {topic.title}
                          </a>
                        ) : (
                          <span
                            style={{
                              fontSize: '0.875rem',
                              color: topic.done ? 'var(--text-primary)' : 'var(--text-muted)',
                            }}
                          >
                            {topic.title}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
