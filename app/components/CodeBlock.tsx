'use client';

import { useState } from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({
  code,
  language = 'go',
  filename,
  showLineNumbers = false,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const lines = code.trim().split('\n');

  return (
    <div
      style={{
        background: 'var(--syntax-bg)',
        border: '1px solid var(--syntax-border)',
        borderRadius: '8px',
        overflow: 'hidden',
        margin: '1.5rem 0',
        fontSize: '0.875rem',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.5rem 1rem',
          borderBottom: '1px solid var(--syntax-border)',
          background: 'var(--bg-tertiary)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {/* Traffic lights */}
          <div style={{ display: 'flex', gap: '5px' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f57' }} />
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }} />
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#28c840' }} />
          </div>
          {filename && (
            <span
              style={{
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-geist-mono)',
                marginLeft: '0.5rem',
              }}
            >
              {filename}
            </span>
          )}
          {!filename && (
            <span
              style={{
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginLeft: '0.5rem',
              }}
            >
              {language}
            </span>
          )}
        </div>

        <button
          onClick={handleCopy}
          aria-label="Copy code"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
            padding: '0.25rem 0.6rem',
            background: copied ? 'var(--callout-tip-bg)' : 'transparent',
            border: '1px solid var(--border-primary)',
            borderRadius: '5px',
            color: copied ? 'var(--callout-tip-text)' : 'var(--text-muted)',
            fontSize: '0.75rem',
            cursor: 'pointer',
            transition: 'all 0.15s',
            fontFamily: 'var(--font-geist-sans)',
          }}
        >
          {copied ? (
            <>
              <CheckIcon /> Copied!
            </>
          ) : (
            <>
              <CopyIcon /> Copy
            </>
          )}
        </button>
      </div>

      {/* Code content */}
      <div style={{ overflowX: 'auto', padding: '1.25rem 1rem' }}>
        <pre
          style={{
            margin: 0,
            fontFamily: 'var(--font-geist-mono)',
            fontSize: '0.875rem',
            lineHeight: '1.7',
            color: 'var(--syntax-text)',
          }}
        >
          {showLineNumbers ? (
            <code>
              {lines.map((line, i) => (
                <span key={i} style={{ display: 'flex', gap: '1.5rem' }}>
                  <span
                    style={{
                      color: 'var(--text-muted)',
                      userSelect: 'none',
                      minWidth: '1.5rem',
                      textAlign: 'right',
                      flexShrink: 0,
                    }}
                  >
                    {i + 1}
                  </span>
                  <span dangerouslySetInnerHTML={{ __html: highlightGo(line) }} />
                </span>
              ))}
            </code>
          ) : (
            <code dangerouslySetInnerHTML={{ __html: highlightGo(code.trim()) }} />
          )}
        </pre>
      </div>
    </div>
  );
}

/**
 * Simple Go syntax highlighter using CSS custom property colors.
 * No external dependency needed.
 */
function highlightGo(code: string): string {
  // Escape HTML first
  let html = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // Comments
  html = html.replace(
    /(\/\/[^\n]*)/g,
    `<span style="color:var(--syntax-comment);font-style:italic">$1</span>`
  );

  // Strings (double and backtick) - before keywords so they don't get double-wrapped
  html = html.replace(
    /(&quot;[^&]*?&quot;|`[^`]*?`)/g,
    `<span style="color:var(--syntax-string)">$1</span>`
  );

  // Keywords
  const keywords = [
    'package', 'import', 'func', 'return', 'var', 'const', 'type',
    'struct', 'interface', 'for', 'range', 'if', 'else', 'switch',
    'case', 'default', 'break', 'continue', 'go', 'defer', 'select',
    'chan', 'map', 'make', 'new', 'append', 'len', 'cap', 'nil',
    'true', 'false',
  ];
  const kwRegex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'g');
  html = html.replace(
    kwRegex,
    `<span style="color:var(--syntax-keyword);font-weight:500">$1</span>`
  );

  // Built-in types
  const types = ['int', 'int8', 'int16', 'int32', 'int64', 'uint', 'uint8',
    'uint16', 'uint32', 'uint64', 'float32', 'float64', 'string',
    'bool', 'byte', 'rune', 'error', 'any'];
  const typeRegex = new RegExp(`\\b(${types.join('|')})\\b`, 'g');
  html = html.replace(
    typeRegex,
    `<span style="color:var(--syntax-type)">$1</span>`
  );

  // Functions/methods (identifier followed by open paren, not keywords)
  html = html.replace(
    /\b([a-zA-Z_][a-zA-Z0-9_]*)(\s*\()/g,
    (_, name, paren) => {
      if (keywords.includes(name) || types.includes(name)) return `${name}${paren}`;
      return `<span style="color:var(--syntax-function)">${name}</span>${paren}`;
    }
  );

  // Numbers
  html = html.replace(
    /\b(\d+\.?\d*)\b/g,
    `<span style="color:var(--syntax-number)">$1</span>`
  );

  return html;
}

function CopyIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
