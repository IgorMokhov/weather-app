import styled from 'styled-components';
import { WeatherFilters } from '../../types/weather';
import { ChangeEvent } from 'react';

const StyledSelect = styled.select`
  background-color: var(--bg-color);
  padding: 5px;
  border-radius: 25px;
  font-size: 15px;
  outline: none;
  border: 1px solid var(--primary-color);
  cursor: pointer;
`;

interface IWeatherSelect {
  activeFilter: WeatherFilters;
  setActiveFilter: (filter: WeatherFilters) => void;
}

export const WeatherSelect = ({
  activeFilter,
  setActiveFilter,
}: IWeatherSelect) => {
  return (
    <StyledSelect
      value={activeFilter}
      onChange={(e: ChangeEvent<HTMLSelectElement>) =>
        setActiveFilter(e.target.value as WeatherFilters)
      }
    >
      <option value="temp">Temperature</option>
      <option value="humidity">Humidity</option>
      <option value="pressure">Pressure</option>
      <option value="windTemp">Wind temperature</option>
      <option value="windSpeed">Wind speed</option>
    </StyledSelect>
  );
};
