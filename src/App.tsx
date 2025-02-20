import { Form } from './components/Form/Form';
import { Header } from './components/Header/Header';
import { GlobalStyles } from './GlobalStyles';
import { Container } from './UI/Container/Container';

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <Form />
      </Container>
    </>
  );
};
