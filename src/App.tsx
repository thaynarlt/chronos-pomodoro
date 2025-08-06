//PascalCase

import { Heading } from './components/Heading';

import './styles/global.css';
import './styles/theme.css';


export function App() {
  console.log('Oi');
  return (
    // <> React Fragment
    <>
      <Heading />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio nemo
        iusto voluptates maxime doloribus? Iste aperiam neque explicabo commodi
        mollitia at magni culpa perferendis! Repellendus repellat itaque sequi
        odit est.
      </p>
    </>
  );
}