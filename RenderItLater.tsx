import * as React from 'react';
import { PropsWithChildren, useRef } from 'react';

export type VisibilityTypes = 'visible' | 'hidden' | 'initial';

type Props = {
  visibility: VisibilityTypes;
};

export function RenderItLater({
  visibility: state,
  children,
}: PropsWithChildren<Props>) {
  const rendered = useRef(state === 'visible');

  if (state === 'visible' && !rendered.current) {
    rendered.current = true;
  }

  if (state === 'initial') {
    rendered.current = false;
  }

  if (!rendered.current) {
    return null;
  }

  return (
    <div style={{ display: state === 'visible' ? 'block' : 'none' }}>
      {children}
    </div>
  );
}
