import { ReactNode } from 'react';

type CalloutType = 'tip' | 'warning' | 'note';

interface CalloutProps {
  type: CalloutType;
  title?: string;
  children: ReactNode;
}

const calloutConfig: Record<
  CalloutType,
  { icon: string; defaultTitle: string; bgVar: string; borderVar: string; textVar: string }
> = {
  tip: {
    icon: '💡',
    defaultTitle: 'Tip',
    bgVar: '--callout-tip-bg',
    borderVar: '--callout-tip-border',
    textVar: '--callout-tip-text',
  },
  warning: {
    icon: '⚠️',
    defaultTitle: 'মনে রাখুন',
    bgVar: '--callout-warning-bg',
    borderVar: '--callout-warning-border',
    textVar: '--callout-warning-text',
  },
  note: {
    icon: '📝',
    defaultTitle: 'Note',
    bgVar: '--callout-note-bg',
    borderVar: '--callout-note-border',
    textVar: '--callout-note-text',
  },
};

export function Callout({ type, title, children }: CalloutProps) {
  const config = calloutConfig[type];

  return (
    <div
      style={{
        background: `var(${config.bgVar})`,
        borderLeft: `3px solid var(${config.borderVar})`,
        borderRadius: '0 8px 8px 0',
        padding: '1rem 1.25rem',
        margin: '1.5rem 0',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          marginBottom: '0.4rem',
          fontWeight: '600',
          fontSize: '0.875rem',
          color: `var(${config.textVar})`,
        }}
      >
        <span style={{ fontSize: '1rem' }}>{config.icon}</span>
        {title ?? config.defaultTitle}
      </div>
      <div
        style={{
          fontSize: '0.9rem',
          color: `var(${config.textVar})`,
          lineHeight: '1.7',
        }}
      >
        {children}
      </div>
    </div>
  );
}
