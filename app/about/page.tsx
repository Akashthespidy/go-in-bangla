import { Metadata } from 'next';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const metadata: Metadata = {
  title: 'About',
  description: 'Go বাংলা platform সম্পর্কে এবং এই journey-র পেছনের গল্প।',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ flex: 1, padding: 'clamp(2.5rem, 6vw, 4rem) 1.5rem', minHeight: '80vh' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <h1
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
              fontWeight: '700',
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
              marginBottom: '0.75rem',
            }}
          >
            About
          </h1>

          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            আমি <strong style={{ color: 'var(--text-primary)' }}>Ahmed Akash</strong> — একজন software developer।
            আমি Go programming language শিখছি এবং সেই journey-কে বাংলায় document করছি।
          </p>

          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            এই platform কেন তৈরি করলাম? কারণ বাংলায় Go শেখার ভালো resource খুব কম। আমি যখন
            কোনো concept শিখি এবং ভালোভাবে বুঝি, তখন মনে হয় এটা অন্য বাংলাভাষী developers-দের
            সাথে share করলে ভালো হতো।
          </p>

          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2.5rem' }}>
            এটি কোনো AI-generated content নয়। প্রতিটি পাঠ আমি নিজে বুঝে, নিজের ভাষায় লিখেছি।
            ভুল থাকলে GitHub-এ issue তৈরি করুন।
          </p>

          <div
            style={{
              padding: '1.5rem',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-primary)',
              borderRadius: '12px',
              marginBottom: '2rem',
            }}
          >
            <h2 style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '1rem', marginTop: 0 }}>
              Tech Stack
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Geist Font', 'Hind Siliguri'].map((tech) => (
                <span
                  key={tech}
                  style={{
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-geist-mono)',
                    padding: '3px 10px',
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-primary)',
                    borderRadius: '4px',
                    color: 'var(--text-secondary)',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a
              href="https://github.com/ahmedakash"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.6rem 1.25rem',
                background: 'var(--text-primary)',
                color: 'var(--bg-primary)',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: '500',
                transition: 'opacity 0.15s',
              }}
            >
              GitHub →
            </a>
            <a
              href="/learn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.6rem 1.25rem',
                border: '1px solid var(--border-primary)',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                fontWeight: '500',
                transition: 'all 0.15s',
              }}
            >
              পাঠ্যক্রম দেখুন →
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
