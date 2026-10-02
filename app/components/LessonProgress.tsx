'use client';

import { useState, useEffect } from 'react';

interface LessonProgressProps {
  slug: string;
}

export function LessonProgress({ slug }: LessonProgressProps) {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(`lesson-${slug}-completed`);
    setCompleted(stored === 'true');
  }, [slug]);

  const toggle = () => {
    const next = !completed;
    setCompleted(next);
    localStorage.setItem(`lesson-${slug}-completed`, String(next));
  };

  return (
    <div
      style={{
        marginTop: '2.5rem',
        padding: '1.25rem',
        background: 'var(--bg-secondary)',
        border: '1px solid var(--border-primary)',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
        flexWrap: 'wrap',
      }}
    >
      <div>
        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.15rem' }}>
          Lesson Progress
        </div>
        <div style={{ fontSize: '0.95rem', fontWeight: '500', color: 'var(--text-primary)' }}>
          {completed ? '✅ এই পাঠটি সম্পন্ন হয়েছে' : '○ এই পাঠটি সম্পন্ন হয়নি'}
        </div>
      </div>

      <button
        onClick={toggle}
        style={{
          padding: '0.5rem 1.25rem',
          border: completed
            ? '1px solid var(--callout-tip-border)'
            : '1px solid var(--border-primary)',
          borderRadius: '7px',
          background: completed ? 'var(--callout-tip-bg)' : 'transparent',
          color: completed ? 'var(--callout-tip-text)' : 'var(--text-secondary)',
          fontSize: '0.875rem',
          fontWeight: '500',
          cursor: 'pointer',
          transition: 'all 0.15s',
          whiteSpace: 'nowrap',
        }}
      >
        {completed ? 'সম্পন্ন হিসেবে চিহ্নিত করা আছে' : 'সম্পন্ন হিসেবে চিহ্নিত করুন'}
      </button>
    </div>
  );
}
