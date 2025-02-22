import styled from 'styled-components';
import { Form } from '../Form/Form';
import { useState } from 'react';
import {
  IWeatherForecast,
  WeatherFilters,
  WeatherTimeRange,
} from '../../types/weather';
import { WeatherChart } from '../WeatherChart/WeatherChart';
import { WeatherControls } from '../WeatherControls/WeatherControls';

const StyledSection = styled.section`
  margin-bottom: 50px;
`;

const StyledTitle = styled.h2`
  margin-left: 100px;
  font-size: 50px;
  font-weight: 200;
`;

const WeatherHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WeatherWidget = () => {
  const [activeFilter, setActiveFilter] = useState<WeatherFilters>('temp');
  const [timeRange, setTimeRange] = useState<WeatherTimeRange>('1d');
  const [weatherForecast, setWeatherForecast] =
    useState<IWeatherForecast | null>(null);

  return (
    <StyledSection>
      <Form saveWeatherForecast={setWeatherForecast} />
      {weatherForecast && (
        <WeatherHeader>
          <StyledTitle>{weatherForecast?.city.name}</StyledTitle>
          <WeatherControls
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
            timeRange={timeRange}
            setTimeRange={setTimeRange}
          />
        </WeatherHeader>
      )}
      <WeatherChart weather={weatherForecast} activeFilter={activeFilter} />
    </StyledSection>
  );
};
