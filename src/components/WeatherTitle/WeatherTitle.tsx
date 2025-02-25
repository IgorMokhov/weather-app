import styled from 'styled-components';
import { IWeatherForecast } from '../../types/weather';

const StyledTitle = styled.h2`
  margin-left: 100px;
  font-size: 50px;
  font-weight: 200;
  cursor: pointer;
`;

interface IWeatherTitleProps {
  currentForecast: IWeatherForecast;
  selectedCities: IWeatherForecast[];
  toggleSelectedCity: (weather: IWeatherForecast) => void;
}

export const WeatherTitle = ({
  currentForecast,
  toggleSelectedCity,
  selectedCities,
}: IWeatherTitleProps) => {
  return (
    <StyledTitle onClick={() => toggleSelectedCity(currentForecast)}>
      {currentForecast?.city.name}{' '}
      {selectedCities.some(
        (city) => city.city.name === currentForecast.city.name
      )
        ? '-'
        : '+'}
    </StyledTitle>
  );
};
