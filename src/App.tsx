import { GlobalStyles } from './GlobalStyles';
import { Container } from './UI/Container/Container';

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <h1>Weather App</h1>
      </Container>
    </>
  );
};
