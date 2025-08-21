//PascalCase teste

import { TimerIcon } from 'lucide-react';
import { Heading } from './components/Heading';

import './styles/global.css';
import './styles/theme.css';

export function App() {
  return (
    // <> React Fragment
    <>
      <Heading>
        Olá mundo 1
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio nemo
        iusto voluptates maxime doloribus? Iste aperiam neque explicabo commodi
        mollitia at magni culpa perferendis! Repellendus repellat itaque sequi
        odit est.
      </p>
    </>
  );
}
