//PascalCase

import { Container } from './components/Container';
import { Heading } from './components/Heading/Heading';
import './styles/global.css';
import './styles/theme.css';

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
