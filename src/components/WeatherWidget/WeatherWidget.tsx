import styled from 'styled-components';
import { Form } from '../Form/Form';
import { useState } from 'react';
import { IWeatherForecast } from '../../types/weather';
import { WeatherChart } from '../WeatherChart/WeatherChart';

const StyledSection = styled.section`
  margin-bottom: 50px;
`;

const StyledTitle = styled.h2`
  margin-left: 100px;
  font-size: 50px;
  font-weight: 200;
`;

export const WeatherWidget = () => {
  const [weatherForecast, setWeatherForecast] =
    useState<IWeatherForecast | null>(null);

  return (
    <StyledSection>
      <Form saveWeatherForecast={setWeatherForecast} />
      <StyledTitle>{weatherForecast?.city.name}</StyledTitle>
      <WeatherChart weather={weatherForecast} />
    </StyledSection>
  );
};
