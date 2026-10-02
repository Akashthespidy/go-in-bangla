'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-primary)',
        background: 'var(--bg-primary)',
        padding: '2rem 1.25rem',
        marginTop: 'auto',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <div
            style={{
              width: '22px',
              height: '22px',
              background: 'var(--accent)',
              borderRadius: '5px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '11px',
              fontWeight: '700',
              fontFamily: 'var(--font-geist-mono)',
            }}
          >
            Go
          </div>
          <span
            style={{
              fontSize: '0.95rem',
              fontWeight: '600',
              color: 'var(--text-primary)',
            }}
          >
            বাংলা
          </span>
        </div>

        <p
          style={{
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
            maxWidth: '480px',
            lineHeight: '1.6',
          }}
        >
          Go programming language শিখছি এবং বাংলায় document করছি।{' '}
          একটি personal learning journal।
        </p>

        <div
          style={{
            display: 'flex',
            gap: '1.5rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {[
            { href: '/learn', label: 'শেখা শুরু করুন' },
            { href: '/roadmap', label: 'Roadmap' },
            { href: '/about', label: 'About' },
            { href: 'https://github.com/ahmedakash', label: 'GitHub', external: true },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              style={{
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <p
          style={{
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
          }}
        >
          © {new Date().getFullYear()} Ahmed Akash · Go শেখার personal journey
        </p>
      </div>
    </footer>
  );
}
