'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { sidebarSections } from '../lib/lessons';

export function Sidebar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Lesson navigation"
      style={{
        width: 'var(--sidebar-width)',
        flexShrink: 0,
        overflowY: 'auto',
        height: 'calc(100vh - var(--navbar-height))',
        position: 'sticky',
        top: 'var(--navbar-height)',
        padding: '1.5rem 0',
        borderRight: '1px solid var(--border-primary)',
        background: 'var(--bg-primary)',
      }}
    >
      {sidebarSections.map((section) => (
        <div key={section.title} style={{ marginBottom: '1.5rem' }}>
          {/* Section title */}
          <div
            style={{
              padding: '0 1rem 0.5rem',
              fontSize: '0.7rem',
              fontWeight: '700',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
            }}
          >
            {section.title}
          </div>

          {/* Items */}
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {section.items.map((item) => {
              if (item.type === 'group') return null;

              const isActive = pathname === `/learn/${item.slug}`;
              const available = item.available ?? true;

              if (!available) {
                return (
                  <li key={item.label}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.4rem 1rem',
                        fontSize: '0.875rem',
                        color: 'var(--text-muted)',
                        cursor: 'default',
                        gap: '0.5rem',
                      }}
                    >
                      <span style={{ opacity: 0.6 }}>{item.label}</span>
                      <span
                        style={{
                          fontSize: '0.65rem',
                          background: 'var(--bg-tertiary)',
                          color: 'var(--text-muted)',
                          padding: '1px 5px',
                          borderRadius: '3px',
                          whiteSpace: 'nowrap',
                          border: '1px solid var(--border-subtle)',
                          flexShrink: 0,
                        }}
                      >
                        Soon
                      </span>
                    </div>
                  </li>
                );
              }

              return (
                <li key={item.label}>
                  <Link
                    href={`/learn/${item.slug}`}
                    style={{
                      display: 'block',
                      padding: '0.4rem 1rem',
                      fontSize: '0.875rem',
                      color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                      background: isActive ? 'var(--accent-muted)' : 'transparent',
                      borderRight: isActive ? '2px solid var(--accent)' : '2px solid transparent',
                      textDecoration: 'none',
                      transition: 'all 0.15s',
                      lineHeight: '1.5',
                      fontWeight: isActive ? '500' : '400',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        (e.currentTarget as HTMLElement).style.background = 'var(--bg-secondary)';
                        (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        (e.currentTarget as HTMLElement).style.background = 'transparent';
                        (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
                      }
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
