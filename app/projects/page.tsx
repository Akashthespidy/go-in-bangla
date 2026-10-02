import { Metadata } from 'next';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Go দিয়ে তৈরি practice projects।',
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main
        style={{
          flex: 1,
          padding: 'clamp(2.5rem, 6vw, 4rem) 1.5rem',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ textAlign: 'center', maxWidth: '480px' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏗️</div>
          <h1
            style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
              marginBottom: '0.75rem',
            }}
          >
            Projects আসছে...
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '2rem' }}>
            Fundamentals শেষ হলে real-world Go projects তৈরি করব। REST API, CLI tools,
            microservices — সব কিছু এখানে থাকবে।
          </p>
          <a
            href="/learn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.65rem 1.4rem',
              background: 'var(--accent)',
              color: 'white',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '0.95rem',
              textDecoration: 'none',
            }}
          >
            আপাতত পাঠ্যক্রম দেখুন →
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
