import styled, { css } from 'styled-components';

export const lineClamp = (lines) => css`
  display: -webkit-box;
  -webkit-line-clamp: ${lines};
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Container = styled.div`
  width: 100%;
  max-width: var(--container);
  margin-inline: auto;
  padding-inline: clamp(20px, 5vw, 40px);
`;

export const Section = styled.section`
  padding-block: clamp(40px, 6vw, 72px);
`;

export const Eyebrow = styled.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--muted);
`;

export const SectionTitle = styled.h2`
  font-size: clamp(22px, 3vw, 28px);
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--text);
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  font-size: 14px;
  font-weight: 600;
  border-radius: var(--r-btn);
  padding: 14px 26px;
  transition:
    background var(--ease),
    border-color var(--ease),
    color var(--ease),
    transform var(--ease);

  ${({ $variant = 'primary' }) =>
    $variant === 'primary'
      ? css`
          background: var(--gold);
          color: var(--bg);
          &:hover {
            background: var(--gold-strong);
          }
        `
      : css`
          background: transparent;
          color: var(--text);
          border: 1px solid var(--border);
          &:hover {
            border-color: var(--border-strong);
            background: var(--surface);
          }
        `}

  ${({ $size }) =>
    $size === 'sm' &&
    css`
      padding: 10px 18px;
      font-size: 13px;
    `}

  ${({ $block }) =>
    $block &&
    css`
      width: 100%;
      justify-content: center;
    `}

  &:active {
    transform: translateY(1px);
  }
  svg {
    width: 16px;
    height: 16px;
  }
`;

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.03em;
  padding: 5px 11px;
  border-radius: var(--r-chip);

  ${({ $tone }) => {
    switch ($tone) {
      case 'gold':
        return css`
          background: rgba(201, 161, 74, 0.14);
          color: var(--gold);
        `;
      case 'sage':
        return css`
          background: rgba(139, 154, 107, 0.16);
          color: var(--sage);
        `;
      case 'glass':
        return css`
          background: rgba(22, 19, 15, 0.72);
          color: var(--text);
          backdrop-filter: blur(4px);
        `;
      default:
        return css`
          background: var(--surface-2);
          color: var(--muted);
        `;
    }
  }}
`;
