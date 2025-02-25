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
import {
  extractWeatherData,
  filterDailyForecast,
} from '../../utils/weatherUtils';
import { SelectedCitiesList } from '../SelectedCitiesList/SelectedCitiesList';
import { WeatherTitle } from '../WeatherTitle/WeatherTitle';
import { Loader } from '../../UI/Loader/Loader';

const StyledSection = styled.section`
  position: relative;
  margin-bottom: 50px;
`;

const WeatherHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledClearBtn = styled.button`
  position: absolute;
  bottom: 77px;
  left: 100px;
  border: none;
  background-color: var(--bg-color);
  cursor: pointer;
  color: var(--error-color);
  font-size: 20px;
  transition: all 0.5s;

  &:hover {
    scale: 1.2;
  }
`;

export const WeatherWidget = () => {
  const [activeFilter, setActiveFilter] = useState<WeatherFilters>('temp');
  const [timeRange, setTimeRange] = useState<WeatherTimeRange>('1d');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [weatherForecast, setWeatherForecast] =
    useState<IWeatherForecast | null>(null);
  const [selectedCities, setSelectedCities] = useState<IWeatherForecast[]>([]);

  const toggleSelectedCity = (currentCity: IWeatherForecast) => {
    setSelectedCities((prev) => {
      const isCitySelected = prev.some(
        ({ city }) => city.name === currentCity?.city.name
      );
      return isCitySelected
        ? prev.filter(({ city }) => city.name !== currentCity.city.name)
        : [...prev, { ...currentCity }];
    });
  };

  const displayedCities = useMemo(() => {
    if (!weatherForecast) return extractWeatherData(selectedCities);

    const isCitySelected = selectedCities.some(
      (city) => city.city.name === weatherForecast.city.name
    );

    const cities = isCitySelected
      ? selectedCities
      : [...selectedCities, weatherForecast];

    const filteredWeather = cities.map((city) => {
      return timeRange === '3h' ? city : filterDailyForecast(city);
    });

    return extractWeatherData(filteredWeather);
  }, [selectedCities, weatherForecast, timeRange]);

  return (
    <StyledSection>
      <Form
        saveWeatherForecast={setWeatherForecast}
        setIsLoading={setIsLoading}
      />

      {isLoading ? (
        <Loader />
      ) : (
        <>
          {weatherForecast && (
            <WeatherHeader>
              <WeatherTitle
                currentForecast={weatherForecast}
                isSelected={selectedCities.some(
                  ({ city }) => city.name === weatherForecast.city.name
                )}
                toggleSelectedCity={toggleSelectedCity}
              />
              <WeatherControls
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
                timeRange={timeRange}
                setTimeRange={setTimeRange}
              />
            </WeatherHeader>
          )}
          <WeatherChart
            weatherList={displayedCities}
            activeFilter={activeFilter}
          />
        </>
      )}
      {!!selectedCities.length && (
        <StyledClearBtn onClick={() => setSelectedCities([])}>
          Clear all
        </StyledClearBtn>
      )}
      <SelectedCitiesList
        selectedCities={selectedCities}
        toggleSelectedCity={toggleSelectedCity}
      />
    </StyledSection>
  );
};
