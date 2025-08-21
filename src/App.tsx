//PascalCase

import { Container } from 'lucide-react';
import './styles/global.css';
import './styles/theme.css';
import { Heading } from './components/Heading';

export function App() {
  return (
    // <> React Fragment
    <>
      <Container>
        <Heading>Testando meu componente heading</Heading>
        <section>LOGO</section>
      </Container>
      <Container>
        <section>MENU</section>
      </Container>
    </>
  );
}
