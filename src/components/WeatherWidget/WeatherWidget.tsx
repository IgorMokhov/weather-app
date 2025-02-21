import styled from 'styled-components';
import { Form } from '../Form/Form';

const StyledSection = styled.section`
  margin-bottom: 50px;
`;

export const WeatherWidget = () => {
  return (
    <StyledSection>
      <Form />
    </StyledSection>
  );
};
