import styled from 'styled-components';
import { Form } from '../Form/Form';
import { useMemo, useState } from 'react';
import {
  IWeatherForecast,
  WeatherFilters,
  WeatherTimeRange,
} from '../../types/weather';
import { WeatherChart } from '../WeatherChart/WeatherChart';
import { WeatherControls } from '../WeatherControls/WeatherControls';
import { filterDailyForecast } from '../../utils/weatherUtils';

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

  const filteredWeather = useMemo(() => {
    if (!weatherForecast) return null;
    return timeRange === '3h'
      ? weatherForecast
      : filterDailyForecast(weatherForecast);
  }, [weatherForecast, timeRange]);

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
      <WeatherChart weather={filteredWeather} activeFilter={activeFilter} />
    </StyledSection>
  );
};
