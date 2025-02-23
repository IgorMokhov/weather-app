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
import { SelectedCitiesList } from '../SelectedCitiesList/SelectedCitiesLIst';

const StyledSection = styled.section`
  margin-bottom: 50px;
`;

const StyledTitle = styled.h2`
  margin-left: 100px;
  font-size: 50px;
  font-weight: 200;
  cursor: pointer;
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
  const [selectedCities, setSelectedCities] = useState<IWeatherForecast[]>([]);

  const toggleSelectedCity = (currentCity: IWeatherForecast) => {
    if (!weatherForecast) return;

    setSelectedCities((prev) => {
      const isCitySelected = prev.some(
        ({ city }) => city.name === weatherForecast?.city.name
      );
      return isCitySelected
        ? prev.filter(({ city }) => city.name !== currentCity.city.name)
        : [...prev, { ...weatherForecast }];
    });
  };

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
          <StyledTitle onClick={() => toggleSelectedCity(weatherForecast)}>
            {weatherForecast?.city.name}{' '}
            {selectedCities.some(
              (city) => city.city.name === weatherForecast.city.name
            )
              ? '-'
              : '+'}
          </StyledTitle>
          <WeatherControls
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
            timeRange={timeRange}
            setTimeRange={setTimeRange}
          />
        </WeatherHeader>
      )}
      <WeatherChart weather={filteredWeather} activeFilter={activeFilter} />
      <SelectedCitiesList
        selectedCities={selectedCities}
        toggleSelectedCity={toggleSelectedCity}
      />
    </StyledSection>
  );
};
