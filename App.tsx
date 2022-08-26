import * as React from 'react';
import { useState } from 'react';
import { RenderItLater, VisibilityTypes } from './RenderItLater';
import './style.css';

export default function App() {
  const [visibility, setVisibility] = useState<VisibilityTypes>('initial');
  return (
    <div>
      <button onClick={()=>setVisibility(visibility === 'visible'? 'hidden':'visible')}>toggle</button>
      <button onClick={()=>setVisibility('initial')}>reset</button>
      
      <RenderItLater visibility={visibility}>
        <div>Something significant</div>
      </RenderItLater>
    </div>
  );
}
