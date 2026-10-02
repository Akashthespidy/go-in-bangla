'use client';

import { useState } from 'react';
import { ReactNode } from 'react';

interface CollapsibleProps {
  title: string;
  children: ReactNode;
}

export function Collapsible({ title, children }: CollapsibleProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        border: '1px solid var(--border-primary)',
        borderRadius: '8px',
        margin: '1rem 0',
        overflow: 'hidden',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.875rem 1.25rem',
          background: 'var(--bg-secondary)',
          border: 'none',
          cursor: 'pointer',
          fontSize: '0.9rem',
          fontWeight: '500',
          color: 'var(--text-primary)',
          transition: 'background 0.15s',
          textAlign: 'left',
        }}
        aria-expanded={open}
      >
        <span>{title}</span>
        <span
          style={{
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s',
            color: 'var(--text-muted)',
            flexShrink: 0,
          }}
        >
          <ChevronIcon />
        </span>
      </button>

      {open && (
        <div
          style={{
            padding: '1.25rem',
            borderTop: '1px solid var(--border-subtle)',
            background: 'var(--bg-primary)',
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}

function ChevronIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}
