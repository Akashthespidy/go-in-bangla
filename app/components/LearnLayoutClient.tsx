'use client';

import { useState, useEffect } from 'react';
import { Sidebar } from './Sidebar';

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

function MobileSidebarDrawer({ isOpen, onClose }: MobileSidebarProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.4)',
          zIndex: 30,
          top: 'var(--navbar-height)',
        }}
      />
      {/* Drawer */}
      <div
        style={{
          position: 'fixed',
          top: 'var(--navbar-height)',
          left: 0,
          bottom: 0,
          width: 'min(var(--sidebar-width), 85vw)',
          background: 'var(--bg-primary)',
          zIndex: 40,
          overflowY: 'auto',
          borderRight: '1px solid var(--border-primary)',
          boxShadow: 'var(--shadow-lg)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <Sidebar />
      </div>
    </>
  );
}

interface LearnLayoutClientProps {
  children: React.ReactNode;
}

export function LearnLayoutClient({ children }: LearnLayoutClientProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
      {/* Mobile sidebar toggle bar */}
      <div
        className="lg:hidden"
        style={{
          borderBottom: '1px solid var(--border-primary)',
          padding: '0.6rem 1.25rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          background: 'var(--bg-primary)',
          position: 'sticky',
          top: 'var(--navbar-height)',
          zIndex: 20,
        }}
      >
        <button
          onClick={() => setSidebarOpen(true)}
          aria-label="Open sidebar"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.375rem 0.75rem',
            border: '1px solid var(--border-primary)',
            borderRadius: '6px',
            background: 'transparent',
            color: 'var(--text-secondary)',
            fontSize: '0.85rem',
            cursor: 'pointer',
          }}
        >
          <MenuIcon />
          পাঠ্যক্রম
        </button>
      </div>

      {/* Main layout */}
      <div style={{ display: 'flex', flex: 1, minHeight: 0 }}>
        {/* Desktop sidebar */}
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        {/* Mobile drawer */}
        <MobileSidebarDrawer
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Content area */}
        <main
          style={{
            flex: 1,
            minWidth: 0,
            overflowX: 'hidden',
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}

function MenuIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}
