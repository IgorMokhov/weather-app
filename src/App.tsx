import { Header } from './components/Header/Header';
import { WeatherWidget } from './components/WeatherWidget/WeatherWidget';
import { GlobalStyles } from './GlobalStyles';
import { Container } from './UI/Container/Container';

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <WeatherWidget />
      </Container>
    </>
  );
};
